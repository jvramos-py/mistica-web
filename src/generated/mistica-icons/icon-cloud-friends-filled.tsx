/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCloudFriendsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.547 12.534c0-2.455 1.904-4.454 4.243-4.454 1.254 0 2.374.572 3.155 1.475.594-1.667 2.114-2.862 3.9-2.898C16.37 4.011 14.15 2 11.49 2 9.42 2 7.627 3.215 6.7 4.998a4.042 4.042 0 011.704.888.556.556 0 01.072.751.496.496 0 01-.716.076 4.156 4.156 0 00-.43-.316 3.066 3.066 0 00-1.258-.427 2.758 2.758 0 00-.362-.028c-1.782 0-3.23 1.519-3.23 3.39 0 1.814 1.368 3.298 3.078 3.382a1.38 1.38 0 01-.011-.18z"
            />
            <path
                fill={fillColor}
                d="M14.545 18.678c0-1.415-.823-2.582-2.141-3.238a.227.227 0 00-.046-.02 3.3 3.3 0 00-.244-.112 3.748 3.748 0 00-.316-.12 3.276 3.276 0 00.4-.412c.095-.115.187-.236.27-.36a3.519 3.519 0 00.552-1.879c0-1.866-1.443-3.381-3.222-3.381s-3.227 1.515-3.227 3.382a3.44 3.44 0 001.223 2.646c-1.672.576-2.765 1.871-2.765 3.494V22h9.516v-3.322z"
            />
            <path
                fill={fillColor}
                d="M18.895 13.8a3.44 3.44 0 001.269-2.686c0-1.87-1.448-3.39-3.23-3.39-1.784 0-3.231 1.52-3.231 3.39 0 1.048.457 1.983 1.166 2.607-.427.14-.82.328-1.166.552-.076.184-.16.367-.26.543 1.338.888 2.123 2.279 2.123 3.858v1.899h5.958V17.25c0-1.587-1.033-2.859-2.629-3.45z"
            />
        </svg>
    );
};

export default IconCloudFriendsFilled;
