/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCalendarPoundLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.27 22a.364.364 0 000-.726H2.725V9.998h18.18v7.281a.364.364 0 00.726 0V6.004c0-1.006-.819-1.82-1.82-1.82h-3.635v-1.82a.364.364 0 00-.726 0v1.82H8.18v-1.82a.364.364 0 00-.726 0v1.815H3.82c-1.005 0-1.82.82-1.82 1.82V22h19.27zm.004-1.82a.727.727 0 000-1.453.727.727 0 000 1.453zM2.726 9.272V5.999c0-.6.489-1.09 1.09-1.09h3.639V6.73a.364.364 0 00.726 0V4.91h7.275v1.82a.364.364 0 00.726 0V4.91h3.635c.6 0 1.09.489 1.09 1.09v3.272H2.726zm6.456 9.818c0-.2.163-.363.363-.363a.718.718 0 00.726-.726v-1.82h-.363a.364.364 0 010-.727h.363v-1.638c0-1.104.898-2.002 2.001-2.002.456 0 .903.158 1.257.447a.363.363 0 01.056.512.363.363 0 01-.512.056 1.272 1.272 0 00-2.071.987v1.638h1.82a.364.364 0 010 .727h-1.82V18c0 .265-.07.512-.196.726h3.286a.364.364 0 010 .726H9.545a.364.364 0 01-.363-.363z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCalendarPoundLight;
