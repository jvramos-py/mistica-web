/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAmbulanceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.124 11.227c.255.32.717.922.717 1.63v2.88c0 .53-.224 1.053-.619 1.448-.403.395-.933.625-1.45.625h-.875c-.207 1.49-1.271 2.395-2.896 2.395-1.7 0-2.779-.99-2.913-2.6H9.144c-.132 1.614-1.213 2.6-2.913 2.6-1.709 0-2.79-.995-2.922-2.617-.65-.084-1.154-.596-1.154-1.227V5.031c0-.683.594-1.235 1.32-1.235h11.7c.725 0 1.319.56 1.319 1.243v1.449c.692.042 1.37.386 1.756.93.376.51 2.586 3.43 2.874 3.81zm-.52 4.51v-2.871c0-.283-.262-.631-.43-.855l-.025-.033a353.199 353.199 0 01-2.896-3.835c-.157-.221-.462-.378-.759-.412v6.65c1.294.165 2.154.955 2.384 2.196h.89c.191 0 .404-.098.572-.263a.85.85 0 00.263-.577zm-4.606 3.232c1.132 0 1.7-.568 1.7-1.694s-.568-1.703-1.7-1.703c-1.129 0-1.7.577-1.7 1.703.003 1.126.571 1.694 1.7 1.694zm-8.067-1.694c0-1.126-.571-1.703-1.7-1.703-1.13 0-1.706.577-1.706 1.703-.003 1.126.577 1.694 1.706 1.694 1.131 0 1.7-.568 1.7-1.694zm2.93-8.894v-1.77c0-.429-.339-.807-.726-.807H8.52c-.386 0-.725.378-.725.807v1.767H6.02c-.437 0-.802.328-.802.723v1.613c0 .395.365.723.802.723h1.773l.008 1.77c0 .437.33.807.717.807h1.625c.39 0 .72-.37.72-.807v-1.77h1.773c.428 0 .81-.336.81-.723v-1.61c-.006-.387-.384-.723-.813-.723H10.86z"
            />
        </svg>
    );
};

export default IconAmbulanceFilled;
