/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTravelBagLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.697 6.134c.546 0 1.043.56 1.043 1.17v12.64c0 .625-.485 1.17-1.043 1.17H15.63a.165.165 0 00.001.023l.002.023c0 .718-.582.775-.73.775h-.07c-.153-.003-.729-.06-.729-.78l.002-.022.001-.02H9.935c0 .008.001.015.003.022.001.007.003.014.003.022 0 .719-.585.775-.73.775H9.14c-.154-.003-.73-.06-.73-.78l.002-.021.002-.022h-1.11c-.555 0-1.043-.548-1.043-1.17V7.307c0-.613.497-1.17 1.043-1.17H8.94v-3.38c0-.367.34-.692.733-.692h4.651c.39 0 .733.322.733.693v3.376h1.64zm-6.9-.006h4.413V2.893H9.796v3.235zm7.093 1.177c0-.181-.142-.331-.2-.345H7.307c-.051.01-.193.16-.193.342v12.64c0 .203.142.339.193.342h9.39c.05.002.194-.139.194-.34V7.304zm-2.569 10.31c0 .07-.012.14-.036.209H9.724a.607.607 0 01-.036-.21v-5.211h4.633v5.211zM9.724 9.532h4.552a.57.57 0 01.04.21v1.829H9.684v-1.83c0-.07.015-.141.039-.21zm5.447.212c0-.51-.277-1.038-.744-1.038H9.579c-.467 0-.744.526-.744 1.038v7.87c0 .503.262 1.037.744 1.037h4.848c.482 0 .745-.534.745-1.038v-7.87z"
            />
        </svg>
    );
};

export default IconTravelBagLight;
