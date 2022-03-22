/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSearchCloudRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.686 10.975c0 3.868-2.837 5.24-5.266 5.24l-.398.006a4.627 4.627 0 01-.644 1.073l3.33 3.359a.612.612 0 010 .86.6.6 0 01-.85 0l-3.334-3.365c-.003-.002-.005-.006-.007-.01a.044.044 0 00-.007-.012 4.579 4.579 0 01-2.737.908 4.635 4.635 0 01-4.24-2.787l-1.66.002C3.427 16 2 14.38 2 11.91c0-2.526 1.387-3.574 2.457-4.002C4.647 2.288 9.86 2 10.922 2c.823 0 4.865.188 6.109 3.784 2.325.216 4.655 1.67 4.655 5.19zm-15.75 4.061l1.252-.002a4.953 4.953 0 01-.054-.678c0-2.583 2.079-4.678 4.64-4.678 2.56 0 4.635 2.095 4.635 4.678 0 .218-.02.434-.048.647h.056c.955 0 4.065-.292 4.065-4.028 0-3.513-2.74-3.97-3.919-4.003a.606.606 0 01-.566-.451c-.837-3.146-4.375-3.305-5.075-3.305-1.236 0-5.27.358-5.27 5.014l.006.112a.61.61 0 01-.437.585c-1.339.381-2.017 1.387-2.017 2.983 0 2.35 1.488 2.998 2.732 3.126zm5.837 2.78c1.894 0 3.434-1.553 3.431-3.463 0-1.908-1.537-3.462-3.43-3.462-1.894 0-3.435 1.552-3.435 3.462 0 1.908 1.54 3.462 3.434 3.462z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchCloudRegular;
