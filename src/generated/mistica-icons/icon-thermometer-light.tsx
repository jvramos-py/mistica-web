/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconThermometerLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 4.308c-.228 0-.377.156-.377.384V16.46a1.724 1.724 0 00-1.32 1.692c0 .964.754 1.732 1.7 1.732.947 0 1.7-.768 1.7-1.732 0-.808-.565-1.5-1.319-1.692V4.692c-.007-.228-.157-.384-.384-.384zM13.51 12c0 .424.338.768.754.768A.761.761 0 0015.02 12a.761.761 0 00-.754-.768.761.761 0 00-.754.768zm-1.515 7.116a.946.946 0 01-.947-.964.946.946 0 111.893 0c0 .54-.416.964-.946.964z"
            />
            <path
                fill={fillColor}
                d="M14.642 15.42v-1.112c0-.232-.153-.384-.377-.384s-.377.156-.377.384v1.268c0 .116.036.232.114.268a3.109 3.109 0 011.021 2.308c0 1.692-1.358 3.076-3.02 3.076-1.66 0-3.023-1.384-3.023-3.076 0-.884.377-1.692 1.02-2.308a.422.422 0 00.115-.268V4.692c0-1.076.828-1.924 1.889-1.924 1.06 0 1.888.844 1.888 1.924v5c0 .232.154.384.377.384.224 0 .377-.156.377-.384v-5c0-1.5-1.17-2.692-2.642-2.692C10.53 2 9.36 3.192 9.36 4.692v10.732a3.946 3.946 0 00-1.131 2.732c0 2.116 1.7 3.844 3.774 3.844 2.073 0 3.773-1.732 3.773-3.844 0-1.04-.416-2.004-1.135-2.736z"
            />
        </svg>
    );
};

export default IconThermometerLight;
