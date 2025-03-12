import { StyleSheet } from 'react-native';
import { SAFE_AREA_BOTTOM_INSETS } from '../../constants/device.constants';
import { ColorsType } from '../../types/common.types';
import { normalizeSize } from '../../utils/normalize.util';

export const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      flex: 1,
      paddingHorizontal: normalizeSize(16),
    },
    errorContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: normalizeSize(10),
    },
    error: {
      color: colors.notification,
      fontWeight: 'bold',
      marginBottom: normalizeSize(8),
    },
    switchRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    actions: {
      flexDirection: 'row',
      height: normalizeSize(80),
      alignItems: 'center',
    },
    actionButton: {
      marginEnd: normalizeSize(8),
    },
    switchText: {
      paddingEnd: normalizeSize(20),
      fontSize: normalizeSize(15),
      fontWeight: 'bold',
    },

    containerFlatList: {
      flexGrow: 1,
      paddingBottom: SAFE_AREA_BOTTOM_INSETS,
    },
    loadingView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedText: {
      marginStart: normalizeSize(10),
      flex: 1,
    },
  });
