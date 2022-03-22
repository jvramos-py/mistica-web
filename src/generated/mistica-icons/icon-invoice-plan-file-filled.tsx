/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconInvoicePlanFileFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.252 8.252V2H20v20H5V8.252h6.252zm-2.68 9.64h7.856a.547.547 0 00.536-.536.552.552 0 00-.536-.536H8.572a.552.552 0 00-.536.536c0 .284.252.536.536.536zm7.856-3.572a.55.55 0 00.536-.536.552.552 0 00-.536-.536H8.572a.552.552 0 00-.536.536c0 .284.252.536.536.536h7.856z"
                    fill={fillColor}
                />
                <path d="M5.252 7.18l4.928-4.932V7.18H5.252z" fill={fillColor} />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.845 7.336l-5.463-5.182A.56.56 0 0013 2H5.618c-.569 0-1.107.538-1.107 1.106v17.48c0 .588.518 1.106 1.107 1.106h12.297c.588 0 1.106-.518 1.106-1.107V7.742a.56.56 0 00-.176-.406zM15.31 18.681H8.209a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h7.1a.56.56 0 010 1.12zm-7.101-3.006a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h7.1a.561.561 0 010 1.12h-7.1zm7.1-3.003h-7.1a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h7.1a.561.561 0 010 1.12zM13.867 7.14c-.384-.384-.588-.933-.588-1.583V3.6l4.353 4.13H15.45c-.653 0-1.2-.205-1.583-.589z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconInvoicePlanFileFilled;
