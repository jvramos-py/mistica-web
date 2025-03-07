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

const IconSettingsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.3 10.143h1.312c.212 0 .372.168.388.364v2.962a.369.369 0 01-.372.373h-1.313a8.357 8.357 0 01-1.124 2.718l.932.94a.372.372 0 010 .525l-2.097 2.098a.372.372 0 01-.524 0l-.932-.933a8.387 8.387 0 01-2.717 1.125v1.313a.369.369 0 01-.372.372h-2.962a.369.369 0 01-.372-.372v-1.313A8.351 8.351 0 017.43 19.19l-.932.932a.372.372 0 01-.524 0l-2.097-2.097a.373.373 0 01-.104-.26c0-.1.032-.189.104-.26l.932-.933a8.394 8.394 0 01-1.124-2.718H2.372A.369.369 0 012 13.48v-2.96a.37.37 0 01.372-.373h1.313a8.357 8.357 0 011.124-2.718l-.932-.932a.373.373 0 01-.104-.26c0-.1.032-.189.104-.26l2.1-2.099a.373.373 0 01.26-.104c.1 0 .189.032.26.104l.921.933a8.386 8.386 0 012.717-1.125V2.372c0-.212.168-.372.372-.372h2.962c.212 0 .372.168.372.372v1.305a8.35 8.35 0 012.717 1.125l.932-.932a.373.373 0 01.26-.105c.1 0 .188.032.26.104l2.097 2.098a.372.372 0 010 .525l-.932.932a8.404 8.404 0 011.124 2.718zM6.441 11.995a5.551 5.551 0 1011.1 0 5.551 5.551 0 10-11.1 0z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.998 10.264h1.852c.543 0 .98.44.983.984v1.504c0 .54-.44.98-.98.98h-1.855a7.356 7.356 0 01-.653 2.11l1.367 1.366a.997.997 0 010 1.406l-1.098 1.098a.998.998 0 01-1.406 0l-1.37-1.37a7.306 7.306 0 01-2.109.653v1.855c0 .54-.44.98-.98.98h-1.504a.98.98 0 01-.98-.98v-1.855a7.356 7.356 0 01-2.11-.652l-1.37 1.37a.998.998 0 01-1.406 0l-1.098-1.099a.997.997 0 010-1.406l1.367-1.367c-.317-.56-.543-1.462-.65-2.112H3.144c-.54 0-.98-.44-.98-.98v-1.504c0-.54.44-.98.98-.98h1.854c.107-.648.333-1.553.65-2.113L4.28 6.785a.997.997 0 010-1.406l1.098-1.098a.997.997 0 011.406 0l1.37 1.37a7.354 7.354 0 012.11-.653V3.144c0-.54.439-.98.98-.98h1.504c.54 0 .98.44.98.98v1.854a7.307 7.307 0 012.11.653l1.37-1.37a.998.998 0 011.405 0l1.101 1.098a.998.998 0 010 1.406l-1.37 1.37c.309.62.527 1.328.653 2.11zm-4.269 1.734c0-1.863-.868-2.73-2.73-2.73-1.864 0-2.732.867-2.732 2.73s.868 2.731 2.731 2.731 2.731-.868 2.731-2.73z"
                />
            </svg>
        );
    }
};

export default IconSettingsFilled;
