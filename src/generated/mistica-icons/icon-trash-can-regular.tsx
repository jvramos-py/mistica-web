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

const IconTrashCanRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.75 2.5c1.202 0 2.167.98 2.245 2.197l.005.16V6.5h4.25a.75.75 0 01.102 1.493L21.25 8H20v10.75a3.25 3.25 0 01-3.066 3.245L16.75 22h-9a3.25 3.25 0 01-3.25-3.25V8H3.25a.75.75 0 01-.102-1.493L3.25 6.5H7.5V4.857c0-1.236.915-2.268 2.095-2.352L9.75 2.5h5zM18.5 8H6v10.75a1.75 1.75 0 001.606 1.744l.144.006h9a1.75 1.75 0 001.75-1.75V8zm-8.25 2.5a.75.75 0 01.743.648l.007.102v6a.75.75 0 01-1.493.102L9.5 17.25v-6a.75.75 0 01.75-.75zm4 0a.75.75 0 01.743.648l.007.102v6a.75.75 0 01-1.493.102l-.007-.102v-6a.75.75 0 01.75-.75zm.5-6.5h-5c-.37 0-.696.318-.744.747L9 4.857V6.5h6.5V4.857c0-.447-.297-.799-.658-.85L14.75 4z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTrashCanRegular;
