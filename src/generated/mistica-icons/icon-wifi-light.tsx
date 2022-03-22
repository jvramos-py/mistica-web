/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWifiLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2.108 10.99c.072.076.18.114.252.114.108 0 .18-.034.216-.11 2.427-2.724 5.75-4.236 9.39-4.236 2.748 0 5.319.864 7.53 2.571.145.115.392.076.5-.076.108-.186.072-.415-.072-.53C17.604 6.95 14.89 6 11.998 6c-3.82 0-7.355 1.588-9.89 4.46a.379.379 0 000 .53zm19.176.305c.392 0 .716-.34.716-.759 0-.415-.324-.754-.716-.758-.392 0-.716.34-.716.758 0 .415.324.759.716.759z"
                    fill={fillColor}
                />
                <path
                    d="M4.787 14.014c.072.076.18.114.252.114a.312.312 0 00.248-.11c1.824-2.008 4.18-3.105 6.715-3.105s4.927 1.097 6.715 3.1a.33.33 0 00.5 0 .379.379 0 000-.529c-1.932-2.155-4.503-3.329-7.215-3.329-2.715 0-5.287 1.174-7.215 3.33a.379.379 0 000 .529zm11.498 2.952a.319.319 0 01-.252-.114c-1.072-1.135-2.5-1.78-3.999-1.78h-.036c-1.5 0-2.963.645-4.035 1.814a.33.33 0 01-.5 0 .378.378 0 010-.53c1.212-1.283 2.855-2.003 4.535-2.003h.036c1.712 0 3.283.72 4.5 2.003a.378.378 0 010 .53.438.438 0 01-.249.08z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2.293 8.476a.3.3 0 01-.208-.083.28.28 0 010-.402l.02-.02a14.12 14.12 0 014.458-2.9A14.396 14.396 0 0112.046 4c1.889 0 3.723.355 5.452 1.058a14.061 14.061 0 014.415 2.845.28.28 0 01.003.402.303.303 0 01-.416.003 13.445 13.445 0 00-4.23-2.727 13.842 13.842 0 00-5.227-1.014c-1.822 0-3.591.345-5.255 1.028a13.543 13.543 0 00-4.272 2.779l-.018.016a.28.28 0 01-.205.086z"
                    fill={fillColor}
                />
                <path
                    d="M4.675 11.492a.294.294 0 00.413-.003l.011-.01a9.884 9.884 0 013.088-2.014 10.082 10.082 0 013.854-.758c1.321 0 2.603.25 3.814.744a9.794 9.794 0 013.059 1.97.3.3 0 00.416-.003.277.277 0 00-.003-.403 10.411 10.411 0 00-3.245-2.087 10.646 10.646 0 00-4.041-.788c-1.419 0-2.792.27-4.085.804a10.448 10.448 0 00-3.27 2.135l-.014.013a.276.276 0 00.003.4zm2.586 3.098a.301.301 0 00.208.083.278.278 0 00.202-.082 6.169 6.169 0 011.911-1.26 6.368 6.368 0 012.453-.487c.832 0 1.64.16 2.401.471a6.142 6.142 0 011.891 1.212.3.3 0 00.416-.005.277.277 0 00-.005-.402 6.725 6.725 0 00-2.071-1.328 6.901 6.901 0 00-2.63-.515 6.91 6.91 0 00-2.682.534 6.739 6.739 0 00-2.094 1.377.28.28 0 000 .402zM12 20c-1.281 0-1.988-.683-1.988-1.922 0-1.24.707-1.923 1.989-1.923.623 0 1.11.162 1.452.48.356.33.536.814.536 1.442 0 1.24-.707 1.923-1.988 1.923zm0-3.278c-.956 0-1.4.43-1.4 1.355 0 .926.444 1.356 1.4 1.356.958 0 1.402-.43 1.402-1.355 0-.469-.12-.816-.356-1.036-.228-.212-.578-.32-1.045-.32z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWifiLight;
