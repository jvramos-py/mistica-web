/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSnowflakeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.484 12.38h.305a.439.439 0 100-.879h-.187l1.112-1.112a.436.436 0 000-.622.441.441 0 00-.622 0l-1.737 1.737H18.19l.585-.586a.44.44 0 000-.621.441.441 0 00-.621 0l-1.208 1.207H13.11l3.678-3.678h2.266a.439.439 0 100-.88H17.67l.092-.092a.436.436 0 000-.622.436.436 0 00-.621 0l-.02.02V5.014a.439.439 0 10-.88 0v2.12l-3.8 3.79V7.159l1.288-1.288a.441.441 0 000-.622.441.441 0 00-.622 0l-.667.667v-1.21l1.796-1.796a.436.436 0 000-.622.441.441 0 00-.622 0l-1.17 1.171v-.305a.439.439 0 10-.88 0v.305l-1.171-1.17a.441.441 0 00-.622 0 .441.441 0 000 .621l1.795 1.796v1.092l-.549-.549a.441.441 0 00-.621 0 .441.441 0 000 .622l1.17 1.173v3.838L7.887 7.204V5.011a.439.439 0 10-.88 0v1.31l-.092-.092a.436.436 0 00-.621 0 .441.441 0 000 .622l.092.093h-1.31a.439.439 0 100 .88h2.192l3.678 3.677H7.173l-1.207-1.207a.441.441 0 00-.622 0 .436.436 0 000 .622l.585.585H4.647L2.91 9.764a.441.441 0 00-.622 0 .436.436 0 000 .622L3.4 11.498h-.188a.439.439 0 100 .88h.303l-1.23 1.23a.44.44 0 00.311.753.432.432 0 00.311-.129l1.854-1.851h1.21l-.63.63a.436.436 0 000 .622.437.437 0 00.622 0l1.252-1.252h3.765l-3.796 3.795h-2.12a.439.439 0 100 .88h1.238l-.02.02a.441.441 0 00.311.75.432.432 0 00.311-.129l.093-.092v1.383a.44.44 0 10.88 0v-2.266l3.677-3.678v3.838l-1.17 1.17a.441.441 0 000 .623c.17.173.45.173.621 0l.55-.55v1.166l-1.796 1.796a.441.441 0 000 .621.44.44 0 00.621 0l1.171-1.17v.187c0 .244.196.44.44.44s.44-.196.44-.44v-.188l1.17 1.171a.45.45 0 00.312.13.432.432 0 00.31-.13.436.436 0 000-.621l-1.795-1.796v-1.283l.667.664a.437.437 0 00.622 0 .443.443 0 000-.622l-1.289-1.288v-3.765l3.796 3.795v2.19a.439.439 0 10.88 0v-1.31l.019.02a.436.436 0 00.622 0 .436.436 0 000-.622l-.02-.02h1.31a.439.439 0 100-.88h-2.19l-3.781-3.79H16.9l1.253 1.253a.436.436 0 00.621 0 .441.441 0 000-.622l-.63-.63h1.093l1.851 1.854a.437.437 0 00.622 0 .44.44 0 000-.625l-1.227-1.23z"
            />
        </svg>
    );
};

export default IconSnowflakeLight;
