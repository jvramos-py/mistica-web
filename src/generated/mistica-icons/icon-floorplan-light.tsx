/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFloorplanLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.286 15.93a.714.714 0 100-1.43.714.714 0 000 1.43zm-3.572-4.786V2.715H2v18.571h15.714v-6.071c0-.214-.143-.357-.357-.357S17 15 17 15.215v5.357H2.714v-9.286H4.5c.214 0 .357-.142.357-.357 0-.214-.143-.357-.357-.357H2.714V3.43h7.5v7.143H8.43c-.215 0-.358.143-.358.357 0 .215.143.357.358.357h2.5V3.43H17v7.857c0 .036 0 .108.036.143.035.036.035.072.071.107l2.5 2.5a.386.386 0 00.25.108.385.385 0 00.25-.108.345.345 0 000-.5l-2.393-2.392z"
            />
        </svg>
    );
};

export default IconFloorplanLight;
