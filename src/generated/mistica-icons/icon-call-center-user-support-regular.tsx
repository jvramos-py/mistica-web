/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCallCenterUserSupportRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.556 10.686h1.68a.75.75 0 00.75-.75c0-.157-.003-1.332-.01-1.484C18.807 4.259 16.33 1.95 12 1.95c-4.505 0-6.987 2.48-6.987 6.985a.75.75 0 001.5 0C6.513 5.244 8.308 3.45 12 3.45c3.548 0 5.34 1.656 5.478 5.061.002.071.004.368.006.675h-.711a6.93 6.93 0 00.004-.251c0-3.081-1.696-4.777-4.777-4.777-3.081 0-4.777 1.696-4.777 4.777 0 3.08 1.696 4.779 4.777 4.779 2.435 0 4.005-1.061 4.556-3.028zm-1.284-1.5H14.21c-.19-.456-.609-.672-1.21-.672-.84 0-1.324.42-1.324 1.324 0 .904.485 1.325 1.324 1.325.508 0 .886-.154 1.106-.477h.861c-.457 1.035-1.43 1.528-2.967 1.528-2.236 0-3.277-1.042-3.277-3.28 0-2.235 1.04-3.276 3.277-3.276 2.236 0 3.277 1.04 3.277 3.277 0 .085-.002.169-.005.251zM4.034 22.057H19.97a.75.75 0 00.74-.63c.016-.094.355-2.324-1.273-4.237-1.46-1.715-3.97-2.585-7.458-2.585s-5.991.87-7.44 2.585c-1.617 1.915-1.261 4.148-1.244 4.242a.75.75 0 00.739.625zm15.21-1.5H4.754A4.022 4.022 0 015.7 18.14c1.155-1.35 3.266-2.034 6.278-2.034 3.014 0 5.134.686 6.299 2.04.74.857.93 1.806.967 2.412z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCallCenterUserSupportRegular;
