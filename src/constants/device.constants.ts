import { Dimensions } from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
const {width, height} = Dimensions.get('window');
export const SAFE_AREA_TOP_INSETS = StaticSafeAreaInsets.safeAreaInsetsTop;
export const SAFE_AREA_BOTTOM_INSETS = StaticSafeAreaInsets.safeAreaInsetsBottom;
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
