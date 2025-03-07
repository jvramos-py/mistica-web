/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCalendarEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.27 22a.364.364 0 000-.726H2.725V9.998h18.18v7.281a.364.364 0 00.726 0V6.004c0-1.006-.819-1.82-1.82-1.82h-3.635v-1.82a.364.364 0 00-.726 0v1.82H8.18v-1.82a.364.364 0 00-.726 0v1.815H3.82c-1.005 0-1.82.82-1.82 1.82V22h19.27zm.004-1.82a.727.727 0 000-1.453.727.727 0 000 1.453zM2.726 9.272V5.999c0-.6.489-1.09 1.09-1.09h3.639V6.73a.364.364 0 00.726 0V4.91h7.275v1.82a.364.364 0 00.726 0V4.91h3.635c.6 0 1.09.489 1.09 1.09v3.272H2.726zm11.455 3.692a3.068 3.068 0 00-1.546-.42 3.11 3.11 0 00-2.82 1.821h2.997a.364.364 0 010 .726h-3.22a3.002 3.002 0 00-.052.545c0 .06.005.121.01.182h3.262a.364.364 0 010 .726H9.675a3.103 3.103 0 002.956 2.183c.54 0 1.075-.144 1.545-.419a.365.365 0 01.368.629 3.79 3.79 0 01-1.909.516 3.823 3.823 0 01-3.705-2.91h-.828a.364.364 0 010-.725h.735a2.367 2.367 0 01-.009-.182c0-.186.014-.368.042-.545h-.773a.364.364 0 010-.726h.95a3.821 3.821 0 013.593-2.547c.666 0 1.326.182 1.908.517a.365.365 0 01-.367.629z"
            />
        </svg>
    );
};

export default IconCalendarEuroLight;
