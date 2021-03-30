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

const IconMuseumFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.653 2.27a.616.616 0 01.7 0l9.23 6.43a.627.627 0 01.235.692.61.61 0 01-.586.432V9.82h-1.798v7.852h1.745c.34 0 .614.277.614.616v2.938a.616.616 0 01-.614.616H2.823a.616.616 0 01-.613-.616V18.29c0-.34.274-.616.613-.616h1.78V9.82h-1.83a.613.613 0 01-.585-.431.618.618 0 01.235-.69zm-1.446 7.554H8.232v7.851h1.975V9.824zm5.6 0h-1.975v7.851h1.975V9.824z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMuseumFilled;
