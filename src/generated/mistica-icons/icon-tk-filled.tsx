/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTkFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M2.15 11.996c0-6.443 3.403-9.846 9.84-9.846 6.443 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84zm16.577 4.557a.41.41 0 00-.003-.409l-2.93-4.865 2.695-3.404a.404.404 0 00.047-.425.404.404 0 00-.36-.227h-.446a.405.405 0 00-.317.151l-3.428 4.317V7.626a.403.403 0 00-.404-.403h-.383a.403.403 0 00-.404.403v8.729c0 .224.182.403.403.403h.384a.403.403 0 00.404-.403v-2.832l1.028-1.286 2.585 4.325c.073.12.204.196.345.196h.434a.404.404 0 00.35-.205zm-6.728-8.49l.075-.347a.404.404 0 00-.392-.49H5.61a.403.403 0 00-.403.403v.345c0 .224.182.403.403.403h2.432v7.98c0 .224.179.404.403.404h.381a.403.403 0 00.403-.404v-7.98h2.379c.187 0 .35-.129.392-.314z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTkFilled;
