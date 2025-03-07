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

const IconLockOpenFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.798 9.893V8.07c0-3.355-2.592-6.07-5.794-6.07-2.317 0-4.397 1.427-5.317 3.643-.137.355 0 .783.34.927.34.144.748 0 .885-.356C8.66 4.535 10.23 3.431 12 3.431c2.454 0 4.431 2.072 4.431 4.643v1.783H6.546C5.42 9.857 4.5 10.82 4.5 12v7.857c0 1.18.92 2.143 2.046 2.143h10.908c1.126 0 2.046-.964 2.046-2.143V12c0-1.072-.748-1.927-1.702-2.107z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.384 11.25c.002 0 .002 1.29.002 2.9l.001 4.809c0 .896-.272 1.608-.812 2.117-.882.835-2.15.764-2.236.76h-.002l-8.717.005c-.986 0-1.757-.294-2.289-.874-.774-.843-.707-1.975-.703-2.035l-.003-7.74c0-.905.277-1.622.82-2.13.508-.473 1.141-.644 1.6-.703V7.17c0-3.664 2.44-4.992 4.723-5.014l.226.001.208.002c1.838.045 4.014.997 4.602 3.538a.603.603 0 01-.442.725.599.599 0 01-.717-.448c-.546-2.359-2.796-2.594-3.474-2.61-.12-.003-.263-.003-.395-.003-1.064.008-3.543.4-3.543 3.806v1.165c1.625-.002 6.04-.008 8.14-.008 1.006 0 1.787.297 2.322.885.76.837.695 1.944.69 2.038v.004zm-7.417 5.168c1.356-.022 1.356-1.075 1.353-1.47 0-.359 0-1.451-1.376-1.485l-.082-.001-.086-.002h-.042c-1.33.014-1.33 1.073-1.33 1.47 0 .401 0 1.469 1.356 1.488h.207zm-.188-4.162h-.053c-.532.005-2.51.19-2.51 2.675 0 2.493 1.997 2.686 2.53 2.694h.243c.504-.008 2.53-.201 2.53-2.677-.006-2.468-2.026-2.675-2.544-2.69-.059-.002-.129-.002-.196-.002z"
                />
            </svg>
        );
    }
};

export default IconLockOpenFilled;
