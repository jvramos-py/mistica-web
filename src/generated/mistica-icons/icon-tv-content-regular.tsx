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

const IconTvContentRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 17.662V4H2v13.662h7.966v1.169H7.557a.568.568 0 00-.555.584c0 .325.247.585.555.585h8.89c.309 0 .555-.26.555-.585 0-.324-.246-.584-.554-.584h-2.41v-1.17H22zm-18.52-1.56V5.564h17.04v10.538H3.48zm7.59 2.734v-1.17h1.855v1.17H11.07z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.401 17.323l-12.803-.008c-1.12 0-1.99-.311-2.58-.927-.574-.591-.863-1.437-.863-2.513V7.878c0-2.202 1.221-3.412 3.44-3.412l12.806.009c2.219 0 3.44 1.212 3.44 3.411v5.998c0 1.075-.288 1.921-.86 2.512-.594.616-1.462.927-2.58.927zM5.595 5.587c-.807 0-1.406.193-1.779.574-.358.367-.54.944-.54 1.717v5.997c0 1.583.736 2.32 2.319 2.32l12.804.008c1.582 0 2.32-.737 2.32-2.32V7.887c0-.773-.183-1.35-.544-1.717-.373-.38-.97-.574-1.78-.574l-12.8-.008zm3.941 13.94l4.916.01c.308 0 .56-.253.56-.561a.562.562 0 00-.56-.56l-4.916-.009a.562.562 0 00-.56.56c0 .309.252.56.56.56z"
                />
            </svg>
        );
    }
};

export default IconTvContentRegular;
