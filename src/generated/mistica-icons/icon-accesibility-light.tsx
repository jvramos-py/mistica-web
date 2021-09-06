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

const IconAccesibilityLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.68 21.286l-5.321-5.322c1.792-.796 3.571-2.073 5.322-3.824a.282.282 0 000-.398c-3.16-3.16-6.423-4.762-9.692-4.762-1.291 0-2.583.25-3.868.748l-5.488-5.49a.279.279 0 10-.395.395L7.56 7.955c-1.792.796-3.571 2.073-5.322 3.824a.282.282 0 000 .398c3.16 3.16 6.423 4.761 9.692 4.761 1.291 0 2.583-.249 3.868-.747l5.488 5.487a.275.275 0 00.199.081.287.287 0 00.199-.081.273.273 0 00-.003-.392zm-9.69-13.75c3.05 0 6.11 1.48 9.098 4.4-1.703 1.664-3.426 2.865-5.154 3.596l-1.098-1.095c.496-.619.748-1.454.748-2.487 0-1.205-.34-2.138-1.009-2.773-.633-.603-1.526-.908-2.652-.908-1.034 0-1.869.255-2.49.762l-.874-.874a10.078 10.078 0 013.43-.622zm-.053 3.596c-.132 0-.25.017-.356.056l-1.75-1.75c.515-.399 1.215-.6 2.089-.6 1.414 0 3.1.54 3.1 3.117 0 .874-.195 1.574-.588 2.087l-1.72-1.72c.034-.1.054-.218.054-.353.003-.574-.325-.837-.83-.837zm-.006 5.249c-3.05 0-6.11-1.482-9.098-4.4 1.703-1.664 3.426-2.866 5.154-3.597l7.375 7.375a10.011 10.011 0 01-3.43.622z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAccesibilityLight;
