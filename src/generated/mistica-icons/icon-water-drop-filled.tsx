/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWaterDropFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M6.246 17.713a5.85 5.85 0 004.187 1.787c1.567 0 3.067-.644 4.179-1.75l.035-.037c1.116-1.143 1.71-2.642 1.71-4.25 0-2.002-1.393-4.324-2.509-6.18l-2.826-4.927A.674.674 0 0010.43 2c-.246 0-.456.142-.594.356 0 0-2.58 4.534-2.826 4.927-1.117 1.824-2.51 4.141-2.51 6.143a6.07 6.07 0 001.746 4.287zm11.339 0h1.393a.545.545 0 00.522-.535.545.545 0 00-.522-.535h-1.393a.545.545 0 00-.523.535c0 .284.246.535.523.535zm-.281 2.751a.53.53 0 01-.384-.141l-.942-.965a.525.525 0 010-.75.496.496 0 01.732 0l.942.965c.21.215.21.535 0 .75-.072.105-.21.141-.348.141zm-3.384 1.001c0 .284.245.535.522.535a.542.542 0 00.522-.54v-1.42a.544.544 0 00-.522-.535.545.545 0 00-.522.534v1.426z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.569 2.12a.407.407 0 00-.575-.002l-.002.002c-1.359 1.367-6.673 8.247-6.659 12.57.006 2.173.647 3.957 1.852 5.164 1.199 1.2 2.966 1.835 5.106 1.835h.034c4.367-.014 6.963-2.644 6.95-7.042-.009-4.28-5.345-11.157-6.706-12.527z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWaterDropFilled;
