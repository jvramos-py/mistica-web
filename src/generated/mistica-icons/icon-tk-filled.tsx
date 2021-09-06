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

const IconTkFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.727 16.553a.404.404 0 01-.35.205h-.434a.406.406 0 01-.345-.196l-2.585-4.325-1.028 1.286v2.831c0 .222-.18.404-.404.404h-.383a.403.403 0 01-.404-.404V7.626c0-.221.18-.403.404-.403h.383c.222 0 .404.18.404.403v4.065l3.428-4.317a.405.405 0 01.317-.151h.445c.154 0 .294.09.362.227a.405.405 0 01-.048.425l-2.695 3.404 2.93 4.865a.41.41 0 01.003.41zm-6.728-8.49a.401.401 0 01-.392.314H9.228v7.98a.403.403 0 01-.403.404h-.38a.402.402 0 01-.404-.404v-7.98H5.609a.403.403 0 01-.403-.403v-.345c0-.221.18-.403.403-.403h6.073a.404.404 0 01.392.49L12 8.063zM11.99 2.15c-6.437 0-9.84 3.403-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84 0-6.443-3.403-9.846-9.846-9.846z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTkFilled;
