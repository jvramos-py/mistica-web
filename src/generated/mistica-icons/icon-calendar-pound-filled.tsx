/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCalendarPoundFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.787 6.283v-3.57a.714.714 0 00-1.426 0v3.57a.714.714 0 001.426 0zm11.07-2.144A2.145 2.145 0 0122 6.283v3.214H2V6.283C2 5.1 2.96 4.14 4.144 4.14h2.143v2.144a1.787 1.787 0 103.574 0V4.14h4.287v2.144a1.787 1.787 0 103.574 0V4.14h2.134zm-3.213-1.426v3.57a.714.714 0 01-1.426 0v-3.57a.714.714 0 011.425 0zM22 10.571V22H2V10.571h20zm-7.77 8.394h-2.948c.06-.17.092-.348.092-.535v-1.61h1.609a.533.533 0 00.534-.534.537.537 0 00-.534-.54h-1.61V14.32a1.07 1.07 0 011.742-.832.537.537 0 00.677-.832 2.147 2.147 0 00-3.492 1.669v1.421h-.174a.533.533 0 00-.535.535c0 .297.238.535.535.535h.178v1.61a.527.527 0 01-.534.534.533.533 0 00-.535.535c0 .297.238.535.535.535h4.465a.533.533 0 00-.005-1.065z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCalendarPoundFilled;
