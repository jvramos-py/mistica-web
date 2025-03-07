/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconGuruRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.533 14.314a6.668 6.668 0 003.134-5.647A6.676 6.676 0 0012 2a6.676 6.676 0 00-6.667 6.667 6.668 6.668 0 003.135 5.647C4.65 15.348 2 18.03 2 21.26a.74.74 0 001.48 0c0-3.267 3.821-5.927 8.52-5.927s8.52 2.66 8.52 5.927a.74.74 0 001.48 0c0-3.229-2.65-5.912-6.467-6.946zM12 3.479a5.19 5.19 0 014.68 2.964h-3.011c-.503 0-.948.308-1.162.74h-1.01a1.315 1.315 0 00-1.161-.74H7.325A5.178 5.178 0 0112 3.479zm1.669 4.073h2.039v.925c0 .479-.26.74-.74.74h-.93c-.232 0-.554 0-.554-.74v-.74c-.005-.085.095-.185.185-.185zm-5.372 0h2.034c.085 0 .185.1.185.185v.74c0 .74-.322.74-.555.74h-.924c-.48 0-.74-.266-.74-.74v-.925zm-1.361.005h.247v.925c0 1.09.763 1.854 1.854 1.854h.924c1.043 0 1.67-.693 1.67-1.854v-.185h.739v.185c0 1.161.621 1.854 1.669 1.854h.925c1.09 0 1.853-.764 1.853-1.854v-.925h.247c.08.36.123.73.123 1.11A5.195 5.195 0 0112 13.854a5.195 5.195 0 01-5.187-5.187c0-.384.042-.754.123-1.11z"
            />
        </svg>
    );
};

export default IconGuruRegular;
