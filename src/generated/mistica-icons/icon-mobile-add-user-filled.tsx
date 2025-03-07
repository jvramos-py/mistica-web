/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMobileAddUserFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.509 5.387H14.9c.625-1.06 1.667-1.833 2.881-2.061C17.152 2.52 16.198 2 15.12 2H8.935C7.101 2 5.601 3.504 5.51 5.387zM15.12 22H8.935c-1.834 0-3.334-1.509-3.426-3.387h13.038C18.454 20.495 16.954 22 15.12 22zm3.44-9.824v5.358H5.5V6.462h8.938c-.11.397-.176.813-.176 1.248 0 2.464 1.927 4.466 4.298 4.466zm-5.094 1.486c.488-.49.796-1.175.796-1.934 0-1.477-1.157-2.679-2.577-2.679-1.421 0-2.578 1.202-2.578 2.679 0 .763.312 1.454.805 1.938-1.122.467-1.839 1.39-1.839 2.524 0 .297.229.535.515.535a.523.523 0 00.515-.535c0-1.033 1.082-1.788 2.577-1.788 1.518 0 2.578.736 2.578 1.788 0 .297.229.535.515.535a.526.526 0 00.523-.53c0-1.157-.7-2.072-1.83-2.533zm-1.781-3.539c.853 0 1.548.723 1.548 1.61 0 .886-.695 1.609-1.548 1.609-.854 0-1.549-.723-1.549-1.61 0-.886.695-1.609 1.549-1.609zm6.875 1.335c1.988 0 3.607-1.682 3.607-3.748 0-2.067-1.619-3.749-3.607-3.749-1.988 0-3.607 1.682-3.607 3.749 0 2.066 1.619 3.748 3.607 3.748zm2.577-3.748c0 1.48-1.157 2.679-2.577 2.679-1.421 0-2.578-1.203-2.578-2.68 0-1.476 1.157-2.678 2.578-2.678 1.42 0 2.577 1.202 2.577 2.679zm-2.063-.535h1.201c.286 0 .515.242.515.54a.523.523 0 01-.515.534h-1.2v1.243a.523.523 0 01-.515.535.523.523 0 01-.515-.534V8.245h-1.2a.523.523 0 01-.515-.535c0-.298.228-.535.514-.535h1.201V5.927c0-.297.229-.535.515-.535.286 0 .514.238.514.535v1.248z"
            />
        </svg>
    );
};

export default IconMobileAddUserFilled;
