import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '90%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 26,
  },
  description: {
    fontSize: 16,
    paddingTop: 12,
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
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: '10%',
    width: '100%',
    borderColor: '#6C6B6B',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 600,
  },
  formTitle: {
    paddingTop: 15,
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    fontSize: 18,
  },
  formComponent: {
    paddingTop: 15,
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    fontSize: 16,
    color: '#6C6B6B',
    paddingBottom: 7.5,
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
  redFormInput: {
    alignSelf: 'center',
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    width: '90%',
    borderRadius: 5,
    paddingLeft: '2.5%',
  },
  button: {
    backgroundColor: '#E96661',
    marginTop: 20,
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
  dropdownPicker: {
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    borderRadius: 5,
    paddingLeft: '2.5%',
  },
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});

export default styles;
