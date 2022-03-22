/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMenuRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M3.003 6.241a.834.834 0 01-.843-.82c0-.451.378-.821.843-.821H21c.465 0 .843.367.843.82a.834.834 0 01-.843.821H3.003zm18 4.922c.465 0 .843.367.843.82a.832.832 0 01-.843.822h-18a.832.832 0 01-.843-.821c0-.454.378-.821.843-.821h18zm.843 7.384a.832.832 0 00-.843-.821h-18a.832.832 0 00-.843.82c.006.46.384.827.843.822h18a.832.832 0 00.843-.821z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMenuRegular;
