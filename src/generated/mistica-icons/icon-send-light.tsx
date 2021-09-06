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

const IconSendLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.704 4a.704.704 0 00-.687.851l1.611 7.59-1.584 7.712a.705.705 0 001.006.772l15.563-7.837a.707.707 0 00-.003-1.26L5.018 4.073A.706.706 0 004.704 4m0 .704l15.592 7.752-15.563 7.838 1.616-7.857-1.645-7.733"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSendLight;
