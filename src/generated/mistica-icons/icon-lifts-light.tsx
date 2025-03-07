/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLiftsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.772 21.287H3.994v-17.5c0-.59.467-1.07 1.042-1.07h8.343c.574 0 1.041.48 1.041 1.07V17.36c0 .197.156.357.347.357.192 0 .348-.16.348-.357V3.787c0-.982-.78-1.787-1.74-1.787H5.04c-.957 0-1.74.8-1.74 1.787V22h11.472c.191 0 .347-.16.347-.357a.352.352 0 00-.347-.356zm1.842-11.319a.353.353 0 10.498.503l1.491-1.531 1.49 1.53a.343.343 0 00.246.106.357.357 0 00.245-.608L18.598 7.93l-1.985 2.04zm1.985 5.097l1.49-1.531a.353.353 0 11.499.503l-1.985 2.039-1.984-2.04a.361.361 0 010-.502.335.335 0 01.49 0l1.49 1.531zM14.078 19.5c0-.393.311-.713.694-.713.383 0 .694.32.694.713a.705.705 0 01-.694.713.705.705 0 01-.694-.713zm-2.434-5.174v-3.927c0-.873-.717-1.61-1.567-1.61H8.342c-.85 0-1.567.737-1.567 1.61v3.927h1.042v4.823a.352.352 0 01-.347.356.352.352 0 01-.347-.357v-4.105H6.08v-4.649c0-1.047.717-1.952 1.66-2.23a2.153 2.153 0 01-.618-1.518c0-1.18.934-2.144 2.087-2.144 1.152 0 2.086.96 2.086 2.144 0 .594-.235 1.129-.614 1.517a2.352 2.352 0 011.66 2.231v4.645H11.3v4.105a.352.352 0 01-.347.357.352.352 0 01-.347-.357v-4.818h1.037zM9.2 8.07c.77 0 1.397-.64 1.397-1.427 0-.786-.623-1.426-1.388-1.426-.766 0-1.393.64-1.393 1.426 0 .787.623 1.427 1.384 1.427z"
            />
        </svg>
    );
};

export default IconLiftsLight;
