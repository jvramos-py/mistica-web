/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRulerLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.843 17.343c0-.35-.138-.68-.384-.927L7.576 2.528c-.493-.496-1.358-.496-1.851 0L2.54 5.716c-.25.25-.384.577-.384.927-.003.347.138.68.384.924l13.882 13.891c.247.25.575.384.925.384.35 0 .68-.137.927-.384l3.185-3.188a1.29 1.29 0 00.384-.927zm-.99-.316a.452.452 0 010 .638l-3.187 3.188a.457.457 0 01-.639 0L3.145 6.963a.455.455 0 010-.642l3.188-3.19a.454.454 0 01.638.002L8.33 4.492 7.083 5.716a.432.432 0 00-.005.608c.168.168.44.17.608.005L8.935 5.1l1.507 1.51-2.507 2.507a.426.426 0 000 .605.426.426 0 00.605 0l2.507-2.51 1.507 1.508-1.328 1.305-.003.003a.429.429 0 00.603.61l1.333-1.313 1.504 1.504-2.26 2.263a.426.426 0 000 .605.426.426 0 00.605 0l2.263-2.26 1.507 1.51-1.496 1.47a.429.429 0 00-.005.605l.003.003a.425.425 0 00.602.003l1.501-1.474 3.47 3.474zm-2.865.67a.525.525 0 01-.91-.527c.003 0 .003-.003.003-.003a.522.522 0 01.714-.19.53.53 0 01.193.72zm.563.319c.32-.56.126-1.275-.434-1.597h-.003v-.003a1.168 1.168 0 00-1.708 1.32c.08.302.277.56.549.714.56.319 1.274.126 1.596-.434z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRulerLight;
