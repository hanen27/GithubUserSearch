import { StyleSheet } from 'react-native';
import { ColorsType } from '../../types/common.types';
import { normalizeSize } from '../../utils/normalize.util';

export const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    avatar: {
      width: normalizeSize(80),
      height: normalizeSize(80),
      borderRadius: normalizeSize(40),
    },
    username: {
      fontSize: normalizeSize(16),
      fontWeight: 'bold',
    },
    container: {
      marginVertical: normalizeSize(8),
      backgroundColor: colors.gray,
      borderRadius: normalizeSize(20),
      padding: normalizeSize(16),
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
      flexDirection:'row'
    },
    buttonView: {
      alignSelf:'center',
      paddingTop: normalizeSize(45)
    },
    
    contentContainer:{
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'space-between',
      flex:1
    }
  });
