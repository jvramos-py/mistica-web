/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileMp4Filled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.443 14.062h-1.62a.778.778 0 01-.022-.188c0-.151.028-.322.112-.56l.765-2.09h.742l-.829 2.26h.852v-.876h.77v.877h.431v.577h-.431v.846h-.77v-.846zm-9.261-2.835h.661l1.163 2.056 1.201-2.056h.647v3.68h-.77v-2.12l-.765 1.28h-.647l-.787-1.302v2.143h-.703v-3.681zm4.473 0H9.92c.577 0 .94.081 1.179.302.199.182.297.468.297.86 0 .393-.092.69-.275.894-.215.24-.549.356-1.033.356h-.591v1.269h-.84v-3.681zm1.74 1.641c.098-.098.146-.252.146-.468 0-.198-.042-.344-.14-.436-.101-.093-.258-.13-.516-.13h-.392v1.174h.412c.269 0 .38-.036.49-.14z"
                fill={fillColor}
            />
            <path
                d="M21.639 7.76c.03.072.047.153.047.237v12.305c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.773H4.423A2.427 2.427 0 012 15.106v-4.092a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.096 2h7.414c.232 0 .448.087.613.247l5.297 5.126a.847.847 0 01.219.386zm-5.793-4.09v1.764c0 .658.216 1.213.625 1.608.414.4.997.61 1.689.61h1.8L15.847 3.67zM4.42 16.315h9.846a1.21 1.21 0 001.207-1.21V11.01c0-.666-.54-1.21-1.207-1.21H4.42c-.667 0-1.207.54-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMp4Filled;
