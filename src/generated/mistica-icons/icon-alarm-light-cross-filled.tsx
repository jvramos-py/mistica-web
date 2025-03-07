/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAlarmLightCrossFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.435 4.236c0 .336.272.608.605.608a.608.608 0 00.605-.608V2.763a.607.607 0 00-.605-.608.607.607 0 00-.605.608v1.473zm7.115 13.196c.74 0 1.383.547 1.383 1.171v2.07c0 .625-.647 1.171-1.383 1.171H5.53c-.75 0-1.384-.535-1.384-1.17v-2.07c0-.634.633-1.169 1.384-1.169h.151v-5.728c0-4.118 2.258-6.387 6.356-6.387 4.101 0 6.359 2.27 6.359 6.387v5.725h.154zm.173 3.14v-1.874a.325.325 0 00-.173-.053H5.53a.345.345 0 00-.174.048v1.888c.054.03.112.045.174.045h13.02c.061 0 .123-.02.173-.054zm-5.84-8.078h1.476v-.695h-1.476a.525.525 0 01-.524-.526V9.79h-.692v1.482a.524.524 0 01-.523.526H9.667v.695h1.477c.288 0 .523.238.523.527v1.481h.692V13.02c0-.288.236-.526.524-.526zm1.695-1.748h-1.174V9.57c0-.451-.35-.832-.765-.832h-1.255c-.414 0-.767.38-.767.832v1.179h-1.17c-.45 0-.83.353-.83.767v1.264c0 .414.378.767.826.767h1.174v1.177c0 .45.353.832.767.832h1.255c.415 0 .768-.381.768-.832v-1.18h1.17c.449 0 .83-.353.83-.77v-1.263c0-.412-.378-.765-.83-.765zM4.83 9.566a.608.608 0 01-.605.609H2.76a.608.608 0 010-1.216h1.468c.333 0 .605.272.602.608zm17.011.029a.607.607 0 00-.605-.608h-1.468a.607.607 0 00-.605.608c0 .336.272.608.605.608h1.468a.607.607 0 00.605-.608zM5.671 5.962L4.633 4.92a.607.607 0 01.851-.863l.003.003 1.037 1.042a.61.61 0 01-.43 1.039.62.62 0 01-.425-.18zm10.92-.558a.607.607 0 00.603.614c.16 0 .314-.065.428-.18l1.037-1.042a.609.609 0 000-.857l-.003-.002a.602.602 0 00-.851.002l-1.037 1.042a.598.598 0 00-.176.423z"
            />
        </svg>
    );
};

export default IconAlarmLightCrossFilled;
