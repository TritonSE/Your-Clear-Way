import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
  },
  title: {
    fontSize: 26,
    marginLeft: '28%',
    flex: 2,
  },
  description: {
    fontSize: 16,
    paddingTop: '5%',
    textAlign: 'center',
    paddingBottom: '10%',
    flexWrap: 'wrap',
  },
  background: {
    width: '100%',
    height: '100%',
    marginTop: '105%',
    backgroundColor: '#86C5BE',
  },
  form: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 20,
    height: '315%',
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#6C6B6B',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '55%',
  },
  formTitle: {
    paddingTop: '5%',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    fontSize: 18,
  },
  formComponent: {
    paddingTop: '5%',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    fontSize: 16,
    color: '#6C6B6B',
    paddingBottom: '2.5%',
  },
  formInput: {
    alignSelf: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    borderRadius: 5,
    paddingLeft: '2.5%',
  },
  button: {
    backgroundColor: '#E96661',
    marginTop: '7.5%',
    width: 136,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactFormComponent: {
    paddingTop: '3.5%',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    fontSize: 16,
    color: '#6C6B6B',
    paddingBottom: '2.5%',
  },
});

export default styles;