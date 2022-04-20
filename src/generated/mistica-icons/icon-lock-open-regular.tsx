/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLockOpenRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.798 8.07v1.823c.954.18 1.702 1.035 1.702 2.107v7.857c0 1.18-.92 2.143-2.046 2.143H6.546C5.42 22 4.5 21.036 4.5 19.857V12c0-1.18.92-2.143 2.046-2.143h9.885V8.074c0-2.571-1.977-4.643-4.431-4.643-1.771 0-3.34 1.104-4.088 2.783-.137.356-.546.5-.885.356-.34-.144-.477-.572-.34-.927.92-2.216 3-3.643 5.317-3.643 3.202 0 5.794 2.715 5.794 6.07zm-.344 12.499c.374 0 .683-.32.683-.716V12c0-.392-.305-.716-.683-.716H6.546c-.374 0-.683.32-.683.716v7.853c0 .392.305.716.683.716h10.908z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.286 13.995v-.003c0-1.608 0-2.897-.002-2.897v-.004c.006-.094.072-1.2-.689-2.038-.535-.588-1.316-.885-2.322-.885-2.1 0-6.515.006-8.14.008V7.011c0-3.406 2.48-3.798 3.544-3.807.131 0 .274 0 .395.003.677.017 2.927.252 3.473 2.61a.6.6 0 00.717.45.603.603 0 00.442-.726C16.116 3 13.94 2.048 12.102 2.003c-.066 0-.136 0-.208-.002L11.668 2c-2.283.022-4.723 1.35-4.723 5.014v1.19c-.459.06-1.092.23-1.599.704-.543.507-.82 1.224-.82 2.128l.002 7.74c-.004.06-.07 1.193.703 2.036.532.58 1.303.874 2.289.874l8.717-.005h.003c.084.005 1.353.075 2.235-.76.54-.51.812-1.22.812-2.117l-.001-4.81zm-1.19-2.952v.002s-.002 5.202.003 7.762c0 .552-.14.955-.428 1.232-.485.464-1.263.443-1.377.44h-.012l-8.76.006c-.638 0-1.112-.163-1.409-.482-.428-.46-.397-1.135-.394-1.18V11.04c0-.552.145-.969.43-1.238.41-.384 1.02-.42 1.239-.42l.076.002h.005c.014.004.031.004.045.004h.028l1.201-.002c1.926-.002 5.655-.007 7.536-.007.652 0 1.137.163 1.437.488.42.453.384 1.115.38 1.177zm-6.229 5.22h-.205c-1.355-.017-1.355-1.087-1.355-1.487 0-.398 0-1.457 1.33-1.47h.128l.082.002c1.376.034 1.376 1.126 1.376 1.485 0 .395 0 1.445-1.356 1.47zm2.546-1.47c0-2.468-2.02-2.675-2.538-2.69-.061-.002-.131-.002-.201-.002h-.053c-.533.003-2.51.19-2.51 2.675 0 2.493 1.997 2.686 2.53 2.695h.243c.507-.012 2.53-.202 2.53-2.678z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLockOpenRegular;
