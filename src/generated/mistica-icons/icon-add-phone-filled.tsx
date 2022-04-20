/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAddPhoneFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.835 2.687l1.32 1.367c1.321 1.375 1.697 3.446 1.061 5.84-.624 2.304-2.136 4.762-4.356 7.109-2.24 2.358-4.583 3.966-6.784 4.645-.762.232-1.489.352-2.167.352-1.374 0-2.557-.472-3.441-1.391l-1.32-1.367a2.383 2.383 0 01-.675-1.536c-.03-.603.161-1.159.555-1.57l1.976-2.1c.394-.407.926-.62 1.497-.591a2.22 2.22 0 011.473.688l1.39 1.435c.83.863 2.703.148 4.452-1.7 1.738-1.834 2.4-3.793 1.57-4.649l-1.382-1.43a2.387 2.387 0 01-.678-1.536c-.03-.6.161-1.155.555-1.571l1.98-2.087c.788-.827 2.124-.787 2.974.092zM6.539 7.684h-2.73c-.375 0-.681-.324-.681-.715 0-.392.306-.712.681-.712h2.73v-2.85c0-.392.306-.712.681-.712.375 0 .682.32.682.712V6.26h2.73c.374 0 .68.32.68.712 0 .391-.306.711-.68.711h-2.73v2.85c0 .392-.307.712-.682.712-.375 0-.681-.32-.681-.712v-2.85z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddPhoneFilled;
