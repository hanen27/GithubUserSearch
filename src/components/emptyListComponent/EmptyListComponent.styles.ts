import { StyleSheet } from 'react-native';
import { normalizeSize } from '../../utils/normalize.util';

export const makeStyles = () =>
  StyleSheet.create({
    emptyView: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: normalizeSize(16),
    },
  });
