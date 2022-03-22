/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFireLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.016 9.884c.513.364.99.776 1.423 1.232 1.118 1.185 1.703 2.715 1.642 4.309-.06 1.585-.754 3.064-1.956 4.162-1.759 1.605-3.688 1.885-3.77 1.896a8.325 8.325 0 01-2.04.203l-.136-.001c-.185 0-.367-.017-.552-.045-2.207-.23-4.303-1.302-5.656-3.014C3.661 15.7 3.67 8.987 8.941 4.7c1.593-1.297 3.49-2.25 5.336-2.686a.411.411 0 01.468.566c-.076.176-1.838 4.327 2.271 7.305zm.558 9.095c1.036-.947 1.636-2.221 1.689-3.588.05-1.37-.454-2.69-1.42-3.712a8.61 8.61 0 00-1.306-1.129c-3.557-2.574-3.179-6.028-2.79-7.54-1.495.465-2.994 1.274-4.285 2.328-3.213 2.613-5.916 8.89-2.846 12.778a7.042 7.042 0 002.462 1.953 3.156 3.156 0 01.286-3.793c.201-.23.425-.44.67-.625 1.708-1.33.949-3.232.94-3.252a.41.41 0 01-.053-.776.411.411 0 01.538.222c.857.218 1.737.691 2.476 1.336 1.644 1.437 2.955 4.773 1.356 6.947-.09.12-.185.232-.286.341a7.11 7.11 0 002.569-1.49zm-6.124 1.793h.009l.181.025c.14.02.278.04.418.048a2.021 2.021 0 00.214.001c.044-.001.087-.003.13-.001a3.046 3.046 0 002.228-1.205c1.302-1.77.14-4.641-1.236-5.84a5.742 5.742 0 00-1.45-.922c.137.989-.068 2.384-1.407 3.426a3.844 3.844 0 00-.552.513 2.335 2.335 0 00.107 3.21c.639.622 1.353.745 1.358.745z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFireLight;
