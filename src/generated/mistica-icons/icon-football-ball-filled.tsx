/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFootballBallFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.909 8.291L7.126 6.425l.402-3.316A9.6 9.6 0 0111.995 2c.449 0 .883.034 1.313.091l1.641 3.062-1.115 2.308-4.925.83zm5.793-5.897L15.9 4.63l2.2-.442a9.786 9.786 0 00-3.398-1.794zM6.079 6.175l.288-2.347a10.273 10.273 0 00-2.693 2.865l2.405-.518zm13.552 6.882l2.204-2.448a10.681 10.681 0 00-2.72-5.48l-3.27.657L14.79 7.97l2.273 4.664 2.57.423zm-3.575-.02l-2.168-4.443-4.695.787-.737 4.933 4.244 2.26 3.356-3.537zM4.14 18.979a10.725 10.725 0 01-1.724-3.484l2.021.969-.297 2.515zm17.266-2.913A10.92 10.92 0 0022 12.5c0-.144-.005-.283-.01-.422l-1.558 1.732.974 2.256zm-13.54-.802l4.427 2.356.224 2.822-2.181 2.404c-2.017-.355-3.832-1.348-5.25-2.773l.421-3.547 2.36-1.262zm3.824 7.726l1.554-1.713 2.153 1.1A9.537 9.537 0 0112 23a6.44 6.44 0 01-.298-.009h-.013zm5.202-9.242l2.51.412 1.418 3.278c-.942 1.843-2.391 3.36-4.147 4.338l-3.105-1.579-.214-2.72 3.538-3.73zM5.04 15.514l2.342-1.258.773-5.173L6.403 7.25l-3.434.744A10.838 10.838 0 002 12.495c0 .547.041 1.09.119 1.617l2.922 1.402z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.143 2.001l.151.002c1.975.028 9.392.742 9.392 9.874 0 9.115-7.347 9.792-9.322 9.81h-.199c-.249 0-.51-.004-.734-.01C9.501 21.63 2 20.869 2 11.818c0-9.072 7.515-9.778 9.392-9.811.182-.003.39-.006.597-.006l.154.001zm.316 4.15v1.434c.264.07.516.18.732.342L15.37 9.51c.227.16.409.358.557.58l1.154-.485a2.18 2.18 0 01.104-.851l.832-2.56c.07-.222.18-.426.31-.611a7.06 7.06 0 00-2.604-1.71l-.029.032c-.1.111-.202.224-.327.313l-2.182 1.586c-.213.16-.462.274-.726.347zM8.317 4.216a2.195 2.195 0 01-.345-.336c-.916.352-1.832.89-2.616 1.705.109.168.204.348.266.541l.832 2.566c.092.269.123.563.1.857l1.194.552c.151-.227.339-.434.571-.6l2.182-1.585c.21-.16.46-.269.726-.339V6.148a2.147 2.147 0 01-.734-.352l-2.176-1.58zm-.423 11.907l.66-1c-.006-.011-.014-.02-.022-.03l-.022-.031h-.05l-.975-3.003a2.228 2.228 0 01-.11-.773l-1.23-.569a2.21 2.21 0 01-.526.532l-2.176 1.583c-.031.02-.065.038-.098.056l-.062.034c.1 1.22.364 2.24.742 3.1.126-.022.255-.036.387-.036h2.714c.26-.003.521.048.768.137zm8.523-.095h2.731c.18 0 .356.028.533.067.367-.851.624-1.865.722-3.081a1.178 1.178 0 00-.087-.048c-.041-.021-.082-.042-.12-.07l-2.182-1.588a2.123 2.123 0 01-.53-.543l-1.173.493c.008.266-.023.538-.11.8l-.834 2.567a2.377 2.377 0 01-.277.56l.596.972c.236-.081.482-.129.731-.129zm-2.986 4.143l.835-2.566c.081-.266.227-.515.41-.734l-.536-.874c-.291.132-.61.21-.947.21H10.46c-.353 0-.683-.095-.983-.246l-.582.88c.176.218.316.464.4.73l.832 2.563c.013.04.02.08.026.12a.846.846 0 00.016.085c.482.067.924.1 1.291.11.216.005.465.008.706.008h.185c.303-.003.653-.02 1.037-.06l.016-.09c.008-.046.015-.092.028-.136z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconFootballBallFilled;
