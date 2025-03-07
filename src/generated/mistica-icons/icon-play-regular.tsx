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

const IconPlayRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.444 21.68c.336.212.71.32 1.08.32.369 0 .739-.108 1.045-.284l13.176-8.112c.034 0 .068-.036.102-.072.472-.432.71-1.108.642-1.752a2.044 2.044 0 00-.978-1.572L6.603 2.28c-.642-.396-1.42-.36-2.091.032A1.997 1.997 0 003.5 4.064v15.9c0 .716.336 1.36.944 1.716zm.743-18.152a.85.85 0 01.404-.108c.098 0 .2.036.302.072l12.98 7.932a.639.639 0 01.302.5.88.88 0 01-.17.5l-13.112 8.04c-.268.144-.57.072-.774-.036-.098-.072-.268-.212-.268-.464v-15.9c0-.284.234-.464.336-.536z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    fillRule="evenodd"
                    d="M6.368 1.983c-1.166-.667-2.618.176-2.618 1.52v16.553c0 1.344 1.452 2.186 2.618 1.52l14.485-8.277c1.175-.672 1.175-2.368 0-3.04L6.368 1.984zM5.25 3.503a.25.25 0 01.374-.218l14.484 8.277a.25.25 0 010 .434L5.624 20.273a.25.25 0 01-.374-.217V3.502z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
};

export default IconPlayRegular;
