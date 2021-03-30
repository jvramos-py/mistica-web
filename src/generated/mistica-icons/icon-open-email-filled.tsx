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
    size?: number;
};

const IconOpenEmailFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.636 14.536a1.684 1.684 0 01-.919.292 1.815 1.815 0 01-.963-.297L3.24 9.794v-.003c.011-.386.106-.664.25-.767l7.408-4.684a1.84 1.84 0 01.95-.271c.532 0 .935.269.963.288l7.359 4.65c.151.106.24.347.263.667l-7.798 4.862zm9.036 5.031l.009-9.804c-.023-1.002-.44-1.51-.815-1.776l-7.359-4.65a3.025 3.025 0 00-1.67-.5c-.927 0-1.582.447-1.624.48l-7.283 4.6-.137.087c-.348.25-.765.757-.787 1.773l.008 9.793c-.025.219-.062.902.4 1.457.25.3.734.658 1.63.677h15.597c.894-.016 1.379-.378 1.628-.677.465-.558.428-1.238.403-1.46z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOpenEmailFilled;
