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

const IconDolarSymbolRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.807 17.12c-.451.474-1.012.754-1.614.905v-5.151c.423.078.827.174 1.174.342.837.403 1.118 1.07 1.204 1.56.138.81-.154 1.706-.764 2.344M9.672 9.81c-.501-.538-.552-1.171-.501-1.608a3.12 3.12 0 011.3-2.152c.263-.176.546-.294.834-.386v4.941c-.644-.134-1.213-.342-1.633-.795m5.49 1.638c-.638-.305-1.305-.45-1.969-.552V5.571c.821.154 1.6.524 2.18 1.009a.92.92 0 001.3-.107l.027-.033a.994.994 0 00-.134-1.37 6.764 6.764 0 00-3.373-1.479v-.616A.96.96 0 0012.25 2a.96.96 0 00-.944.975v.672c-.67.129-1.305.39-1.87.773a5.062 5.062 0 00-2.14 3.563c-.133 1.205.229 2.334 1.016 3.18.865.93 1.947 1.257 2.997 1.44v5.478a6.763 6.763 0 01-2.815-1.165.928.928 0 00-1.294.21c-.009.011-.014.02-.023.03a.995.995 0 00.233 1.36 8.57 8.57 0 003.894 1.534v.633c0 .538.422.975.943.975.521 0 .944-.437.944-.975v-.65a5.205 5.205 0 002.956-1.54c1.053-1.1 1.529-2.62 1.277-4.062a4.035 4.035 0 00-2.26-2.983"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDolarSymbolRegular;
