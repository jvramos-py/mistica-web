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

const IconAddMoreRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.524 11.525h-6.057v-6.05a.475.475 0 00-.951 0v6.05H5.459a.476.476 0 100 .95h6.057v6.05a.476.476 0 00.95 0v-6.05h6.058a.475.475 0 100-.95z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.42 4.72a.722.722 0 01.716-.716.722.722 0 01.716.716l.003 6.064 5.426.003a.722.722 0 01.716.716.84.84 0 01-.22.552c-.127.127-.3.16-.493.16l-5.432.003v6.073a.703.703 0 01-.713.712.722.722 0 01-.715-.715v-6.072l-5.712.005a.722.722 0 01-.716-.715.722.722 0 01.716-.716l5.712-.006-.003-6.064z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.169 11.123H12.8V3.829a.792.792 0 00-.805-.798.802.802 0 00-.802.798v7.361H3.829c-.485.026-.853.376-.828.857.023.446.382.737.828.76h7.296v7.365a.876.876 0 001.75 0v-7.297h7.297a.876.876 0 00-.003-1.752z"
                />
            </svg>
        );
    }
};

export default IconAddMoreRegular;
