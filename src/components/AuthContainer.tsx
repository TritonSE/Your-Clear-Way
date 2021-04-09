import React, { useContext, useEffect } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import { Auth, I18n } from 'aws-amplify';
import { Translations } from '@aws-amplify/ui-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Onboarding from './Onboarding/Onboarding';
import AuthenticatorTheme from '../styles/AuthenticatorTheme';
import { AppContext } from '../contexts/AppContext';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
import BadgeScreen from '../screens/BadgeScreen';
import ProfileScreen from '../screens/ProfileScreen';

Auth.configure({ mandatorySignIn: true });

const Tab = createBottomTabNavigator();

function App(): JSX.Element | null {
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    if (appState === 'Auth') {
      setAppState('Onboarding'); // TODO: use datastore to check whether this user has at least one home
    }
  }, [appState, setAppState]);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setAppState('Auth');
    } catch (error) {
      console.error('Error sign out: ', error);
    }
  };

  return (
    <>
      {appState === 'Onboarding' && <Onboarding />}
      {appState === 'App' && (
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = 'ios-home';
                  } else if (route.name === 'Tasks') {
                    iconName = 'ios-list';
                  } else if (route.name === 'Progress') {
                    iconName = 'ios-clipboard';
                  } else if (route.name === 'Me') {
                    iconName = 'ios-person';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Tasks" component={TaskScreen} />
              <Tab.Screen name="Progress" component={BadgeScreen} />
              <Tab.Screen name="Me" component={ProfileScreen} />
            </Tab.Navigator>
          </NavigationContainer>
          <Button title="Sign Out" onPress={signOut} />
        </SafeAreaView>
      )}
    </>
  );
}

const MyTheme = { ...AmplifyTheme, ...AuthenticatorTheme };
// Unstable changing section header text: https://github.com/aws-amplify/amplify-js/issues/6115
I18n.putVocabulariesForLanguage('en-US', {
  [Translations.SIGN_IN_HEADER_TEXT]: 'Welcome to Your Clear Way',
  [Translations.SIGN_UP_HEADER_TEXT]: 'Welcome to Your Clear Way',
});

export default withAuthenticator(App, {
  theme: MyTheme,
  usernameAttributes: 'email',
  signUpConfig: {
    hiddenDefaults: ['username', 'phone_number'],
    signUpFields: [
      {
        label: 'Display Name',
        placeholder: 'Enter your display name',
        key: 'custom:displayName',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Email',
        placeholder: 'Enter your email',
        key: 'email',
        required: true,
        displayOrder: 3,
        type: 'string',
      },
      {
        label: 'Password',
        placeholder: 'Enter your password',
        key: 'password',
        required: true,
        displayOrder: 4,
        type: 'password',
      },
    ],
  },
});