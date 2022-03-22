/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTrophyRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.857 3.07h-.892v-.357A.714.714 0 0018.252 2h-12.5a.714.714 0 00-.713.713v.357h-.895C2.983 3.07 2 4.053 2 5.214v2.68c0 2.067 1.357 3.59 3.268 3.736.722 2.77 3.103 4.879 6.014 5.176v.553H9.856c-.27 0-.516.15-.64.393l-1.604 3.215A.713.713 0 008.252 22h7.496a.719.719 0 00.608-.338.723.723 0 00.032-.695l-1.61-3.215a.712.712 0 00-.64-.393h-1.425v-.553a6.985 6.985 0 005.923-4.824C20.551 11.794 22 10.222 22 8.25V5.036c0-1.102-.942-1.966-2.143-1.966zM14.59 20.573H9.404l.891-1.787h3.4l.896 1.787zM3.431 5.214c0-.365.347-.713.713-.713h.89v5.377c0 .06.005.12.009.18l.005.1c-.973-.234-1.617-1.098-1.617-2.264v-2.68zM12 15.416a5.54 5.54 0 01-5.535-5.538V3.427h11.07v6.451A5.544 5.544 0 0112 15.416zm6.933-4.939a6.22 6.22 0 00.032-.599V4.497h.892c.287 0 .713.141.713.535V8.25c0 1.083-.668 1.947-1.637 2.226z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.919 2.625v.16c1.87.114 3.767 1.257 3.764 4.176 0 3.059-2.1 4.182-4.067 4.21h-.129c-.08 0-.156 0-.226-.003a4.944 4.944 0 01-.513-.04l-.135-.024c-.82 1.33-2.114 2.137-4.145 2.305v3.426c2.367.224 3.675 1.692 3.675 4.23 0 .341-.28.621-.628.621H8.168a.626.626 0 01-.63-.622c0-2.537 1.308-4.008 3.675-4.23v-3.411c-2.18-.104-3.572-.913-4.44-2.277a3.816 3.816 0 01-.358.022c-.065.003-.14.003-.219.003h-.129C4.101 11.143 2 10.022 2 6.96c0-2.745 1.678-3.916 3.434-4.143v-.193c0-.342.28-.622.628-.622h11.23c.344 0 .627.277.627.622zm-1.26 1.87c.002-.078.002-.736 0-1.251h-9.97V4.31c.028 5.896 1.286 7.888 4.986 7.888l.087-.003c.051-.002.105-.004.112-.003 3.515-.072 4.731-2.044 4.784-7.697zm.94 5.432c.852-.014 2.83-.328 2.83-2.969 0-2.37-1.58-2.852-2.51-2.93v.479c-.02 2.123-.207 3.96-.737 5.412a5.677 5.677 0 00.417.008zM8.83 20.443h6.025c-.184-1.64-1.156-2.41-3.014-2.41-1.854 0-2.826.77-3.01 2.41zM6.087 9.927a1.018 1.018 0 00.092-.003c-.549-1.495-.734-3.4-.745-5.61v-.241c-.93.168-2.176.784-2.176 2.888 0 2.641 1.977 2.955 2.829 2.966z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTrophyRegular;
