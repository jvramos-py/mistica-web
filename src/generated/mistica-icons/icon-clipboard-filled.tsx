/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconClipboardFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.591 4.861h-.284v-.005h-6.89V2h7.174v2.861zm1.08-1.787h1.074c1.185 0 2.154.964 2.154 2.144V22H4.11V5.218c0-1.18.97-2.144 2.155-2.144h1.074v2.857h9.333V3.074zm-.542 14.996c.29 0 .542-.252.542-.535a.552.552 0 00-.538-.535H7.88a.552.552 0 00-.537.535c0 .283.253.535.537.535h8.249zM7.88 15.213h8.249c.29 0 .542-.251.542-.535a.552.552 0 00-.538-.535H7.88a.552.552 0 00-.537.535c0 .284.253.535.537.535zm8.249-2.856c.29 0 .542-.252.542-.535a.552.552 0 00-.538-.535H7.88a.552.552 0 00-.537.535c0 .283.253.535.537.535h8.249zM7.88 9.5h8.249c.29 0 .542-.251.542-.535a.552.552 0 00-.538-.534H7.88a.552.552 0 00-.537.534c0 .284.253.535.537.535z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.773 3.591c.854 0 1.602.611 1.602 1.306V20.54c0 .709-.734 1.305-1.602 1.305H6.213c-.869 0-1.603-.6-1.603-1.305V4.894c0-.695.75-1.305 1.602-1.305h2.956c.47-.914 1.442-1.429 2.826-1.429 1.686 0 2.468.709 2.829 1.431h2.95zm-3.914.748c-.078-.249-.316-1.003-1.865-1.003-1.672 0-1.925.838-1.958 1.57l-.006.346v.003c.011.266.028.65 1.964.65 1.938 0 1.952-.382 1.96-.61v-.323a2.405 2.405 0 00-.095-.633zm-3.114.404a.55.55 0 00.551.549h1.393a.553.553 0 00.554-.55.553.553 0 00-.555-.548h-1.392a.55.55 0 00-.551.549z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconClipboardFilled;
