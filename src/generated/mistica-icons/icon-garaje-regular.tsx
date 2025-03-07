/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconGarajeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.363 10.6l-8.104-7.94c-.683-.67-1.843-.67-2.526 0l-8.107 7.943a1.51 1.51 0 00-.361 1.67c.258.63.896 1.039 1.625 1.039h.414v6.927c0 .885.779 1.605 1.737 1.605h1.442l.007-.001a.02.02 0 01.007-.002l.009.003h8.921c.009 0 .014-.003.02-.003h.004l.009.002h.008l.004.001h1.356c.958 0 1.737-.72 1.737-1.605v-6.927h.53c.727 0 1.366-.406 1.624-1.04.243-.582.103-1.22-.356-1.672zm-.753 1.213c-.054.135-.222.289-.51.289h-1.132a.601.601 0 00-.602.602v7.53c0 .218-.244.4-.532.4h-.754v-7.846a.601.601 0 00-.602-.602H7.486a.601.601 0 00-.602.602v7.846h-.84c-.289 0-.533-.182-.533-.4v-7.53a.601.601 0 00-.602-.602H3.892c-.29 0-.456-.157-.51-.289-.053-.126-.022-.243.09-.353l8.104-7.944c.215-.213.624-.213.84 0l8.104 7.944c.112.11.14.23.09.353zm-4.734 3.2H8.088v-1.62h7.788v1.62zm0 5.621H8.088v-1.608h7.788v1.608zm-7.788-2.81v-1.607h7.788v1.607H8.088z"
            />
        </svg>
    );
};

export default IconGarajeRegular;
