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

const IconWifiFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.857 15.695c.67 0 1.202.185 1.583.551.395.381.596.93.596 1.628 0 .697-.201 1.246-.596 1.627-.381.367-.913.552-1.583.552-.67 0-1.202-.185-1.582-.552-.395-.38-.597-.93-.597-1.627 0-.698.202-1.247.597-1.628.38-.366.913-.551 1.582-.551zm.037-3.835a6.725 6.725 0 014.686 1.896.561.561 0 01-.782.804 5.55 5.55 0 00-1.72-1.14 5.559 5.559 0 00-2.184-.442 5.575 5.575 0 00-3.97 1.644.558.558 0 01-.793.003.561.561 0 010-.793 6.665 6.665 0 012.087-1.42 6.688 6.688 0 012.676-.552zm.002-4.087a10.189 10.189 0 017.154 2.922.561.561 0 01-.784.8 9.049 9.049 0 00-2.835-1.887 9.036 9.036 0 00-3.535-.712c-1.24 0-2.442.244-3.571.726a9.135 9.135 0 00-2.863 1.93l-.011.011a.558.558 0 01-.793 0 .561.561 0 010-.793l.014-.014a10.197 10.197 0 017.224-2.983zM11.9 3.69c1.84 0 3.63.359 5.317 1.067a13.641 13.641 0 014.305 2.871.559.559 0 01.006.793.559.559 0 01-.793.006A12.56 12.56 0 0011.9 4.811c-1.706 0-3.356.333-4.91.991a12.622 12.622 0 00-3.995 2.686l-.016.017a.555.555 0 01-.79.003.561.561 0 010-.793l.016-.02A13.775 13.775 0 016.552 4.77a13.635 13.635 0 015.347-1.08z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWifiFilled;
