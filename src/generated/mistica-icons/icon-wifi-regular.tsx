/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWifiRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.287 11.673a.684.684 0 01-.5-.229c-2.392-2.533-5.5-3.931-8.789-3.931-3.288 0-6.389 1.402-8.785 3.931a.667.667 0 01-1 0 .765.765 0 010-1.059C4.857 7.551 8.322 6 12.002 6c3.68 0 7.145 1.55 9.785 4.385.284.301.284.797 0 1.06a.677.677 0 01-.5.228z"
                    fill={fillColor}
                />
                <path
                    d="M5.213 14.321a.683.683 0 01-.5-.229.765.765 0 010-1.059c1.928-2.08 4.537-3.254 7.289-3.254s5.356 1.17 7.285 3.254c.284.301.284.797 0 1.06-.284.3-.752.3-1 0-1.68-1.814-3.893-2.801-6.285-2.801-2.392 0-4.608.983-6.285 2.8-.108.153-.324.23-.504.23z"
                    fill={fillColor}
                />
                <path
                    d="M7.214 16.774a.82.82 0 00.5.191c.18 0 .396-.072.532-.19.928-1.06 2.288-1.666 3.752-1.666 1.428 0 2.82.606 3.784 1.665.248.301.716.301 1 0 .285-.262.285-.758 0-1.059-1.212-1.36-2.96-2.118-4.784-2.118-1.892 0-3.608.758-4.82 2.118a.804.804 0 00.036 1.06z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2.585 8.672a.561.561 0 01-.395-.955l.017-.02a13.775 13.775 0 014.348-2.924 13.624 13.624 0 015.347-1.081c1.84 0 3.63.358 5.316 1.067a13.642 13.642 0 014.306 2.871.559.559 0 01.005.793.559.559 0 01-.792.006 12.56 12.56 0 00-8.835-3.616c-1.706 0-3.356.333-4.91.99A12.622 12.622 0 002.997 8.49l-.017.017a.558.558 0 01-.395.165z"
                    fill={fillColor}
                />
                <path
                    d="M4.664 11.574a.558.558 0 00.79-.005l.011-.012a9.136 9.136 0 012.863-1.93 9.046 9.046 0 013.571-.725c1.224 0 2.415.238 3.535.711a9.048 9.048 0 012.835 1.888.561.561 0 00.784-.8 10.189 10.189 0 00-7.153-2.92c-1.392 0-2.742.274-4.011.815a10.256 10.256 0 00-3.21 2.165l-.02.02a.559.559 0 00.006.792zm2.468 3.053a.558.558 0 00.792-.002 5.576 5.576 0 013.97-1.645c.756 0 1.493.149 2.184.443a5.55 5.55 0 011.72 1.14.561.561 0 00.782-.804 6.724 6.724 0 00-4.686-1.896c-.928 0-1.83.185-2.676.552a6.663 6.663 0 00-2.086 1.42.561.561 0 000 .792zm4.725 5.429c-.67 0-1.201-.185-1.582-.552-.395-.38-.597-.93-.597-1.627 0-.698.202-1.247.596-1.628.382-.367.914-.551 1.583-.551.67 0 1.202.184 1.583.551.395.381.596.93.596 1.628 0 .697-.201 1.246-.596 1.627-.378.367-.91.552-1.583.552zm0-3.238c-.75 0-1.059.308-1.059 1.059 0 .75.308 1.059 1.06 1.059.75 0 1.058-.308 1.058-1.06 0-.383-.084-.658-.255-.82-.162-.16-.431-.238-.804-.238z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWifiRegular;
