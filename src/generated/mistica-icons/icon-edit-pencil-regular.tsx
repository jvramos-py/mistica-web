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
    size?: string | number;
};

const IconEditPencilRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.017 19.933c.442 0 .804.375.804.837 0 .465-.362.84-.804.84H4.482c-.443 0-.804-.375-.804-.84 0-.462.361-.837.804-.837h15.535zM6.846 12.745L5.36 17.482l.045.115h.006l4.372-1.558c2.112-2.008 8.33-7.95 8.751-8.395a2.27 2.27 0 00.644-1.594 2.54 2.54 0 00-.638-1.672 2.107 2.107 0 00-1.51-.678c-.538 0-1.042.236-1.451.678-.482.516-8.398 8.048-8.734 8.367zm-1.443 6.53a1.63 1.63 0 01-1.182-.527 1.823 1.823 0 01-.39-1.784l1.466-4.704c.09-.29.252-.554.47-.759 3.975-3.784 8.362-7.977 8.653-8.29.712-.768 1.636-1.191 2.608-1.191.992 0 1.964.434 2.664 1.187a4.25 4.25 0 011.092 2.843 3.987 3.987 0 01-1.106 2.765c-.552.588-8.717 8.373-8.798 8.448a1.552 1.552 0 01-.577.359L5.93 19.179a1.461 1.461 0 01-.527.095z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEditPencilRegular;
