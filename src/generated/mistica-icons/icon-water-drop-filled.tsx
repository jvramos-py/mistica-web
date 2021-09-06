/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: string | number;
};

const IconWaterDropFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.569 2.12a.407.407 0 00-.575-.002l-.002.002c-1.359 1.367-6.673 8.247-6.659 12.57.006 2.173.647 3.957 1.852 5.164 1.199 1.2 2.966 1.835 5.106 1.835h.034c4.367-.014 6.964-2.644 6.95-7.042-.009-4.28-5.345-11.157-6.706-12.527"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWaterDropFilled;
