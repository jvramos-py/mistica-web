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

const IconVideoFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.608 19.615c1.546-.123 1.795-1.362 1.832-2.101h-1.832v2.1zM3.244 17.53c.028.356.137 1.005.568 1.468.294.31.717.504 1.266.58V17.53H3.244zm.843-13.079c-.199.126-.765.513-.838 1.807h1.83V4.122c-.286.033-.659.115-.992.33zm16.361 1.793c-.017-.336-.103-1.03-.554-1.518-.292-.317-.723-.513-1.283-.591v2.11h1.837zm-1.84 10.02h1.84v-2.087h-1.84v2.087zm0-6.681h1.84V7.497h-1.84v2.087zm0 3.339h1.84v-2.087h-1.84v2.087zM3.235 16.279h1.84v-2.087h-1.84v2.087zm0-6.687h1.843v-2.08H3.235v2.08zm0 1.253v2.092h1.84v-2.092h-1.84zm14.804-8c3.925 0 3.639 3.697 3.639 3.697s.003 6.457.003 10.619c0 3.412-2.443 3.72-3.325 3.72-.194 0-.314-.017-.314-.017H5.625c-3.863 0-3.617-3.683-3.617-3.683L2.006 6.52c0-3.435 2.655-3.678 3.409-3.678.123 0 .196.005.196.005l12.428-.002zM9.591 14.444V9.281l4.39 2.583-4.39 2.58zm5.93-3.123L9.283 7.657a.607.607 0 00-.616 0 .63.63 0 00-.308.543v7.33a.622.622 0 00.616.625.607.607 0 00.308-.084l6.235-3.663a.63.63 0 00.308-.544.628.628 0 00-.305-.543z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideoFilled;
