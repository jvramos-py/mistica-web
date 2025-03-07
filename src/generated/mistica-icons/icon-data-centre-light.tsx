/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataCentreLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.18 3.854c.223 0 .37-.147.37-.37v-.74h5.92c.63 0 1.108.484 1.108 1.11v9.997c0 .223.147.37.37.37.222 0 .37-.147.37-.37V3.854A1.834 1.834 0 0018.464 2H8.481v2.593h-2.59v2.593H3.3V22h11.84V9.04a1.834 1.834 0 00-1.851-1.854h-6.66V5.333h1.109v.739c0 .223.147.37.37.37.222 0 .369-.147.369-.37v-.74h.739v.74c0 .223.146.37.369.37s.37-.147.37-.37v-.74h5.92c.63 0 1.108.484 1.108 1.11v12.59c0 .223.147.37.37.37.222 0 .369-.147.369-.37V6.447a1.835 1.835 0 00-1.852-1.854H9.22V2.744h1.109v.74c0 .223.146.37.369.37s.37-.147.37-.37v-.74h.738v.74c.005.223.152.37.374.37zm-6.659 9.073h2.037c.223 0 .37-.147.37-.37s-.147-.37-.37-.37H5.52c-.222 0-.37.147-.37.37s.148.37.37.37zm0 3.707h2.037c.223 0 .37-.147.37-.37s-.147-.37-.37-.37H5.52c-.222 0-.37.147-.37.37s.148.37.37.37zm2.037 3.517H5.52c-.222 0-.37-.147-.37-.37 0-.222.148-.37.37-.37h2.037c.223 0 .37.148.37.37 0 .223-.147.37-.37.37zm6.848-5.409v2.816H4.044v-2.816h10.362zm-10.362-.74v-2.886h10.362v2.887H4.044zm0 4.296h10.362v2.962H4.044v-2.962zM14.402 9.04v1.332H4.044V7.926h1.108v.74c0 .222.147.369.37.369.222 0 .369-.147.369-.37v-.74h.739v.74c0 .223.146.37.369.37s.37-.147.37-.37v-.74h5.92c.63.005 1.113.484 1.113 1.115zm4.812 7.035a.74.74 0 011.477 0 .74.74 0 01-1.478 0z"
            />
        </svg>
    );
};

export default IconDataCentreLight;
