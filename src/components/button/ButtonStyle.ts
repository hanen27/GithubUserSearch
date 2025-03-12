import { StyleSheet } from 'react-native';
import { ColorsType } from '../../types/common.types';
import { normalizeSize } from '../../utils/normalize.util';

export const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    button: {
     height: normalizeSize(40),
     width: normalizeSize(150),
     backgroundColor: colors.blue,
     borderRadius: normalizeSize(10),
     justifyContent: 'center',
     alignItems:'center'
    },
    text:{
        color : colors.black,
        fontSize: normalizeSize(16)
    }
    
  });
