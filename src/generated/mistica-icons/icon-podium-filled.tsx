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

const IconPodiumFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.773 16.2c.622 0 1.073.335 1.073.798v4.022c0 .47-.442.82-1.075.82h-3.852V16.2h3.854zM2.16 14.72c0-.554.557-.899 1.073-.899h3.851v8.02H3.233c-.591 0-1.073-.423-1.073-.92v-6.2zm12.462-3.933c.572 0 1.073.48 1.073 1.028v10.031h-7.38V11.818c0-.546.5-1.025 1.072-1.025h5.235v-.006zM10.9 4.933l-1.196.182.888.986c.138.14.208.364.174.558l-.21 1.283 1.129-.558a.627.627 0 01.622.014l1.084.594.002.003s.003 0 .006-.003l-.196-1.333a.675.675 0 01.193-.575l.877-.89-1.244-.266a.643.643 0 01-.47-.345L12 3.403l-.585 1.169a.638.638 0 01-.516.361zM9.507 6.751l-.683-.695a1.274 1.274 0 01-.297-1.308c.148-.45.532-.776.994-.846l.922-.14.417-.882a1.238 1.238 0 012.25 0l.42.885.921.137c.465.07.849.398 1 .849.152.465.037.964-.302 1.308l-.684.698.163.991A1.292 1.292 0 0114.11 9a1.24 1.24 0 01-1.306.076l-.608-.333-.21-.115-.21.115-.605.333A1.242 1.242 0 019.6 8.743a1.276 1.276 0 01-.25-.995l.157-.997z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPodiumFilled;
