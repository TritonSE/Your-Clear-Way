import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ResponseContext } from '../../../contexts/ResponseContext';

import HomeCard from '../HomeCard';

const HomeContainer = () => {
  const { responseState } = useContext(ResponseContext);
  const badgeNumber = responseState.items.length;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainLayout}>
        <View style={styles.numberCircle}>
          <Text style={styles.number}>{badgeNumber}</Text>
        </View>
        <Text style={styles.badgeText}>Total Badges Collected</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.homeTitle}>HOME</Text>
      <View style={styles.homesLayout}>
        <HomeCard />
      </View>
    </View>
  );
};

export default HomeContainer;
