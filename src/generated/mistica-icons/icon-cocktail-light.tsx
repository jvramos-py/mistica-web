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

const IconCocktailLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.708 9.61a5.17 5.17 0 01-.801-.059l1.294-1.501a.825.825 0 00.227-.569.82.82 0 00-.818-.826h-.008l-3.166.014c-.008-.123-.016-.244-.016-.373 0-2.23 1.075-3.313 3.29-3.313 2.217 0 3.295 1.084 3.295 3.313 0 2.233-1.078 3.314-3.297 3.314zm-5.88 4.569l-4.344-4.6h8.305l-.01.017-3.95 4.583zm-2.176 6.815l2.199-1.017 2.386 1.008c-.002.003-4.585.009-4.585.009zM17.604 7.48l-1.095 1.27H6.98a.415.415 0 00-.212.066l-1.21-1.283c0 .003 12.047-.053 12.047-.053zm.104-5.325c-2.653 0-4.112 1.47-4.112 4.143 0 .132.011.252.017.375L8.207 6.7c-.014-.02-.023-.042-.04-.062L6.053 4.512a1.27 1.27 0 00-.902-.378H2.568a.412.412 0 000 .826h2.588c.12 0 .236.048.32.135l1.599 1.607-1.521.009a.815.815 0 00-.75.501.833.833 0 00.159.894l6.272 6.638c.056.062.129.101.199.14v4.373l-3.835 1.776a.414.414 0 00.17.79l8.496-.017a.415.415 0 10.16-.795l-4.17-1.762v-4.381c.07-.042.14-.084.195-.149l3.852-4.465c.428.11.893.18 1.409.18 2.653 0 4.115-1.471 4.115-4.138 0-2.666-1.462-4.14-4.118-4.14z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCocktailLight;
