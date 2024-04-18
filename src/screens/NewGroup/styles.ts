import { StyleSheet } from 'react-native';

import theme from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
    padding: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
    color: theme.COLORS.GREEN_700,
  },
});
