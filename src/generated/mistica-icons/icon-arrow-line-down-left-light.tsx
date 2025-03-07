/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLineDownLeftLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.132 16.224L7.094 6.87a.47.47 0 00-.733-.44.477.477 0 00-.2.469l.064 10.447a.128.128 0 00.012.08.38.38 0 00.053.053.463.463 0 00.253.253.38.38 0 00.053.053.262.262 0 00.087.02l10.253.017a.454.454 0 00.354-.141.46.46 0 00-.325-.792h-9.17l9.908-9.907a.47.47 0 00.001-.665.472.472 0 00-.664.001l-9.908 9.907z"
            />
        </svg>
    );
};

export default IconArrowLineDownLeftLight;
