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

const IconCallCenterUserSupportRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.979 14.605c3.488 0 5.998.87 7.458 2.585 1.628 1.913 1.289 4.143 1.273 4.237a.75.75 0 01-.74.63H4.034a.75.75 0 01-.74-.625c-.016-.094-.372-2.327 1.246-4.242 1.448-1.716 3.95-2.585 7.439-2.585zm0 1.5c-3.012 0-5.123.684-6.278 2.034a4.022 4.022 0 00-.948 2.418h14.492a4.058 4.058 0 00-.967-2.413c-1.165-1.353-3.285-2.039-6.3-2.039zM12 1.95c4.33 0 6.807 2.309 6.976 6.502.003.063.005.304.007.575l.001.33.001.158v.267l.001.154a.75.75 0 01-.75.75h-1.68c-.55 1.967-2.12 3.028-4.556 3.028-3.081 0-4.777-1.698-4.777-4.78 0-3.08 1.696-4.776 4.777-4.776 3.08 0 4.777 1.696 4.777 4.777 0 .084-.001.168-.004.25l.711.001a67.43 67.43 0 00-.006-.675C17.34 5.106 15.548 3.45 12 3.45c-3.692 0-5.487 1.794-5.487 5.485a.75.75 0 01-1.5 0C5.013 4.43 7.495 1.95 12 1.95zm0 3.708c-2.236 0-3.277 1.04-3.277 3.277s1.04 3.279 3.277 3.279c1.537 0 2.51-.493 2.967-1.528h-.862c-.22.323-.597.477-1.105.477-.84 0-1.324-.42-1.324-1.325 0-.904.485-1.324 1.324-1.324.6 0 1.02.216 1.21.671h1.062c.003-.081.005-.165.005-.25 0-2.236-1.041-3.277-3.277-3.277z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCallCenterUserSupportRegular;
