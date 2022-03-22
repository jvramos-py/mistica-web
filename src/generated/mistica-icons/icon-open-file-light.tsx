/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOpenFileLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.607 8.323h1.079c.638 0 1.157.527 1.157 1.17a.569.569 0 01-.006.074l-1.518 8.753c.005.574-.513 1.101-1.149 1.101H4.095a1.166 1.166 0 01-1.157-1.174l.005-.025-.787-12.344c0-.687.55-1.222 1.227-1.222h6.255c.675 0 1.227.535 1.227 1.194v.635h7.465c.675 0 1.227.535 1.227 1.194l.05.644zM2.98 5.85l.571 8.91.936-5.339c-.006-.571.512-1.098 1.148-1.098h13.149l-.048-.614c-.003-.224-.182-.383-.403-.383H10.45a.416.416 0 01-.411-.42V5.85c0-.197-.18-.353-.401-.353H3.383c-.224 0-.403.16-.403.353zM19.5 18.247l1.516-8.784a.33.33 0 00-.327-.3H5.635a.33.33 0 00-.33.33L3.758 18.32c.006.11.155.258.337.258H19.17c.182 0 .33-.149.33-.33z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOpenFileLight;
