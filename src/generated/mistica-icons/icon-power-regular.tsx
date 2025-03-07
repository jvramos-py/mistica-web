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

const IconPowerRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.215 12.668c0 .416.35.761.777.761a.773.773 0 00.776-.761V2.761A.773.773 0 0011.992 2a.773.773 0 00-.777.762v9.905z"
                />
                <path
                    fill={fillColor}
                    d="M2.47 12.668C2.47 17.81 6.749 22 11.992 22c5.247 0 9.522-4.193 9.526-9.332 0-4.037-2.645-7.621-6.57-8.876-.388-.116-.857.112-.973.493-.115.38.116.842.504.954 3.268 1.066 5.482 4.037 5.482 7.429 0 4.305-3.575 7.809-7.97 7.809-4.393 0-7.968-3.504-7.968-7.81 0-3.391 2.218-6.366 5.486-7.428.426-.116.618-.573.503-.954-.115-.417-.584-.605-.972-.493-3.93 1.255-6.57 4.835-6.57 8.876z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.077 18.097c-1.919 0-3.417-.507-4.454-1.507-1.075-1.037-1.622-2.577-1.622-4.572 0-1.658.379-3.005 1.126-4.008.737-.989 1.821-1.633 3.219-1.91a.559.559 0 11.219 1.098c-2.32.462-3.446 2.039-3.446 4.82 0 1.681.431 2.947 1.28 3.765.82.79 2.059 1.19 3.678 1.19 1.62 0 2.857-.4 3.678-1.193.849-.818 1.28-2.084 1.28-3.764 0-2.821-1.16-4.404-3.543-4.84a.56.56 0 11.201-1.104c1.434.263 2.544.899 3.303 1.89.77 1.009 1.16 2.37 1.16 4.05 0 1.995-.547 3.536-1.625 4.572-1.037 1.006-2.535 1.513-4.454 1.513z"
                />
                <path
                    fill={fillColor}
                    d="M11.489 8.985c0 .308.252.56.56.56.308 0 .56-.252.56-.56V4.887a.562.562 0 00-.56-.56.562.562 0 00-.56.56v4.098z"
                />
                <path
                    fill={fillColor}
                    d="M4.763 19.424c1.673 1.611 4.107 2.43 7.236 2.43 3.128 0 5.563-.816 7.238-2.427 1.736-1.672 2.616-4.17 2.616-7.423 0-3.255-.88-5.75-2.616-7.425-1.675-1.611-4.11-2.429-7.238-2.429-3.13 0-5.563.818-7.236 2.426C3.03 6.25 2.15 8.749 2.15 12.002c0 3.255.88 5.75 2.613 7.422zm-1.523-7.42c0-5.815 2.946-8.764 8.759-8.764 5.815 0 8.761 2.95 8.764 8.764 0 5.813-2.95 8.76-8.764 8.76-5.813 0-8.76-2.947-8.76-8.76z"
                />
            </svg>
        );
    }
};

export default IconPowerRegular;
