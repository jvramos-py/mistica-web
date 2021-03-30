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

const IconDownloadAppFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.695 2.832C17.15 2.272 16.35 2 15.24 2H8.602c-2.157 0-3.25 1.106-3.25 3.291v13.104c0 2.216 1.063 3.291 3.25 3.291h6.639c2.188 0 3.25-1.075 3.25-3.291V5.29c0-1.106-.261-1.91-.796-2.46zm-4.947 16.221c-.196.199-.48.305-.82.305-.343 0-.628-.106-.822-.305-.193-.199-.288-.47-.288-.81 0-.697.414-1.114 1.112-1.114.697 0 1.11.417 1.11 1.115-.004.339-.102.61-.292.81zm2.86-7.123L12.3 15.74a.502.502 0 01-.378.173.502.502 0 01-.379-.174l-3.3-3.81a.498.498 0 01.051-.705.506.506 0 01.328-.123h1.437V6.179a.853.853 0 01.232-.616.912.912 0 01.743-.289h1.834c.482 0 .871.387.874.869 0 .03 0 .059-.005.09V11.1h1.49a.5.5 0 01.38.829z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDownloadAppFilled;
