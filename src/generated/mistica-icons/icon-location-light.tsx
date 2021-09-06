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

const IconLocationLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.975 20.974c1.558-1.776 6.195-8.005 6.207-11.825.01-4.061-2.177-6.304-6.162-6.315h-.031c-3.968 0-6.16 2.228-6.17 6.281-.012 3.854 4.603 10.086 6.156 11.86zM12.02 2c4.384.014 6.994 2.687 6.98 7.152-.014 4.346-5.369 11.333-6.736 12.725a.401.401 0 01-.573.005l-.006-.005C10.318 20.49 4.986 13.5 5 9.109 5.014 4.655 7.627 2 11.989 2h.03zM12 10.407c1.094 0 1.673-.589 1.673-1.705 0-1.115-.579-1.704-1.673-1.704s-1.676.589-1.676 1.704c0 1.116.58 1.705 1.676 1.705zm0-4.243c1.56 0 2.492.95 2.492 2.538 0 1.588-.931 2.539-2.492 2.539-1.56 0-2.492-.95-2.492-2.539 0-1.588.931-2.538 2.492-2.538z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLocationLight;
