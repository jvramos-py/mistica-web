/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconIotSensorTemperatureLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.646 14.301v1.118a3.897 3.897 0 011.131 2.737c0 2.111-1.7 3.844-3.773 3.844-2.073 0-3.774-1.728-3.774-3.844 0-1 .416-2.004 1.13-2.732V4.693C9.36 3.19 10.53 2 12.005 2c1.473 0 2.643 1.191 2.643 2.693v5c0 .232-.15.385-.377.385s-.377-.153-.377-.384V4.693c0-1.078-.831-1.925-1.89-1.925-1.058 0-1.889.847-1.889 1.925V15.57a.41.41 0 01-.11.271c-.643.615-1.02 1.423-1.02 2.309 0 1.693 1.357 3.076 3.02 3.076 1.662 0 3.02-1.383 3.02-3.076a3.11 3.11 0 00-1.02-2.309c-.073-.04-.111-.158-.111-.27v-1.27c0-.232.15-.385.377-.385s.377.153.377.384zm-3.02-9.608c0-.232.15-.384.378-.384.227 0 .376.152.386.384v11.77a1.76 1.76 0 011.32 1.693c0 .964-.755 1.732-1.702 1.732s-1.7-.773-1.7-1.732c0-.847.565-1.502 1.319-1.694V4.692zm2.639 8.072a.762.762 0 01-.754-.768c0-.423.338-.767.754-.767.415 0 .754.344.754.768a.762.762 0 01-.754.767zm-1.32 5.386a.943.943 0 00-.941-.96.943.943 0 00-.943.96c0 .536.416.96.943.96a.943.943 0 00.942-.96z"
            />
        </svg>
    );
};

export default IconIotSensorTemperatureLight;
