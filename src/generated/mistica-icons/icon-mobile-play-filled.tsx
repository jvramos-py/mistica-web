/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMobilePlayFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.9 3.11c.64.644.949 1.535.949 2.742v12.302c0 1.213-.317 2.115-.966 2.751-.642.636-1.544.941-2.762.941h-6.21c-1.219 0-2.118-.305-2.768-.933-.574-.571-.885-1.341-.95-2.364v-.546a.474.474 0 00-.055.004c-.019.002-.038.005-.06.005-3.742 0-5.918-1.874-5.918-5.872 0-4.005 2.176-5.88 5.919-5.88.02 0 .039.003.057.005.017.002.033.004.05.004v-.417c0-1.19.307-2.076.957-2.726.65-.652 1.552-.966 2.768-.966h6.21c1.218 0 2.129.314 2.778.95zm-8.101 9.03c0-3.185-1.502-4.672-4.718-4.672-3.207 0-4.7 1.487-4.7 4.672 0 3.177 1.493 4.664 4.7 4.664 3.216 0 4.718-1.487 4.718-4.664zm-1.44-.526L6.653 8.922a.605.605 0 00-.608 0 .604.604 0 00-.305.52v5.385c0 .215.115.414.305.52a.593.593 0 00.305.082c.107 0 .21-.025.306-.081l4.706-2.692a.605.605 0 00.305-.524.609.609 0 00-.308-.518zm-4.4 2.17v-3.296l2.879 1.647-2.88 1.65zm8.058 5.27c.325 0 .594-.098.779-.286.182-.185.274-.44.274-.76 0-.655-.395-1.047-1.053-1.047-.658 0-1.053.392-1.053 1.048 0 .316.092.574.274.759.185.188.454.285.78.285z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobilePlayFilled;
