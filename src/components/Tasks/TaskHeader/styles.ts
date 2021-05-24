import { StyleSheet, Platform } from 'react-native';
import SizeConstants from '../../../common/Sizes';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#86C5BE',
    paddingTop:
      Platform.OS === 'ios'
        ? SizeConstants.topPadding.ios
        : SizeConstants.topPadding.android,
    height: 184,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 33,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
  dropdownWrapper: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    minWidth: '100%',
  },
  dropdownOverlay: {
    fontSize: 12,
  },
  dropdownContainer: {
    width: '25%',
    height: '80%',
    backgroundColor: 'white',
  },
});

export default styles;
