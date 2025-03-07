/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTravelBagRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.53 6.152c.647 0 1.213.63 1.213 1.35v12.39c0 .733-.555 1.352-1.213 1.352h-1.045c-.081.546-.557.6-.686.602h-.068c-.134-.003-.605-.053-.686-.602H9.99c-.081.546-.557.6-.686.602h-.067c-.135-.003-.605-.053-.687-.602H7.47c-.66 0-1.21-.619-1.21-1.35V7.504c0-.72.565-1.35 1.21-1.35h1.374V3.045c0-.479.418-.882.91-.882h4.491c.485 0 .91.412.91.882v3.11h1.376v-.003zm-6.454-.009h3.849V3.38h-3.849v2.764zm6.434 1.362a.242.242 0 00-.05-.132H7.54a.25.25 0 00-.05.132V19.89a.25.25 0 00.042.132l8.932.003a.21.21 0 00.045-.132V7.504zM14.028 12.7v4.91H9.97V12.7h4.058zM9.97 9.888h4.058v1.594H9.97V9.888zm5.294.006c0-.6-.348-1.221-.925-1.221L9.664 8.67c-.58 0-.924.622-.924 1.221v7.72c0 .697.398 1.221.924 1.221h4.675c.527 0 .925-.526.925-1.221V9.894z"
            />
        </svg>
    );
};

export default IconTravelBagRegular;
