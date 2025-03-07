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

const IconMobileDeviceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15 2H8.571A3.582 3.582 0 005 5.571V18.43A3.582 3.582 0 008.571 22H15a3.582 3.582 0 003.571-3.571V5.57A3.582 3.582 0 0015 2zM6.429 17.357V6.643h10.714v10.714H6.429zM8.57 3.43H15c1.071 0 1.929.785 2.107 1.785H6.464c.179-1 1.036-1.785 2.107-1.785zM15 20.57H8.571c-1.071 0-1.928-.785-2.107-1.785h10.643c-.178 1-1.036 1.785-2.107 1.785z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.784 2h6.432a3.575 3.575 0 013.568 3.572v12.856A3.578 3.578 0 0115.212 22H8.784a3.578 3.578 0 01-3.572-3.572V5.572A3.578 3.578 0 018.784 2zm-2.14 4.644V17.36H17.36V6.644H6.644zm2.14-3.216c-1.06 0-1.94.776-2.112 1.784h10.652a2.145 2.145 0 00-2.112-1.784H8.784zm0 17.144h6.432c1.06 0 1.94-.776 2.108-1.784H6.672a2.145 2.145 0 002.112 1.784z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.39 19.862c.12.033.25.05.388.05.353 0 .653-.112.85-.315.197-.202.298-.483.298-.835 0-.72-.425-1.15-1.145-1.15s-1.148.43-1.148 1.15c0 .35.099.63.298.835.121.125.277.214.46.265z"
                />
                <path
                    fill={fillColor}
                    d="M8.396 22.32c-1.141 0-1.974-.275-2.543-.838-.575-.57-.853-1.408-.853-2.558V5.396c0-1.121.278-1.945.85-2.526C6.428 2.286 7.26 2 8.396 2h6.764c1.145 0 1.977.277 2.55.853.572.575.846 1.404.846 2.543v13.528c0 1.15-.28 1.988-.852 2.558-.573.563-1.402.838-2.544.838H8.396zm0-19.164c-1.59 0-2.24.65-2.24 2.24v13.528c0 1.633.607 2.24 2.24 2.24h6.764c1.633 0 2.24-.607 2.24-2.24V5.396c0-.818-.168-1.384-.509-1.728-.34-.344-.91-.512-1.731-.512H8.396z"
                />
            </svg>
        );
    }
};

export default IconMobileDeviceRegular;
