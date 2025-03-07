/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDeviceSignalFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.338 2c1.882 0 3.42 1.504 3.515 3.388H4.479C4.574 3.504 6.113 2 7.994 2h6.344zm6.831 14.906a.7.7 0 01-.487-.196.722.722 0 01-.027-1.01 5.318 5.318 0 00-.09-7.385.722.722 0 010-1.01.699.699 0 01.997 0 6.745 6.745 0 01.117 9.377.693.693 0 01-.51.224zm-1.137-1.911a4.381 4.381 0 00-.126-6.013.699.699 0 00-.997 0 .722.722 0 000 1.01 2.947 2.947 0 01.085 4.038.726.726 0 00.041 1.01.69.69 0 00.478.188.682.682 0 00.52-.233zM4.47 6.458v11.084h13.396V6.458H4.47zM7.994 22c-1.881 0-3.42-1.504-3.515-3.388h13.374C17.758 20.496 16.22 22 14.338 22H7.994z"
            />
        </svg>
    );
};

export default IconDeviceSignalFilled;
