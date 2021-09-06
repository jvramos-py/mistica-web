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

const IconRoadSignFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.99 2.15c6.44 0 9.846 3.406 9.846 9.846 0 6.437-3.406 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84 0-6.44 3.403-9.846 9.84-9.846zm1.922 4.076a.656.656 0 00-.703-.084.639.639 0 00-.373.582v1.02H9.153c-.258 0-.499.1-.68.28a.942.942 0 00-.281.68v8.446a.41.41 0 00.409.409h2.96a.41.41 0 00.41-.409v-5.448h.868v1.011c0 .25.146.476.37.583.232.109.501.078.734-.112l3.067-2.97a.657.657 0 00.232-.493.628.628 0 00-.207-.47l-3.123-3.025z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRoadSignFilled;
