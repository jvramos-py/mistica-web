/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLineRightRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.949 12.194a.676.676 0 000-.516c-.016-.041-.046-.07-.066-.105-.023-.036-.04-.075-.071-.11L12.95 4.216a.686.686 0 10-.999.943l5.768 6.09H4.662a.688.688 0 000 1.375h13.057l-5.893 6.22a.688.688 0 00.025.97.69.69 0 00.972-.025l6.989-7.382c.032-.032.046-.073.07-.109.021-.034.05-.064.067-.103z"
            />
        </svg>
    );
};

export default IconArrowLineRightRegular;
