/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLandlineLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.578 17.48a.357.357 0 010 .504.34.34 0 01-.49 0l-.428-.44a2.049 2.049 0 00-2.95 0l-3.478 3.619a2.742 2.742 0 01-3.943 0c-.989-1.016-1.074-2.616-.254-3.737-.989-.032-1.84-.38-2.486-1.034l-1.065-1.084c-.606-.618-.65-1.592-.093-2.168l1.595-1.656c.557-.576 1.501-.544 2.111.073l1.114 1.134c.753.764 2.38.197 3.872-1.349.766-.796 1.3-1.647 1.51-2.397.13-.471.196-1.13-.245-1.578l-1.114-1.134c-.606-.618-.65-1.588-.094-2.164l1.595-1.656c.277-.283.65-.43 1.056-.411.392.018.767.192 1.056.484l1.065 1.084c2.063 2.1.971 6.194-2.66 9.963-1.777 1.844-3.64 3.097-5.381 3.627a7.357 7.357 0 01-.816.193l-.003.005c-.002.002-.003.004-.006.004l-.263.26c-.81.833-.81 2.192.005 3.029a2.05 2.05 0 002.954 0l3.47-3.619a2.73 2.73 0 013.938 0l.428.449zm1.813 1.68a.705.705 0 01-.695.713.705.705 0 01-.695-.714c0-.393.312-.713.695-.713.383 0 .695.32.695.713zM8.675 16.482c1.63-.494 3.385-1.683 5.083-3.444 3.341-3.467 4.437-7.15 2.664-8.952l-1.065-1.084a.905.905 0 00-.601-.279.665.665 0 00-.526.202L12.635 4.58c-.285.298-.245.815.09 1.158l1.113 1.134c.53.54.682 1.35.423 2.283-.24.878-.824 1.816-1.684 2.707-1.83 1.899-3.782 2.443-4.856 1.354l-1.114-1.134a.892.892 0 00-.637-.279.663.663 0 00-.49.201L3.885 13.66c-.285.298-.245.814.09 1.158l1.069 1.07c1.06 1.08 2.561.92 3.63.595z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLandlineLight;
