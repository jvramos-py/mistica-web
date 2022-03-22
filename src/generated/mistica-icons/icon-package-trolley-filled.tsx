/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPackageTrolleyFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.096 17.52l7.681-1.33c.33-.068.642.167.692.515.056.344-.16.67-.49.72l-7.737 1.347c-.04 1.591-1.003 2.703-2.667 2.997a4.126 4.126 0 01-.7.067c-.667 0-1.26-.184-1.742-.543-.644-.476-1.062-1.255-1.221-2.252-.292-1.801.479-3.157 2.022-3.667L6.217 4.64 3.74 4.153c-.322-.059-.538-.384-.482-.728.064-.342.386-.569.709-.502l2.885.56a.615.615 0 01.481.519l1.793 11.16a3.13 3.13 0 01.754.058l-.787-4.924a1.273 1.273 0 01.039-.586 1.2 1.2 0 01-.207-.476l-.78-4.865c-.094-.594.267-1.146.796-1.247l5.544-.96a.97.97 0 01.77.215c.202.168.33.409.378.686l.756 4.706 1.045-.185c.28-.05.569.02.81.202.258.193.434.493.49.83l.908 5.657c.047.345-.026.687-.21.956-.171.252-.42.417-.7.467l-6.86 1.188c.086.202.159.409.223.636zM9.356 4.327l.72 4.532 5.118-.888-.73-4.53-1.438.253.224 1.38c.031.227-.112.443-.33.477l-1.445.252c-.026.008-.04.008-.065.008a.373.373 0 01-.232-.075.485.485 0 01-.169-.278l-.215-1.38-1.437.249zm6.074 7.4l-1.939.336a.163.163 0 01-.064.009.391.391 0 01-.233-.076.434.434 0 01-.16-.277l-.327-2.042-2.42.425.899 5.628 7.255-1.263-.9-5.628-2.111.362.33 2.05a.416.416 0 01-.33.476z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPackageTrolleyFilled;
