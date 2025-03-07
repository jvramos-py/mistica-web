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

const IconTrophyFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.857 3.07h-.892v-.357A.714.714 0 0018.252 2h-12.5a.714.714 0 00-.713.713v.357h-.895C2.983 3.07 2 4.053 2 5.214v2.68c0 2.067 1.357 3.59 3.268 3.736.722 2.77 3.103 4.879 6.014 5.176v.553H9.856c-.27 0-.516.15-.64.393l-1.604 3.215A.713.713 0 008.252 22h7.496a.719.719 0 00.608-.338.723.723 0 00.032-.695l-1.61-3.215a.712.712 0 00-.64-.393h-1.425v-.553a6.985 6.985 0 005.923-4.824C20.551 11.794 22 10.222 22 8.25V5.036c0-1.102-.942-1.966-2.143-1.966zM3.43 7.894v-2.68c0-.365.347-.713.713-.713h.89v5.377c0 .06.005.12.009.18l.005.1C4.074 9.924 3.43 9.06 3.43 7.894zm15.502 2.583a6.22 6.22 0 00.032-.599V4.497h.892c.287 0 .713.141.713.535V8.25c0 1.083-.668 1.947-1.637 2.226z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.443 2.155c.348 0 .628.277.63.625h.003v.162c1.871.115 3.768 1.258 3.768 4.177 0 3.058-2.101 4.182-4.067 4.21h-.13c-.08 0-.156 0-.226-.003a8.41 8.41 0 01-.639-.059h-.033c-.81 1.468-1.972 2.12-4.12 2.297v3.426c2.366.224 3.674 1.694 3.674 4.23a.628.628 0 01-.63.621H8.326a.626.626 0 01-.63-.622c0-2.537 1.308-4.008 3.674-4.23v-3.411c-2.179-.104-3.571-.913-4.44-2.277a3.786 3.786 0 01-.358.022 4.867 4.867 0 01-.35.003c-1.966-.028-4.067-1.149-4.067-4.21 0-2.745 1.678-3.919 3.434-4.146v-.193c0-.345.283-.622.627-.622h11.227zm.314 7.927c.849-.014 2.826-.328 2.826-2.966 0-2.37-1.582-2.852-2.512-2.93v.479c-.017 2.123-.205 3.96-.734 5.412.14.005.28.008.42.005zm-11.515 0l.046-.001.046-.002c-.549-1.495-.734-3.4-.745-5.61v-.241c-.93.168-2.177.784-2.177 2.888 0 2.641 1.978 2.955 2.83 2.966z"
                />
            </svg>
        );
    }
};

export default IconTrophyFilled;
