/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconStarLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.987 21.596c.289.16.597.238.905.238a1.86 1.86 0 001.081-.353 2 2 0 00.813-1.98l-.734-4.454a.378.378 0 01.1-.33l3.107-3.152a2.03 2.03 0 00.47-2.073c-.238-.717-.815-1.213-1.54-1.322L15.9 7.52a.342.342 0 01-.257-.196l-1.92-4.053c-.327-.686-.988-1.115-1.728-1.115a1.9 1.9 0 00-1.725 1.115L8.351 7.324a.336.336 0 01-.255.194l-4.29.65c-.726.109-1.303.605-1.542 1.322a2.023 2.023 0 00.471 2.072l3.104 3.155c.084.086.123.21.103.33l-.734 4.454a2 2 0 00.813 1.98c.6.423 1.341.468 1.983.115l3.838-2.104a.317.317 0 01.308 0l3.837 2.104zm-3.569-2.594a.873.873 0 00-.848 0l-3.838 2.104a1.293 1.293 0 01-1.39-.081 1.456 1.456 0 01-.582-1.435l.734-4.453a.945.945 0 00-.255-.816l-3.103-3.15a1.475 1.475 0 01-.34-1.505c.172-.513.58-.865 1.093-.944l4.291-.65a.9.9 0 00.675-.51l1.92-4.053c.235-.498.691-.795 1.22-.795.53 0 .987.297 1.222.795l1.919 4.05a.896.896 0 00.678.513l4.29.65c.513.079.922.431 1.093.944.18.535.048 1.112-.339 1.504l-3.106 3.154a.937.937 0 00-.255.813l.734 4.453a1.451 1.451 0 01-.583 1.435c-.42.297-.941.327-1.392.08l-3.838-2.103z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStarLight;
