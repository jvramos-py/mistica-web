/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDisconnectFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.714 9.38c0-4.755-2.63-7.38-7.39-7.38-3.439 0-5.775 1.375-6.797 3.941H5.073c-.986 0-1.723.266-2.264.807-.526.535-.784 1.266-.784 2.24v9.648c0 1 .258 1.74.793 2.266s1.269.784 2.255.784h4.843c.986 0 1.728-.26 2.255-.784.535-.527.793-1.266.793-2.266V16.66c.434.05.885.084 1.36.084 4.76 0 7.39-2.616 7.39-7.364zm-10.003-.39v9.647c0 .641-.131 1.1-.425 1.384-.286.274-.734.417-1.37.417H5.073c-.636 0-1.087-.143-1.37-.418-.291-.282-.426-.742-.426-1.383V8.989c0-.625.135-1.073.426-1.364.294-.292.737-.435 1.37-.435h4.843c.644 0 1.095.143 1.378.426.283.283.417.731.417 1.373zm4.46 3.092l-2.084-2.075a.628.628 0 01-.185-.443V6.748a.628.628 0 011.255 0v2.554l1.899 1.894a.627.627 0 010 .885.628.628 0 01-.885 0zm-7.857 6.44c0-.515-.306-.82-.818-.82-.513 0-.818.305-.818.82 0 .252.07.45.213.597.143.145.353.224.605.224s.462-.079.605-.224c.143-.146.213-.345.213-.597z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDisconnectFilled;
