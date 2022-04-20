/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const Icon5GRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M6.64 15.572h1.428c1.252 0 2.18-1 2.184-2.284 0-1.32-.968-2.356-2.18-2.356h-.716V9.86H9.5c.392 0 .716-.32.716-.716a.718.718 0 00-.716-.716H5.928v3.928h2.14c.468 0 .752.464.752.928 0 .428-.216.856-.752.856H6.64a.72.72 0 00-.716.716c0 .392.32.716.716.716zM10.928 12a3.583 3.583 0 003.572 3.572A3.586 3.586 0 0018.072 12a.718.718 0 00-.716-.716h-2.284a.72.72 0 00-.716.716c0 .392.32.716.716.716h1.464c-.324.82-1.108 1.428-2.036 1.428A2.15 2.15 0 0112.356 12 2.15 2.15 0 0114.5 9.856c.572 0 1.104.212 1.5.608a.693.693 0 001 0 .693.693 0 000-1 3.504 3.504 0 00-2.5-1.036A3.583 3.583 0 0010.928 12z"
                fill={fillColor}
            />
            <path
                d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12zm1.428 0c0-4.716 3.856-8.572 8.572-8.572 4.712 0 8.572 3.856 8.572 8.572 0 4.716-3.856 8.572-8.572 8.572-4.716 0-8.572-3.856-8.572-8.572z"
                fill={fillColor}
            />
        </svg>
    );
};

export default Icon5GRegular;
