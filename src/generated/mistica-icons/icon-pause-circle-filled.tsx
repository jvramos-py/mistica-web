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

const IconPauseCircleFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2zm-1.965 14.465A.532.532 0 019.5 17a.533.533 0 01-.535-.535v-8.93c0-.297.238-.535.535-.535.297 0 .535.238.535.535v8.93zM14.5 17a.532.532 0 01-.535-.535v-8.93c0-.297.238-.535.535-.535.297 0 .535.238.535.535v8.93A.532.532 0 0114.5 17z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.218 4.593c-1.67-1.608-4.098-2.423-7.222-2.423-3.123 0-5.552.815-7.218 2.426-1.731 1.67-2.608 4.162-2.608 7.409 0 3.246.877 5.736 2.608 7.406 1.666 1.608 4.095 2.423 7.218 2.423s5.552-.815 7.222-2.423c1.73-1.67 2.61-4.16 2.61-7.406 0-3.247-.88-5.743-2.61-7.412zM8.503 8.412a.8.8 0 111.6 0v7.177a.8.8 0 11-1.6 0V8.412zm5.437 0a.8.8 0 111.6 0v7.177a.8.8 0 01-1.6 0V8.412z"
                />
            </svg>
        );
    }
};

export default IconPauseCircleFilled;
