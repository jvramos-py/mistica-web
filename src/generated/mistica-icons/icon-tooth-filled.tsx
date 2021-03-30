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

const IconToothFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.431 21.714h-.115c-.156 0-.274-.039-.347-.064a1.763 1.763 0 01-.756-.572 5.737 5.737 0 01-.485-.748l-.075-.165a17.271 17.271 0 01-.317-.804c-.263-.694-1.022-2.692-1.496-3.213-.473.521-1.23 2.521-1.493 3.213-.145.387-.24.633-.313.796l-.009.039-.073.134a5.664 5.664 0 01-.49.754 1.719 1.719 0 01-.717.552 1.066 1.066 0 01-.37.075h-.112c-.157 0-.274-.039-.347-.064a1.738 1.738 0 01-.754-.571 5.468 5.468 0 01-.423-.645l-.044-.075a19.96 19.96 0 01-1.406-3.07 21.247 21.247 0 01-.715-2.289c-.042-.16-.092-.367-.148-.59l-.028-.116c-1.025-1.784-1.75-3.554-2.16-5.26-.583-2.44-.078-4.488 1.42-5.76.857-.736 2.023-1.176 3.28-1.24 1.294-.07 2.639.252 3.874.938.334.188.67.378 1.031.591.373-.215.706-.406 1.03-.588 1.236-.686 2.584-1.011 3.88-.941 1.255.064 2.42.504 3.28 1.244 1.496 1.271 2 3.316 1.418 5.756-.409 1.706-1.137 3.473-2.16 5.26l-.025.098c-.056.233-.106.446-.154.617a20.841 20.841 0 01-.714 2.282 19.758 19.758 0 01-1.39 3.04l-.058.1a5.583 5.583 0 01-.429.65 1.719 1.719 0 01-.717.552.913.913 0 01-.373.084z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconToothFilled;
