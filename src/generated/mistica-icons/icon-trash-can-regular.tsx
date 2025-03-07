/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTrashCanRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.534 7.355a.713.713 0 00-.707.716v10.354c0 .392.316.716.707.716a.71.71 0 00.706-.716V8.07a.716.716 0 00-.707-.716zm4.229.715v10.355c0 .392.316.716.707.716a.71.71 0 00.707-.716V8.07a.713.713 0 00-.707-.716.713.713 0 00-.707.716z"
                />
                <path
                    fill={fillColor}
                    d="M15.177 4.5h5.64a.713.713 0 01.004 1.427h-1.41v13.93c0 1.18-.952 2.143-2.117 2.143H6.714c-1.165 0-2.117-.964-2.117-2.144V5.931h-1.41a.71.71 0 01-.707-.716c0-.396.32-.715.707-.715h5.64v-.356c0-1.18.951-2.144 2.116-2.144h2.117c1.165 0 2.117.964 2.117 2.144V4.5zm-4.23-1.072a.713.713 0 00-.707.716h.004V4.5h3.527v-.356a.713.713 0 00-.707-.716h-2.117zm7.05 16.424V5.927H6.007v13.925c0 .396.32.716.707.716H17.29a.713.713 0 00.707-.716z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10 10.25a.75.75 0 01.743.648l.007.102v6a.75.75 0 01-1.493.102L9.25 17v-6a.75.75 0 01.75-.75zm4.743.648A.75.75 0 0013.25 11v6l.007.102A.75.75 0 0014.75 17v-6l-.007-.102z"
                />
                <path
                    fill={fillColor}
                    d="M16.745 4.447C16.667 3.23 15.702 2.25 14.5 2.25h-5l-.155.006C8.165 2.339 7.25 3.37 7.25 4.607V6.25H3l-.102.007A.75.75 0 003 7.75h1.25V18.5a3.25 3.25 0 003.25 3.25h9a3.25 3.25 0 003.25-3.25V7.75H21l.102-.007A.75.75 0 0021 6.25h-4.25V4.607l-.005-.16zM15.25 6.25h-6.5V4.607l.006-.11c.048-.43.373-.747.744-.747h5l.092.006c.361.052.658.404.658.851V6.25zm-9.5 1.5h12.5V18.5a1.75 1.75 0 01-1.75 1.75h-9l-.144-.006A1.75 1.75 0 015.75 18.5V7.75z"
                />
            </svg>
        );
    }
};

export default IconTrashCanRegular;
