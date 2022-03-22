/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLocationMapLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M13.7 21.246h7.546a.377.377 0 010 .754H2V5.773h8.531C10.801 3.618 12.59 2 14.831 2s4.029 1.618 4.3 3.773h2.492V17.1a.377.377 0 01-.753 0V6.531h-1.706c-.193 2.42-3.86 7.899-4.02 8.136a.387.387 0 01-.313.164.375.375 0 01-.314-.164c-.16-.237-3.826-5.715-4.02-8.136H2.755v2.455h.188a2.458 2.458 0 012.454 2.454v1.101c.145.826.894 1.106 2.102 1.464 1.25.367 2.806.826 2.806 2.715v1.13a3.398 3.398 0 003.396 3.396zm4.716-14.908a3.547 3.547 0 00-3.585-3.584 3.547 3.547 0 00-3.585 3.584c0 1.58 2.353 5.532 3.585 7.43 1.232-1.898 3.585-5.85 3.585-7.43zM2.754 21.246h8.57a4.153 4.153 0 01-1.768-3.183c-.005-.02-.005-.039-.005-.063v-1.28c0-1.237-.855-1.58-2.266-1.995-1.135-.334-2.425-.715-2.638-2.102-.004-.02-.004-.038-.004-.058v-1.13c0-.937-.764-1.7-1.701-1.7h-.188v11.511zm12.077-16.7a1.792 1.792 0 11.001 3.583 1.792 1.792 0 01-.001-3.583zm0 2.83a1.04 1.04 0 001.039-1.038A1.04 1.04 0 0014.83 5.3c-.574 0-1.038.463-1.038 1.038a1.04 1.04 0 001.039 1.039zm6.415 12.735a.755.755 0 000-1.507.755.755 0 000 1.507z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.824 21.316l-2.342-8.192a.418.418 0 00-.232-.263.418.418 0 00-.348.008l-2.823 1.41-.505-.163c1.242-2.003 2.331-4.29 2.337-6.049.011-3.692-2.188-5.906-5.878-5.917h-.027c-1.81 0-3.303.532-4.32 1.544-1.02 1.014-1.563 2.513-1.57 4.337-.002 1.753 1.046 4.006 2.256 5.992l-.664.194-2.364-1.337a.411.411 0 00-.594.233l-2.58 8.192a.41.41 0 00.554.501l4.399-1.91 4.664 1.905.115.028a.436.436 0 00.246-.02l4.782-1.916 4.334 1.91a.41.41 0 00.56-.488zM6.938 8.033c.003-1.624.45-2.888 1.328-3.76.868-.865 2.126-1.302 3.737-1.302h.025c3.275.008 5.073 1.815 5.062 5.093-.008 3.057-3.76 8.044-5.098 9.562-1.334-1.515-5.065-6.5-5.054-9.593zm13.856 12.67l-3.5-1.544-.705-4.116-.017-.092 2.255-1.127 1.966 6.879zm-17.57-.009l2.156-6.853 1.838 1.04-.496 4.295-3.499 1.518zm8.38-2.278l-.019 2.424-4.04-1.656.466-4.068.016-.14.799-.23c1.095 1.69 2.221 3.085 2.779 3.67zm4.15-3.381l.711 4.163-4.059 1.625.017-2.454c.563-.6 1.636-1.93 2.692-3.536l.639.202zm-5.065-7.338c0-.88.448-1.325 1.325-1.325.88 0 1.325.446 1.325 1.325 0 .88-.446 1.325-1.325 1.325-.88 0-1.325-.445-1.325-1.325zm1.325 2.146c1.322 0 2.146-.823 2.146-2.146 0-1.322-.824-2.146-2.146-2.146S9.87 6.372 9.87 7.697s.82 2.146 2.143 2.146z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLocationMapLight;
