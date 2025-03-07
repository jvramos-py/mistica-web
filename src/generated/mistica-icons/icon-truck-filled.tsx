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

const IconTruckFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.072 2.356H2v7.32h3.216a.536.536 0 010 1.072H2v2.5h6.428a.536.536 0 010 1.072H2v5.536h9.284V5.572a3.228 3.228 0 00-3.212-3.216zm7.08 3.572h-2.796v13.928h1.428a1.285 1.285 0 01-.004-.234c.002-.04.004-.08.004-.122A3.221 3.221 0 0117 16.284a3.221 3.221 0 013.216 3.216c0 .124-.012.252-.024.372H22v-7.136l-6.848-6.808z"
                />
                <path fill={fillColor} d="M19.144 19.5a2.144 2.144 0 10-4.288 0 2.144 2.144 0 004.288 0z" />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.299 7.455c.37.527 2.557 3.555 2.832 3.922.249.327.708.946.706 1.675v2.969c0 .538-.224 1.07-.611 1.482-.395.411-.916.644-1.423.644h-.868c-.194 1.538-1.255 2.468-2.855 2.468-1.607 0-2.67-.927-2.862-2.468H9.282c-.193 1.538-1.255 2.468-2.854 2.468-1.608 0-2.67-.927-2.871-2.468-.78-.014-1.407-.678-1.407-1.487V4.88c0-.82.642-1.49 1.432-1.49l10.622.009c.787 0 1.43.661 1.43 1.482v1.613l.822-.008h.008c.709 0 1.426.384 1.835.969zM6.43 19.36c1.118 0 1.69-.594 1.69-1.757 0-1.17-.572-1.764-1.69-1.764-1.126 0-1.697.594-1.697 1.764 0 1.163.571 1.757 1.697 1.757zm9.65 0c1.118 0 1.69-.594 1.69-1.757 0-1.17-.572-1.764-1.69-1.764-1.126 0-1.697.594-1.697 1.764 0 1.163.571 1.757 1.697 1.757z"
                />
            </svg>
        );
    }
};

export default IconTruckFilled;
