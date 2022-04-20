/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLaptopGotoLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.032 11.436h-9.67c-.202 0-.357-.175-.357-.383 0-.208.16-.378.356-.378h1.783V6.893C4.144 5.847 4.948 5 5.93 5h12.134c.987 0 1.787.852 1.787 1.893v4.916c0 .208-.16.377-.357.377-.196 0-.356-.17-.356-.377v-4.92c0-.625-.48-1.134-1.07-1.134H5.932c-.59 0-1.07.509-1.07 1.134v3.782h7.166l-1.71-1.811a.392.392 0 010-.533.337.337 0 01.503 0l2.573 2.726-2.573 2.727a.347.347 0 01-.252.111.347.347 0 01-.25-.111.387.387 0 010-.533l1.713-1.811zm8.181 2.644c0-.417-.32-.755-.713-.755-.398 0-.713.338-.713.755 0 .416.32.755.713.755.393 0 .713-.339.713-.755zM22 15.973v.378C22 17.814 20.88 19 19.5 19h-15C3.12 19 2 17.814 2 16.351v-.378h2.144v-3.026c0-.208.16-.378.356-.378.197 0 .356.17.356.378v3.026H22zm-19.246.756c.165.862.887 1.51 1.75 1.51H19.5c.86.006 1.581-.648 1.746-1.51H2.754z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLaptopGotoLight;
