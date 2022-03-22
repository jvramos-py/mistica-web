/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBillInvoicePoundFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.118 2h10.584c1.165 0 2.117.965 2.113 2.144V22H5V4.144C5 2.96 5.953 2 7.118 2zM8.53 17.895h7.757a.533.533 0 00.533-.535.53.53 0 00-.528-.535H8.53a.53.53 0 00-.528.535.53.53 0 00.528.535zm7.757-3.57a.533.533 0 00.533-.535.53.53 0 00-.528-.535H8.53a.53.53 0 00-.528.535.53.53 0 00.528.535h7.757zm-2.998-3.932h2.998a.533.533 0 00.529-.54.53.53 0 00-.529-.534h-1.774a1.19 1.19 0 00.013-.178v-.892h.88a.53.53 0 00.53-.535.53.53 0 00-.53-.535h-.88v-.891c0-.293.235-.535.529-.535.144 0 .284.06.383.17a.529.529 0 00.75.022.545.545 0 00.023-.759 1.57 1.57 0 00-1.156-.507c-.876 0-1.59.722-1.59 1.609v.896a.53.53 0 00-.528.535.53.53 0 00.528.535v.891c0 .1-.076.178-.176.178a.53.53 0 00-.528.535.53.53 0 00.528.535z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBillInvoicePoundFilled;
