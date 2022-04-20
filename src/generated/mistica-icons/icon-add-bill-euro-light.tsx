/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAddBillEuroLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M22.391 7.556a3.703 3.703 0 01-3.699 3.702 3.703 3.703 0 01-.37-7.386v-.018a1.11 1.11 0 00-1.107-1.11H6.852c-.616 0-1.113.498-1.113 1.11V21.26h12.949a.37.37 0 010 .739H5V3.854C5 2.834 5.829 2 6.852 2h10.363c1.018 0 1.852.83 1.852 1.854v.018a3.71 3.71 0 013.324 3.684zm-3.33 5.186v4.447a.37.37 0 01-.738 0v-4.447a.37.37 0 01.739 0zm-.369 7.404a.74.74 0 000-1.479h-.01a.74.74 0 000 1.48h.01zm0-15.553a2.963 2.963 0 000 5.926 2.963 2.963 0 000-5.926zm1.847 2.593h-1.477V5.707a.37.37 0 00-.74 0v1.48h-1.477a.37.37 0 000 .739h1.478v1.479a.37.37 0 00.739 0v-1.48h1.477a.37.37 0 000-.739zm-5.825 5.243a3.12 3.12 0 00-4.428 1.427h3.05a.37.37 0 010 .74h-3.278a3.06 3.06 0 00-.052.554c0 .062.005.123.01.185h3.32a.37.37 0 010 .74h-3.193a3.157 3.157 0 003.008 2.223 3.12 3.12 0 001.572-.427.371.371 0 01.375.64 3.854 3.854 0 01-1.942.526 3.89 3.89 0 01-3.77-2.962h-.858a.37.37 0 010-.74h.749c-.005-.062-.01-.123-.01-.185 0-.19.015-.374.043-.555h-.786a.37.37 0 010-.74h.966a3.889 3.889 0 013.656-2.592c.677 0 1.35.185 1.942.526a.371.371 0 01-.374.64z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddBillEuroLight;
