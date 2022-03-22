/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowDownLeftRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.334 22H2V8.603c0-.868.492-1.612 1.288-1.936a2.196 2.196 0 012.371.476l2.768 2.768 7.71-7.704a.722.722 0 011.013 0 .722.722 0 010 1.012l-8.22 8.213c-.504.503-.892.12-1.524-.513l-2.76-2.76a.73.73 0 00-.807-.172.64.64 0 00-.404.616v11.969h11.91c.396 0 .56-.292.608-.42a.794.794 0 00-.16-.86l-3.716-3.716 8.703-8.729a.722.722 0 011.012 0 .722.722 0 010 1.012l-7.71 7.713 2.71 2.712c.633.632.817 1.58.477 2.42-.34.792-1.076 1.296-1.936 1.296z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M3.944 20.333a.89.89 0 00.641.258c.026 0 .05 0 .079-.003H16.75c.476 0 .865-.246 1.042-.66.19-.446.098-1.01-.219-1.34l-2.588-2.585 5.12-4.815.014-.014c.219-.219.449-.488.521-.824.079-.37-.042-.731-.36-1.078l-.018-.017-5.05-5.025c-.737-.737-1.577-.745-2.305-.017l-.006.005-4.79 4.905-2.378-2.378a.074.074 0 01-.017-.014c-.358-.328-.95-.42-1.406-.216a1.01 1.01 0 00-.614.956l-.005 12.145a.89.89 0 00.252.717zm12.807-.82H4.767L4.77 7.49c.065-.014.171 0 .213.031l2.448 2.448a.973.973 0 001.376-.017l.005-.005 4.857-4.972c.104-.107.255-.227.381-.227.101.003.244.09.4.246l5.04 5.017c.062.07.084.112.093.129-.012.028-.054.104-.222.274l-5.187 4.877-.012.011a.995.995 0 00-.294.676.95.95 0 00.275.7l2.652 2.652c.026.04.031.14.009.177a.184.184 0 01-.053.006z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowDownLeftRegular;
