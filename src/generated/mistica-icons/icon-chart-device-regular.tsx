/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChartDeviceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.489 8.431a4.11 4.11 0 00-3.612-4.073 3.572 3.572 0 00-3.355-2.354H8.094c-1.97 0-3.57 1.6-3.57 3.57V18.43c0 1.97 1.6 3.57 3.57 3.57h6.428c1.97 0 3.57-1.6 3.57-3.57v-5.956c1.925-.343 3.397-2.021 3.397-4.042zm-1.075 0c0 .645-.2 1.24-.544 1.733L18.138 8.43 19.87 6.7c.343.489.544 1.088.544 1.732zm-6.07 0a3.042 3.042 0 012.5-2.985v2.985c0 .137.05.275.155.38l2.112 2.112a3.022 3.022 0 01-1.732.544 3.04 3.04 0 01-3.036-3.036zm3.57-2.985a3.06 3.06 0 011.197.494l-1.197 1.198V5.446zM8.094 3.43h6.428c.772 0 1.44.416 1.815 1.033a4.111 4.111 0 00-1.509.755H5.982A2.146 2.146 0 018.094 3.43zm6.428 17.143H8.094a2.146 2.146 0 01-2.112-1.787h10.652a2.146 2.146 0 01-2.112 1.787zM5.95 17.36V6.644h7.735a4.11 4.11 0 00-.416 1.787 4.11 4.11 0 003.392 4.042v4.886H5.951z"
            />
        </svg>
    );
};

export default IconChartDeviceRegular;
