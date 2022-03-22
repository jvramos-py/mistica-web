/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLossTheftDevicesFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.474 7.656C9.116 7.233 8.555 7 7.9 7c-.574 0-1.067.2-1.423.575-.33.35-.513.834-.513 1.36v.11a.403.403 0 00.807 0v-.11c0-.321.104-.607.294-.809.199-.213.49-.322.838-.322.414 0 .756.132.96.373.16.187.222.428.177.694-.065.387-.367.656-.515.785a8.56 8.56 0 01-.222.185l-.01.008c-.373.306-.794.652-.794 1.132v.512a.403.403 0 00.807 0v-.51c.003-.102.345-.383.495-.505l.015-.013.058-.048c.063-.051.126-.103.186-.156l.003-.003c.2-.178.664-.59.772-1.258a1.66 1.66 0 00-.36-1.344zM7.9 12.317a.46.46 0 100 .92.46.46 0 000-.92z"
                fill={fillColor}
            />
            <path
                d="M17.463 2.16c1.11 0 1.919.269 2.473.826.552.555.818 1.362.818 2.462v13.11c0 1.115-.269 1.927-.826 2.479-.552.546-1.359.812-2.465.812h-6.555c-1.106 0-1.913-.266-2.465-.812-.554-.552-.826-1.364-.826-2.48v-3.562c-1.289-.09-2.314-.493-3.05-1.202-.874-.843-1.317-2.09-1.317-3.709 0-1.619.443-2.865 1.317-3.708.736-.712 1.764-1.112 3.056-1.202.042-.947.31-1.658.817-2.17.564-.567 1.37-.844 2.468-.844h6.555zM8.18 13.897c1.255 0 2.21-.306 2.835-.908.647-.622.974-1.6.974-2.902s-.327-2.28-.974-2.902c-.625-.602-1.58-.907-2.835-.907s-2.21.305-2.835.907c-.647.622-.975 1.6-.975 2.902 0 1.303.328 2.28.975 2.902.625.602 1.58.908 2.835.908zm6.83 5.316c.19-.199.288-.47.293-.81 0-.697-.414-1.114-1.112-1.114-.697 0-1.112.417-1.112 1.115 0 .339.093.61.289.81.196.198.479.305.82.305.342 0 .625-.107.821-.306z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLossTheftDevicesFilled;
