import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import * as Icons from '../../assets/appIcons';
import { AppIconsKeys } from '../../types/common.types';

type Props = SvgProps & {
  name: AppIconsKeys | null;
  size?: number;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
  RTLAplly?: boolean;
  stroke?: string;
  strokeWidth?: string;
};

const Icon: React.FC<Props> = ({
  name,
  size = 16,
  style = null,
  opacity = 1,
  strokeWidth = 1.5,
  stroke = 'black',
  ...props
}) => {
  if (!name) {
    return null;
  }

  const IconSVG = Icons[name];

  return IconSVG ? (
    <IconSVG
      accessible={false}
      importantForAccessibility="no"
      opacity={opacity}
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      stroke={stroke}
      style={style}
      {...props}
    />
  ) : null;
};

export default React.memo(Icon);
