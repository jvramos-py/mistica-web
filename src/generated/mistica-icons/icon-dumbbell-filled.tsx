/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDumbbellFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.2 9.59V6.775c0-.74-.574-1.339-1.28-1.336H5.822c-.692 0-1.255.577-1.275 1.297v10.532c.02.717.583 1.294 1.275 1.294H6.92c.708 0 1.28-.597 1.28-1.336v-2.815h.014V9.59H8.2zm12.36-2.703c.706 0 1.28.6 1.28 1.336v7.55c0 .739-.574 1.335-1.28 1.335h-.24V6.884h.24v.003zM2.155 8.226c0-.74.571-1.336 1.28-1.336h.26v10.224h-.26c-.706 0-1.28-.6-1.28-1.336V8.226zm6.91 5.793v-4.04h5.894v4.04H9.065zm10.4-7.132v-.112c0-.74-.57-1.339-1.28-1.336h-1.097c-.709 0-1.28.597-1.28 1.336v10.448c0 .737.574 1.336 1.28 1.336h1.098c.706 0 1.28-.596 1.28-1.336v-.112h.003V6.887h-.003z"
            />
        </svg>
    );
};

export default IconDumbbellFilled;
