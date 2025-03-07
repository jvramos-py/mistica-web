/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLostFoundRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.176 6.96c0-2.736 2.202-4.96 4.912-4.96C19.793 2 22 4.224 22 6.96c0 2.736-2.202 4.96-4.912 4.96s-4.912-2.224-4.912-4.96zm1.094.005c0 2.125 1.714 3.855 3.818 3.855s3.818-1.73 3.818-3.855-1.713-3.855-3.818-3.855c-2.104 0-3.818 1.73-3.818 3.855zm4.246 2.383a.545.545 0 11-1.09 0 .545.545 0 111.09 0zm.666-2.642c.48-.484.424-1.312.07-1.777a1.519 1.519 0 00-1.201-.602h-.075a1.44 1.44 0 00-1.252.729.555.555 0 00.2.752c.26.15.596.061.745-.202a.357.357 0 01.307-.179h.075c.13 0 .26.066.34.17.06.08.07.282.023.329l-.4.404c-.378.38-.587.889-.587 1.425a.545.545 0 101.09 0c0-.245.093-.47.265-.645l.4-.404zm-2.379 7.598a.515.515 0 00-.028-.123l-.01-.023-.008-.024c-.01-.023-.02-.047-.033-.065a.47.47 0 00-.056-.09l-.007-.01-.007-.008a.571.571 0 00-.14-.142L3.954 5.037 3.38 3.881a.725.725 0 00-.978-.33.739.739 0 00-.325.988L2.65 5.7l-.014 14.612c0 .066.013.125.026.186l.002.012.005.014.004.014a.73.73 0 00.07.16.392.392 0 01.012.018l.012.02c.06.089.14.169.242.23a.711.711 0 00.358.098.726.726 0 00.633-.371 5.816 5.816 0 012.459-2.341 5.68 5.68 0 012.146-.593l1.104 2.238a.369.369 0 01-.163.494.363.363 0 01-.49-.165l-.162-.329a.724.724 0 00-.978-.329.737.737 0 00-.326.987l.163.33A1.817 1.817 0 009.383 22c.27 0 .549-.061.81-.193a1.846 1.846 0 00.815-2.463l-1.104-2.257a5.758 5.758 0 015.089-1.946.726.726 0 00.81-.837zm-7.119 1.95a7.106 7.106 0 00-2.872.767 7.356 7.356 0 00-1.714 1.199l.014-11.232L13 13.735a7.418 7.418 0 00-1.983.663 7.163 7.163 0 00-2.333 1.857z"
            />
        </svg>
    );
};

export default IconLostFoundRegular;
