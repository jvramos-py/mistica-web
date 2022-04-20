/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconManagedLanRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.685 15.33c.989 0 1.833.853 1.833 1.854 0 .777-.436 1.37-1.111 1.668v2.409a.737.737 0 01-.732.739.736.736 0 01-.731-.74v-2.408c-.366-.184-.732-.516-.914-.924h-4.398c-.182.408-.51.74-.914.924v2.409a.736.736 0 01-.731.739.736.736 0 01-.732-.74v-2.408c-.365-.184-.73-.516-.914-.924H5.944c-.183.408-.511.74-.914.924v2.409a.736.736 0 01-.732.739.736.736 0 01-.731-.74v-2.408c-.619-.298-1.097-.929-1.097-1.668 0-1 .844-1.854 1.833-1.854.736 0 1.36.441 1.65 1.11h4.43c.188-.408.479-.74.882-.925v-3.148H5.039a.736.736 0 01-.731-.74V2.74c0-.408.328-.74.731-.74h13.91c.403 0 .73.332.73.74v8.888c0 .408-.327.74-.73.74h-6.226v3.147c.436.185.731.517.914.924h4.397c.296-.625.92-1.109 1.65-1.109zM18.222 3.48H5.77v7.405h12.452V3.479z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconManagedLanRegular;
