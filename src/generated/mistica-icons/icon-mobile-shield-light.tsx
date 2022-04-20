/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMobileShieldLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.885 9.499V5.57h-.35c-1.244 0-2.242-.722-2.502-.928C17.77 3.143 16.484 2 14.94 2H8.647C6.91 2 5.5 3.44 5.5 5.214v13.572C5.5 20.56 6.91 22 8.647 22h6.293c1.737 0 3.147-1.44 3.147-3.214v-3.928a.353.353 0 00-.35-.357.353.353 0 00-.348.357v3.928c0 1.38-1.097 2.5-2.449 2.5H8.647c-1.352 0-2.449-1.12-2.449-2.5v-.357h7.346c.192 0 .349-.16.349-.357a.353.353 0 00-.35-.356H6.199V6.284h8.393V9.5c0 1.728 1.571 3.054 3.035 3.553l.112.036.112-.036c1.459-.499 3.035-1.82 3.035-3.553zm-4.548 8.573a.707.707 0 00-.698-.713.707.707 0 00-.699.713c0 .393.314.713.699.713.384 0 .698-.32.698-.713zm-1.397-12.5H6.198v-.358c0-1.38 1.097-2.5 2.449-2.5h6.293c1.182 0 2.176.863 2.4 2.007-.363.265-1.28.85-2.4.85zm2.798-.266c.407.302 1.307.878 2.448.978V9.5c0 1.417-1.423 2.45-2.448 2.835-1.025-.384-2.449-1.418-2.449-2.835V6.284c1.142-.1 2.046-.68 2.449-.978z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileShieldLight;
