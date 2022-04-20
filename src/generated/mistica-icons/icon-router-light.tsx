/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRouterLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M4.14 18.069c0 .786.64 1.426 1.426 1.426.786 0 1.426-.64 1.426-1.426 0-.787-.64-1.427-1.426-1.427-.787 0-1.427.64-1.427 1.427zm2.143 0a.714.714 0 01-1.426 0 .714.714 0 011.426 0zm9.642-13.034c1.348 0 2.66.576 3.597 1.578a.355.355 0 01-.018.502.354.354 0 01-.503-.018A4.18 4.18 0 0015.93 5.75c-1.166 0-2.263.48-3.072 1.348a.355.355 0 01-.503.018.355.355 0 01-.018-.502 4.903 4.903 0 013.589-1.578zm-5.733-.077a.355.355 0 01-.01-.503A7.903 7.903 0 0115.93 2a7.91 7.91 0 015.746 2.455.354.354 0 01-.009.503.35.35 0 01-.247.1.346.346 0 01-.256-.11 7.199 7.199 0 00-5.23-2.235 7.199 7.199 0 00-5.229 2.236.366.366 0 01-.512.009zM22 18.068a3.217 3.217 0 01-2.811 3.187.356.356 0 01-.398-.311.356.356 0 01.31-.398 2.498 2.498 0 002.186-2.477 2.501 2.501 0 00-2.5-2.501H5.213a2.501 2.501 0 000 5.001h9.64a.357.357 0 010 .713h-9.64A3.215 3.215 0 012 18.07a3.215 3.215 0 013.214-3.214h10.359V9.497a.357.357 0 01.713 0v5.358h2.5A3.221 3.221 0 0122 18.069zm-4.288 2.858a.714.714 0 01-1.426 0 .714.714 0 011.426 0z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M13.458 6.743c-.025-2.38-1.534-3.818-1.597-3.878l-.002-.001a.411.411 0 01.549-.611c.075.067 1.84 1.689 1.87 4.465.006.103.102 2.829-1.842 4.566a.41.41 0 01-.58-.034.41.41 0 01.034-.58c1.655-1.473 1.57-3.902 1.568-3.927zm8.378 10.445c0-.952-.252-1.694-.745-2.207-.515-.532-1.277-.801-2.271-.801H7.87V6.771a.41.41 0 00-.818 0v7.406H5.164c-.992 0-1.753.272-2.269.804-.496.513-.745 1.255-.745 2.207v1.64c0 .951.25 1.694.745 2.206.515.535 1.277.804 2.269.804h13.658c.992 0 1.754-.269 2.27-.804.492-.512.744-1.255.744-2.207v-1.639zm-.82 1.64c0 .733-.174 1.282-.516 1.638-.353.367-.916.552-1.675.552H5.164c-.76 0-1.322-.185-1.675-.552-.342-.356-.515-.905-.515-1.639v-1.639c0-.733.173-1.282.515-1.638.35-.367.916-.552 1.675-.552h13.661c.76 0 1.322.185 1.675.552.342.355.515.904.515 1.638v1.64zm-15.437-.819c0-.454-.264-.664-.67-.664s-.67.21-.67.664c0 .219.06.381.169.49.117.12.291.177.501.177.213 0 .384-.059.502-.177.106-.112.168-.271.168-.49zm2.437 0c0-.454-.264-.664-.67-.664s-.67.21-.667.664c0 .219.06.381.168.49.118.12.289.177.502.177.21 0 .38-.059.498-.177.107-.112.169-.271.169-.49zM9.91 4.425c.04.037.943.89.96 2.346v.002c.001.064.035 1.493-.941 2.365a.41.41 0 00-.034.58l.003.003a.408.408 0 00.577.03c1.28-1.148 1.218-2.94 1.216-3.002-.02-1.821-1.183-2.888-1.233-2.933a.41.41 0 00-.549.608l.001.001z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRouterLight;
