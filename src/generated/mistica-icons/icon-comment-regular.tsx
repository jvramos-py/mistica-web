/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCommentRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.364 2.5h-5.82c-2.006 0-3.635 1.703-3.635 3.799v.38H5.636C3.629 6.678 2 8.38 2 10.476v3.8c0 1.833 1.252 3.37 2.91 3.726v2.738a.76.76 0 00.447.7.703.703 0 00.796-.165L9.21 18.08h2.244c2.007 0 3.636-1.702 3.636-3.799v-.063l2.761 2.885c.14.146.326.223.512.223a.724.724 0 00.28-.058.76.76 0 00.446-.7v-2.739c1.658-.355 2.91-1.887 2.91-3.726v-3.8c0-2.1-1.63-3.803-3.636-3.803zm-4.73 11.781c0 1.255-.978 2.282-2.183 2.282H8.904a.696.696 0 00-.512.224l-2.03 2.12v-1.585c0-.419-.326-.76-.726-.76-1.201 0-2.183-1.02-2.183-2.28v-3.8c0-1.255.977-2.281 2.183-2.281h3.273v1.902c0 2.096 1.63 3.799 3.636 3.799h1.09v.38zm4.73-1.897c-.4 0-.726.34-.726.76v1.585l-2.03-2.121a.715.715 0 00-.512-.224h-2.547c-1.2 0-2.183-1.021-2.183-2.281v-3.8c0-1.254.978-2.28 2.183-2.28h5.82c1.2 0 2.183 1.021 2.183 2.28v3.8h-.005c0 1.255-.977 2.281-2.183 2.281z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCommentRegular;
