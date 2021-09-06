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

const IconTicketsFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.28 10.448l4.373 7.521-.006-9.933-4.367 2.412zM17.543 2h2.238c1.05 0 1.905.852 1.905 1.9v14.248c0 1.048-.854 1.9-1.905 1.9h-2.254a1.01 1.01 0 01-.99-.816.898.898 0 00-.882-.722.898.898 0 00-.882.722 1.01 1.01 0 01-.989.816h-.82a.91.91 0 01-.373.434l-1.753.983a1.722 1.722 0 01-.85.221 1.73 1.73 0 01-1.521-.885L2.23 9.737a1.735 1.735 0 01.664-2.364L4.63 6.4a.944.944 0 011.213.249.757.757 0 001.305-.731.933.933 0 01.418-1.163l1.737-.972c.109-.061.23-.098.35-.134a1.898 1.898 0 011.88-1.647h2.237c.504 0 .925.364.997.865a.906.906 0 00.891.768c.446 0 .83-.33.894-.768A.993.993 0 0117.543 2zm-5.4 3.647a.414.414 0 00-.415.415v9.972c0 .23.185.414.415.414h7.143c.23 0 .414-.185.414-.414V6.059a.414.414 0 00-.414-.415h-7.143v.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTicketsFilled;
