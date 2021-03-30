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

const IconSendFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.378 11.205L3.336 2.235a.82.82 0 00-1.168.908l1.865 8.782-1.835 8.924a.823.823 0 001.177.9l18.008-9.074a.82.82 0 00-.005-1.47"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSendFilled;
