/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVideoDisabledRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.554 6.592a.744.744 0 00-.806.15l-4.67 4.584V7.664c0-.623-.499-1.13-1.11-1.13H7.495l-4.23-4.313a.732.732 0 00-1.048 0 .765.765 0 000 1.067l12.376 12.607v.444H3.483V8.041h.74c.408 0 .74-.338.74-.753a.748.748 0 00-.74-.754h-1.11c-.612 0-1.11.507-1.11 1.13v9.057c0 .623.498 1.13 1.11 1.13h11.855c.417 0 .777-.241.967-.59l4.434 4.517a.722.722 0 001.043 0 .765.765 0 000-1.068l-5.335-5.438v-2.217l4.671 4.584a.73.73 0 00.801.154.754.754 0 00.45-.695V7.283a.736.736 0 00-.445-.69zM8.98 8.042h5.619v5.723L8.978 8.04zm8.355 4.148l3.191-3.13v6.26l-3.191-3.13z"
            />
        </svg>
    );
};

export default IconVideoDisabledRegular;
