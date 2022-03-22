/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMusicRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M22 2.755a.8.8 0 00-.29-.604.68.68 0 00-.652-.113L8.35 5.822a.722.722 0 00-.544.718v9.646a3.42 3.42 0 00-2.178-.755C3.63 15.43 2 17.134 2 19.21S3.627 23 5.624 23s3.628-1.703 3.628-3.78V7.11L20.51 3.741v9.042a3.42 3.42 0 00-2.178-.755c-1.997 0-3.628 1.704-3.628 3.78 0 2.077 1.635 3.78 3.628 3.78s3.628-1.703 3.628-3.78C22 15.771 22 2.755 22 2.755zM5.66 21.485c-1.2 0-2.178-1.023-2.178-2.27 0-1.246.982-2.27 2.178-2.27s2.179 1.024 2.179 2.27c0 1.247-.979 2.27-2.179 2.27zm10.53-5.677c0-1.246.982-2.27 2.178-2.27s2.178 1.024 2.178 2.27c0 1.25-.982 2.27-2.178 2.27-1.2 0-2.178-1.023-2.178-2.27z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.655 4.651c.543.054.972.507.972 1.056h-.003v12.538h-.014c.001.02.004.04.007.058.003.026.007.05.007.08 0 2.504-1.812 3.425-3.367 3.453l-.202.003h-.078c-1.558-.022-3.373-.947-3.373-3.473 0-2.53 1.807-3.443 3.353-3.454l.292.003a3.737 3.737 0 012.092.686V8.663l-8.927-2.387v7.877c0 .014.002.026.004.039a.233.233 0 01.004.04.271.271 0 01-.004.04.257.257 0 00-.004.04v.21h-.02c-.143 2.272-1.851 3.135-3.341 3.163h-.286c-1.552-.022-3.367-.944-3.367-3.47 0-2.53 1.807-3.443 3.353-3.454.092 0 .202 0 .291.003.712.016 1.465.23 2.087.68V3.212a1.07 1.07 0 011.076-1.062l.168.022 9.28 2.48zm-9.241-1.156v1.467L19.34 7.35V5.88l-8.927-2.386zm6.58 17.075l.238-.003c.79-.014 2.11-.316 2.112-2.187 0-1.869-1.33-2.18-2.123-2.2l-.255-.002c-.776.008-2.076.303-2.076 2.188 0 1.893 1.317 2.193 2.104 2.204zM7.03 16.42c.776-.017 2.059-.317 2.101-2.107v-.162c-.042-1.793-1.336-2.104-2.115-2.12l-.25-.003c-.775.005-2.08.3-2.08 2.188 0 1.89 1.316 2.193 2.103 2.204.084.003.168.003.241 0z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMusicRegular;
