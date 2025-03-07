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

const IconPersonFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.603 15.705V22H9.388v-6.295H8v-6.48c0-1.598 1.121-2.916 2.572-3.12a2.487 2.487 0 01-.659-1.697C9.913 3.081 10.928 2 12.173 2c1.25 0 2.26 1.08 2.26 2.408 0 .692-.275 1.313-.711 1.754C15.026 6.49 16 7.736 16 9.224v6.48h-1.397z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.258 4.637c0 1.549.936 2.476 2.499 2.476 1.569-.003 2.501-.927 2.501-2.479 0-.793-.232-1.415-.686-1.849-.437-.417-1.048-.63-1.815-.63-.765 0-1.375.213-1.815.633-.454.434-.684 1.056-.684 1.849zM16.205 15.9a1.52 1.52 0 001.079-1.857s-1.14-4.165-1.14-4.17a.85.85 0 00-.06-.189c-.285-1.29-1.456-2.224-2.798-2.224h-2.563c-1.341 0-2.515.936-2.8 2.23a.887.887 0 00-.048.146l-1.155 4.21a1.516 1.516 0 001.073 1.851c.39.112.804.06 1.163-.14l.039-.025v4.594c0 .851.622 1.493 1.445 1.493.818 0 1.415-.628 1.415-1.493v-4.454h.28v4.454c0 .863.616 1.515 1.434 1.515.82 0 1.44-.652 1.44-1.515v-4.594c.358.221.793.28 1.196.168z"
                />
            </svg>
        );
    }
};

export default IconPersonFilled;
