/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMobileQuestionLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.944 3.079c.608.608.902 1.476.902 2.641v12.566c0 1.182-.294 2.05-.91 2.658-.608.608-1.476.905-2.65.905h-6.275c-1.173 0-2.036-.297-2.65-.902-.54-.54-.834-1.28-.901-2.272v-.549a3.74 3.74 0 00-.156.005 3.74 3.74 0 01-.155.004c-3.785-.006-5.989-1.91-5.989-5.997 0-4.079 2.204-5.992 5.989-5.992.054 0 .106.002.157.004.05.002.097.004.145.004V5.72c0-1.148.294-2.011.91-2.627.614-.63 1.485-.933 2.65-.933h6.275c1.182 0 2.05.302 2.658.919zm.082 15.207V5.72c0-.944-.213-1.616-.664-2.067-.451-.451-1.124-.672-2.076-.672h-6.275c-.935 0-1.616.23-2.067.689-.45.46-.672 1.123-.672 2.05v.493c3.092.362 4.866 2.275 4.866 5.925S12.364 17.7 9.28 18.062v.583c.05.753.264 1.322.664 1.714.443.442 1.124.666 2.067.666h6.275c.944 0 1.625-.224 2.076-.666.45-.443.664-1.123.664-2.073zM9.886 10.32c0-.611-.197-1.04-.62-1.35-.327-.25-.781-.376-1.344-.379-.532 0-1.09.112-1.32.222a.269.269 0 00-.148.29l.04.205v.006l.002.006a.27.27 0 00.325.196c.356-.09.65-.13.983-.13.608 0 .83.113.953.214.215.173.308.383.308.706 0 .459-.157.73-.989 1.717l-.098.117c-.513.62-.742 1.003-.742 1.659-.003.129.008.257.033.383a.264.264 0 00.26.216h.264a.264.264 0 00.266-.266c0-.852.028-.885.82-1.801.698-.83 1.006-1.27 1.006-2.011zm-1.662 5.165c0-.311-.218-.53-.549-.53a.508.508 0 00-.529.53v.036c0 .311.213.521.549.521.317 0 .53-.21.53-.557zm5.093-3.347c0-3.48-1.69-5.171-5.168-5.171-3.48 0-5.168 1.692-5.168 5.17 0 3.48 1.689 5.171 5.168 5.171s5.168-1.691 5.168-5.17zm.77 5.991c0 .328.093.588.277.776.188.19.46.294.788.294.327 0 .599-.1.787-.294.185-.188.277-.448.277-.776 0-.667-.398-1.067-1.064-1.067-.667 0-1.065.398-1.065 1.067z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileQuestionLight;
