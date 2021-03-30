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

const IconShopFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.406 13.064c.65.365 1.448.566 2.275.566.647 0 1.243-.131 1.773-.342v6.788c0 .888-.68 1.61-1.516 1.61h-4.467v-5.644c0-.68-.493-1.233-1.098-1.233h-3.037c-.608 0-1.098.552-1.098 1.233v5.644H4.745c-.837 0-1.515-.722-1.515-1.61v-6.788c.53.213 1.126.342 1.773.342.835 0 1.638-.204 2.288-.574.65.367 1.454.574 2.289.574.622 0 1.235-.115 1.781-.33.174-.07.34-.149.493-.236.65.365 1.448.566 2.278.566.829 0 1.627-.201 2.274-.566zm4.768-3.593c.327.333.512.756.512 1.198 0 1.2-1.32 2.14-3.003 2.14-.888 0-1.711-.271-2.274-.733-.56.462-1.387.734-2.277.734-.888 0-1.712-.272-2.275-.734a3 3 0 01-.798.462c-.446.18-.958.272-1.476.272-.897 0-1.723-.272-2.289-.746-.56.471-1.392.746-2.288.746-1.684 0-3.003-.942-3.003-2.14 0-.426.19-.726.344-.967.062-.098.126-.196.174-.308.098-.227.857-2.684 1.415-4.479.274-.885.529-1.709.703-2.26a.903.903 0 01.851-.62L18.188 2h.002c.395 0 .737.25.858.622l1.26 4.003c.05.154.126.434.216.759.168.61.518 1.88.65 2.087z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShopFilled;
