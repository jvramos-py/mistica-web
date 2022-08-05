/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPhotoCameraLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.203 20.032h-.356a.357.357 0 010-.712h.356a1.07 1.07 0 001.067-1.067V8.258a1.07 1.07 0 00-1.067-1.068h-2.855a.344.344 0 01-.252-.104l-2.75-2.75H9.644l-2.75 2.742a.357.357 0 01-.252.104H3.787A1.07 1.07 0 002.72 8.25v9.995c0 .587.48 1.067 1.067 1.067h11.778a.357.357 0 010 .712H3.787A1.777 1.777 0 012 18.244v-9.99c0-.984.8-1.787 1.787-1.787h2.71l2.751-2.751a.357.357 0 01.252-.104h4.998c.096 0 .188.036.252.104l2.75 2.75h2.71c.984 0 1.788.8 1.788 1.788v9.995a1.8 1.8 0 01-1.795 1.783z"
                    fill={fillColor}
                />
                <path
                    d="M16.992 19.676c0 .392.32.712.712.712.392 0 .712-.32.712-.712a.713.713 0 00-.712-.712.708.708 0 00-.712.712zm-9.639-7.14a4.648 4.648 0 004.642 4.641 4.644 4.644 0 004.642-4.637 4.648 4.648 0 00-4.642-4.642 4.644 4.644 0 00-4.642 4.638zm.72-.005a3.926 3.926 0 013.922-3.922 3.923 3.923 0 013.922 3.922 3.926 3.926 0 01-3.922 3.923 3.926 3.926 0 01-3.922-3.923z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.06 4.497c-.566 0-1.082.32-1.332.828l-.676 1.372h-5.46c-.877 0-1.587.71-1.587 1.587v10.049c0 .648.525 1.173 1.173 1.173h17.24c.877 0 1.588-.71 1.588-1.587V8.284c0-.876-.711-1.587-1.588-1.587h-5.55l-.788-1.432a1.484 1.484 0 00-1.3-.768h-1.72zm-.538 1.219a.598.598 0 01.537-.334h1.72c.22 0 .42.118.526.31l.913 1.66.126.23h6.074c.388 0 .703.314.703.702v9.635a.703.703 0 01-.703.702H3.178a.289.289 0 01-.288-.288V8.284c0-.388.314-.702.702-.702h6.011l.121-.247.798-1.62zm1.073 5.273c-.949 0-1.718.77-1.718 1.718v.82c0 .95.77 1.718 1.718 1.718h.82c.949 0 1.718-.769 1.718-1.717v-.82c0-.95-.77-1.719-1.718-1.719h-.82zm-2.603 1.718a2.603 2.603 0 012.603-2.602h.82a2.603 2.603 0 012.603 2.602v.82a2.603 2.603 0 01-2.603 2.603h-.82a2.603 2.603 0 01-2.603-2.602v-.82z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPhotoCameraLight;
