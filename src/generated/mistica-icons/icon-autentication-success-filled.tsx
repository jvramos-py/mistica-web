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

const IconAutenticationSuccessFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M7.709 15.591a.573.573 0 01.806 0 .558.558 0 01.006.79l-.006.006-2.428 2.4a.578.578 0 01-.807 0L4.19 17.71a.557.557 0 01-.008-.787l.008-.009a.573.573 0 01.807 0l.686.678 2.026-2zm5.148-10.045c1.235 0 2.202.322 2.868.961.695.661 1.048 1.641 1.048 2.91 0 1.27-.353 2.247-1.048 2.908-.666.63-1.633.952-2.868.952-1.235 0-2.199-.319-2.865-.955-.692-.658-1.042-1.636-1.042-2.905s.35-2.249 1.042-2.91c.666-.639 1.63-.96 2.865-.96zm7.16 8.754c.375-2.138.431-6.768.448-8.49-1.742.072-2.818-.611-3.843-1.286-1.031-.675-2.009-1.311-3.756-1.32h-.009c-1.74 0-2.717.645-3.75 1.32-1.043.683-2.124 1.375-3.84 1.294.008 1.375.05 4.591.26 6.921.29-.039.585-.058.88-.056 1.747 0 3.041.547 3.758 1.69.098-.009.205-.009.308-.009h4.768c1.619 0 2.963.499 3.882 1.448.025.026.05.05.081.09.423-.543.723-1.081.813-1.602zM6.403 20.19c2.238 0 3.19-.94 3.19-3.15 0-2.205-.952-3.152-3.19-3.152-2.232 0-3.182.95-3.182 3.151 0 2.213.95 3.151 3.182 3.151zM21.686 5.143c0 .274.017 6.616-.465 9.356-.633 3.616-7.795 6.986-8.098 7.128a.56.56 0 01-.26.056.56.56 0 01-.26-.056 28.896 28.896 0 01-2.751-1.5c-.748.859-1.928 1.268-3.451 1.268C3.619 21.398 2 20.014 2 17.039c0-2.123.83-3.434 2.32-4.011-.292-3.07-.278-7.686-.278-7.885a.613.613 0 01.748-.588c1.653.257 2.53-.314 3.639-1.037C9.513 2.812 10.748 2 12.857 2h.009c2.117.008 3.344.812 4.434 1.518 1.098.723 1.977 1.294 3.647 1.037a.663.663 0 01.504.137.598.598 0 01.235.45z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAutenticationSuccessFilled;
