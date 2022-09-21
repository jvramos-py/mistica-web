/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWorldDeviceFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.176 12.321c.036.25.036.5.036.75 0 4.929-4 8.929-8.928 8.929-4.929 0-8.929-4-8.929-8.929 0-4.928 4-8.928 8.929-8.928 1.285 0 2.464.286 3.571.75v1.571c-1.071-.571-2.286-.928-3.571-.928a7.08 7.08 0 00-1.25.107c.357.857.678 1.857.428 2.607-.25.714-1.107 2-2.821 2.107.143.036.285.107.428.143a3.064 3.064 0 011.715 1.429c.285.5.892.678 1.392.464a1.326 1.326 0 011.215.036 1.3 1.3 0 01.678 1c.107.892-.107 2.571-1.643 3.285-.535.25-.607.5-.714.965-.107.392-.25.857-.714 1.285-.25.25-.607.357-.964.357-.215 0-.429-.035-.679-.107-1.036-.321-2.357-1.5-2.75-3.285-.107-.429-.143-.858-.143-1.358 0-.321-.321-1.75-.821-2.142-.107-.072-.179-.072-.286-.036-.107.036-.143.071-.179.071a.517.517 0 01-.392.036v.571a7.5 7.5 0 007.5 7.5 7.348 7.348 0 004.892-1.857c-.5-.821-.464-1.535-.428-2.143.036-.785.107-1.392-1.107-2.178-.857-.572-1.322-1.464-1.286-2.464.071-1 .607-1.893 1.393-2.286.036 0 .036 0 .071-.036v.25c0 1.393 1.107 2.5 2.5 2.5h2.5c.143 0 .25 0 .357-.036zM15.57 8.607h6.072V5.036H15.57v3.571zM20.212 2h-3.214c-.786 0-1.429.643-1.429 1.429v.535h6.072V3.43c0-.786-.643-1.429-1.429-1.429zM15.57 9.679v.178c0 1 .786 1.786 1.786 1.786h2.857c.786 0 1.429-.643 1.429-1.429V9.68H15.57z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWorldDeviceFilled;
