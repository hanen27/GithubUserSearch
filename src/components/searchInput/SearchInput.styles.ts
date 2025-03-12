import { StyleSheet } from 'react-native';
import { ColorsType } from '../../types/common.types';
import { normalizeSize } from '../../utils/normalize.util';

export const makeStyles = (colors: ColorsType)  =>
  StyleSheet.create({   input: {
    marginVertical: normalizeSize(24),
    backgroundColor: colors.gray,
    paddingVertical: normalizeSize(14),
    paddingEnd: normalizeSize(10),
    paddingStart: normalizeSize(35),
    borderRadius: normalizeSize(4)
  },
});

