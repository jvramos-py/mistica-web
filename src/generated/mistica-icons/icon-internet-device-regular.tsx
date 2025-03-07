/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconInternetDeviceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.036 3.623c2.098.146 3.764 1.924 3.764 4.091 0 2.025-1.445 3.703-3.34 4.041v7.031c0 1.774-1.42 3.214-3.166 3.214h-6.33C7.218 22 5.8 20.56 5.8 18.786V5.214C5.8 3.44 7.218 2 8.965 2h6.33a3.15 3.15 0 012.741 1.623zM19.5 7.179h1.198a3.045 3.045 0 00-1.576-2.162c.216.622.338 1.39.379 2.162zm-1.053 1.075h-1.378c.081 1.513.491 2.354.69 2.491.197-.137.607-.978.688-2.491zm-.689-3.566c-.198.137-.608.978-.689 2.491h1.378c-.081-1.513-.49-2.358-.689-2.491zm-10.552.53v.174h7.216a4.07 4.07 0 011.99-1.545 1.72 1.72 0 00-1.116-.416h-6.33c-.973 0-1.76.804-1.76 1.787zm7.612 1.961h1.198c.036-.772.162-1.536.378-2.162a3.036 3.036 0 00-1.576 2.162zm1.576 3.237c-.216-.626-.342-1.39-.378-2.162h-1.198a3.038 3.038 0 001.576 2.162zm-1.098 10.158c.972 0 1.76-.805 1.76-1.788v-.178h-9.85v.178c0 .988.792 1.788 1.76 1.788h6.33zm-8.09-3.036h9.845v-5.783c-1.895-.338-3.34-2.02-3.34-4.04 0-.435.067-.856.193-1.249H7.205v11.072zM19.5 8.254c-.041.777-.163 1.54-.379 2.162a3.045 3.045 0 001.576-2.162H19.5z"
            />
        </svg>
    );
};

export default IconInternetDeviceRegular;
