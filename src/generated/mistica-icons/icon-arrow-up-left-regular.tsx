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

const IconArrowUpLeftRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.574 20.08L8.393 10.9l-5.06 5.06V3.356h12.602l-5.059 5.06 9.18 9.18-2.482 2.483zM12.795 8.416l5.258-5.258L17.574 2H1.976v15.598l1.158.48 5.258-5.26L17.574 22l4.402-4.402-9.181-9.182z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 16.734a.7.7 0 01-1.196.496l-8.916-8.915L15.6 4.604a.69.69 0 00.152-.764.693.693 0 00-.648-.436h-11.7v11.694c0 .436.332.608.436.648.1.044.456.156.764-.152l3.712-3.711 8.916 8.918a.701.701 0 11-.992.992L8.316 13.87l-2.72 2.72a2.072 2.072 0 01-2.292.456A2.076 2.076 0 012 15.098V2h13.1c.868 0 1.612.5 1.944 1.3.332.8.156 1.68-.456 2.295l-2.72 2.72 7.928 7.923a.699.699 0 01.204.496z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.777 20.464c.073.014.143.022.216.022.291 0 .582-.129.86-.384l.017-.017 5.025-5.047c.367-.364.555-.748.56-1.143.006-.406-.176-.795-.543-1.162l-.006-.006-4.905-4.79 2.384-2.375a.074.074 0 01.014-.017c.328-.359.42-.95.216-1.406a1.009 1.009 0 00-.955-.614L4.514 3.52a.89.89 0 00-.717.252.901.901 0 00-.255.717v12.087c-.003.476.244.865.658 1.044.446.191 1.009.098 1.34-.218l2.587-2.588 4.813 5.115.014.014c.218.218.487.448.823.52zm.213-1.056c-.028-.012-.104-.054-.274-.222l-4.877-5.19-.011-.011a.995.995 0 00-.675-.294.955.955 0 00-.7.274L4.8 16.618a.241.241 0 01-.177.008.175.175 0 01-.005-.05V4.59l12.022.005a.337.337 0 01-.03.213l-2.45 2.448a.973.973 0 00.017 1.376l.005.005 4.972 4.857c.107.104.23.255.227.381-.003.101-.09.244-.246.401l-5.017 5.04a.606.606 0 01-.129.092z"
                />
            </svg>
        );
    }
};

export default IconArrowUpLeftRegular;
