/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconData30GbLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.674 19.5a.716.716 0 01-.714.714.716.716 0 01-.715-.714c0-.393.322-.714.715-.714.392 0 .714.321.714.714zm-.714 1.786H5.03V3.82c0-.607.5-1.107 1.071-1.107h7.5c.286 0 .608.143.822.322l3.821 3.821c.215.214.357.5.357.75v9.75c0 .214.143.357.358.357.214 0 .357-.143.357-.357v-9.75c0-.428-.215-.893-.572-1.25l-3.821-3.821C14.602 2.214 14.067 2 13.602 2h-7.5c-1 0-1.785.821-1.785 1.821V22H18.96c.214 0 .357-.143.357-.357s-.143-.357-.357-.357zM6.817 15.393a2.698 2.698 0 002.678 2.678 2.698 2.698 0 002.679-2.678c0-.214-.143-.357-.357-.357H9.852c-.214 0-.357.143-.357.357s.143.357.357.357h1.572a1.955 1.955 0 01-1.929 1.607 1.982 1.982 0 01-1.964-1.964c0-1.072.893-1.964 1.964-1.964.465 0 .893.142 1.215.428.142.107.392.107.5-.071.107-.143.107-.393-.072-.5-.464-.393-1.071-.572-1.678-.572-1.429 0-2.643 1.215-2.643 2.679zm5-6.072c0-1.678.678-2.678 1.785-2.678 1.108 0 1.786 1.036 1.786 2.678 0 1.643-.714 2.679-1.786 2.679-1.107 0-1.785-1.036-1.785-2.679zm.714 0c0 .965.286 1.965 1.071 1.965.786 0 1.072-1.072 1.072-1.965 0-.464-.072-1.964-1.072-1.964-.964 0-1.07 1.357-1.07 1.964zm-2.929 1.965c-.785 0-1.07-.25-1.07-.25a.345.345 0 00-.5 0 .345.345 0 000 .5c.035.035.5.464 1.606.464.822 0 1.5-.679 1.5-1.5a1.46 1.46 0 00-.536-1.143c.322-.286.536-.678.536-1.143 0-.821-.678-1.5-1.5-1.5-1.107 0-1.536.429-1.607.465a.345.345 0 000 .5.382.382 0 00.5.035s.286-.25 1.107-.25c.429 0 .786.357.786.786a.793.793 0 01-.786.786h-.786c-.214 0-.357.143-.357.357s.143.357.357.357h.786c.429 0 .786.357.786.786a.847.847 0 01-.822.75zm3.286 6.428v-4.643c0-.214.143-.357.357-.357h1.857c.75.072 1.358.75 1.358 1.5 0 .393-.143.75-.393 1 .464.25.75.75.75 1.322 0 .821-.679 1.5-1.5 1.5h-2.072c-.214.035-.357-.107-.357-.322zm2.429-1.964h-1.715v1.607h1.715a.793.793 0 00.785-.786c0-.428-.357-.821-.785-.821zm-1.715-.714h1.358a.793.793 0 00.785-.786c0-.429-.321-.786-.75-.786h-1.393v1.572z"
            />
        </svg>
    );
};

export default IconData30GbLight;
