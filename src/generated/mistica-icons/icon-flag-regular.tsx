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

const IconFlagRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.314 6.615h10.682L13.852 9.76l3.144 3.145H6.314v-6.29zm9.462 3.145l4.504-4.505H6.314v-.228c.838-.42 1.258-1.55.458-2.6-1.712-1.304-3.648.632-2.344 2.344.174.133.351.224.526.294V22h1.36v-7.735H20.28L15.776 9.76z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.19 7.407c-.065.062-.062.163.002.23l3.098 3.095c.353.454.407.98.182 1.432a1.312 1.312 0 01-1.182.73H4.542v8.37c0 .317-.26.575-.58.575a.578.578 0 01-.58-.574V3.463c0-.72.592-1.308 1.317-1.308H19.29c.507 0 .958.28 1.182.731.224.451.171.978-.134 1.376l-3.149 3.145zm2.1 4.34a.152.152 0 00.143-.09.147.147 0 00-.017-.166l-3.05-3.044a1.317 1.317 0 01.003-1.852l3.1-3.087a.463.463 0 00-.033-.11.152.152 0 00-.143-.089H4.703c-.09 0-.16.07-.16.157v8.28H19.29z"
                />
            </svg>
        );
    }
};

export default IconFlagRegular;
