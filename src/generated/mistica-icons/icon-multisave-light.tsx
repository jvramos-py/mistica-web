/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMultisaveLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.19 4.7a1.58 1.58 0 01-2.231 0 1.589 1.589 0 010-2.238 1.58 1.58 0 012.232 0 1.589 1.589 0 010 2.239zm-6.311.93c0-.205.166-.372.37-.372h2.598a.371.371 0 010 .743H6.25a.371.371 0 01-.37-.372zm5.51 12.393a.371.371 0 00-.096-.52l-.408-.285a5.218 5.218 0 00-1.373-.576 3.349 3.349 0 00-1.781-6.178 3.345 3.345 0 00-1.786 6.173c-1.848.476-3.035 1.71-3.035 3.315v1.676a.37.37 0 10.74 0v-1.671c0-1.644 1.678-2.791 4.08-2.791 1.06 0 2.043.242 2.751.676l.39.271a.37.37 0 00.517-.09zm-6.251-4.206a2.602 2.602 0 012.598-2.605 2.602 2.602 0 012.598 2.605 2.602 2.602 0 01-2.598 2.605 2.605 2.605 0 01-2.598-2.605zm13.731 1.486a3.348 3.348 0 01-1.567 2.834c.779.21 1.458.557 1.98 1.038a.37.37 0 01-.498.548c-.751-.69-1.905-1.071-3.254-1.071-2.327 0-4.08 1.28-4.08 2.976a.371.371 0 01-.37.372.371.371 0 01-.371-.372c0-1.638 1.24-2.962 3.068-3.481a3.345 3.345 0 011.753-6.192c1.843 0 3.339 1.5 3.339 3.348zm-5.942 0a2.602 2.602 0 002.598 2.606 2.602 2.602 0 002.598-2.606 2.602 2.602 0 00-2.598-2.605 2.602 2.602 0 00-2.598 2.605zM20.351 22a.743.743 0 000-1.486.743.743 0 000 1.486zM10.48 2.99a.854.854 0 00-.247.591.83.83 0 00.242.59.86.86 0 001.183 0 .83.83 0 00.242-.59.83.83 0 00-1.42-.59zm3.743 3.754a1.58 1.58 0 012.232 0 1.589 1.589 0 010 2.239c-.309.31-.712.462-1.116.462a1.57 1.57 0 01-1.116-.462 1.593 1.593 0 010-2.239zm1.705 1.71a.774.774 0 00.237-.596.83.83 0 00-.242-.59.81.81 0 00-.589-.248.83.83 0 00-.589.248.847.847 0 000 1.186.837.837 0 001.183 0zm.076-6.063l-5.937 5.953a.37.37 0 00.261.633.37.37 0 00.261-.109l5.937-5.953a.37.37 0 000-.524.364.364 0 00-.522 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMultisaveLight;
