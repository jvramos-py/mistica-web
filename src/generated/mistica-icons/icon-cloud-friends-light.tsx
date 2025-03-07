/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCloudFriendsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.078 12.702a3.21 3.21 0 01-1.512 2.724c1.764.48 2.92 1.696 2.923 3.244v2.968a.35.35 0 01-.351.352.35.35 0 01-.352-.352V18.67c0-1.584-1.632-2.74-3.888-2.752h-.064c-2.263.008-3.903 1.16-3.903 2.752v2.964a.35.35 0 01-.352.352.35.35 0 01-.352-.352v-2.968c0-1.548 1.168-2.772 2.936-3.244a3.214 3.214 0 01-1.508-2.72A3.214 3.214 0 019.866 9.49a3.214 3.214 0 013.212 3.212zm-3.212-2.504a2.505 2.505 0 000 5.008 2.508 2.508 0 002.504-2.504 2.508 2.508 0 00-2.504-2.504z"
            />
            <path
                fill={fillColor}
                d="M5.215 11.994c.192 0 .352.156.352.352a.36.36 0 01-.356.356A3.214 3.214 0 012 9.49a3.214 3.214 0 014.011-3.112 5.35 5.35 0 015.26-4.368c1.71 0 3.33.832 4.338 2.228a.332.332 0 01-.076.46.332.332 0 01-.46-.076 4.683 4.683 0 00-8.43 1.992 3.22 3.22 0 011.364 1.284.357.357 0 01-.132.484.357.357 0 01-.484-.132 2.51 2.51 0 00-2.176-1.264A2.507 2.507 0 002.712 9.49a2.507 2.507 0 002.503 2.504zm13.85 2a3.214 3.214 0 00-1.704-5.936 3.214 3.214 0 00-3.211 3.212c0 1.144.6 2.148 1.503 2.716a5.027 5.027 0 00-1.324.556l-.008.006-.008.006-.375.26a.353.353 0 10.403.58l.368-.256c.708-.432 1.62-.656 2.644-.656 2.287 0 3.943 1.164 3.943 2.764v3.004c0 .196.16.352.352.352.192 0 .352-.16.352-.352v-3.004c.004-1.548-1.164-2.772-2.935-3.252zm-4.208-2.72a2.508 2.508 0 012.504-2.504 2.508 2.508 0 012.503 2.504 2.507 2.507 0 01-2.487 2.504h-.04a2.505 2.505 0 01-2.48-2.504zm2.148-5.004a.716.716 0 11-1.432 0 .716.716 0 011.432 0z"
            />
        </svg>
    );
};

export default IconCloudFriendsLight;
