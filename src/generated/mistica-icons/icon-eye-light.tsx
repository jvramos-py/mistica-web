/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEyeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.027 12.154C3.803 16.322 7.719 19 12.036 19c4.244 0 8.124-2.598 9.936-6.69.072-.19 0-.422-.18-.498-.18-.076-.4 0-.472.19-1.704 3.788-5.332 6.234-9.284 6.234-3.989 0-7.617-2.446-9.285-6.234.688-1.531 1.704-2.906 2.94-3.944C7.503 6.565 9.68 5.763 12 5.763c2.612 0 5.08 1.034 7 2.907a.34.34 0 00.508 0 .386.386 0 000-.536C17.476 6.11 14.828 5 12.036 5 9.572 5 7.25 5.84 5.29 7.447c-1.416 1.147-2.54 2.678-3.264 4.399a.45.45 0 000 .308z"
                />
                <path
                    fill={fillColor}
                    d="M7.647 12.002c0 2.523 1.96 4.59 4.353 4.59 2.392 0 4.352-2.067 4.352-4.59 0-2.522-1.96-4.59-4.352-4.59-2.392 0-4.353 2.068-4.353 4.59zm.724 0c0-2.105 1.633-3.826 3.629-3.826s3.628 1.721 3.628 3.826-1.632 3.826-3.628 3.826c-1.996 0-3.629-1.721-3.629-3.826zm13.057-1.911c0 .422-.324.764-.724.764-.4 0-.724-.342-.724-.764 0-.421.324-.763.724-.763.4 0 .724.342.724.763z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.905 11.747a.39.39 0 01.002.508c-.199.235-4.945 5.745-9.88 5.745-4.931 0-9.729-5.507-9.931-5.742a.388.388 0 010-.51C2.296 11.511 7.067 6 12.002 6c4.928.003 9.7 5.512 9.903 5.747zM12.027 17.2c3.967 0 8.014-4.12 9.004-5.196-.993-1.076-5.065-5.198-9.03-5.198-3.966 0-8.033 4.12-9.028 5.198.998 1.074 5.09 5.196 9.054 5.196zm2.547-5.114c0-2.273-1.96-2.464-2.467-2.475a3.74 3.74 0 00-.247 0c-.516.003-2.44.172-2.44 2.461 0 2.292 1.941 2.473 2.46 2.478a3.577 3.577 0 00.236 0c.492-.011 2.458-.189 2.458-2.464z"
                />
            </svg>
        );
    }
};

export default IconEyeLight;
