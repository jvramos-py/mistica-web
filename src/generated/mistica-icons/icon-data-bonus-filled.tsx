/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataBonusFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.287 2c.97.005 1.76.834 1.76 1.853v16.294c0 1.019-.79 1.853-1.765 1.853H3.765C2.795 22 2 21.17 2 20.147V3.853C2 2.834 2.79 2 3.765 2h15.522zm-6.88 9.445h1.589c.487 0 .88-.421.88-.928 0-.508-.393-.925-.88-.925h-1.59v1.853zm1.94 1.11c.488 0 .881.421.881.928 0 .508-.393.925-.88.925h-1.942v-1.853h1.942zm-4.23-1.11h-2.47A.54.54 0 007.12 12a.54.54 0 00.528.555h1.878c-.24 1.061-1.147 1.853-2.23 1.853-1.264 0-2.294-1.081-2.294-2.408s1.03-2.408 2.294-2.408c.528 0 1.025.18 1.43.526.231.19.56.152.746-.085a.58.58 0 00-.081-.782 3.265 3.265 0 00-2.095-.772c-1.847 0-3.35 1.578-3.35 3.516 0 1.939 1.503 3.517 3.35 3.517 1.846 0 3.35-1.574 3.35-3.512a.54.54 0 00-.529-.555zm6.172 2.034c0-.678-.32-1.28-.808-1.654a2.09 2.09 0 00.456-1.308c0-1.124-.871-2.038-1.941-2.038h-2.118a.54.54 0 00-.528.554v5.93a.54.54 0 00.528.554h2.47c1.07 0 1.941-.915 1.941-2.038zM19.287 7h-1.233V5.706a.54.54 0 00-.528-.554.54.54 0 00-.528.554V7h-1.233a.54.54 0 00-.528.554.54.54 0 00.528.555h1.233v1.294a.54.54 0 00.528.554.54.54 0 00.528-.554v-1.29h1.233c.289 0 .528-.25.528-.558A.54.54 0 0019.287 7z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataBonusFilled;
