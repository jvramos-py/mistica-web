/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileEncryptedFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.29 8a.626.626 0 00-.048-.24.893.893 0 00-.213-.385L13.817 2.25a.868.868 0 00-.608-.25h-7.3c-.725 0-1.387.658-1.387 1.387v16.918c0 .737.648 1.384 1.387 1.384h11.994a1.402 1.402 0 001.387-1.384V8zm-5.75-4.33l4.05 3.983h-1.776c-.68 0-1.255-.21-1.664-.611-.398-.395-.61-.95-.61-1.608V3.67zM6.233 7.063c0-1.123.347-1.711 1.26-1.711.914 0 1.26.585 1.26 1.711 0 1.126-.346 1.706-1.26 1.706-.913 0-1.26-.582-1.26-1.706zm1.26-1.207c.39 0 .544.3.544 1.207 0 .908-.154 1.154-.544 1.154-.389 0-.543-.243-.543-1.154 0-.91.154-1.207.543-1.207zm1.762 6.538c0-1.123.348-1.711 1.26-1.711.914 0 1.261.585 1.261 1.71 0 1.127-.347 1.707-1.26 1.707s-1.26-.583-1.26-1.706zm1.258-1.207c.39 0 .543.3.543 1.207 0 .908-.15 1.154-.543 1.154-.39 0-.543-.244-.543-1.154 0-.91.154-1.207.543-1.207zm1.992 1.207c0-1.123.347-1.711 1.26-1.711s1.26.585 1.26 1.71c0 1.127-.347 1.707-1.26 1.707s-1.26-.583-1.26-1.706zm1.257-1.207c.39 0 .544.3.544 1.207 0 .908-.152 1.154-.544 1.154-.389 0-.543-.244-.543-1.154 0-.91.154-1.207.543-1.207zm-1.341 6.339c0-1.124.347-1.712 1.26-1.712s1.26.586 1.26 1.712-.347 1.706-1.26 1.706-1.26-.583-1.26-1.706zm1.257-1.208c.39 0 .544.3.544 1.208 0 .907-.152 1.154-.544 1.154-.39 0-.543-.244-.543-1.154 0-.91.154-1.208.543-1.208zm-7.064-2.753h.552v-2.292H6.64v-.459a6.17 6.17 0 01.754-.056c.336 0 .45.081.45.322v2.488h.466v.484H6.615v-.487zm3.622-5.311v-2.29H9.71v-.46c.193-.028.521-.056.754-.056.336 0 .45.081.45.322v2.488h.466v.484H9.685v-.487h.552zm5.602 5.31h.552v-2.29h-.527v-.46a6.17 6.17 0 01.754-.056c.336 0 .45.081.45.322v2.488h.466v.484h-1.695v-.487zm.552 5.121v-2.291h-.527v-.46a6.17 6.17 0 01.754-.056c.336 0 .45.082.45.323v2.487h.466v.482h-1.695v-.485h.552zm-6.656 0h.552v-2.291H9.76v-.46a6.17 6.17 0 01.753-.056c.336 0 .451.082.451.323v2.487h.465v.482H9.735v-.485zm-2.487 0v-2.291H6.72v-.46a6.17 6.17 0 01.754-.056c.336 0 .45.082.45.323v2.487h.466v.482H6.696v-.485h.552z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileEncryptedFilled;
