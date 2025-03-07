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

const IconConferenceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.286 3.968h-8.572V2.897A.716.716 0 0012 2.183a.716.716 0 00-.714.714v1.071H2.714A.716.716 0 002 4.683c0 .392.321.714.714.714h1.072V16.11h6.857l-4.5 4.5a.69.69 0 000 1 .705.705 0 00.5.214.705.705 0 00.5-.214l4.143-4.143v3.643c0 .393.321.714.714.714a.716.716 0 00.714-.714v-3.643l4.143 4.143a.706.706 0 00.5.214.705.705 0 00.5-.214.69.69 0 000-1l-4.5-4.5h6.857V5.397h1.072A.716.716 0 0022 4.682a.716.716 0 00-.714-.714zm-2.5 10.714H5.214V5.397h13.572v9.285zM9.857 9.29l-3.25 3.25a.518.518 0 00.393.893.537.537 0 00.393-.143l2.464-2.465L12 12.968l5.393-5.393a.518.518 0 000-.75.518.518 0 00-.75 0L12 11.432 9.857 9.29z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.063 6.222h-2.546v-.588a.642.642 0 00-.168-.434l-.474-.51c.258-.47.218-1.078-.16-1.482l-.647-.694a1.111 1.111 0 00-.81-.359c-.302 0-.593.129-.809.359l-.378.406a1.296 1.296 0 000 1.736l.647.695c.216.233.507.361.81.361.19 0 .372-.056.537-.15l.303.327v.333H8.634V5.89l.305-.328c.166.095.35.154.541.154.303 0 .594-.129.81-.361l.647-.695a1.29 1.29 0 000-1.736l-.378-.407a1.112 1.112 0 00-.81-.358c-.303 0-.594.129-.81.358l-.647.695c-.375.403-.417 1.008-.16 1.479l-.475.513a.642.642 0 00-.168.434v.588H4.942c-.633 0-1.145.552-1.145 1.23v1.087c0 .68.512 1.23 1.145 1.23h.381v.96c0 .68.513 1.23 1.146 1.23h1.154v6.574H6.491c-.633 0-1.145.552-1.145 1.23v.851c0 .678.512 1.23 1.145 1.23h11.023c.633 0 1.145-.552 1.145-1.23v-.851c0-.678-.512-1.23-1.145-1.23h-1.132v-6.574h1.154c.633 0 1.146-.55 1.146-1.23v-.96h.38c.634 0 1.146-.55 1.146-1.23V7.455c-.002-.681-.515-1.233-1.145-1.233zm0 2.317h-1.48a.13.13 0 01-.022-.003l-.022-.003H6.472a.064.064 0 00-.02.003.128.128 0 01-.025.003H4.945V7.452h14.118v1.087zm-3.779 2.187a.123.123 0 01-.024-.003l-.02-.002H8.768l-.02.002a.125.125 0 01-.025.003H6.469v-.96h11.067v.96h-2.252zM8.769 18.53v-6.574h6.47v6.574H8.77zM6.49 20.612v-.852h2.202a.622.622 0 01.026.004c.015.002.03.004.047.004h6.47a.332.332 0 00.053-.005l.008-.001a.672.672 0 01.012-.002h2.202v.852H6.49zM9.755 3.385l.378.406-.647.695-.378-.407.647-.694zm4.504 0l.647.694-.378.407-.647-.695.378-.406z"
                />
            </svg>
        );
    }
};

export default IconConferenceRegular;
