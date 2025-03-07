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

const IconArrowUpRightFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.624 2c-.884 0-1.648.508-1.984 1.324-.34.816-.16 1.716.464 2.344l2.776 2.78L2 16.328 7.672 22l7.88-7.88 2.78 2.78a2.107 2.107 0 002.344.464A2.118 2.118 0 0022 15.38V2H8.624z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.126 20.458h-.022c-.395-.005-.78-.196-1.143-.56l-5.048-5.025-.017-.017c-.32-.348-.44-.709-.361-1.079.073-.336.302-.605.52-.823l.015-.014 5.118-4.812-2.589-2.589c-.316-.33-.409-.893-.218-1.339.176-.414.566-.66 1.04-.66H19.51c.28-.02.532.07.717.254.185.185.274.44.252.717l-.006 12.146c.012.415-.232.793-.613.955-.457.205-1.05.112-1.406-.215l-.017-.015-2.376-2.378-4.79 4.905-.005.006c-.358.361-.742.543-1.14.543z"
                />
            </svg>
        );
    }
};

export default IconArrowUpRightFilled;
