/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPendriveLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.843 9.569c-.017-.908-.734-1.642-1.597-1.642h-.77l.002.003h-.952c-.123-.966-.919-1.711-1.88-1.711h-9.26c-3.373.109-5.23 2.145-5.23 5.734 0 3.582 1.857 5.624 5.241 5.75h9.26c.978 0 1.785-.77 1.889-1.756h1.714c.871 0 1.582-.742 1.582-1.65V9.57zm-4.11 6.16c0 .621-.482 1.126-1.075 1.126H7.41c-2.944-.11-4.434-1.76-4.434-4.902 0-3.146 1.493-4.79 4.42-4.886h9.247c.594 0 1.075.502 1.075 1.124v7.33h.014v.208zm3.289-6.152v4.72c0 .443-.342.801-.762.801h-1.717V8.78h1.762c.392.03.708.38.717.798zm-13.9 2.603c0-.58-.324-.85-.829-.85-.5 0-.831.27-.831.85 0 .277.075.484.21.624.143.151.358.224.619.224.263 0 .476-.073.622-.224.134-.14.21-.344.21-.624z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPendriveLight;
