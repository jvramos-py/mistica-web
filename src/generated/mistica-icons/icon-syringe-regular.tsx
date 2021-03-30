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

const IconSyringeRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.661 7.25l-1.174-1.183 2.224-2.24 1.174 1.181-2.224 2.241zm-7.613 9.736l-3.135-3.165.616-.628 1.832 1.843a.523.523 0 00.378.157c.14 0 .272-.05.379-.157a.54.54 0 000-.753L8.286 12.44l.986-1 1.207 1.199a.575.575 0 00.375.157c.14 0 .28-.06.378-.166a.538.538 0 000-.759l-1.207-1.19 1.272-1.272 2.034 2.059a.576.576 0 00.378.157c.14 0 .28-.06.378-.157a.53.53 0 000-.76L12.042 8.65l1.272-1.28 1.123 1.123a.566.566 0 00.378.148c.14 0 .28-.05.378-.156a.542.542 0 000-.762l-1.126-1.107.608-.619 3.143 3.165-7.77 7.824zm-2.25-.47l-.622.627-.565-.572.624-.635c.009-.009.009-.017.017-.026l.574.586c-.01.011-.02.011-.028.02zm13.703-11.63l-2.658-2.679a.612.612 0 00-.868 0 .618.618 0 00-.107.712L15.62 5.193l-1.1-1.106a.6.6 0 00-.872 0 .627.627 0 000 .877l.157.156-8.196 8.267a.612.612 0 000 .876l.779.785c-.009.008-.017.008-.026.016L5.303 16.14a.612.612 0 000 .877l.246.25-3.37 3.388a.627.627 0 000 .877.611.611 0 00.869 0l3.372-3.398.32.323a.6.6 0 00.436.182c.157 0 .311-.06.435-.182l1.058-1.068c.009-.008.009-.016.017-.025l.927.933a.65.65 0 00.437.182c.157 0 .32-.067.435-.182l8.204-8.266.18.182c.123.115.28.182.433.182a.65.65 0 00.435-.182.627.627 0 000-.877L18.532 8.12l2.25-2.266a.588.588 0 00.722-.1.605.605 0 00-.003-.869z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSyringeRegular;
