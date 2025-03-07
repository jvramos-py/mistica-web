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

const IconCheckedLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 2C6.488 2 2 6.488 2 12s4.487 10 9.998 10a9.97 9.97 0 005.33-1.544.353.353 0 00.113-.496.36.36 0 00-.496-.112 9.257 9.257 0 01-4.951 1.432c-5.119 0-9.282-4.164-9.282-9.284 0-5.12 4.167-9.288 9.286-9.288s9.282 4.164 9.282 9.284a9.261 9.261 0 01-1.432 4.952.36.36 0 00.608.384A9.965 9.965 0 0022 11.996C21.996 6.488 17.513 2 11.998 2z"
                />
                <path
                    fill={fillColor}
                    d="M10.928 16l-3.834-4.267a.336.336 0 010-.467.292.292 0 01.44 0l3.394 3.732L17.466 8.1a.292.292 0 01.44 0 .336.336 0 010 .466L10.928 16zm7.861 3.504a.716.716 0 100-1.432.716.716 0 000 1.432z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.107 16.73a.29.29 0 00.235.116c.09 0 .178-.044.235-.116l6.864-8.872a.298.298 0 00-.053-.416.298.298 0 00-.417.053l-6.63 8.565-2.652-3.466a.296.296 0 00-.416-.057.296.296 0 00-.057.417l2.89 3.776z"
                />
                <path
                    fill={fillColor}
                    d="M11.998 23C4.805 23 1 19.198 1 12.002 1 4.805 4.802 1 11.998 1c3.511 0 6.232.908 8.093 2.703C22.02 5.563 23 8.356 23 12.002 23.003 19.195 19.198 23 11.998 23zm0-21.374c-6.88 0-10.372 3.492-10.372 10.376 0 6.88 3.489 10.372 10.372 10.372 6.887 0 10.376-3.489 10.376-10.372.003-6.887-3.489-10.376-10.376-10.376z"
                />
            </svg>
        );
    }
};

export default IconCheckedLight;
