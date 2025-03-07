/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPillLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.845 4.222l.16-.151c2.557-2.555 5.37-2.555 7.921.002 2.519 2.513 2.558 5.289.113 7.813l-8.107 8.106a1.772 1.772 0 01-.18.177c-1.19 1.114-2.442 1.672-3.7 1.672-1.344 0-2.694-.639-3.974-1.922-2.555-2.554-2.558-5.367-.006-7.918l.16-.163a5.73 5.73 0 01.35-.344l6.938-6.942c.069-.081.16-.17.257-.264l.068-.066zm4.27 10.409l3.33-3.334c2.131-2.201 2.098-4.434-.107-6.638-1.117-1.118-2.243-1.678-3.37-1.678-1.126 0-2.252.56-3.372 1.678l-.17.168-.062.06c-.08.076-.159.151-.23.234-1.737 1.692-2.616 2.571-2.636 2.639-.403 1.288.207 3.182 1.927 4.902 1.728 1.73 3.26 2.395 4.555 1.983a.44.44 0 01.134-.014zm-4.788 4.787l3.815-3.818c-1.328-.022-2.776-.804-4.313-2.345-1.614-1.613-2.384-3.12-2.331-4.5L5.142 12.11c-.122.106-.214.203-.309.303l-.002.002-.17.18c-2.233 2.232-2.23 4.498.008 6.736 2.17 2.168 4.367 2.238 6.53.213.044-.04.089-.081.128-.126z"
            />
        </svg>
    );
};

export default IconPillLight;
