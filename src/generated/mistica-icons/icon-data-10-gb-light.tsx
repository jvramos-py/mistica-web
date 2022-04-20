/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconData10GbLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.673 19.5a.716.716 0 01-.714.714.716.716 0 01-.715-.714.716.716 0 011.429 0zm-.714 1.786H5.03V3.82c0-.607.5-1.107 1.072-1.107h7.5c.285 0 .607.143.82.322l3.822 3.821c.215.214.358.5.358.75v9.75c0 .214.142.357.357.357.214 0 .357-.143.357-.357v-9.75c0-.428-.214-.893-.572-1.25l-3.821-3.821C14.6 2.214 14.066 2 13.6 2H6.1c-1 0-1.785.821-1.785 1.821V22h14.643c.214 0 .357-.143.357-.357s-.143-.357-.357-.357zM12.887 12c-1.107 0-1.786-1.036-1.786-2.679 0-1.678.68-2.678 1.786-2.678 1.107 0 1.786 1.036 1.786 2.678 0 1.643-.714 2.679-1.786 2.679zm0-.714c.786 0 1.072-1.072 1.072-1.965 0-.464-.072-1.964-1.072-1.964-.964 0-1.071 1.357-1.071 1.964 0 .965.285 1.965 1.071 1.965zm-6.071 4.107a2.698 2.698 0 002.678 2.678 2.698 2.698 0 002.679-2.678c0-.214-.143-.357-.357-.357H9.852c-.215 0-.358.143-.358.357s.143.357.358.357h1.57a1.955 1.955 0 01-1.928 1.607 1.982 1.982 0 01-1.964-1.964c0-1.072.893-1.964 1.964-1.964.465 0 .893.142 1.215.428.143.107.393.107.5-.071.107-.143.107-.393-.072-.5-.464-.393-1.071-.572-1.678-.572-1.429 0-2.643 1.215-2.643 2.679zM10.03 12c.214 0 .357-.143.357-.357V7c0-.107-.071-.214-.143-.286a.347.347 0 00-.321-.035l-.893.357c-.178.071-.286.285-.214.464.071.179.286.286.464.214l.393-.178v4.107c0 .214.143.357.357.357zm2.857 5.714v-4.643c0-.214.143-.357.357-.357h1.857c.75.072 1.358.75 1.358 1.5 0 .393-.143.75-.393 1 .464.25.75.75.75 1.322 0 .821-.679 1.5-1.5 1.5h-2.072c-.214.035-.357-.107-.357-.322zm2.429-1.964H13.6v1.607h1.715a.793.793 0 00.786-.786c0-.428-.358-.821-.786-.821zm-1.715-.714h1.358a.793.793 0 00.785-.786c0-.429-.321-.786-.75-.786h-1.393v1.572z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconData10GbLight;
