/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: string | number;
};

const IconAudioFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.938 5.441a1.042 1.042 0 00-1.481.079 1.087 1.087 0 00.067 1.512c.084.079 2.017 1.922 2.053 5.112.003.031.11 3.21-2.008 5.138a1.088 1.088 0 00-.084 1.515 1.042 1.042 0 001.49.084c2.854-2.597 2.717-6.658 2.708-6.796-.044-4.126-2.635-6.543-2.745-6.644zm-.829 6.678c-.028-2.781-1.79-4.423-1.865-4.49a1.041 1.041 0 00-1.488.081 1.085 1.085 0 00.079 1.515c.014.012 1.148 1.099 1.168 2.953.003.017.045 1.86-1.14 2.938a1.088 1.088 0 00-.084 1.516 1.038 1.038 0 001.49.084c1.938-1.765 1.843-4.516 1.84-4.597zm-6.045-7.605c-3.117 0-4.862 1.314-5.826 2.591l-3.182.003c-.28 0-.549.115-.745.316a1.075 1.075 0 00-.308.757l.008 7.54c0 .591.474 1.07 1.053 1.07l3.16-.002c.958 1.277 2.714 2.582 5.922 2.582.921 0 1.67-.762 1.67-1.7V6.223c0-.941-.754-1.709-1.752-1.709z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAudioFilled;
