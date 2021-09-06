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

const IconCodeRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.23 18.105a.222.222 0 00.227-.218V8.842H3.23v9.042c0 .12.103.218.227.218H20.23v.003zM3.46 5.707a.222.222 0 00-.228.219v1.73H20.46v-1.73c0-.12-.1-.219-.227-.219H3.46zm16.77-1.182c.804 0 1.456.63 1.456 1.404v11.958c0 .773-.652 1.403-1.456 1.403H3.46c-.805 0-1.46-.63-1.46-1.403V5.929c0-.774.653-1.404 1.46-1.404h16.77zM6.157 7.15a.558.558 0 01-.569-.55c0-.304.255-.548.569-.548.316 0 .568.246.568.549a.558.558 0 01-.568.549zm1.709 0a.558.558 0 01-.57-.55c0-.304.256-.548.57-.548.316 0 .568.246.568.549a.556.556 0 01-.568.549zm-3.42 0a.558.558 0 01-.57-.55c0-.304.253-.548.57-.548.316 0 .568.246.568.549a.556.556 0 01-.569.549zm4.436 3.989a.54.54 0 01-.039.781L6.97 13.56l1.88 1.672a.539.539 0 01.03.782.578.578 0 01-.42.176.575.575 0 01-.389-.148L5.732 13.96a.543.543 0 01-.185-.406.54.54 0 01.188-.406l2.339-2.045a.585.585 0 01.81.037zm6.645-.04l2.339 2.045a.546.546 0 01.187.406.549.549 0 01-.185.41l-2.339 2.08a.591.591 0 01-.81-.03.539.539 0 01.032-.782l1.88-1.672-1.875-1.639a.539.539 0 01-.039-.781.59.59 0 01.81-.037zm-2.544-.07c.289.126.42.451.289.732l-1.897 4.078a.578.578 0 01-.523.328.63.63 0 01-.236-.048.542.542 0 01-.288-.728l1.896-4.079c.129-.283.468-.409.76-.283z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCodeRegular;
