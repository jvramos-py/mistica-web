/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileImageFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.198 7.767c.03.073.047.155.047.239v12.28a1.4 1.4 0 01-1.384 1.38H5.895c-.737 0-1.384-.644-1.384-1.38V3.4c0-.723.658-1.381 1.384-1.381h7.283c.227 0 .442.086.602.246l5.205 5.118c.106.103.17.24.213.383zm-1.648-.106l-4.042-3.978v1.762c0 .656.21 1.21.614 1.605.406.398.98.611 1.66.611h1.768zm-9.882 2.07c-.555 0-1.022.429-1.022.933v7.815c0 .504.467.936 1.02.936h8.42c.543 0 1.019-.438 1.019-.936v-7.815c.006-.496-.473-.933-1.017-.933h-8.42zm1.826 4.4a.864.864 0 01-.857-.87c0-.482.384-.872.857-.872.474 0 .858.39.858.872a.867.867 0 01-.858.87zM8.34 17.396c.104.126.25.19.398.19a.497.497 0 00.328-.123l2.087-1.767 1.409 1.35a.513.513 0 00.73-.023.531.531 0 00-.022-.742l-.714-.686 1.126-.91 1.18.918a.51.51 0 00.725-.098.534.534 0 00-.098-.736L13.99 13.6a.505.505 0 00-.633.006l-1.557 1.26-.27-.257a.517.517 0 00-.685-.02l-2.437 2.065a.536.536 0 00-.068.742z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileImageFilled;
