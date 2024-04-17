import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: '#383838',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  icon: {
    marginLeft: 16,
    marginRight: 4,
  },
});
