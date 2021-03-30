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

const IconMobilePauseFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.087 16.801c3.213 0 4.709-1.481 4.709-4.663 0-3.182-1.496-4.667-4.709-4.667-3.21 0-4.706 1.482-4.706 4.667 0 3.182 1.496 4.663 4.706 4.663zM20.894 3.115c.641.639.955 1.535.955 2.737v12.305c0 1.216-.314 2.115-.964 2.754-.644.63-1.549.938-2.764.938h-6.21c-1.219 0-2.12-.308-2.762-.938-.577-.566-.888-1.34-.953-2.359v-.549c-.036 0-.072.003-.112.003-3.742 0-5.924-1.871-5.924-5.868 0-4 2.182-5.872 5.924-5.872.034 0 .068.003.101.003v-.417c0-1.185.314-2.076.955-2.72.653-.653 1.558-.972 2.77-.972h6.21c1.222.003 2.13.314 2.774.955zm-5.877 13.846c-.658 0-1.053.392-1.053 1.048 0 .32.092.577.274.759.185.188.454.286.78.286.324 0 .593-.098.778-.286.182-.185.274-.44.274-.76 0-.655-.392-1.047-1.053-1.047zm-8.75-7.655c.336 0 .607.269.607.602v4.711a.607.607 0 01-.608.605.605.605 0 01-.607-.605V9.911c0-.334.274-.605.607-.605zm3.45-.014c.337 0 .608.271.608.602v4.711a.607.607 0 01-.608.605.605.605 0 01-.607-.605V9.894c0-.333.271-.602.607-.602z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobilePauseFilled;
