/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAlarmClockFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M2.746 6.378a.779.779 0 01-.405-.118.773.773 0 01-.22-1.056 11.325 11.325 0 014.639-4.13.754.754 0 011.004.357.767.767 0 01-.354 1.014 9.83 9.83 0 00-4.022 3.584.77.77 0 01-.642.349zm18.507 0a.737.737 0 01-.634-.35 9.842 9.842 0 00-4.022-3.579.766.766 0 01-.354-1.013.746.746 0 011.004-.358 11.405 11.405 0 014.631 4.126c.23.35.125.829-.23 1.048a.691.691 0 01-.395.126z"
                fill={fillColor}
            />
            <path
                d="M18.66 18.904a9.696 9.696 0 002.943-6.974c0-5.338-4.31-9.687-9.6-9.687S2.4 6.593 2.4 11.93a9.715 9.715 0 002.942 6.974l-1.784 1.8A.759.759 0 004.092 22a.748.748 0 00.534-.223l1.884-1.901a9.455 9.455 0 005.485 1.75 9.46 9.46 0 005.486-1.75l1.884 1.901a.748.748 0 001.067 0 .759.759 0 000-1.073l-1.772-1.8zm-6.094-6.217H8.231a.57.57 0 01-.567-.572.57.57 0 01.567-.572h3.201V6.046A.57.57 0 0112 5.474a.57.57 0 01.567.572v6.641z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmClockFilled;
