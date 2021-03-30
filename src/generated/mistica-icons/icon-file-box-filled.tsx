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

const IconFileBoxFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.062 11.653a.629.629 0 00-.628.63v.868a1.494 1.494 0 01-1.496 1.49h-.193c-.823 0-1.49-.666-1.493-1.49v-.868a.63.63 0 00-.627-.63H3.49L4.852 3.56a.646.646 0 00.008-.103c0-.107.087-.194.193-.194l13.58.014c.132 0 .26.146.291.328l1.278 8.05h-6.14v-.002zm7.613 1.341c0-.02.003-.033.003-.053L20.162 3.39c-.148-.81-.775-1.375-1.529-1.375L5.056 2c-.779 0-1.417.619-1.451 1.395l-1.591 9.476c-.006.025.003.05.003.076-.006.05-.014.1-.014.151v7.132c0 .804.652 1.456 1.45 1.456h16.782c.801 0 1.451-.652 1.451-1.456V13.1c0-.033-.008-.072-.01-.106z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileBoxFilled;
