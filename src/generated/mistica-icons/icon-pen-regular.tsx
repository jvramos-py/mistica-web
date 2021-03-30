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

const IconPenRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.616 8.373l-.667.663L14.767 4.9l.683-.678c1.863-1.846 3.448-.7 4.048-.12.073.073.154.154.221.224.583.608 1.745 2.218-.103 4.048zM3.677 19.17l.967.958-1.149.21.182-1.168zm2.577-2.516L4.568 14.99l9.339-9.238 1.683 1.666-9.336 9.238zm-.16 3.208l-2.19-2.168.221-1.44 3.384 3.347-1.414.26zm2.681-.712l-1.664-1.644 9.336-9.238 1.64 1.622c.002 0-9.312 9.26-9.312 9.26zm11.82-15.658a10.46 10.46 0 00-.248-.25c-1.373-1.333-3.605-2.002-5.76.13L3.28 14.563a.526.526 0 00-.123.18.608.608 0 00-.02.067c-.008.028-.022.056-.027.084l-.942 6.1c-.03.194.037.39.18.524a.622.622 0 00.532.16l5.868-1.079c.011 0 .02.006.031.006a.594.594 0 00.305-.095c.012-.006.023-.017.037-.023.03-.02.064-.033.09-.058l.008-.012.02-.016L20.48 9.224c2.126-2.11 1.454-4.342.115-5.731z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPenRegular;
