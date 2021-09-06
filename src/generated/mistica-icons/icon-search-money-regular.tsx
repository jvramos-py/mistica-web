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

const IconSearchMoneyRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.417 4.39a7.845 7.845 0 01.378 10.497l5.704 5.704a.561.561 0 01-.793.793l-5.696-5.697a7.792 7.792 0 01-5.139 1.918A7.846 7.846 0 014.322 4.21a7.848 7.848 0 0111.095.18zM9.871 3.033a6.726 6.726 0 00-4.756 11.481 6.728 6.728 0 009.512-.036 6.724 6.724 0 000-9.473 6.672 6.672 0 00-4.756-1.972zm.154 2.252c.21 0 .381.17.381.38v.276a3.31 3.31 0 011.353.445c.263.162.303.372.303.484 0 .283-.23.513-.513.513a.693.693 0 01-.305-.084l-.009-.003a2.851 2.851 0 00-.83-.308v2.018l.111.018c1.589.27 1.93 1.214 1.93 1.975 0 .633-.233 1.17-.673 1.552-.341.296-.81.485-1.366.556v.547a.38.38 0 01-.382.379.378.378 0 01-.378-.379v-.525h-.015a3.836 3.836 0 01-1.898-.668.545.545 0 01-.252-.465.526.526 0 01.532-.52.64.64 0 01.342.108c.429.285.862.457 1.29.512V9.965L9.53 9.95c-1.554-.271-1.889-1.2-1.889-1.946 0-1.174.778-1.965 2.005-2.074l.001-.262c0-.21.17-.381.378-.381zm.38 4.794l.001 1.997c.62-.119.989-.495.989-1.04 0-.389-.128-.77-.99-.957zm-1.71-2.122c0 .361.122.746.95.934l.002-1.93c-.602.082-.952.44-.952.996z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchMoneyRegular;
