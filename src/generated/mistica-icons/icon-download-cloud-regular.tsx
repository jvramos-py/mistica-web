/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDownloadCloudRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M10.97 3c.92 0 5.44.21 6.827 4.26 2.605.25 5.206 1.891 5.203 5.861 0 4.362-3.168 5.91-5.888 5.91l-1.847.01-2.548 2.675a.934.934 0 01-.658.284.93.93 0 01-.657-.284l-2.53-2.639-3.017.019C3.505 19.096 1 17.802 1 14.175c0-2.852 1.55-4.026 2.739-4.511C3.955 3.32 9.781 3 10.97 3zm6.145 14.656c1.061 0 4.536-.321 4.533-4.535 0-3.96-3.062-4.474-4.377-4.51a.69.69 0 01-.638-.513c-.927-3.547-4.88-3.72-5.663-3.72-1.38 0-5.882.402-5.882 5.644v.12a.668.668 0 01-.485.671c-1.493.43-2.25 1.566-2.25 3.365 0 3.206 2.447 3.546 3.502 3.546l1.703-.009-.873-.918a.942.942 0 01-.188-1.016.91.91 0 01.845-.569l1.612-.009v-4.535c0-.516.417-.936.93-.936h4.232c.514 0 .917.42.927.924l.01 4.646h1.602c.379 0 .71.229.854.569a.97.97 0 01-.187 1.016l-.74.77h.533zm-5.052 2.778l3.574-3.754H14.63a.933.933 0 01-.926-.936l-.01-4.637h-3.386v4.535a.917.917 0 01-.918.933H8.372l3.69 3.859z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDownloadCloudRegular;
