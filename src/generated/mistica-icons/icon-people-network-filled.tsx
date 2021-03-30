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

const IconPeopleNetworkFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.84 6.426c-.697 0-1.24-.185-1.616-.546-.39-.379-.588-.936-.588-1.664 0-.729.196-1.289.588-1.667C10.6 2.185 11.146 2 11.84 2c.698 0 1.244.185 1.622.549.392.378.591.938.591 1.667 0 .725-.199 1.285-.59 1.664-.379.364-.925.546-1.623.546zM8.17 10.84a.253.253 0 01-.251-.252v-.736c0-.704.218-1.303.633-1.737.45-.47 1.123-.72 1.941-.72h2.695c.82 0 1.493.25 1.944.72.414.434.635 1.033.635 1.737v.736a.253.253 0 01-.252.252H8.171zm-2.248 6.432c-.698 0-1.241-.185-1.617-.547-.392-.378-.588-.935-.588-1.663 0-.729.196-1.286.588-1.667.376-.364.922-.552 1.62-.552.697 0 1.243.185 1.621.55.392.377.591.938.591 1.666 0 .725-.199 1.286-.594 1.664-.378.367-.924.549-1.621.549zm1.347.969c.818 0 1.49.25 1.944.72.417.434.636 1.033.636 1.736v.737c0 .14-.112.252-.252.252H2.252A.251.251 0 012 21.434v-.737c0-.703.218-1.305.633-1.736.451-.47 1.123-.723 1.941-.723H7.27v.003zm8.871-1.521c-.392-.378-.591-.936-.591-1.664 0-.728.199-1.289.588-1.667.376-.364.922-.549 1.62-.549.697 0 1.243.185 1.621.55.392.377.591.94.591 1.666 0 .725-.202 1.286-.594 1.664-.378.364-.921.546-1.622.546-.7 0-1.238-.185-1.613-.546zm4.91 2.235c.418.434.636 1.034.636 1.737v.737a.253.253 0 01-.252.252h-7.347a.253.253 0 01-.252-.252v-.737c0-.703.218-1.305.633-1.737.45-.47 1.123-.72 1.94-.72h2.693c.823 0 1.496.25 1.95.72zM14.5 16.34a.621.621 0 01-.858.207l-1.817-1.112-1.818 1.112a.622.622 0 01-.86-.207.627.627 0 01.207-.86l1.843-1.129v-2.143a.625.625 0 011.25 0v2.143l1.842 1.129c.297.18.393.563.21.86z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPeopleNetworkFilled;
