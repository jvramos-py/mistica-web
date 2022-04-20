/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCheckRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.552 19.5l-6.284-6.713a.965.965 0 01.048-1.381.937.937 0 011.364.049l4.92 5.132L20.345 4.795a.937.937 0 011.364 0 .965.965 0 010 1.381L8.552 19.5z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M9.416 19.5a.997.997 0 01-.77-.353l-5.033-6.065a.916.916 0 01.155-1.322 1.012 1.012 0 011.379.149l4.242 5.112L19.633 3.877a1.01 1.01 0 011.373-.19.915.915 0 01.198 1.317L10.207 19.121a.988.988 0 01-.77.379h-.02z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCheckRegular;
