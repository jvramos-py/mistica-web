/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconEmailFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.374 5.01L12 11.035 2.626 5.01A.89.89 0 012.74 5h18.52c.04 0 .07.004.104.008l.01.002z"
                    fill={fillColor}
                />
                <path
                    d="M12 12.287a.53.53 0 00.294-.088L22 5.962v12.272a.754.754 0 01-.74.766H2.74a.754.754 0 01-.74-.766V5.962l9.706 6.237a.53.53 0 00.294.088z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M10.866 11.471c.064.045.93.636 1.896.006l8.855-5.393a1.687 1.687 0 00-1.505-1.061L3.893 5.02c-.485 0-.9.168-1.202.487-.168.177-.28.381-.359.583l8.535 5.381zm10.543 6.793c.457-.55.418-1.222.393-1.437l.014-9.465-8.41 5.123a2.805 2.805 0 01-1.562.485 3.038 3.038 0 01-1.659-.51L2.16 7.4v9.468c0 .68.196 1.213.577 1.585.49.476 1.09.482 1.151.48h1.053c2.015.004 6.486.01 10.023.01 2.364 0 4.311-.002 4.83-.01.887-.018 1.369-.373 1.615-.67z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconEmailFilled;
