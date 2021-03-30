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

const IconClipFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.063 5.542a.808.808 0 00-.818.798l-.011 11.09c0 1.913-.913 2.804-2.868 2.804-1.958 0-2.872-.89-2.872-2.804V5.44c0-1.185.516-1.69 1.729-1.69s1.728.505 1.728 1.692l.025 11.356c0 .373-.078.448-.46.448-.38 0-.456-.075-.456-.448V6.394a.812.812 0 00-.818-.801.81.81 0 00-.818.798v10.403c0 1.264.801 2.048 2.096 2.048 1.29 0 2.095-.784 2.095-2.048L14.59 5.44c-.003-2.06-1.26-3.289-3.367-3.289S7.859 3.38 7.859 5.439V17.43c0 2.798 1.641 4.406 4.507 4.406 2.862 0 4.504-1.605 4.504-4.403l.011-11.09a.81.81 0 00-.818-.8"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconClipFilled;
