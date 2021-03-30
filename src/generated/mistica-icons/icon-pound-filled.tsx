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

const IconPoundFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12 2.16c6.44 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.44 0-9.84-3.403-9.84-9.84C2.16 5.563 5.563 2.16 12 2.16zm2.843 14.387h-4.711c.818-.872 1.115-1.628 1.115-2.69 0-.498-.067-1.016-.2-1.54h2.11c.224 0 .404-.18.404-.404v-.397a.403.403 0 00-.404-.404h-2.482c-.17-.571-.325-1.218-.325-1.86 0-1.456.765-2.134 2.404-2.134.524 0 1.187.073 1.871.202a.402.402 0 00.476-.398v-.364a.406.406 0 00-.283-.387c-.728-.224-1.652-.305-2.224-.305-2.252 0-3.54 1.238-3.54 3.4 0 .71.142 1.387.302 1.93l-.661.045a.404.404 0 00-.375.404v.271c0 .224.179.404.403.404h.997c.168.563.244 1.044.244 1.526 0 .745-.171 1.342-1.04 2.182-.464.446-.697.673-.697 1.118 0 .16.031.302.093.423a.4.4 0 00.358.218h6.168a.403.403 0 00.404-.403v-.431a.408.408 0 00-.407-.406z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPoundFilled;
