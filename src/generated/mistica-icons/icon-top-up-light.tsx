/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTopUpLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.37 11.18l-2.197-2.25v8.784h5.929v1.071c0 1.788-1.397 3.215-3.138 3.215H8.688c-1.745 0-3.138-1.431-3.138-3.215V5.215C5.55 3.427 6.947 2 8.688 2h6.276c1.74 0 3.134 1.431 3.138 3.215v8.568c0 .212-.14.356-.347.356-.207 0-.348-.14-.348-.356v-7.5H6.257v11.435h3.485c.207 0 .347.144.347.356 0 .211-.136.355-.347.355H6.256v.356c0 1.392 1.078 2.5 2.44 2.5h2.787V8.928L9.285 11.18a.33.33 0 01-.488 0 .349.349 0 010-.5l3.033-3.142 3.033 3.143a.35.35 0 010 .5.375.375 0 01-.246.107.375.375 0 01-.246-.108zm.594-8.464H8.688c-1.358 0-2.44 1.107-2.44 2.499v.356h11.155v-.356c0-1.392-1.077-2.5-2.439-2.5zm2.44 15.71h-5.227v2.854h2.787c1.358 0 2.44-1.103 2.44-2.499v-.356z"
            />
            <path
                fill={fillColor}
                d="M17.755 16.642c.386 0 .698-.32.698-.716a.707.707 0 00-.698-.715.707.707 0 00-.699.715c0 .396.313.716.699.716z"
            />
        </svg>
    );
};

export default IconTopUpLight;
