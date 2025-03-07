/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileCssFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.923 13.217c0 .635.134 1.112.445 1.445.274.288.68.443 1.33.443.3 0 .704-.048.922-.113l-.087-.61a4.113 4.113 0 01-.675.075c-.412 0-.644-.08-.804-.263-.182-.202-.263-.566-.263-1 0-.728.182-1.246.97-1.246.229 0 .503.047.786.129l.107-.611a2.952 2.952 0 00-.958-.165c-1.255 0-1.773.77-1.773 1.916zm3.307 1.064l-.128.636c.37.129.748.188 1.213.193.523 0 .87-.106 1.129-.347.193-.182.305-.443.305-.77 0-.839-.64-1.017-1.172-1.165-.376-.104-.696-.194-.696-.49 0-.233.142-.393.593-.393.258 0 .58.047.88.129l.129-.622A3.336 3.336 0 009.46 11.3c-.781 0-1.364.325-1.364 1.07 0 .851.654 1.025 1.188 1.166.369.098.68.18.68.461 0 .336-.23.465-.722.465-.266 0-.69-.07-1.011-.182zm3.031.636l.13-.636c.321.112.744.182 1.01.182.494 0 .723-.129.723-.465 0-.28-.312-.363-.68-.46-.534-.142-1.188-.316-1.188-1.167 0-.745.582-1.07 1.364-1.07.353 0 .74.053 1.022.15l-.128.623a3.55 3.55 0 00-.88-.13c-.451 0-.594.16-.594.393 0 .297.321.387.697.491.53.148 1.171.326 1.171 1.165 0 .327-.111.588-.305.77-.258.24-.605.347-1.129.347a3.707 3.707 0 01-1.213-.193z"
            />
            <path
                fill={fillColor}
                d="M21.794 7.917c.03.076.047.154.047.235v12.306c0 .75-.644 1.383-1.409 1.383H8.253c-.75 0-1.409-.647-1.409-1.384l.034-2.773h-2.3a2.427 2.427 0 01-2.423-2.423V11.17a2.426 2.426 0 012.42-2.426h2.266V3.54c0-.726.673-1.384 1.41-1.384h7.414c.232 0 .448.087.613.247l5.297 5.126a.87.87 0 01.219.389zM16 3.824V5.59c0 .658.216 1.213.622 1.608.414.398.997.61 1.689.61h1.804L16 3.825zM4.575 16.471h9.846a1.21 1.21 0 001.207-1.21V11.17c0-.667-.54-1.21-1.207-1.21H4.575c-.666 0-1.207.54-1.207 1.21v4.092c0 .667.54 1.21 1.207 1.21z"
            />
        </svg>
    );
};

export default IconFileCssFilled;
