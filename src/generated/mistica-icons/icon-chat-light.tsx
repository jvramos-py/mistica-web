/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconChatLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.906 10.877a.37.37 0 01.363-.375c.2 0 .363.164.363.37 0 1.738-1.275 3.168-2.909 3.355v2.27a.364.364 0 01-.363.374.358.358 0 01-.256-.11l-2.439-2.515h-3.849c-1.806 0-3.272-1.512-3.272-3.374v-3H5.272c-1.406 0-2.546 1.176-2.546 2.626V15c0 1.45 1.14 2.626 2.546 2.626.2 0 .363.168.363.374v1.718l1.922-1.982a.343.343 0 01.256-.11h3.999c1.056 0 2.01-.687 2.383-1.704a.364.364 0 01.47-.221c.19.077.284.293.214.485-.475 1.31-1.704 2.188-3.063 2.188h-3.85L5.529 20.89a.358.358 0 01-.396.081.372.372 0 01-.223-.345v-2.27C3.275 18.162 2 16.732 2 15v-4.502c0-1.863 1.466-3.375 3.272-3.375h3.272v-.749C8.544 4.512 10.01 3 11.816 3h6.544c1.806 0 3.272 1.512 3.272 3.374a.37.37 0 01-.363.375.37.37 0 01-.363-.375c0-1.45-1.14-2.625-2.546-2.625h-6.544c-1.405 0-2.546 1.176-2.546 2.625v4.503c0 1.45 1.14 2.625 2.546 2.625h3.998a.364.364 0 01.26.11l1.923 1.983v-1.718a.37.37 0 01.363-.375c1.406 0 2.546-1.176 2.546-2.625zm.368-1.503c.4 0 .726-.336.726-.748a.739.739 0 00-.726-.75.74.74 0 00-.726.75c0 .412.326.748.726.748z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.226 8.173H5.733a.28.28 0 01-.28-.28.28.28 0 01.28-.28h12.493a.28.28 0 010 .56zm-3.823 4.369h-8.67a.281.281 0 01-.28-.28.28.28 0 01.28-.28h8.67a.28.28 0 01.28.28.28.28 0 01-.28.28z"
                    fill={fillColor}
                />
                <path
                    d="M5.097 21.27c-.411 0-.77-.341-.77-.728v-3.109a2.324 2.324 0 01-1.501-.767c-.432-.482-.67-1.14-.67-1.852v-9.46A2.64 2.64 0 014.795 2.72h14.373A2.638 2.638 0 0121.8 5.355v9.459a2.64 2.64 0 01-2.636 2.636H8.08c-.418.622-2.219 3.291-2.328 3.45-.21.306-.474.37-.656.37zM4.795 3.283a2.08 2.08 0 00-2.079 2.075v9.457c0 1.202.793 2.076 1.888 2.076a.28.28 0 01.28.28v3.372c0 .065.099.168.21.168.054 0 .118-.014.194-.126.12-.176 2.386-3.537 2.409-3.571a.28.28 0 01.232-.123h11.239a2.076 2.076 0 002.072-2.076v-9.46c0-1.145-.93-2.072-2.075-2.075l-14.37.003z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconChatLight;
