/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSharedMobileDataFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.934 9.286a.508.508 0 01.554-.512l1.373-.003a.578.578 0 00.045-.222V6.53c0-1.394-.768-2.164-2.166-2.164H4.337c-1.417 0-2.165.748-2.165 2.165v8.21c0 .72.182 1.25.554 1.619.37.367.897.543 1.611.543H8.74c.84 0 1.423-.246 1.788-.75a.564.564 0 00.078-.496l-1.61-1.199a.41.41 0 01-.171-.33.41.41 0 01.17-.331l1.188-.89.003-.102c.034.012.07.017.104.02l.605-.454a.679.679 0 00.01-.103V10.94l-1.456-.006a.49.49 0 01-.395-.168.516.516 0 01-.126-.384l.006-1.095zm-2 5.88c-.084.086-.21.128-.364.128s-.28-.042-.365-.128a.503.503 0 01-.123-.362c0-.336.194-.49.488-.49.297 0 .487.157.487.49 0 .163-.042.28-.123.362zm12.722-8.065c.715 0 1.241.18 1.611.547.373.37.555.899.552 1.619v8.207c0 1.417-.748 2.165-2.165 2.165H15.25c-1.398 0-2.165-.77-2.165-2.165V15.21l1.496-.005a.498.498 0 00.395-.168.515.515 0 00.126-.384l-.003-1.098a.508.508 0 00-.555-.512l-1.456-.003v-1.367l.001-.021.002-.021.678-.505c.002.003.005.003.008.003v-.005l1.263-.942a.41.41 0 00.171-.33.41.41 0 00-.17-.33l-1.73-1.295a.586.586 0 01.08-.257c.344-.577.971-.869 1.862-.869h4.403zM17.82 17.886c.081-.079.123-.2.123-.362 0-.333-.19-.49-.487-.49-.294 0-.488.154-.488.49 0 .163.045.28.124.362.084.086.21.128.364.128s.28-.042.364-.128z"
            />
            <path
                fill={fillColor}
                d="M9.654 10.384l2.857.009c.07 0 .126.058.129.126l.008.59c0 .07.048.093.104.051l1.675-1.246c.056-.042.056-.11 0-.152l-1.664-1.246c-.056-.042-.101-.02-.098.05l.008.636c0 .07-.056.126-.123.126l-2.871.003a.162.162 0 00-.185.162l-.003.704c-.014.117.073.196.163.187zm4.728 4.275l-2.857.008a.132.132 0 00-.13.126l-.008.591c0 .07-.047.093-.103.05l-1.675-1.246c-.056-.042-.056-.11 0-.151l1.664-1.247c.056-.042.1-.02.098.05l-.009.637c0 .07.056.126.124.126l2.87.002a.164.164 0 01.186.163l.002.703c.014.115-.075.193-.162.188z"
            />
        </svg>
    );
};

export default IconSharedMobileDataFilled;
