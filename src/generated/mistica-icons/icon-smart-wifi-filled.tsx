/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSmartWifiFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.73 10.324c.213-.51.1-1.078-.292-1.479l-6.117-6.272c-.55-.565-1.586-.563-2.137 0L7.108 8.797h-2.39c-.826 0-1.448.225-1.901.687-.449.456-.667 1.078-.667 1.899v7.868c0 .84.221 1.468.672 1.919.448.445 1.07.664 1.9.664h3.912c.83 0 1.451-.216 1.897-.664.456-.451.675-1.079.675-1.919v-1.308h7.45c.808 0 1.463-.63 1.463-1.403v-5.334h.25a1.46 1.46 0 001.36-.882zM9.993 19.251c0 .499-.104.843-.316 1.05-.208.21-.55.312-1.043.312H4.721c-.493 0-.834-.101-1.044-.311-.21-.21-.314-.555-.314-1.054V11.38c0-.482.103-.824.316-1.04.216-.218.558-.324 1.042-.324h3.913c.493 0 .835.104 1.045.316.21.213.314.558.314 1.05v7.87zm-3.317-.812c-.414 0-.663.252-.663.67 0 .204.056.366.17.487.118.12.286.182.49.182a.668.668 0 00.49-.182c.116-.118.175-.283.175-.488.002-.42-.244-.67-.662-.67zm7.776-6.21c.493.014.984.33.984 1.017 0 .686-.488 1.002-.972 1.014-.555-.006-1.048-.322-1.048-1.017 0-.695.49-1.011.975-1.014h.061zM10.63 8.88c.053-.058 1.347-1.465 3.759-1.49.076-.005 2.322-.12 3.835 1.583a.407.407 0 01-.031.574l-.003.003a.4.4 0 01-.569-.034c-1.224-1.376-3.12-1.313-3.199-1.31h-.002c-2.067.022-3.146 1.173-3.19 1.223l-.003.003a.407.407 0 01-.597-.552zm3.765.12h.01c.161-.002 1.877-.03 2.99 1.222a.407.407 0 01-.031.574.404.404 0 01-.572-.03c-.893-1.006-2.355-.964-2.375-.953-1.446.014-2.318.93-2.355.968v.001a.403.403 0 01-.567.031.405.405 0 01-.036-.574l.002-.003c.073-.077 1.136-1.216 2.934-1.235zm-1.956 2.48c.033-.036.75-.818 1.967-.832.03-.003 1.235-.045 2.014.824a.41.41 0 01-.034.574.407.407 0 01-.571-.034c-.513-.574-1.378-.563-1.387-.552a2.005 2.005 0 00-1.386.566.407.407 0 01-.603-.546z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSmartWifiFilled;
