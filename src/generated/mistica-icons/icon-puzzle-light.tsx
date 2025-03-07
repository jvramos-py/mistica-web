/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPuzzleLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.44 21.43h12.829c.697 0 1.266-.586 1.266-1.311v-2.513c.21.036.425.059.638.064.115 0 .227 0 .286-.008 1.558-.022 3.378-.98 3.378-3.602 0-2.597-1.748-3.572-3.38-3.62h-.3c-.135 0-.356.012-.622.057V8.3c0-.723-.569-1.309-1.266-1.309H13.31a5.21 5.21 0 00.061-.798c0-2.6-1.748-3.574-3.392-3.619h-.294c-1.622.02-3.356.98-3.356 3.6 0 .274.023.546.065.817H3.442c-.703 0-1.274.589-1.274 1.309v2.596c0 .123.05.238.14.322.087.082.204.12.325.11.123-.012.227-.017.294-.02h.277c.137.006.504.022.913.168 1.101.347 1.659 1.216 1.659 2.585 0 1.365-.558 2.236-1.664 2.589a3.003 3.003 0 01-.919.151c-.073.008-.157.008-.23.008a2.76 2.76 0 01-.325-.025.42.42 0 00-.33.107.437.437 0 00-.143.322v2.907c0 .72.571 1.308 1.274 1.308zm-.432-1.309v-2.448c.076.003.151 0 .224-.008a3.62 3.62 0 001.135-.188c.843-.269 2.252-1.067 2.252-3.412 0-2.347-1.412-3.143-2.238-3.406a3.917 3.917 0 00-1.154-.21h-.219V8.306a.438.438 0 01.431-.442h3.485a.42.42 0 00.339-.177.441.441 0 00.062-.386 3.85 3.85 0 01-.154-1.118c0-2.44 1.764-2.726 2.518-2.737h.277c.77.02 2.563.33 2.563 2.754 0 .406-.05.764-.154 1.1a.441.441 0 00.062.387.42.42 0 00.339.177h3.493a.434.434 0 01.423.442v2.745a.431.431 0 00.17.35c.11.082.25.107.379.065a3.01 3.01 0 01.916-.151h.282c.776.025 2.558.341 2.558 2.753 0 2.507-1.953 2.728-2.585 2.74-.07.005-.157.005-.225.005a3.191 3.191 0 01-.94-.165.404.404 0 00-.382.056.429.429 0 00-.176.35v3.067a.434.434 0 01-.423.443H3.439a.438.438 0 01-.43-.443z"
            />
        </svg>
    );
};

export default IconPuzzleLight;
