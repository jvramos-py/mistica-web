/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTagPoundFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.094 6.615a.71.71 0 01-.5-1.213l3.194-3.194a.71.71 0 011.004 1.004l-3.194 3.194a.708.708 0 01-.504.21zm2.485-.686v7.552c0 .568-.223 1.104-.623 1.504l-6.392 6.393A2.123 2.123 0 0112.06 22c-.546 0-1.09-.209-1.504-.622l-7.934-7.934A2.106 2.106 0 012 11.94c0-.567.223-1.104.622-1.503l6.389-6.393a2.106 2.106 0 011.504-.623h7.551l-1.231 1.231a1.778 1.778 0 000 2.508 1.778 1.778 0 002.508 0l1.236-1.23zm-6.302 8.851h-2.93c.058-.168.09-.345.09-.531v-1.6h1.6a.53.53 0 00.531-.531.53.53 0 00-.531-.532h-1.6v-1.418a1.065 1.065 0 011.731-.827.534.534 0 00.673-.827 2.134 2.134 0 00-3.471 1.658v1.418h-.173a.53.53 0 00-.532.532.53.53 0 00.532.532h.177v1.6c0 .299-.232.53-.532.53a.53.53 0 00-.531.532.53.53 0 00.531.532h4.44a.535.535 0 00-.005-1.068z"
            />
        </svg>
    );
};

export default IconTagPoundFilled;
