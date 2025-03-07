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

const IconFastForwardLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10a9.97 9.97 0 005.334-1.545.36.36 0 00.11-.493.36.36 0 00-.494-.11 9.247 9.247 0 01-4.95 1.43c-5.119 0-9.282-4.163-9.282-9.282S6.88 2.718 12 2.718s9.282 4.163 9.287 9.277a9.248 9.248 0 01-1.43 4.95.36.36 0 00.11.494.36.36 0 00.493-.11A9.98 9.98 0 0022 12c0-5.512-4.488-10-10-10S2 6.484 2 12zm16.787 6.07a.714.714 0 010 1.425.714.714 0 010-1.425zM7.612 16.895l4.644-4.644a.35.35 0 000-.502L7.612 7.105a.35.35 0 00-.502 0 .354.354 0 000 .503l4.387 4.387-4.387 4.388a.35.35 0 000 .503c.068.068.16.105.251.105a.355.355 0 00.251-.096zm10.713-4.644l-4.643 4.644a.355.355 0 01-.252.096.356.356 0 01-.25-.105.35.35 0 010-.503l4.387-4.388-4.388-4.387a.354.354 0 010-.503.35.35 0 01.503 0l4.643 4.644a.35.35 0 010 .502z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.151 11.997c0-6.442 3.406-9.846 9.846-9.846 6.437 0 9.84 3.404 9.84 9.846 0 6.437-3.403 9.84-9.84 9.84-6.442 0-9.846-3.403-9.846-9.84zm.824 0c0 5.983 3.036 9.017 9.022 9.017 5.983 0 9.017-3.034 9.017-9.017 0-5.989-3.034-9.022-9.017-9.022-5.989 0-9.022 3.033-9.022 9.022zm10.431 1.983l3.84-2.285-3.84-2.308v4.593zm-.823-5.322a.405.405 0 01.207-.358.419.419 0 01.417.005l5.053 3.04a.41.41 0 010 .705l-5.056 3.012a.43.43 0 01-.21.056h-.002a.41.41 0 01-.41-.412V8.658zm-5.224 5.328l3.84-2.286-3.84-2.308v4.594zm-.824-5.322a.413.413 0 01.625-.353l5.053 3.04a.41.41 0 010 .705l-5.056 3.011a.43.43 0 01-.21.056h-.003a.41.41 0 01-.409-.412V8.665z"
                />
            </svg>
        );
    }
};

export default IconFastForwardLight;
