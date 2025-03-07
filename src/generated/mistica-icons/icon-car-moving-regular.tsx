/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCarMovingRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.298 11.926c1.045 1.717.353 2.876-.16 3.249a.597.597 0 01-.353.115h-2.014c-.218 1.017-1 1.633-2.16 1.633-1.16 0-1.94-.614-2.16-1.633h-2.615c-.222 1.014-1.003 1.624-2.157 1.624-1.157 0-1.939-.61-2.157-1.624H6.211a.597.597 0 01-.583-.457c-.008-.034-.201-.849-.131-2.064-.009-.905.552-2.429 1.82-3.712a6.556 6.556 0 014.76-1.977c3.605 0 5.437 2.039 5.98 2.773.672.109 2.3.53 3.24 2.073zm-.768 2.162c.126-.202.272-.678-.252-1.538-.83-1.358-2.486-1.526-2.594-1.537h-.005a.605.605 0 01-.476-.292c-.06-.098-1.53-2.443-5.126-2.443a5.383 5.383 0 00-3.908 1.62c-.975.983-1.479 2.201-1.473 2.896-.026.431-.017.863.028 1.291h.795c.216-1.025 1-1.644 2.163-1.644 1.165 0 1.946.619 2.162 1.644h2.608c.216-1.02 1-1.638 2.162-1.638 1.163 0 1.944.616 2.163 1.638l1.753.003zm-3.918 1.633c.703 0 1.03-.328 1.03-1.034 0-.705-.327-1.036-1.03-1.036-.703 0-1.031.328-1.031 1.037 0 .705.328 1.033 1.03 1.033zM10.71 14.68c0-.706-.328-1.034-1.031-1.034-.703 0-1.031.328-1.031 1.034s.328 1.037 1.03 1.037c.704 0 1.032-.328 1.032-1.037zm-5.625-1.137a.6.6 0 00-.6-.6H3.18a.598.598 0 100 1.2h1.306a.6.6 0 00.599-.6zm-.347-2.6a.6.6 0 010 1.2H2.754a.597.597 0 01-.599-.6.6.6 0 01.6-.6h1.983zm.63-.773a.6.6 0 000-1.199h-1.54a.6.6 0 000 1.2h1.54z"
            />
        </svg>
    );
};

export default IconCarMovingRegular;
