/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataBonusLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 20.213V3.41c0-1.05-.83-1.906-1.849-1.911H3.854C2.83 1.5 2 2.36 2 3.41v16.798c0 1.056.834 1.91 1.854 1.91h12.22c.204 0 .37-.17.37-.38a.376.376 0 00-.37-.382H3.854c-.612 0-1.11-.513-1.11-1.143V3.41c0-.63.498-1.144 1.11-1.144h16.293c.611 0 1.109.513 1.109 1.144v16.802c0 .518-.342.972-.835 1.104a.38.38 0 00-.265.465.367.367 0 00.45.273c.82-.215 1.394-.972 1.394-1.842zm-3.328-12.6h1.48a.372.372 0 00.364-.38.376.376 0 00-.37-.382h-1.479V5.327a.376.376 0 00-.37-.382.376.376 0 00-.37.382V6.85h-1.473a.376.376 0 00-.37.382c0 .21.166.38.37.38h1.479V9.14c0 .21.166.38.37.38.203 0 .37-.17.37-.38V7.614zm-13.335 4.2c0 1.476 1.162 2.673 2.593 2.673 1.304 0 2.385-.997 2.565-2.292H8.3a.376.376 0 01-.37-.381c0-.21.166-.381.37-.381h2.593c.204 0 .37.17.37.38 0 1.897-1.493 3.437-3.333 3.437-1.839 0-3.332-1.54-3.332-3.436S6.09 8.376 7.93 8.376a3.31 3.31 0 012.086.753.39.39 0 01.057.537.362.362 0 01-.521.059 2.53 2.53 0 00-1.622-.586c-1.431 0-2.593 1.197-2.593 2.673zm11.112-1.525c0-1.05-.83-1.91-1.854-1.91h-2.223a.376.376 0 00-.37.38v6.11c0 .21.166.38.37.38h2.593c1.02 0 1.854-.855 1.854-1.91 0-.719-.394-1.34-.963-1.662.36-.347.593-.84.593-1.388zM12.742 9.14h1.853c.612 0 1.11.513 1.11 1.143s-.498 1.144-1.11 1.144h-1.853V9.139zm3.332 4.198c0-.63-.497-1.144-1.109-1.144v-.005h-2.223v2.292h2.223c.612 0 1.11-.513 1.11-1.143zm2.963 8.4c0 .42-.332.763-.74.763a.752.752 0 01-.739-.762c0-.42.332-.763.74-.763.407 0 .74.342.74.763z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataBonusLight;
