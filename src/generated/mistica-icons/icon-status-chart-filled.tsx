/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconStatusChartFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21 2v20h-4.437V2H21zM10.282 22h4.436V8.667h-4.436V22zm-1.845 0H4v-7.45h4.437V22z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.776 4.522a1.94 1.94 0 00-1.941 1.936c0 .468.173.894.453 1.227l-2.392 4a1.872 1.872 0 00-.448-.056c-.563 0-1.067.246-1.42.63l-4.129-1.81c.003-.053.017-.103.017-.159a1.94 1.94 0 00-3.882 0c0 .476.187.924.495 1.275l-2.204 3.89a1.922 1.922 0 00-.359-.036 1.94 1.94 0 00-1.94 1.935 1.943 1.943 0 003.884 0c0-.493-.19-.935-.495-1.277l2.21-3.896c.114.022.232.045.35.045a1.94 1.94 0 001.423-.63l4.126 1.806c-.003.053-.017.104-.017.16a1.94 1.94 0 003.88.002v-.002a1.91 1.91 0 00-.432-1.202l2.398-4.014c.134.03.274.05.42.05 1.07 0 1.936-.865 1.938-1.935a1.935 1.935 0 00-1.935-1.939z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconStatusChartFilled;
