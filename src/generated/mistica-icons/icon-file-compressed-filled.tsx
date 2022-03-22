/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileCompressedFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.03 7.375a.88.88 0 01.26.622v12.311a1.4 1.4 0 01-1.384 1.381h-12c-.736 0-1.384-.644-1.384-1.38V3.38c0-.722.659-1.38 1.384-1.38h2.255v3.19h-.935a.6.6 0 00-.594.606.6.6 0 00.594.605h.935v1.523h-.935a.6.6 0 00-.594.605.6.6 0 00.594.605h.935v1.524h-.935a.6.6 0 00-.594.605.6.6 0 00.594.605h.935v1.857h-.927a.6.6 0 00-.594.606v2.266a.6.6 0 00.594.605h3a.6.6 0 00.594-.605V14.33a.6.6 0 00-.594-.604h-.885v-.494h.907a.6.6 0 00.594-.604.6.6 0 00-.594-.606H9.35V10.5h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605H9.35V7.765h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605H9.35V5.03h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605H9.35V2h3.862a.86.86 0 01.6.244l5.218 5.131zm-3.21.28h1.784l-4.067-4v1.776c0 .659.212 1.216.613 1.611.409.4.986.613 1.67.613zm-7.99 7.522v.815h1.81v-.816H7.83z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileCompressedFilled;
