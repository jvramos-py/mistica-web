/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDownloadAppFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.775 2.987c-.544-.56-1.345-.832-2.454-.832H8.682c-2.156 0-3.249 1.106-3.249 3.291V18.55c0 2.216 1.062 3.291 3.25 3.291h6.638c2.188 0 3.25-1.075 3.25-3.291V5.446c0-1.106-.261-1.91-.796-2.459zm-4.947 16.221c-.196.2-.479.306-.82.306-.342 0-.628-.107-.821-.306-.194-.199-.289-.47-.289-.81 0-.697.415-1.114 1.112-1.114.698 0 1.11.417 1.11 1.115-.003.339-.101.61-.292.81zm-.448-3.313a.502.502 0 01-.756 0l-3.3-3.81a.498.498 0 01.05-.706.506.506 0 01.328-.123h1.437V6.334a.853.853 0 01.232-.616.912.912 0 01.743-.288h1.834c.482 0 .872.386.874.868 0 .03 0 .059-.005.09v4.868h1.49a.5.5 0 01.381.829l-3.308 3.81z"
            />
        </svg>
    );
};

export default IconDownloadAppFilled;
