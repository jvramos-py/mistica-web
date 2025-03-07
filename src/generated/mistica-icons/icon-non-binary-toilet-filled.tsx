/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconNonBinaryToiletFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.6 10.005H5.402c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8H12.6c.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm5.998-7.997H15c-.44 0-.8.36-.8.8v7.997H4.604v.8c0 3.918 3.319 5.318 5.598 5.558V22h9.197V2.807c0-.44-.36-.8-.8-.8z"
            />
        </svg>
    );
};

export default IconNonBinaryToiletFilled;
