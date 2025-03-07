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

const IconInvoicePlanFileLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.2 21.284h13.6c.212 0 .348.144.348.36 0 .212-.136.356-.347.356H4.5V7.216L9.594 2h9.554v15.36c0 .212-.136.356-.347.356-.207 0-.348-.14-.348-.356V2.716h-8.371v5H5.199v13.568zM9.382 3.216L5.688 7h3.695V3.216z"
                />
                <path
                    fill={fillColor}
                    d="M19.5 19.5a.708.708 0 01-.7.716.707.707 0 01-.698-.716c0-.395.313-.716.699-.716.386 0 .699.32.699.716zm-3.836-6.072H7.988c-.21 0-.347.144-.347.356 0 .216.14.356.347.356h7.672c.211 0 .348-.144.348-.356.004-.212-.137-.356-.344-.356zm0 3.572H7.988c-.21 0-.347.144-.347.356 0 .216.14.356.347.356h7.672c.211 0 .348-.144.348-.356.004-.212-.137-.356-.344-.356z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.902 12.548h8.193a.28.28 0 00.28-.28.28.28 0 00-.28-.28H7.902a.28.28 0 00-.28.28c0 .154.126.28.28.28zm8.193 3.006H7.902a.28.28 0 01-.28-.28.28.28 0 01.28-.28h8.193a.28.28 0 01.28.28.28.28 0 01-.28.28zm0 3.003H7.902a.28.28 0 01-.28-.28.28.28 0 01.28-.28h8.193a.28.28 0 01.28.28.28.28 0 01-.28.28z"
                />
                <path
                    fill={fillColor}
                    d="M5.717 21.834H18.28c.44 0 .826-.386.826-.826V7.899a.279.279 0 00-.08-.2l-5.463-5.462a.302.302 0 00-.093-.06.278.278 0 00-.106-.02H5.717c-.417 0-.826.408-.826.826v18.025c0 .431.395.826.826.826zm7.367-19.118v2.451c0 .883.286 1.636.832 2.18.546.543 1.3.832 2.18.832h2.45v12.829c0 .129-.137.266-.266.266H5.717c-.12 0-.266-.146-.266-.266V2.983c0-.107.16-.267.266-.267h7.367zm.56.395l4.507 4.507h-2.056c-1.487 0-2.45-.963-2.45-2.45V3.11z"
                />
            </svg>
        );
    }
};

export default IconInvoicePlanFileLight;
