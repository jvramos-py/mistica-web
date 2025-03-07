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

const IconFirewallFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.275 19.889A.341.341 0 007.53 20h.07c.032 0 4.578-.756 4.578-4.886 0-2.862-1.434-4.335-1.558-4.462l-.006-.006c-.107-.078-.255-.117-.363-.078-.148.039-.218.117-.255.267-.033.189-.22.722-.508 1.022a1.797 1.797 0 01-.4.3c.107-.527.182-1.361.182-2.384 0-2.67-2.15-4.808-2.82-5.475a2.043 2.043 0 01-.195-.205.315.315 0 00-.4-.039.474.474 0 00-.182.378l.002.087c.008.364.032 1.49-.364 3.209-.16.672-.633 1.31-1.141 1.997-.068.09-.136.183-.204.276l-.06.08c-.93 1.23-1.976 2.614-1.903 4.578.107 3.296 2.582 4.43 2.689 4.469.144.072.288.038.4-.078.112-.116.149-.267.074-.417 0 0-.507-1.173-.107-2.99.182-.907.47-1.629.726-2.157l.085.459c.08.438.162.882.24 1.247.103.554.353.983.563 1.342l.057.098c.218.339.4.644.474 1.022.182.834-.037 1.895-.037 1.895 0 .112.032.267.107.34zm11.812-5.191v-4.164h-7.122c.544.795 1.237 2.157 1.307 4.164h5.815zM22 15.832h-5.816v4.163H22v-4.163zM15.091 20h-4.508c1.275-.834 2.475-2.196 2.689-4.163h1.82V20z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.46 2.16h15c.722 0 1.386.77 1.383 1.605v16.47c0 .866-.641 1.606-1.386 1.606H7.939c.44-.177.829-.474 1.112-.863 1.053-1.457.201-3.692-.869-4.644-.487-.429-1.053-.745-1.613-.894a.407.407 0 00-.39.126.411.411 0 00-.064.415l.003.01c.04.117.391 1.174-.555 1.928a3.68 3.68 0 00-.445.415c-.737.868-.697 2.168.106 2.972.143.145.303.268.48.372-1.029-.3-1.961-.893-2.62-1.74-1.313-1.697-1.428-5.363.99-8.095V3.765c0-.843.657-1.605 1.386-1.605zm11.79 5.636l3.38.008V3.765c0-.185-.137-.347-.193-.364H17.25v4.395zm-3.852 6.625l7.233.042V9.047L13.39 9.03a.16.16 0 00.003.027.224.224 0 01.005.04v5.322zm7.233 5.82v-4.538l-3.381-.016v4.918h3.21c.042-.008.17-.157.17-.364zm-9.956.364h5.356l.003-4.927-4.686-.025c.431.661.647 1.44.616 2.227a3.794 3.794 0 01-1.233 2.675l-.028.025a.505.505 0 00-.028.025zM8.605 9.617l-.001.003c-.064.158-1.137 2.796 1.424 4.691l.12.098h.66l1.369.009V9.096c0-.013.004-.026.008-.038a.123.123 0 00.009-.038l-6.908-.017v1.731c.924-.703 1.98-1.232 3.017-1.482a.24.24 0 01.26.09.259.259 0 01.042.275zM5.46 3.4a.523.523 0 00-.171.364h.003v4l3.129.008V3.401H5.46zm4.173 0v4.37l6.398.016V3.401H9.633z"
                />
            </svg>
        );
    }
};

export default IconFirewallFilled;
