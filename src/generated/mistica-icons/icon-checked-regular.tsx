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

const IconCheckedRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.997 1c3.495 0 6.213.912 8.081 2.711C22.018 5.58 23 8.37 23 12.001c0 3.633-.984 6.42-2.922 8.288C18.21 22.088 15.492 23 11.997 23c-3.495 0-6.213-.912-8.079-2.711C1.981 18.424 1 15.637 1 12.005c0-3.633.981-6.423 2.918-8.29C5.784 1.914 8.505 1 11.997 1zm0 1.22c-6.49 0-9.78 3.29-9.78 9.785 0 6.488 3.29 9.779 9.78 9.779 6.492 0 9.787-3.291 9.787-9.78 0-6.49-3.295-9.785-9.787-9.785zm5.2 4.96a.575.575 0 01.116.806l-6.45 8.639a.572.572 0 01-.452.232h-.013a.575.575 0 01-.451-.217l-2.953-3.71a.577.577 0 01.09-.81.577.577 0 01.81.092l2.488 3.128 6.01-8.043a.576.576 0 01.805-.116z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCheckedRegular;
