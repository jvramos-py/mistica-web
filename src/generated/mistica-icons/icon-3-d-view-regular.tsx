/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const Icon3DViewRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.436 18.207c0-.38.306-.69.68-.69h3.402v3.448c0 .38-.306.69-.68.69a.687.687 0 01-.68-.69v-1.137C18.32 21.172 15.497 22 12.333 22 6.79 22 2.47 19.345 2.47 15.966c0-1.483.816-2.828 2.381-3.931v-5.38c0-.241.136-.448.34-.586l6.803-3.966a.611.611 0 01.68 0l6.803 3.966c.204.103.34.345.34.586v7.931c0 .242-.136.448-.34.586l-6.803 3.966a.65.65 0 01-.34.103.65.65 0 01-.34-.103L5.19 15.172a.669.669 0 01-.34-.586v-.793c-.578.586-1.02 1.31-1.02 2.173 0 2.551 3.81 4.655 8.503 4.655 2.721 0 5.17-.655 6.769-1.724h-.987a.687.687 0 01-.68-.69zm-5.782-7.173L6.212 7.829v6.379l5.442 3.172v-6.345zm1.36 6.31l5.442-3.137v-6.38l-5.442 3.207v6.31zm4.728-10.689l-5.408-3.172-5.408 3.172 5.408 3.173 5.408-3.173z"
                fill={fillColor}
            />
        </svg>
    );
};

export default Icon3DViewRegular;
