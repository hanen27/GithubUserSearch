import { StyleSheet } from 'react-native';
import { ColorsType } from '../../types/common.types';
import { normalizeSize } from '../../utils/normalize.util';

  export const makeStyles = (colors: ColorsType)  =>
    StyleSheet.create({ 
  checkboxContainer: {
    borderColor: colors.black,
    borderWidth: normalizeSize(3),
    width: normalizeSize(20),
    height: normalizeSize(20),
    alignItems:'center',
    justifyContent: 'center'

  },
});

