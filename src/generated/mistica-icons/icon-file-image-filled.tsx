/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: number;
};

const IconFileImageFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.55 7.661l-4.042-3.978v1.762c0 .656.21 1.21.614 1.605.406.398.98.611 1.66.611h1.768zm1.647.106a.614.614 0 01.048.239v12.28a1.4 1.4 0 01-1.384 1.38H5.895c-.737 0-1.384-.644-1.384-1.38V3.4c0-.723.658-1.381 1.384-1.381h7.283c.227 0 .442.086.602.246l5.205 5.118c.106.103.17.24.212.383zm-3.109 1.964h-8.42c-.555 0-1.022.429-1.022.933v7.815c0 .504.467.936 1.02.936h8.42c.543 0 1.02-.437 1.02-.936v-7.815c.005-.496-.474-.933-1.018-.933zm-6.594 4.4a.864.864 0 01-.857-.87c0-.482.384-.872.857-.872.474 0 .858.39.858.871a.867.867 0 01-.858.872zm-.756 3.454a.512.512 0 01-.398-.19.536.536 0 01.068-.742l2.437-2.065a.517.517 0 01.686.02l.269.258 1.557-1.261a.506.506 0 01.633-.006l1.499 1.168a.534.534 0 01.098.737.51.51 0 01-.726.098l-1.179-.919-1.126.91.714.687a.531.531 0 01.023.742.513.513 0 01-.731.023l-1.41-1.35-2.086 1.767a.497.497 0 01-.328.123z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileImageFilled;
