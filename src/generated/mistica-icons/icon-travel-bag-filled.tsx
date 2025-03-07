/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTravelBagFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.15 6.147h1.375c.647 0 1.213.63 1.213 1.35v12.39c0 .733-.555 1.352-1.213 1.352H15.48c-.081.549-.557.6-.686.602h-.067c-.135-.003-.605-.053-.687-.602H9.984c-.08.549-.557.6-.686.602h-.067c-.135 0-.605-.053-.686-.602H7.463c-.658 0-1.213-.619-1.213-1.353V7.496c0-.72.57-1.35 1.213-1.35H8.84V3.038c0-.479.414-.882.91-.882h4.49c.485 0 .91.412.91.882v3.11zm-6.415 5.445h6.521s0-1.706.003-1.706c0-.6-.348-1.221-.925-1.221H9.66c-.577 0-.924.622-.924 1.221v1.706zm6.521 6.011h.003v-4.927H8.735v4.927c0 .698.398 1.221.924 1.221h4.675c.524 0 .922-.523.922-1.22zM13.92 6.138V3.374h-3.85v2.764h3.849z"
            />
        </svg>
    );
};

export default IconTravelBagFilled;
