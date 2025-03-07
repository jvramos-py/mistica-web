/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddBoltonRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17 3H7l-5 9 5 9h10l5-9-5-9zm3.368 9l-4.186 7.533H7.818L3.632 12l4.182-7.533h8.368L20.368 12zm-5.014.733A.72.72 0 0016.06 12a.721.721 0 00-.706-.733h-2.649V8.51c0-.404-.316-.734-.705-.734-.389 0-.705.33-.705.734v2.756h-2.65c-.388 0-.705.329-.705.733 0 .404.317.733.706.733h2.649v2.756c0 .404.316.734.705.734.389 0 .705-.33.705-.734v-2.756h2.65z"
            />
        </svg>
    );
};

export default IconAddBoltonRegular;
