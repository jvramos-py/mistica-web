/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconShopLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.436 6.615H15.62v-.96C15.62 3.655 13.98 2 12 2c-1.98 0-3.62 1.656-3.62 3.655v.964H5.564L4 19.657v.035c0 1.156.61 1.924 1.525 1.924h8c.23 0 .38-.156.38-.384 0-.232-.154-.384-.38-.384h-8c-.685 0-.76-.844-.76-1.115L6.25 7.387h11.5l1.486 12.346c0 .307-.076 1.115-.76 1.115h-.381c-.23 0-.38.156-.38.384 0 .232.154.384.38.384h.38c.915 0 1.525-.768 1.525-1.924L18.436 6.615zm-9.291-.96c0-1.575 1.295-2.883 2.855-2.883s2.855 1.308 2.855 2.883v.964h-5.71v-.964z"
                    fill={fillColor}
                />
                <path
                    d="M15.046 21.232c0-.424.34-.768.76-.768s.764.344.76.768c0 .424-.34.768-.76.768a.764.764 0 01-.76-.768z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.188 12.552c.798-.383 1.312-.999 1.312-1.715 0-.432-.191-.843-.556-1.195-.139-.223-.482-1.375-.664-1.984l-.017-.059c-.096-.33-.18-.61-.233-.765l-1.345-3.965c-.125-.372-.51-.624-.917-.619L5.22 2.286c-.415.003-.78.247-.911.613-.185.547-.457 1.36-.75 2.24-.592 1.778-1.405 4.211-1.51 4.436-.045.1-.105.189-.165.277l-.02.028-.004.006c-.16.238-.36.533-.36.951 0 .716.514 1.335 1.309 1.715V20.3c0 .799.726 1.45 1.62 1.45h15.143c.89 0 1.616-.651 1.616-1.45v-7.747zm.44-1.712c0 .708-1.067 1.307-2.331 1.307-.84-.003-1.623-.266-2.044-.7a.54.54 0 00-.383-.154h-.003l-.254.027-.128.13c-.418.428-1.201.692-2.04.692-.84 0-1.623-.264-2.042-.691a.537.537 0 00-.382-.159l-.257.026-.131.133c-.419.427-1.202.69-2.041.69-.849 0-1.635-.266-2.05-.699a.54.54 0 00-.392-.163l-.26.027-.131.136c-.415.43-1.201.7-2.05.7-1.264 0-2.33-.597-2.33-1.307 0-.178.083-.306.23-.522.095-.133.179-.272.25-.419.114-.247.712-2.028 1.542-4.517l.264-.788c.189-.564.357-1.068.483-1.44.012-.03.045-.05.081-.05l13.545-.036c.036 0 .069.022.08.053L20.2 7.078c.051.147.132.419.224.735.505 1.698.685 2.187.879 2.375l.003.003c.146.141.323.366.323.65zm-1.315 2v7.46c.003.352-.332.638-.741.638h-4.766V15.99c0-.58-.526-1.052-1.174-1.052h-3.245c-.646 0-1.172.472-1.172 1.052v4.947h-4.79c-.41 0-.744-.289-.744-.641v-7.455c.323.07.66.116 1.02.116.955 0 1.84-.272 2.44-.738.601.466 1.488.738 2.442.738.95 0 1.831-.266 2.429-.727.6.46 1.479.727 2.426.727.947 0 1.829-.266 2.43-.727.6.458 1.479.727 2.426.727a4.832 4.832 0 001.019-.116zm-6.383 8.097h-3.836V15.99c0-.133.134-.242.298-.242h3.24c.164 0 .298.109.298.242v4.947z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconShopLight;
