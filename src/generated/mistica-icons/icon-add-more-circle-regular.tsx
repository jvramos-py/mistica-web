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
    size?: string | number;
};

const IconAddMoreCircleRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.98 11.215a.751.751 0 010 1.502h-5.236v5.245a.751.751 0 01-1.502 0v-5.248H6.017a.751.751 0 010-1.503h5.225V6.038a.751.751 0 011.502 0v5.177h5.236zm-5.46 11.279c3-.055 9.977-1.185 9.977-10.463 0-9.279-7.017-10.45-10.033-10.522-.286-.006-.573-.01-.86-.01h-.226c-2.97.027-9.875 1.096-9.875 10.463 0 9.381 6.973 10.494 9.971 10.535.348.004.697.004 1.045-.003zM12.498.01C14.855.068 24 .997 24 12.03c0 11.062-9.162 11.919-11.45 11.963-.215.004-.461.007-.71.007-.13 0-.26 0-.39-.003C9.04 23.962 0 23.092 0 11.962 0 .847 8.954.02 11.365 0h.239c.307 0 .625.003.895.01z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreCircleRegular;
