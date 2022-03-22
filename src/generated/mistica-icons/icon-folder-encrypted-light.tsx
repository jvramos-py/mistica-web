/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFolderEncryptedLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M3.94 10.518c0-1.123.348-1.711 1.261-1.711.913 0 1.26.585 1.26 1.711 0 1.126-.347 1.706-1.26 1.706s-1.26-.58-1.26-1.706zm1.261-1.207c-.39 0-.543.297-.543 1.207 0 .91.154 1.154.543 1.154.39 0 .543-.246.543-1.154 0-.907-.154-1.207-.543-1.207zm3.591-.504c-.913 0-1.26.588-1.26 1.711 0 1.126.347 1.706 1.26 1.706s1.26-.58 1.26-1.706-.347-1.711-1.26-1.711zm0 .504c.39 0 .544.3.544 1.207 0 .908-.155 1.154-.544 1.154-.39 0-.543-.243-.543-1.154 0-.91.154-1.207.543-1.207zm7.863 1.207c0-1.123.347-1.711 1.26-1.711s1.26.585 1.26 1.711c0 1.126-.347 1.706-1.26 1.706s-1.26-.58-1.26-1.706zm1.258-1.207c-.39 0-.544.297-.544 1.207 0 .91.154 1.154.544 1.154.389 0 .543-.246.543-1.154 0-.907-.154-1.207-.543-1.207zm-6.292 2.401V9.42h-.53v-.459c.194-.028.522-.056.754-.056.336 0 .451.081.451.322v2.487h.465v.485h-1.694v-.487h.554zm-6.661 5.4h-.552v.488h1.695v-.485h-.465v-2.487c0-.241-.115-.322-.45-.322-.233 0-.561.028-.754.056v.459h.526v2.291zm9.017-5.4h.552V9.42h-.527v-.459c.193-.028.521-.056.754-.056.336 0 .45.081.45.322v2.487h.466v.485h-1.695v-.487zM8.792 14.21c-.913 0-1.26.588-1.26 1.712 0 1.126.347 1.706 1.26 1.706s1.26-.58 1.26-1.706-.347-1.712-1.26-1.712zm.544 1.712c0 .907-.155 1.154-.544 1.154-.39 0-.543-.244-.543-1.154 0-.91.154-1.208.543-1.208.39 0 .544.3.544 1.208zm8.579-1.712c-.913 0-1.26.588-1.26 1.712 0 1.126.347 1.706 1.26 1.706s1.26-.58 1.26-1.706-.347-1.712-1.26-1.712zm.541 1.712c0 .907-.154 1.154-.543 1.154-.39 0-.544-.244-.544-1.154 0-.91.154-1.208.544-1.208.389 0 .543.3.543 1.208zm-6.835 1.193h-.554v.487h1.694v-.484h-.465V14.63c0-.24-.114-.322-.45-.322-.233 0-.56.028-.754.056v.46h.53v2.291zm2.356 0h.552v-2.291h-.527v-.46a6.17 6.17 0 01.754-.056c.336 0 .45.082.45.322v2.488h.466v.484h-1.695v-.487z"
                fill={fillColor}
            />
            <path
                d="M20.588 6.073a1.26 1.26 0 011.255 1.263v11.617a1.26 1.26 0 01-1.255 1.263H3.414a1.26 1.26 0 01-1.258-1.263V5.076a1.26 1.26 0 011.258-1.263h7.316a1.26 1.26 0 011.255 1.263v1c.003-.003 8.603-.003 8.603-.003zm.434 12.88V7.336a.435.435 0 00-.434-.437h-9.012a.408.408 0 01-.409-.411V5.076a.44.44 0 00-.434-.44h-7.32a.438.438 0 00-.436.44v13.88c0 .24.196.436.437.436h17.174a.44.44 0 00.434-.44z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFolderEncryptedLight;
