/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconNetworkHotspotRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.248 18.928c.144.108.32.18.5.18s.36-.072.5-.216A9.956 9.956 0 0022 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 2.572.964 5 2.748 6.856a.69.69 0 001 .036.69.69 0 00.036-1A8.46 8.46 0 013.428 12c0-4.716 3.852-8.572 8.568-8.572 4.716 0 8.572 3.86 8.572 8.572 0 2.216-.82 4.284-2.356 5.928a.727.727 0 00.036 1z"
            />
            <path
                fill={fillColor}
                d="M7.284 17.068a.777.777 0 01-.536-.216A7.127 7.127 0 014.852 12C4.856 8.068 8.068 4.856 12 4.856c3.932 0 7.144 3.212 7.144 7.144 0 1.824-.68 3.536-1.892 4.856-.284.284-.716.324-1 .036-.284-.284-.324-.716-.036-1A5.635 5.635 0 0017.752 12c0-3.14-2.572-5.712-5.712-5.712C8.9 6.288 6.324 8.86 6.324 12c0 1.464.536 2.824 1.536 3.892a.69.69 0 01-.036 1 .815.815 0 01-.54.176z"
            />
            <path
                fill={fillColor}
                d="M14.212 14.892c.14.108.284.18.464.18a.623.623 0 00.532-.252c.676-.788 1.072-1.788 1.072-2.824A4.293 4.293 0 0012 7.712a4.297 4.297 0 00-4.284 4.284c0 1.04.392 2.04 1.072 2.824a.72.72 0 001 .072.72.72 0 00.072-1A2.904 2.904 0 019.144 12 2.863 2.863 0 0112 9.144 2.863 2.863 0 0114.856 12c0 .712-.252 1.356-.716 1.892-.252.284-.212.748.072 1z"
            />
            <path
                fill={fillColor}
                d="M11.284 21.284c0 .392.32.716.716.716a.72.72 0 00.716-.716V12a.72.72 0 00-.716-.716.718.718 0 00-.716.716v9.284z"
            />
        </svg>
    );
};

export default IconNetworkHotspotRegular;
