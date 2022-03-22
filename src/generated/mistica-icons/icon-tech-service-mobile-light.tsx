/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTechServiceMobileLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.294 18.654c0-.568-.328-.834-.832-.834-.502 0-.83.266-.832.834 0 .272.075.476.21.614.146.148.358.221.622.221.263 0 .476-.073.622-.221.134-.138.21-.34.21-.614z"
                fill={fillColor}
            />
            <path
                d="M10.87 21.828h7.185c1.026 0 1.76-.241 2.247-.734.487-.493.723-1.238.723-2.277V5.16c0-2.025-.972-3.011-2.97-3.011h-7.184c-2.026 0-2.97.958-2.97 3.011v5.395L5.277 13.18a2.746 2.746 0 00-3.034 3.426.56.56 0 00.939.252l.753-.754.658.095.093.659-.754.753a.561.561 0 00.252.939 2.745 2.745 0 003.431-3.034l.284-.283v3.583c0 1.039.235 1.784.722 2.277.488.493 1.224.734 2.25.734zm-2.41-7.154l3.986-3.986a2.746 2.746 0 003.034-3.426.56.56 0 00-.939-.252l-.753.753-.659-.092-.092-.658.753-.754a.561.561 0 00-.252-.938 2.746 2.746 0 00-3.431 3.03L8.462 9.997V5.161c0-1.742.697-2.45 2.409-2.45h7.182c1.689 0 2.409.733 2.409 2.45v13.656c0 .885-.185 1.501-.56 1.885-.376.384-.981.568-1.85.568h-7.184c-.869 0-1.47-.184-1.849-.568-.378-.384-.56-1-.56-1.885v-4.143zm4.933-8.815l-.953.952.194 1.353 1.353.193.952-.952a2.186 2.186 0 01-2.675 2.678l-5.258 5.252a2.186 2.186 0 01-2.675 2.678l.952-.953-.193-1.35-1.353-.193-.952.952a2.186 2.186 0 012.675-2.678l5.255-5.254a2.182 2.182 0 012.112-2.751c.19 0 .38.025.566.073z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTechServiceMobileLight;
