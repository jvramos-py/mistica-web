/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddPhoneRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.634 6.299H7.905V3.447c0-.392-.306-.712-.681-.712-.375 0-.681.32-.681.712v2.852H3.817c-.375 0-.681.32-.681.712 0 .392.306.712.681.712h2.73v2.852c0 .392.306.712.68.712.376 0 .682-.32.682-.712V7.723h2.73c.374 0 .68-.32.68-.712 0-.392-.31-.712-.685-.712z"
            />
            <path
                fill={fillColor}
                d="M4.472 20.608C5.36 21.532 6.542 22 7.913 22c.681 0 1.405-.12 2.155-.352 2.2-.68 4.547-2.292 6.783-4.648 2.227-2.345 3.732-4.8 4.355-7.105.647-2.392.28-4.464-1.048-5.836l-1.32-1.368a2.185 2.185 0 00-1.475-.689 1.898 1.898 0 00-1.496.597L13.88 4.687c-.367.384-.562.9-.562 1.456a2.4 2.4 0 00.677 1.652l1.382 1.436c.46.472.386 1.204.241 1.732-.249.904-.888 1.94-1.81 2.912-.927.98-1.918 1.665-2.787 1.932-.505.156-1.202.245-1.661-.232l-1.382-1.432a2.211 2.211 0 00-1.474-.688 1.882 1.882 0 00-1.496.592l-1.975 2.088c-.368.385-.563.9-.563 1.457 0 .604.249 1.208.677 1.648l1.325 1.368zm1.508-5.56a.59.59 0 01.429-.172h.03c.21.011.421.112.582.28l1.386 1.436c.73.752 1.799.956 3.012.584 1.099-.344 2.266-1.136 3.368-2.3 1.095-1.157 1.838-2.38 2.152-3.529.344-1.272.134-2.384-.594-3.136l-1.381-1.432a.931.931 0 01-.276-.644c0-.124.027-.3.164-.444l1.983-2.088a.606.606 0 01.463-.172c.21.012.422.112.582.28l1.32 1.368c1.23 1.268 1.053 3.108.697 4.432-.555 2.04-1.978 4.348-4.011 6.493-2.044 2.156-4.245 3.68-6.197 4.28-1.267.392-3.032.588-4.26-.684l-1.32-1.368a.931.931 0 01-.276-.644c0-.124.026-.3.164-.444l1.983-2.096z"
            />
        </svg>
    );
};

export default IconAddPhoneRegular;
