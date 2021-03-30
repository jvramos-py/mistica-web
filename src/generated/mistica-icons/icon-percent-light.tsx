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

const IconPercentLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.992 21.02c5.99 0 9.027-3.035 9.027-9.022 0-5.99-3.037-9.027-9.027-9.027-5.987 0-9.021 3.037-9.021 9.027 0 5.987 3.034 9.021 9.021 9.021zm0-18.87c6.22 0 9.848 3.14 9.848 9.848 0 6.707-3.628 9.842-9.848 9.842-6.22 0-9.842-3.135-9.842-9.842 0-6.707 3.623-9.848 9.842-9.848zm2.326 13.54c.633 0 .837-.204.837-.835 0-.633-.204-.837-.837-.837-.634 0-.835.204-.835.837 0 .634.201.835.835.835zm0-2.49c1.045 0 1.658.53 1.658 1.658 0 1.127-.61 1.656-1.658 1.656-1.045 0-1.656-.53-1.656-1.656s.608-1.658 1.656-1.658zM9.672 8.473c-.63 0-.834.205-.834.838 0 .63.204.835.834.835.634 0 .838-.202.838-.835-.003-.636-.207-.838-.838-.838zm0 2.491c-1.045 0-1.655-.527-1.655-1.656s.61-1.658 1.655-1.658 1.659.53 1.659 1.658c0 1.13-.614 1.656-1.659 1.656zm6.052-3.757a.41.41 0 01.073.574l-6.945 8.932a.41.41 0 01-.648-.502l6.943-8.934a.407.407 0 01.571-.076l.006.006z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPercentLight;
