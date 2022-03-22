/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDumbbellLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.907 6.995H19.7v-.6a.95.95 0 00-.936-.957H17.56a.948.948 0 00-.936.957v3.513a.177.177 0 01-.035-.008.127.127 0 00-.043-.009H7.453a.157.157 0 00-.046.009c-.012.003-.024.007-.038.008V6.395a.95.95 0 00-.935-.957H5.229a.948.948 0 00-.936.957v.6H3.092a.945.945 0 00-.936.955v8.1c0 .53.418.956.936.956h1.201v.6c0 .529.42.957.936.957h1.205a.948.948 0 00.935-.957v-3.513c.014.001.026.005.038.008a.156.156 0 00.046.009h9.093c.015 0 .03-.005.045-.01a.181.181 0 01.033-.007v3.513c0 .529.42.957.936.957h1.204a.948.948 0 00.936-.957v-.6h1.207a.945.945 0 00.936-.955V7.953a.946.946 0 00-.936-.958zM7.453 13.152v-2.303h9.093v2.303H7.453zm10.11 4.454V6.396h1.204v11.21h-1.205zM4.3 7.95v8.098H3.096V7.95H4.3zm15.402 8.101V7.953h1.205v8.098h-1.204zM5.2 17.61V6.4h1.202v11.21H5.2z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDumbbellLight;
