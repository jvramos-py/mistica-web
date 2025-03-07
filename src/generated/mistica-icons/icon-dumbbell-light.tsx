/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDumbbellLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.902 6.99h-1.207v-.6a.95.95 0 00-.936-.957h-1.204a.948.948 0 00-.936.957v3.513a.177.177 0 01-.035-.008.127.127 0 00-.043-.009H7.448a.158.158 0 00-.046.009.197.197 0 01-.038.008V6.39a.95.95 0 00-.936-.957H5.224a.948.948 0 00-.936.957v.6H3.087a.945.945 0 00-.936.955v8.1c0 .53.418.956.936.956h1.201v.6c0 .529.42.957.936.957h1.204a.948.948 0 00.936-.957v-3.513c.014.001.026.005.038.008a.156.156 0 00.046.009h9.093c.015 0 .03-.005.045-.01a.181.181 0 01.033-.007v3.513c0 .529.42.957.936.957h1.204a.948.948 0 00.936-.957V17h1.207a.945.945 0 00.935-.955V7.948a.946.946 0 00-.935-.958zM7.448 13.147v-2.303h9.093v2.303H7.448zm10.11 4.454V6.39h1.204V17.6h-1.205zM4.294 7.945v8.098H3.091V7.945h1.204zm15.403 8.101V7.948h1.204v8.098h-1.204zM5.195 17.605V6.395h1.202v11.21H5.195z"
            />
        </svg>
    );
};

export default IconDumbbellLight;
