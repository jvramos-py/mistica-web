/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBacteriaFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.835 11.227h2.235c.345 0 .616.272.61.619a.616.616 0 01-.616.616H18.83c-.098 1.84-.658 3.146-1.428 4.073l1.395 1.395a.615.615 0 010 .88.61.61 0 01-.435.179.645.645 0 01-.434-.18l-1.412-1.411c-1.437 1.123-3.176 1.37-4.056 1.412v2.266a.616.616 0 01-1.232 0v-2.267c-.919-.05-2.628-.305-4.04-1.437L5.752 18.81a.64.64 0 01-.434.179.625.625 0 01-.435-.18.615.615 0 010-.879l1.429-1.42c-.745-.927-1.289-2.224-1.395-4.048h-2.3a.616.616 0 010-1.232h2.3c.09-1.824.63-3.13 1.378-4.065L4.882 5.753a.606.606 0 010-.87.617.617 0 01.869 0l1.403 1.403c1.429-1.132 3.168-1.37 4.073-1.412V2.616a.616.616 0 111.232 0v2.272c.897.059 2.614.31 4.034 1.429L17.93 4.88a.62.62 0 01.871 0 .606.606 0 010 .87l-1.42 1.42c.782.928 1.347 2.233 1.454 4.057zm-5.566.034h.188c.386-.009 1.938-.157 1.938-2.054 0-1.896-1.552-2.061-1.947-2.07h-.188c-.411.009-1.93.149-1.93 2.053 0 1.914 1.536 2.07 1.939 2.07zm.468 4.655l.14-.025c.294-.076 1.467-.434 1.165-1.894-.238-1.126-1.011-1.305-1.496-1.305-.143 0-.263.016-.33.024l-.006.001a.658.658 0 00-.084.017.995.995 0 01-.062.014c-.313.064-1.462.417-1.15 1.888.229 1.126.985 1.314 1.47 1.314.148 0 .28-.017.353-.034zm-5.143-3.801c.224-.009 1.126-.093 1.126-1.199 0-1.1-.896-1.19-1.135-1.199H8.48c-.238 0-1.118.081-1.118 1.19 0 1.118.888 1.2 1.126 1.208h.107z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBacteriaFilled;
