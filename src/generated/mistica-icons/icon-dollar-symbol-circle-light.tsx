/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDollarSymbolCircleLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.904 16.044c-.143-.1-.213-.213-.213-.383a.412.412 0 01.412-.398c.106.005.21.039.3.1.586.39 1.387.778 2.313.843v-3.91h-.005c-1.896-.24-2.779-1.154-2.779-2.566 0-1.601 1.087-2.623 2.782-2.715v-1.01a.28.28 0 01.28-.28.28.28 0 01.28.28v1.01c.893.049 1.651.302 2.188.634.184.115.271.258.271.4 0 .21-.168.385-.38.385h-.003a.642.642 0 01-.286-.087c-.561-.305-1.142-.506-1.79-.558l.001 3.752.195.024c1.924.241 2.837 1.154 2.837 2.608 0 1.542-1.033 2.667-3.03 2.795v1.023a.28.28 0 01-.28.28.28.28 0 01-.28-.28v-1.013a5.295 5.295 0 01-2.813-.934zm3.372.161c1.38-.095 2.214-.865 2.214-1.97 0-.95-.52-1.625-2.215-1.868l.001 3.838zm-.561-4.743v-3.68c-1.267.08-1.968.838-1.968 1.876 0 .932.536 1.553 1.968 1.804z"
            />
            <path
                fill={fillColor}
                d="M2.156 12c0 6.434 3.404 9.834 9.838 9.834 6.437 0 9.84-3.4 9.84-9.837 0-3.26-.877-5.76-2.602-7.423-1.664-1.605-4.098-2.418-7.238-2.418-6.434 0-9.838 3.41-9.838 9.843zm2.989-7.023c1.555-1.499 3.86-2.26 6.849-2.26 2.989 0 5.294.761 6.851 2.263 1.614 1.554 2.432 3.919 2.432 7.02 0 3.1-.818 5.462-2.432 7.016-1.557 1.499-3.862 2.258-6.851 2.258s-5.294-.76-6.849-2.258c-1.61-1.552-2.429-3.916-2.429-7.02 0-3.103.818-5.464 2.429-7.019z"
            />
        </svg>
    );
};

export default IconDollarSymbolCircleLight;
