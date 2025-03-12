import { PixelRatio } from 'react-native';
import { SCREEN_WIDTH } from '../constants/device.constants';

const UI_DEVICE_SCREEN_WIDTH = 375;
const SCALE = SCREEN_WIDTH / UI_DEVICE_SCREEN_WIDTH;
export const normalizeSize = (size: number) =>
  PixelRatio.roundToNearestPixel(SCALE * size);



