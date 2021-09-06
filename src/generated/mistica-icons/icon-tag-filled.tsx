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

const IconTagFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.686 3.339A1.349 1.349 0 0020.344 2H12a2.13 2.13 0 00-1.062.597l-8.336 8.327a1.553 1.553 0 00-.291 2.157l8.288 8.27c.219.218.519.338.83.33.09.008.182.008.274 0a2.012 2.012 0 001.062-.661l8.327-8.27c.309-.296.513-.68.589-1.1V3.342h.005v-.003zm-6.571 3.308c.03-.42.227-.815.546-1.092.28-.325.68-.519 1.11-.538.436.028.845.227 1.134.554.33.289.532.695.563 1.132-.025.42-.219.81-.538 1.084a1.605 1.605 0 01-1.118.546 1.648 1.648 0 01-1.134-.546 1.646 1.646 0 01-.563-1.118v-.022z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTagFilled;
