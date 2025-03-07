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

const IconFolderFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.776 5.625H11.52a.735.735 0 01-.52-.227L9.26 3.636C8.852 3.223 8.26 3 7.668 3H4.224C3 3 2 4.013 2 5.248V21h20V7.873c0-1.236-1-2.248-2.224-2.248z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 6.093v-.991a1.264 1.264 0 00-1.272-1.255H3.41a1.262 1.262 0 00-1.255 1.255v13.795c.005.692.563 1.25 1.255 1.255h17.15a1.264 1.264 0 001.281-1.247V7.348a1.264 1.264 0 00-1.272-1.255h-8.571z"
                />
            </svg>
        );
    }
};

export default IconFolderFilled;
