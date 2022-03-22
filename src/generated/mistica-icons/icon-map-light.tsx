/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMapLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.92 2.166l4.582.753a.407.407 0 01.341.406v17.359a.409.409 0 01-.476.403l-4.487-.74-4.76 1.48a.39.39 0 01-.246-.003l-4.56-1.476-4.68.736-.007.001a.41.41 0 01-.467-.404V3.325a.41.41 0 01.347-.406l4.776-.753.014.001.014.001a.163.163 0 00.016-.004c.007-.002.014-.004.02-.004.019 0 .036.005.053.01l.029.007h.019c.009 0 .018 0 .026.003l4.532 1.467 4.728-1.47a.06.06 0 01.026-.002l.019-.001a.21.21 0 00.03-.007c.015-.003.03-.007.046-.007a.05.05 0 01.018.004.05.05 0 00.018.004.04.04 0 00.01-.001.027.027 0 01.018-.001zM2.98 3.676v16.526l3.959-.625V3.051l-3.958.624zm18.046 16.523V3.673l-3.762-.62V19.58l3.762.62zM16.443 3.126l-4.03 1.255v16.496l4.03-1.252V3.126zm-8.684.009v16.493l3.835 1.244V4.378L7.76 3.135z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMapLight;
