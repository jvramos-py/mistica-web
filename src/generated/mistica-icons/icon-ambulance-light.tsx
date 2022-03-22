/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAmbulanceLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.843 12.995c-.009-.65-.426-1.202-.684-1.535a335.813 335.813 0 01-2.905-3.858c-.356-.498-.983-.815-1.608-.848V5.07c0-.692-.599-1.258-1.333-1.258H3.49c-.734 0-1.334.558-1.334 1.25v11.473c0 .692.6 1.258 1.33 1.255h.043c.131 1.527 1.126 2.426 2.734 2.426 1.619 0 2.61-.9 2.745-2.423l4.395.008c.134 1.516 1.126 2.415 2.745 2.415 1.61 0 2.602-.9 2.734-2.415l1.075-.008c.468 0 .95-.207 1.311-.566.367-.367.575-.84.575-1.316v-2.916zm-6.028 1.722c-1.359.12-2.227.927-2.395 2.252 0 0-4.426-.01-4.426-.008-.185-1.426-1.168-2.266-2.729-2.266-1.551 0-2.535.843-2.717 2.266H3.49c-.275 0-.499-.193-.499-.426V5.062c0-.224.224-.418.499-.418h11.823c.275 0 .502.194.502.426v9.647zm5.193 1.194c0 .249-.118.515-.33.722-.21.207-.477.325-.726.325l-1.084.011c-.165-1.269-.958-2.067-2.224-2.235V7.586c.358.036.734.226.935.501.372.528 2.59 3.448 2.911 3.872l.008.01c.193.25.501.659.51 1.023v2.918zm-4.86 3.473c-1.27 0-1.936-.667-1.936-1.924 0-1.267.667-1.933 1.936-1.933 1.258 0 1.924.667 1.924 1.933 0 1.257-.666 1.924-1.924 1.924zm-9.883 0c-1.257 0-1.924-.667-1.924-1.924 0-1.267.667-1.933 1.924-1.933 1.27 0 1.936.667 1.936 1.933 0 1.257-.667 1.924-1.936 1.924zm6.463-8.664h-2.194a.391.391 0 00-.29.123.394.394 0 00-.127.294v2.19H8.683v-2.19a.417.417 0 00-.418-.417h-2.19V9.294l2.19-.008c.23 0 .418-.188.418-.417l.008-2.185h1.426v2.193c.003.23.19.412.417.409h2.194v1.434zm.832-1.532c0-.392-.381-.734-.816-.734h-1.792V6.661c0-.434-.342-.81-.734-.81H8.585c-.392 0-.734.376-.734.81v1.793l-1.793.008c-.442 0-.818.336-.818.726v1.641c0 .393.376.734.818.734l1.793-.008v1.79c0 .442.333.818.734.818h1.633c.4 0 .734-.376.734-.818v-1.79h1.793c.43 0 .815-.342.815-.734V9.188z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAmbulanceLight;
