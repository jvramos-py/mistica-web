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

const IconFamilyFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.79 5.518a3.548 3.548 0 01-1.627 2.997c2.259.526 3.767 2.063 3.772 4.03v.014a2.983 2.983 0 00-2.322-1.123c-1.674 0-3.036 1.413-3.036 3.148 0 .593.156 1.138.43 1.612-.69.432-1.175 1.053-1.385 1.797a1.993 1.993 0 00-.187-.133 3.208 3.208 0 00.429-1.602 3.178 3.178 0 00-1.317-2.594c-.438-1.261-1.44-2.27-2.816-2.883a4.26 4.26 0 00.677-1.251c.603-.465 1.358-.816 2.222-1.015a3.536 3.536 0 01-1.628-2.997C12.002 3.58 13.53 2 15.4 2s3.392 1.579 3.392 3.518z"
                />
                <path
                    fill={fillColor}
                    d="M7.714 20.52v1.461H2v-6.852c0-1.967 1.5-3.504 3.744-4.035a3.544 3.544 0 01-1.6-2.982c0-1.94 1.522-3.518 3.392-3.518 1.87 0 3.392 1.579 3.392 3.518 0 1.256-.64 2.361-1.6 2.982 1.44.342 2.57 1.09 3.195 2.106a2.831 2.831 0 00-.699-.09c-1.673 0-3.035 1.413-3.035 3.148 0 .593.155 1.138.43 1.612-.942.588-1.505 1.522-1.505 2.65zm12.348-4.053a2.448 2.448 0 00.868-1.873c0-1.328-1.042-2.41-2.322-2.41s-2.322 1.082-2.322 2.41c0 .758.343 1.436.873 1.877-1.102.346-1.81 1.105-1.92 2.106a3.01 3.01 0 01.69 1.944V22H22v-3.148c.005-1.143-.736-2.01-1.938-2.385z"
                />
                <path
                    fill={fillColor}
                    d="M14.146 16.263a2.45 2.45 0 01-.868 1.873c1.197.374 1.938 1.242 1.938 2.385V22H8.432v-1.48c0-1.137.74-2 1.943-2.38a2.44 2.44 0 01-.873-1.877c0-1.328 1.042-2.409 2.322-2.409s2.322 1.081 2.322 2.409z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.335 5.52c.288.454.521.748.919 1.16l.015.015c.051.052.168.17.27.242a.787.787 0 00.32.146c.03.008.064.014.098.017h.081a.378.378 0 00.098-.017.822.822 0 00.32-.146 2.494 2.494 0 00.296-.269c.39-.406.62-.7.908-1.148.364-.571.613-1.135.742-1.68.14-.595.026-1.088-.325-1.39a1.296 1.296 0 00-.776-.297 1.756 1.756 0 00-.94.235l-.062.035c-.085.048-.171.097-.264.153a.091.091 0 01-.036.011.064.064 0 01-.04-.011 5.922 5.922 0 00-.324-.188 1.756 1.756 0 00-.941-.235c-.297.017-.575.12-.78.297-.346.3-.464.793-.324 1.39.132.545.38 1.109.745 1.68zm-3.263 6.815c-.874 0-1.558-.232-2.031-.689-.49-.473-.737-1.18-.737-2.092 0-.914.25-1.62.737-2.096.473-.462 1.157-.692 2.03-.692.875 0 1.558.233 2.034.692.49.48.743 1.185.743 2.098 0 .914-.252 1.62-.743 2.096-.476.45-1.16.683-2.033.683zm7.812-.689c.473.457 1.157.69 2.03.69.875 0 1.558-.233 2.034-.684.49-.477.743-1.182.743-2.096 0-.913-.252-1.619-.742-2.098-.477-.46-1.16-.692-2.034-.692-.874 0-1.558.23-2.031.692-.487.476-.737 1.182-.737 2.096 0 .913.247 1.619.737 2.092zm-2.871-1.521c.571 0 1.02.151 1.328.454.322.313.487.773.487 1.372 0 .597-.162 1.06-.487 1.37-.308.297-.76.448-1.328.448-.572 0-1.02-.151-1.328-.45-.322-.309-.482-.771-.482-1.37 0-.6.16-1.06.482-1.37.311-.303.756-.454 1.328-.454zm-1.807 4.653a3.922 3.922 0 00-1.445-.258v.003H5.38c-1.028 0-1.869.313-2.437.907-.518.544-.793 1.3-.793 2.185v4.146a.08.08 0 00.079.078h5.747v-4.283c0-.795.258-1.49.748-2 .384-.403.891-.663 1.482-.778zm2.91.753c.673 0 1.225.205 1.594.594.342.356.524.852.524 1.431v4.283H8.797v-4.283c0-.58.18-1.075.518-1.428.37-.39.922-.594 1.594-.594h2.207v-.003zm8.723 2.084c0-.888-.277-1.641-.798-2.187-.569-.594-1.412-.908-2.44-.905h-3.378c-.527 0-1.006.087-1.426.249.6.112 1.115.375 1.507.781.49.513.75 1.205.75 2.003v4.28h5.707a.076.076 0 00.078-.075v-4.146z"
                />
            </svg>
        );
    }
};

export default IconFamilyFilled;
