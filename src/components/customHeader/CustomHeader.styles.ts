import { StyleSheet } from 'react-native';
import { SAFE_AREA_TOP_INSETS } from '../../constants/device.constants';
import { HEADER_HEIGHT } from '../../constants/sizes.constants';
import { ColorsType } from '../../types/common.types';
import { normalizeSize } from '../../utils/normalize.util';

export const makeStyles = (colors: ColorsType)  =>
  StyleSheet.create({ 
     container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGrey,
    paddingTop: SAFE_AREA_TOP_INSETS,
    paddingHorizontal: normalizeSize(1),
    width: '100%',
    height: normalizeSize(HEADER_HEIGHT) + SAFE_AREA_TOP_INSETS
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  backText: {
    fontSize: 20,
    color: colors.white,
  },
 
});
