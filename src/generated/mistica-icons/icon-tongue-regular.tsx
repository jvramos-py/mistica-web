/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTongueRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.708 4.081a.624.624 0 01.854-.17c.283.184.364.56.177.834-.815 1.21-1.9 2.151-3.213 2.846a.364.364 0 00.007.02c.004.012.008.023.01.036.067.807.1 1.689.1 2.703 0 5.913-1.126 9.851-6.63 9.851S5.38 16.264 5.38 10.35c0-1.036.037-1.938.107-2.754-1.322-.697-2.412-1.641-3.23-2.86a.596.596 0 01.177-.837.625.625 0 01.854.174c1.653 2.467 4.585 3.72 8.714 3.72 4.123 0 7.053-1.25 8.706-3.712zm-8.697 14.916c4.036 0 5.397-2.182 5.397-8.641 0-.824-.022-1.555-.07-2.224-1.364.515-2.94.798-4.73.851l.038 7.048a.61.61 0 01-.613.608h-.003a.612.612 0 01-.616-.603l-.04-7.056c-1.772-.053-3.338-.336-4.694-.843a33.057 33.057 0 00-.067 2.219c0 6.459 1.361 8.641 5.397 8.641z"
            />
        </svg>
    );
};

export default IconTongueRegular;
