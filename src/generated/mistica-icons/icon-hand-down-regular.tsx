/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHandDownRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.974 2.155h7.787c.781 0 1.126.742 1.269 1.062.14.302.636 1.31 1.21 2.476a414.447 414.447 0 012.748 5.647c.398.854.24 1.742-.41 2.263-.33.264-.727.395-1.13.395a1.95 1.95 0 01-1.211-.431c-.367-.292-.67-.695-1.008-1.272.002 1.899 0 5.74 0 6.99v.394c0 .017 0 .03-.003.045-.087 1.344-.863 2.117-2.129 2.117-1.317 0-2.134-.829-2.134-2.162v-2.902a2.51 2.51 0 01-.684.09c-1.003 0-1.703-.505-1.944-1.354-.23.079-.493.118-.776.118-1.008 0-1.711-.51-1.95-1.367-.232.079-.49.118-.773.118-1.254 0-2.036-.793-2.036-2.065V5.323c0-.972.272-1.748.81-2.302.54-.558 1.38-.866 2.364-.866zm7.952 1.583c-.03-.073-.123-.272-.199-.35v-.006H6.985c-.644 0-1.185.182-1.49.496-.311.322-.462.792-.462 1.44v6.994c0 .59.235.832.815.832.148 0 .28-.02.392-.056a1.222 1.222 0 011.557.84v.002c.04.14.131.466.773.466.149 0 .28-.02.393-.056a1.21 1.21 0 01.952.081c.294.157.51.429.602.75.04.141.13.463.77.463.135 0 .252-.017.356-.045a1.211 1.211 0 011.067.207c.303.233.482.594.482.98v2.906c0 .652.272.93.913.93.524 0 .857-.163.91-.967l-.002-.538v-6.81a1.229 1.229 0 011.221-1.232c.42 0 .824.222 1.048.603.283.481.498.762.717.935a.728.728 0 00.45.165.585.585 0 00.37-.128c.28-.225.138-.614.065-.77-.675-1.44-1.818-3.763-2.737-5.628l-.313-.638c-.435-.888-.787-1.605-.908-1.866z"
            />
        </svg>
    );
};

export default IconHandDownRegular;
