/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLayersFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.798 10.332c.544.328.888.91.888 1.552 0 .641-.347 1.218-.888 1.543.544.33.888.91.888 1.555 0 .686-.387 1.314-1 1.622l-8.092 4.086a1.815 1.815 0 01-1.65-.006L2.99 16.602a1.812 1.812 0 01-.104-3.17 1.82 1.82 0 01-.884-1.547 1.81 1.81 0 01.885-1.552 1.812 1.812 0 01-.885-1.544c0-.683.378-1.308.983-1.621l7.952-4.12A1.813 1.813 0 0112.6 3.04l8.093 4.12a1.807 1.807 0 01.106 3.171zm-.933-1.55l-8.092-4.12-7.952 4.12 7.952 4.085 8.092-4.084zM3.821 14.98l7.952 4.087 8.095-4.087-1.045-.532-6.23 3.145a1.795 1.795 0 01-.817.196 1.85 1.85 0 01-.832-.201L4.84 14.452l-1.02.527zm0-3.098l7.955 4.09 8.092-4.087-1.045-.533-6.23 3.146a1.813 1.813 0 01-1.65-.006L4.84 11.354l-1.02.527z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLayersFilled;
