/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPlayCircleFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.996 2.17c3.123 0 5.552.815 7.222 2.423 1.733 1.67 2.61 4.165 2.61 7.412 0 3.246-.88 5.736-2.61 7.406-1.67 1.608-4.098 2.423-7.222 2.423-3.123 0-5.552-.815-7.218-2.423-1.731-1.67-2.608-4.16-2.608-7.406 0-3.247.877-5.74 2.608-7.41 1.666-1.61 4.095-2.425 7.218-2.425zM9.44 16.24l6.652-3.84a.472.472 0 00.177-.18.485.485 0 00-.177-.664L9.44 7.716a.485.485 0 00-.728.42v7.684a.485.485 0 00.728.42z"
            />
        </svg>
    );
};

export default IconPlayCircleFilled;
