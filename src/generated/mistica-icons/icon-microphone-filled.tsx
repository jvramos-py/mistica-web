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

const IconMicrophoneFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.993 2.16c2.79 0 4.325 1.555 4.325 4.375v6.79c0 2.821-1.535 4.376-4.328 4.376-2.79 0-4.325-1.555-4.325-4.376v-6.79c0-2.82 1.538-4.375 4.328-4.375zm.022 17.754a.96.96 0 01.955.966.962.962 0 01-.955.966.962.962 0 01-.955-.966.96.96 0 01.955-.966zm3.328-.967a.96.96 0 01.955.967.962.962 0 01-.955.966.96.96 0 01-.955-.966.96.96 0 01.955-.967zm2.672-2.302a.96.96 0 01.955.966.962.962 0 01-.955.966.962.962 0 01-.955-.966.96.96 0 01.955-.966zm.955-3.289a.82.82 0 01.815.824.82.82 0 01-.815.826.82.82 0 01-.815-.826.818.818 0 01.815-.824zM8.643 18.947a.96.96 0 01.955.967.962.962 0 01-.955.966.96.96 0 01-.956-.966.957.957 0 01.956-.967zM5.97 16.645a.96.96 0 01.956.966.962.962 0 01-.956.966.962.962 0 01-.955-.966.96.96 0 01.955-.966zm-.14-2.465a.82.82 0 01-.815.826.82.82 0 01-.815-.826.818.818 0 01.815-.824c.454.003.818.37.815.824z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMicrophoneFilled;
