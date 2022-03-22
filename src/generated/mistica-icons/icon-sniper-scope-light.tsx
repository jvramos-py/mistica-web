/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSniperScopeLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.865 11.812h1.571c.227 0 .412.185.407.406a.41.41 0 01-.412.409h-1.597c-.37 6.512-6.047 7.062-7.37 7.098v1.706a.41.41 0 01-.411.409.41.41 0 01-.412-.41v-1.7c-1.32-.033-6.978-.565-7.367-7.1H2.568a.412.412 0 01-.412-.41c0-.223.185-.408.412-.408h1.675c.07-7.177 6.137-7.628 7.4-7.639V2.565a.41.41 0 01.412-.409.41.41 0 01.412.41V4.18c1.406.054 7.303.684 7.398 7.63zm-7.395 4.706v2.389c1.583-.042 6.204-.67 6.549-6.277h-2.521a.41.41 0 01-.412-.41c0-.223.185-.408.412-.408h2.546c-.09-6.037-4.91-6.748-6.574-6.81v2.48a.41.41 0 01-.412.408.41.41 0 01-.412-.409V4.994c-1.563.02-6.512.58-6.577 6.82h2.443a.41.41 0 01.412.41.41.41 0 01-.412.408H5.1c.362 5.63 4.972 6.244 6.546 6.28v-2.394a.41.41 0 01.412-.41.41.41 0 01.412.41z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSniperScopeLight;
