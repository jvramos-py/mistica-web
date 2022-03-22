/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBusFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.504 4.525c.082-.003 2.449.006 4.255 1.818 1.297 1.303 1.956 3.174 1.947 5.563v3.381c0 .58-.252 1.168-.692 1.61-.44.446-1.025.701-1.6.701h-.223c-.454 1.065-1.446 1.692-2.821 1.692-1.375 0-2.367-.627-2.82-1.692H9.685c-.453 1.065-1.445 1.692-2.82 1.692-1.39 0-2.392-.639-2.838-1.728A2.336 2.336 0 012.72 16.9c-.443-.443-.695-1.031-.695-1.611V6.836c0-.583.252-1.17.695-1.613.44-.443 1.025-.698 1.6-.698h11.184zm-.588 5.639c.146-.008 3.482-.137 5.594 1.888v-.146c0-6.084-4.801-6.17-5.006-6.17h-1.053v4.428h.465zm1.46 7.913c1.26 0 1.899-.644 1.899-1.913 0-1.27-.639-1.913-1.9-1.913-1.26 0-1.899.644-1.899 1.913 0 1.269.639 1.913 1.9 1.913zm-3.127-7.913V5.735H8.86v4.429h4.39zm-6.38 7.913c1.26 0 1.899-.644 1.899-1.913 0-1.27-.639-1.913-1.9-1.913-1.26 0-1.899.644-1.899 1.913 0 1.269.639 1.913 1.9 1.913zM3.233 6.833v3.33h4.425V5.736H4.322c-.257 0-.532.126-.748.345-.212.216-.341.496-.341.753z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBusFilled;
