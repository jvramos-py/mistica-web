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

const IconOnLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.411 2.16c1.577.05 9.434.63 9.434 9.843s-7.826 9.843-9.4 9.843h-.877c-8.958-.115-9.41-8.201-9.41-9.843 0-1.641.452-9.762 9.343-9.843zm-.017.82h-.885c-1.97 0-8.532.754-8.532 9.023s6.563 9.023 8.613 9.023h.846c2.028 0 8.588-.821 8.588-9.023s-6.563-8.966-8.63-9.022zM8.96 8.206c1.238 0 2.748.664 2.748 3.798 0 3.135-1.476 3.798-2.714 3.798-1.813 0-2.732-1.28-2.732-3.798 0-3.134 1.451-3.798 2.698-3.798zm4.182.131c.1 0 .196.048.255.132l3.524 5.289V8.639c0-.157.123-.289.28-.303h.3c.162.003.29.14.285.303v6.737a.301.301 0 01-.302.302h-.23a.303.303 0 01-.255-.14l-3.487-5.283v5.11c0 .17-.14.31-.311.31h-.28a.31.31 0 01-.303-.31V8.638c0-.165.135-.303.303-.303zm-4.182.78c-.835 0-1.796.352-1.796 2.904S8.14 14.9 8.96 14.9c.826 0 1.787-.303 1.787-2.88s-.95-2.905-1.787-2.905z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOnLight;
