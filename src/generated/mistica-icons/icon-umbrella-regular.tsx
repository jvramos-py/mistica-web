/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconUmbrellaRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.336 5.857c1.205 1.23 1.989 2.863 2.328 4.846.075.417-.04.857-.314 1.205a1.566 1.566 0 01-1.196.557l-7.605-.02v7.003c0 .56.465 1.017 1.034 1.017.568 0 1.033-.457 1.033-1.017 0-.336.277-.61.62-.61.341 0 .618.274.618.61 0 1.235-1.02 2.241-2.271 2.241-1.236 0-2.247-.977-2.272-2.19-.003-.014-.003-.028-.003-.042v-7.014l-7.762-.023a1.605 1.605 0 01-.815-.232 1.572 1.572 0 01-.361-.308 1.524 1.524 0 01-.345-1.239c.353-1.983 1.151-3.607 2.37-4.829 1.63-1.647 3.96-2.52 6.913-2.608v-.593c0-.336.277-.611.62-.611.34 0 .618.275.618.61v.594c2.905.13 5.185 1.014 6.79 2.653zM3.384 11.151a.342.342 0 00.168.045l1.795.006c.597-3.35 2.286-5.364 3.779-6.521-1.577.339-2.871 1-3.849 1.986-1.042 1.042-1.725 2.45-2.033 4.187a.294.294 0 00.07.236c.028.03.053.05.066.059l.004.002zm17.003-.017a.31.31 0 00.058-.224c-.297-1.742-.969-3.157-1.997-4.207-.935-.955-2.165-1.608-3.658-1.97 1.415 1.141 2.947 3.127 3.549 6.502l1.812.006c.065 0 .16-.02.236-.107zm-7.84-6.372v6.462l4.534.011c-.823-4.207-3.243-5.874-4.535-6.473zm-1.242-.008c-1.297.633-3.904 2.389-4.703 6.453l4.703.014V4.753z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconUmbrellaRegular;
