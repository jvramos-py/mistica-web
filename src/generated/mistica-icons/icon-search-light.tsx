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

const IconSearchLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.487 4.38a7.806 7.806 0 01.192 10.907l6.085 6.082a.28.28 0 01-.196.479.28.28 0 01-.199-.084l-6.087-6.084-.018.02a7.757 7.757 0 01-5.298 2.072 7.809 7.809 0 01-5.524-13.33 7.814 7.814 0 0111.045-.062zM9.966 2.716a7.248 7.248 0 105.123 2.123 7.196 7.196 0 00-5.123-2.123z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchLight;
