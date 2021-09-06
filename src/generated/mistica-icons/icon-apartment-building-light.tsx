/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: string | number;
};

const IconApartmentBuildingLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.575 20.64V3.36c0-.176-.219-.383-.407-.383H5.838c-.185 0-.406.207-.406.38v17.281c0 .188.204.384.406.384h4.05v-4.686c0-.227.182-.41.406-.41h3.42a.41.41 0 01.407.41v4.686h4.05c.2 0 .404-.193.404-.381zm-7.877.354h2.61v-4.25h-2.607v4.25h-.003zm7.47-18.838c.636 0 1.219.574 1.219 1.205v17.28c0 .638-.569 1.202-1.216 1.202H5.841c-.647 0-1.216-.564-1.216-1.202V3.358c-.003-.628.577-1.202 1.213-1.202h12.33zM8.535 7.372h1.776V5.576H8.533v1.796h.002zm2.182-2.616a.41.41 0 01.407.409V7.78a.407.407 0 01-.407.409h-2.59a.409.409 0 01-.407-.41V5.166c0-.227.182-.41.406-.41h2.591zm2.936 2.616h1.779V5.576h-1.779v1.796zm2.182-2.616c.224 0 .406.185.406.409V7.78a.405.405 0 01-.406.409h-2.588a.409.409 0 01-.406-.41V5.166c0-.227.179-.41.406-.41h2.588zm-7.3 7.753h1.78v-1.795h-1.78v1.795zm2.182-2.616c.225 0 .407.182.407.409v2.616a.407.407 0 01-.407.41h-2.59a.409.409 0 01-.407-.41v-2.616c0-.227.182-.41.406-.41h2.591zm2.936 2.616h1.779v-1.795h-1.779v1.795zm2.182-2.616c.224 0 .406.182.406.409v2.616c0 .227-.179.41-.406.41h-2.588a.407.407 0 01-.406-.41V10.3c0-.227.179-.409.406-.409l2.588.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconApartmentBuildingLight;
