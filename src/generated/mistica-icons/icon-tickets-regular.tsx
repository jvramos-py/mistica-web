/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTicketsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M9.015 21.79c.126.137.3.21.479.21a.677.677 0 00.483-.21l11.35-11.924a.735.735 0 000-1.005l-2.294-2.41a.673.673 0 00-.962 0 .549.549 0 01-.784 0 .6.6 0 010-.822.74.74 0 000-1.01L14.993 2.21a.65.65 0 00-.958 0L2.68 14.14a.735.735 0 000 1.005l2.295 2.409a.658.658 0 00.962 0 .534.534 0 01.784 0c.104.11.16.256.16.411a.592.592 0 01-.16.412.736.736 0 000 1.006l2.294 2.408zm.479-1.513l-1.42-1.49c.114-.256.17-.54.17-.827 0-.535-.2-1.042-.561-1.422a1.856 1.856 0 00-2.138-.41l-1.42-1.49 10.393-10.91 1.415 1.485a2.08 2.08 0 00.392 2.244 1.863 1.863 0 002.142.416l1.42 1.49L9.493 20.277zm1.106-4.36a.503.503 0 01-.166-.028.53.53 0 01-.34-.452l-.187-2.057-1.71-.818a.546.546 0 01-.301-.493.534.534 0 01.314-.485l1.789-.79.222-1.993a.525.525 0 01.357-.448.495.495 0 01.536.164l1.24 1.518 1.907-.384c.2-.041.4.046.518.224a.547.547 0 01.013.585l-.992 1.677.931 1.82a.55.55 0 01-.043.575.501.501 0 01-.518.197l-1.872-.44-1.328 1.459a.49.49 0 01-.37.169zm-.005-3.387a.535.535 0 01.296.434l.11 1.198.752-.832a.487.487 0 01.48-.15l1.066.25-.54-1.06a.555.555 0 01.018-.534l.53-.905-1.057.214a.492.492 0 01-.483-.178l-.675-.832-.122 1.084a.528.528 0 01-.31.43l-.988.442.923.44z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.714 4.062A2.069 2.069 0 0019.644 2h-2.19a1.185 1.185 0 00-1.18 1.022.68.68 0 01-1.344 0A1.18 1.18 0 0013.754 2H11.56c-.989 0-1.84.703-2.025 1.678-.03.012-.06.022-.09.032a.883.883 0 00-.162.066l-1.703.952c-.49.272-.703.866-.496 1.387a.546.546 0 01-.24.658.548.548 0 01-.69-.137 1.116 1.116 0 00-1.448-.3l-1.703.953A1.885 1.885 0 002.1 8.434a1.875 1.875 0 00.17 1.446l6.113 10.832a1.89 1.89 0 001.148.901 1.902 1.902 0 001.451-.173l1.717-.961c.174-.095.308-.235.407-.4h.663a1.196 1.196 0 001.168-.964.678.678 0 011.328 0c.11.56.602.963 1.168.963h2.21c1.14 0 2.068-.921 2.07-2.061V4.062zm-1.221 0v13.955c0 .468-.38.846-.849.843l-2.179.02a1.902 1.902 0 00-1.863-1.527c-.905 0-1.686.644-1.832 1.507h-2.21a.848.848 0 01-.849-.846v-9.97l.001-.032a.541.541 0 000-.065V4.062a.85.85 0 01.848-.846l2.163-.02a1.91 1.91 0 001.88 1.62c.938 0 1.744-.698 1.85-1.6h2.191a.85.85 0 01.849.846zm-9.44 15.944l-.666.375a.697.697 0 01-.942-.26L3.333 9.282V9.28a.686.686 0 01.266-.933l1.634-.913a1.777 1.777 0 002.207.398 1.762 1.762 0 00.807-2.087l1.246-.7v2.641L5.56 9.888h-.003a.606.606 0 00-.23.826l3.978 7.05a.582.582 0 00.188.191v.059a2.058 2.058 0 001.56 1.992zm-1.56-4.387l-2.801-4.966L9.493 9.08v6.538zm3.28-.28V6.787h5.773v8.552h-5.773zm6.994-9.16a.61.61 0 00-.61-.608h-6.992a.61.61 0 00-.61.608v9.768a.61.61 0 00.61.608h6.992a.61.61 0 00.61-.608V6.179z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTicketsRegular;
