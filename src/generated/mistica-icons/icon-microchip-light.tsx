/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: number;
};

const IconMicrochipLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.779 17.541c0 .106-.151.246-.305.246H6.54c-.163 0-.305-.137-.305-.246V6.499c0-.1.162-.255.305-.255h10.933c.143 0 .305.154.305.255V17.54zm3.653-5.123a.412.412 0 000-.824h-2.827v-1.65h2.83a.412.412 0 000-.823h-2.83V6.499c0-.566-.537-1.081-1.131-1.081H14.89V2.572a.408.408 0 00-.409-.412.412.412 0 00-.412.412v2.843h-1.65V2.572a.412.412 0 00-.823 0v2.843h-1.65V2.572a.413.413 0 00-.826 0v2.843H6.538c-.59 0-1.132.515-1.132 1.081v2.622H2.572a.413.413 0 000 .826h2.837v1.65H2.572a.412.412 0 000 .824h2.837v1.65H2.572a.412.412 0 000 .823h2.837v2.647c0 .572.53 1.073 1.132 1.073h2.583v2.82a.414.414 0 00.826 0v-2.82h1.65v2.82a.412.412 0 00.823 0v-2.82h1.65v2.82a.412.412 0 00.824 0v-2.82h2.582c.603 0 1.132-.501 1.132-1.073v-2.647h2.83a.414.414 0 000-.826h-2.836v-1.65l2.827.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMicrochipLight;
