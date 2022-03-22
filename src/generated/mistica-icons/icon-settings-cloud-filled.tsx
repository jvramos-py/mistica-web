/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSettingsCloudFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.686 14.154c0-4.216-3.28-4.921-4.697-5.028-1.177-3.608-5.26-3.793-6.084-3.793-1.06 0-6.292.286-6.404 5.877C3.451 11.594 2 12.574 2 15.095c0 3.084 2.185 4.182 4.23 4.182l10.285-.056c.866 0 5.171-.246 5.171-5.067zm-5.624-1.064a.695.695 0 01-.698.692h-.484a3.054 3.054 0 01-.143.459l.395.395a.696.696 0 01-.003.986l-.437.434a.712.712 0 01-.997 0l-.395-.395c-.149.062-.3.11-.463.146v.482a.696.696 0 01-.697.691h-.597a.695.695 0 01-.697-.691v-.482a3.197 3.197 0 01-.462-.143l-.395.392a.697.697 0 01-.496.204H9.49a.708.708 0 01-.498-.204l-.437-.434-.006-.006a.692.692 0 01.006-.983l.392-.39a2.933 2.933 0 01-.14-.461h-.485a.697.697 0 01-.7-.692v-.597a.7.7 0 01.7-.695h.485c.033-.156.081-.31.14-.462l-.392-.39-.006-.005a.692.692 0 01.006-.983l.442-.431a.703.703 0 01.499-.205h.003a.7.7 0 01.495.205l.395.392c.152-.059.306-.107.463-.143v-.482c0-.384.313-.692.697-.692h.597a.695.695 0 01.697.692v.482c.157.036.311.084.462.143l.395-.392a.712.712 0 01.998 0l.436.434.006.005a.695.695 0 01-.008.984l-.395.392c.059.148.106.3.143.456h.484a.7.7 0 01.698.695v.597zm-4.219-2.126c1.151 0 1.84.683 1.84 1.826 0 1.146-.686 1.826-1.84 1.826s-1.84-.683-1.84-1.826.689-1.826 1.84-1.826z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSettingsCloudFilled;
