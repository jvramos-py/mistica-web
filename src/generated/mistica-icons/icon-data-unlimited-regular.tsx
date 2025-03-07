/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataUnlimitedRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.213 6.429l-3.786-3.786C15.036 2.214 14.463 2 13.893 2H6.285a2.15 2.15 0 00-2.143 2.143V22h15.714V7.964c0-.571-.214-1.143-.643-1.535zm-.786 14.142H5.57V4.143c0-.393.322-.714.715-.714h7.607c.178 0 .357.071.5.214l3.821 3.821a.705.705 0 01.214.5v12.607zm-6.07-4.821a2.866 2.866 0 01-2.858 2.857 2.866 2.866 0 01-2.857-2.857 2.866 2.866 0 012.857-2.857c.643 0 1.286.214 1.786.643.214.178.285.535.071.75-.178.214-.536.285-.75.071a1.821 1.821 0 00-1.107-.393c-1 0-1.786.786-1.786 1.786S8.5 17.536 9.5 17.536c.786 0 1.464-.536 1.714-1.25H9.856a.55.55 0 01-.536-.536.55.55 0 01.536-.536h1.964a.55.55 0 01.536.536zm4.106-4.321c.964-.965.964-2.536 0-3.465C15.5 7 13.927 7 13 7.964l-1 .965-.964-.965C10.07 7 8.499 7 7.57 7.964c-.928.965-.964 2.536 0 3.465a2.488 2.488 0 001.75.714c.643 0 1.25-.25 1.75-.714l.965-.965.964.965a2.488 2.488 0 001.75.714c.643 0 1.214-.25 1.714-.714zm-6.214-.786a1.401 1.401 0 01-1.964 0 1.401 1.401 0 010-1.964 1.401 1.401 0 011.964 0l.964.964-.964 1zm2.5-.964l.964-.965a1.401 1.401 0 011.965 0 1.401 1.401 0 010 1.965 1.401 1.401 0 01-1.965 0l-.964-1zm3.928 5.892c.215-.285.322-.607.322-.964 0-.928-.75-1.714-1.714-1.714H13.57a.55.55 0 00-.535.536v4.642c0 .286.25.536.535.536h2.072c.928 0 1.714-.75 1.714-1.714 0-.536-.25-1-.679-1.322zm-1.392-1.607a.64.64 0 01.643.643c0 .357-.286.607-.643.607h-1.143v-1.25h1.143zm.357 3.572h-1.5v-1.25h1.5a.64.64 0 01.643.643c0 .357-.286.607-.643.607z"
            />
        </svg>
    );
};

export default IconDataUnlimitedRegular;
