/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAlarmLightLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.587 3.139a.461.461 0 10.92.003V1.46a.461.461 0 00-.92 0v1.68zm7.885 15.293c.72 0 1.35.513 1.35 1.102v2.364c0 .585-.633 1.102-1.35 1.102H4.622c-.733 0-1.35-.504-1.35-1.102v-2.364c0-.598.62-1.102 1.35-1.102h.404v-6.767c0-4.615 2.429-7.058 7.021-7.058 4.595 0 7.024 2.44 7.024 7.058v6.763h.401v.003zm-13.53-.025h12.206v-6.739c0-4.07-2.053-6.134-6.104-6.134-4.048 0-6.101 2.064-6.101 6.134v6.739zm13.962 3.466l-.003-2.34c-.022-.037-.21-.178-.429-.178H4.622c-.232 0-.404.132-.43.188v2.355c.017.04.192.178.43.178h14.85c.22 0 .41-.14.432-.203zM3.595 9.226c0 .253-.207.46-.46.463H1.46A.464.464 0 011 9.226v-.003c0-.257.207-.464.46-.464h1.672c.253.003.46.21.463.467zM23 9.254a.461.461 0 00-.46-.46l-1.675-.007c-.253 0-.46.21-.46.464v.003c0 .254.207.46.46.46h1.675a.46.46 0 00.46-.46zM4.941 4.945L3.758 3.76a.467.467 0 010-.655.459.459 0 01.648-.003l.003.003 1.183 1.187a.468.468 0 01-.006.657.459.459 0 01-.645-.003zm12.518-.463a.464.464 0 00.79.326l1.182-1.19a.467.467 0 000-.655l-.003-.003a.46.46 0 00-.648.003l-1.183 1.19a.468.468 0 00-.138.329z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmLightLight;
