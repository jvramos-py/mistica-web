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

const IconTargetFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.84 5.507l-2.57 2.57a.55.55 0 01-.39.16h-2.338l-6.444 6.449a.547.547 0 01-.39.16.55.55 0 01-.39-.94l6.444-6.445v-2.34a.55.55 0 01.16-.39l2.569-2.569a.541.541 0 01.601-.117.547.547 0 01.338.507v2.02h2.02c.22 0 .423.136.507.338a.542.542 0 01-.117.597zm-4.425 8.784a7.678 7.678 0 00-1.32-4.307l-2.414 2.414c.273.573.433 1.217.433 1.893a4.412 4.412 0 01-4.406 4.407 4.412 4.412 0 01-4.406-4.407 4.412 4.412 0 014.406-4.406c.676 0 1.32.155 1.893.432l2.414-2.414a7.664 7.664 0 00-4.307-1.32C5.457 6.583 2 10.04 2 14.29 2 18.543 5.457 22 9.708 22c4.25 0 7.707-3.457 7.707-7.709zM8.67 15.33a1.466 1.466 0 002.076.005l2.09-2.095a3.304 3.304 0 01-3.128 4.355 3.304 3.304 0 01-3.302-3.303 3.304 3.304 0 014.354-3.128l-2.09 2.09a1.469 1.469 0 000 2.076zm10.21-9.658a.547.547 0 01-.549-.55v-1.24l-1.465 1.466v1.79h1.79L20.12 5.67h-1.24z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.846 11.999c0-.336-.263-.6-.599-.6v-.002H19.71c-.297-6.222-5.383-7.126-7.103-7.247v-1.4a.6.6 0 10-1.2 0v1.375c-1.453.048-6.957.656-7.237 7.272H2.763a.598.598 0 100 1.199h1.414c.378 6.37 5.714 7.056 7.233 7.12v1.521c0 .336.263.6.599.6a.6.6 0 00.6-.6v-1.535c1.68-.104 6.75-.944 7.095-7.104h1.543c.336 0 .6-.271.6-.599zm-4.397.003c0 .327.271.6.6.6v.002h.453c-.32 4.983-4.207 5.798-5.896 5.902v-.465a.6.6 0 10-1.2 0v.479c-1.599-.073-5.686-.767-6.03-5.919h.585c.337 0 .6-.272.6-.6a.593.593 0 00-.6-.599h-.593c.257-5.375 4.479-6.025 6.039-6.064v.616c0 .336.263.6.6.6a.599.599 0 00.599-.6v-.6c1.722.13 5.633.992 5.904 6.048h-.462a.6.6 0 00-.6.6zm-3.387-2.193c0 .703-.193 1.24-.568 1.599-.367.345-.888.521-1.56.521-.673 0-1.194-.177-1.552-.521-.376-.361-.57-.896-.57-1.6 0-.694.194-1.232.57-1.59.36-.353.88-.527 1.551-.527.673 0 1.194.176 1.56.526.379.359.57.897.57 1.592zm1.647 6.117v-.711c0-.67-.215-1.247-.619-1.664-.431-.454-1.078-.687-1.863-.687h-2.59c-.782 0-1.432.233-1.863.687-.4.417-.608.991-.608 1.664v.711c0 .126.112.238.24.238h7.054c.137 0 .25-.109.25-.238z"
                />
            </svg>
        );
    }
};

export default IconTargetFilled;
