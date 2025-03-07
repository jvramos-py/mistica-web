/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAudioLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.483 21.948a.374.374 0 00.184-.323V2.372a.374.374 0 00-.184-.322.366.366 0 00-.37 0L5.042 7.923H2.369a.37.37 0 00-.369.37v7.403c0 .204.166.37.369.37H5.04l4.894 2.844a.37.37 0 00.374-.64l-4.98-2.892a.361.361 0 00-.184-.052H2.738v-6.66H5.14a.361.361 0 00.185-.051l9.604-5.598v17.969l-.827-.489a.37.37 0 00-.374.64l1.381.81a.376.376 0 00.185.053.417.417 0 00.189-.052zm4.175-5.332a.378.378 0 00.52-.01 6.574 6.574 0 00-.117-9.205.366.366 0 00-.52 0 .364.364 0 000 .522 5.832 5.832 0 01.103 8.171.368.368 0 00.015.521zM18.33 9.13a4.131 4.131 0 01.123 5.721.352.352 0 01-.27.119.366.366 0 01-.25-.1.369.369 0 01-.024-.521 3.396 3.396 0 00-.1-4.697.364.364 0 010-.522.362.362 0 01.52 0zm-6.356 9.907a.74.74 0 010 1.478.74.74 0 010-1.478z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.455 19V5l-.486.007-.364.011c-2.519.112-4.365.986-5.508 2.628l-.052.056-.057.073a.462.462 0 01-.119.151l-.08.055a.427.427 0 01-.22.066l-4.114.003.011 7.918 4.094-.004.1.012c.13.03.246.12.317.25l.045.069.046.052.012.009a.347.347 0 01-.062-.109c1.233 1.826 3.233 2.713 5.952 2.747l.485.006zM12.242 6.012L12.455 6v12l-.218-.014c-2.031-.155-3.483-.89-4.37-2.186l-.003-.017a.156.156 0 00-.013-.018l-.065-.065-.045-.075a1.423 1.423 0 00-1.17-.61l-3.109.003-.007-6.023 3.127-.003.16-.01c.26-.03.502-.136.716-.3l.016-.01.106-.094a1.28 1.28 0 00.167-.198l.033-.053.046-.045a.52.52 0 00.116-.185c.854-1.208 2.282-1.927 4.3-2.085zm6.698.088a.401.401 0 00-.562.031.413.413 0 00.027.573c.267.234.745.801 1.177 1.537a8.318 8.318 0 011.16 4.154c.029.35-.031 1.228-.233 2.104-.335 1.457-.991 2.745-2.058 3.709a.413.413 0 00-.036.574c.08.089.19.137.3.137.1 0 .19-.034.265-.101 1.179-1.066 1.914-2.474 2.293-4.07a9.36 9.36 0 00.273-2.186l-.004-.174a9.087 9.087 0 00-1.285-4.584c-.434-.733-.863-1.259-1.206-1.598l-.11-.106zm-3.327 2.27a.39.39 0 01.554-.029l.052.05.136.143.083.095c.194.225.386.488.567.788.526.873.845 1.88.857 3.01l.008.195c.022 1.196-.425 2.853-1.677 3.983a.396.396 0 01-.562-.034.412.412 0 01.034-.578c.995-.897 1.372-2.188 1.398-3.4v-.121l-.014-.344c-.087-1.46-.756-2.592-1.417-3.183a.413.413 0 01-.02-.574z"
                />
            </svg>
        );
    }
};

export default IconAudioLight;
