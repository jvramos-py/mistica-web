/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconChartDeviceLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.14 17.36a.714.714 0 010 1.426.714.714 0 010-1.427zm2.144-5.002a3.932 3.932 0 01-3.927-3.927c0-.79.238-1.527.645-2.148H5.499v11.433h7.502a.357.357 0 010 .713H5.499v.357a2.5 2.5 0 002.5 2.5h6.428a2.5 2.5 0 002.5-2.5v-5.358a.357.357 0 01.714 0v5.358a3.215 3.215 0 01-3.214 3.213H8a3.215 3.215 0 01-3.214-3.213V5.218A3.215 3.215 0 018 2.004h6.427a3.215 3.215 0 013.132 2.5h.082v.019a3.934 3.934 0 013.57 3.908 3.926 3.926 0 01-3.927 3.927zm2.51-5.934l-2.002 2.003 2.002 2.002a3.203 3.203 0 000-4.005zm-2.153 1.143l1.646-1.645a3.195 3.195 0 00-1.646-.686v2.331zM5.499 5.57h9.102a3.917 3.917 0 012.226-1.038 2.5 2.5 0 00-2.4-1.815H8a2.5 2.5 0 00-2.5 2.5v.353zm11.785 6.075c.76 0 1.454-.265 2.003-.704l-2.259-2.258a.39.39 0 01-.077-.115.367.367 0 01-.028-.137V5.236a3.218 3.218 0 00-2.857 3.195 3.225 3.225 0 003.218 3.214z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChartDeviceLight;
