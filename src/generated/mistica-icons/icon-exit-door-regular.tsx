/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconExitDoorRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.751 2v7.679H6.894l.572-.572a.69.69 0 000-1 .69.69 0 00-1 0L4.18 10.393l2.286 2.286a.705.705 0 00.5.214.705.705 0 00.5-.214.69.69 0 000-1l-.572-.572h6.5a.716.716 0 00.714-.714.716.716 0 00-.714-.714H10.18v-6.25h7.214l-2 2a.705.705 0 00-.214.5V17h-5v-4.107a.716.716 0 00-.714-.714.716.716 0 00-.715.714v5.536h6.429v2.857c0 .285.178.535.428.643.108.071.18.071.286.071a.705.705 0 00.5-.214l3.215-3.215a.705.705 0 00.214-.5V2H8.75zm9.643 15.786L16.61 19.57V6.214l1.785-1.785v13.357z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExitDoorRegular;
