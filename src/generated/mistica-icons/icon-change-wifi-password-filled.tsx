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

const IconChangeWifiPasswordFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.73 12.395c-.014-1.076-.32-1.91-.91-2.476-.572-.546-1.384-.824-2.418-.824H7.903V6.462c0-1.888 1.628-3.426 3.63-3.426h.185c2 0 3.63 1.538 3.63 3.426a.52.52 0 001.037.034v-.034c0-2.46-2.092-4.462-4.667-4.462h-.184C8.959 2 6.867 4.003 6.867 6.465V9.19c-.588.124-1.076.367-1.457.734-.59.569-.89 1.404-.89 2.482v.037l.002.232-.002 5.653c0 1.078.3 1.913.89 2.481.569.55 1.381.827 2.418.827h7.577c1.033 0 1.846-.278 2.417-.824.591-.568.9-1.4.91-2.476v-5.935c-.002 0-.002-.003-.002-.006zm-6.605 6.75c-.118.118-.289.177-.502.177-.213 0-.384-.056-.501-.176-.11-.11-.168-.272-.168-.49 0-.454.263-.664.67-.664.405 0 .669.21.669.663.002.219-.06.381-.168.49zm2.627-1.64a.52.52 0 01-.734-.012c-.512-.53-1.316-.798-2.39-.798-1.072 0-1.882.269-2.394.8a.518.518 0 11-.748-.72c.717-.741 1.773-1.12 3.14-1.12 1.364 0 2.417.376 3.134 1.112a.52.52 0 01-.008.737c0-.003 0-.003 0 0zm1.431-2.264a.52.52 0 01-.733-.011c-.832-.858-2.118-1.292-3.821-1.292-1.709 0-2.997.437-3.827 1.3a.518.518 0 11-.747-.72c1.033-1.073 2.574-1.616 4.574-1.616 1.994 0 3.53.54 4.563 1.605a.518.518 0 01-.009.734z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChangeWifiPasswordFilled;
