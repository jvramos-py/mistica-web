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

const IconBriefcaseRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.617 12.289c-1.664 1.221-4.306 1.776-8.538 1.776-4.34 0-7.031-.586-8.687-1.891V8.647a.23.23 0 01.23-.224h16.773c.124 0 .222.101.222.224v3.642zm-9.196 4.146h1.173v-1.132h-1.173v1.132zm9.196 3.94c0 .132-.098.23-.222.23H3.62a.229.229 0 01-.23-.23v-6.7c1.583.942 3.723 1.446 6.799 1.586v1.395c0 .347.157.636.429.818.204.131.467.199.787.199H12.6c.328 0 .582-.068.787-.2a.94.94 0 00.434-.817v-1.39c3.059-.123 5.202-.602 6.793-1.512v6.622h.003zM8.303 6.828c0-1.883 1.625-3.429 3.61-3.429h.188c1.986 0 3.602 1.546 3.602 3.429v.355h-7.4v-.355zm12.09.355h-3.46v-.355c0-2.569-2.165-4.667-4.832-4.667h-.187c-2.667 0-4.84 2.098-4.84 4.667v.355H3.618A1.46 1.46 0 002.16 8.645v11.73c0 .81.655 1.471 1.46 1.471h16.772c.804 0 1.454-.658 1.454-1.47V8.645c0-.81-.647-1.463-1.454-1.463z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBriefcaseRegular;
