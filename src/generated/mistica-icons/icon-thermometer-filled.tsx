/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconThermometerFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.909 4.963V15.15A4.105 4.105 0 0116 17.925C16 20.185 14.218 22 12 22s-4-1.816-4-4.075c0-1.036.4-2.036 1.091-2.776V4.963C9.091 3.336 10.402 2 12 2c1.598 0 2.909 1.336 2.909 2.963zM10.182 17.93c0 1.036.801 1.851 1.818 1.851s1.818-.815 1.818-1.851a1.83 1.83 0 00-1.272-1.74V4.963A.565.565 0 0012 4.408c-.29 0-.546.26-.546.555V16.19a1.826 1.826 0 00-1.272 1.74z"
            />
            <path
                fill={fillColor}
                d="M12.726 17.925c0 .408-.325.74-.726.74a.733.733 0 01-.726-.74c0-.409.325-.74.726-.74.401 0 .726.331.726.74z"
            />
        </svg>
    );
};

export default IconThermometerFilled;
