/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconInvoiceDigitalLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.327 10.77H10.68a.281.281 0 01-.28-.28c0-.155.126-.281.28-.281h2.65a.28.28 0 01.28.28c0 .154-.129.28-.283.28zm0 1.134H10.68a.281.281 0 01-.28-.28.28.28 0 01.28-.28h2.65a.28.28 0 01.28.28c0 .154-.129.28-.283.28zm-2.647 1.134h2.647a.283.283 0 00.283-.28.281.281 0 00-.28-.28h-2.65a.281.281 0 00-.28.28c0 .154.126.28.28.28z"
                fill={fillColor}
            />
            <path
                d="M9.77 14.55h4.473c.3 0 .499-.2.499-.498V9.373a.279.279 0 00-.082-.217l-1.89-1.894a.29.29 0 00-.2-.081h-2.8c-.308 0-.507.199-.507.504v6.356c0 .308.199.51.507.51zm4.412-.56h-4.36V7.742h2.469v.723c0 .723.383 1.17 1.002 1.17h.889v4.357zM12.85 8.465V8.14l.933.936h-.49c-.295 0-.443-.208-.443-.611z"
                fill={fillColor}
            />
            <path
                d="M5.176 16.61H18.83c1.014 0 1.785-.294 2.292-.877.479-.546.72-1.353.72-2.398V8.397c0-1.045-.244-1.852-.72-2.398-.507-.58-1.278-.874-2.292-.874H5.176c-1.014 0-1.784.294-2.291.874-.48.546-.72 1.353-.72 2.398v4.938c0 1.045.24 1.852.72 2.4.507.58 1.277.875 2.29.875zM2.725 8.4c0-1.852.779-2.715 2.45-2.715h13.656c1.673 0 2.451.86 2.451 2.712v4.94c0 1.852-.778 2.715-2.45 2.715H5.175c-1.672 0-2.451-.863-2.451-2.714V8.4zm18.829 10.428H2.436a.281.281 0 01-.28-.28.28.28 0 01.28-.28h19.118a.28.28 0 01.28.28.28.28 0 01-.28.28z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconInvoiceDigitalLight;
