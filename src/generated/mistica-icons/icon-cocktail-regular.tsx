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

const IconCocktailRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.451 9.308c-.045 0-.081-.005-.123-.005l.904-1.05c.202-.22.328-.51.328-.83a1.21 1.21 0 00-1.204-1.216h-.014l-2.913.014c.014-2.047.972-3.005 3.022-3.005 2.036 0 3.028.997 3.028 3.047 0 2.076-.964 3.045-3.028 3.045zm-5.768 4.678L7.616 9.681h7.782l-3.715 4.305zm-1.21 6.479l1.236-.571 1.339.565-2.575.006zM17.35 7.423l-.916 1.056c-.025-.003-.047-.014-.073-.014H6.468l-.936-.989c0 .003 11.818-.053 11.818-.053zM17.451 2c-2.717 0-4.216 1.501-4.23 4.224L8.04 6.25 6.17 4.367a1.454 1.454 0 00-1.03-.427H2.605A.607.607 0 002 4.55c0 .336.272.608.605.608H5.14a.25.25 0 01.174.07l1.022 1.03-.807.004A1.214 1.214 0 004.423 7c-.188.445-.095.96.235 1.314l6.152 6.512c.08.087.182.157.285.216v3.798l-3.641 1.687a.608.608 0 00.25 1.16l8.33-.018a.61.61 0 00.232-1.168L12.3 18.824v-3.799c.112-.064.21-.145.294-.24l3.765-4.362c.338.062.7.098 1.09.098 2.73 0 4.234-1.513 4.234-4.26C21.686 3.515 20.183 2 17.451 2z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCocktailRegular;
