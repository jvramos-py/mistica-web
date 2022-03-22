/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileAviFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.958 7.678l.003.003v-.003h-.003zM6.207 11.395h.927l1.33 3.683h-.898l-.308-.927H6.06l-.285.927h-.804l1.235-3.683zm.846 2.148l-.403-1.226h-.011l-.384 1.226h.798zm2.177-2.148h-.9l1.283 3.683h.877l1.224-3.683h-.818l-.804 2.672-.862-2.672zm2.96 0h.84v3.683h-.84v-3.683z"
                fill={fillColor}
            />
            <path
                d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.406-.647-1.406-1.383l.034-2.77h-2.3a2.427 2.427 0 01-2.42-2.427V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.672-1.384 1.406-1.384h7.415a.86.86 0 01.613.25L21.42 7.4a.858.858 0 01.218.386zm-1.681-.11l-4.112-3.982v1.764c0 .659.215 1.213.622 1.608.414.4.997.61 1.692.61h1.798zM4.42 16.346h9.846a1.21 1.21 0 001.207-1.21V11.04c0-.666-.54-1.21-1.207-1.21H4.42a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileAviFilled;
