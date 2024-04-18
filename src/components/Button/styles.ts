import { StyleSheet } from 'react-native';

import theme from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.WHITE,
  },
});
