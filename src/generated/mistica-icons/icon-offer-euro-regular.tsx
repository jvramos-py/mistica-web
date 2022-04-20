/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOfferEuroRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.137 12l2.19-2.383a.724.724 0 00.156-.706.706.706 0 00-.54-.481l-3.17-.637.371-3.217a.713.713 0 00-1.006-.734L14.2 5.19l-1.587-2.823a.712.712 0 00-1.244 0L9.781 5.19 6.845 3.842a.712.712 0 00-.718.074.703.703 0 00-.288.66l.375 3.217-3.17.637a.72.72 0 00-.54.481.711.711 0 00.156.706L4.85 12l-2.19 2.383a.724.724 0 00-.156.706c.078.247.284.43.54.481l3.17.637-.375 3.217a.723.723 0 00.288.66.721.721 0 00.718.074l2.937-1.348 1.587 2.823a.711.711 0 001.244 0l1.588-2.823 2.937 1.348a.722.722 0 00.718-.074.703.703 0 00.288-.66l-.37-3.217 3.17-.637a.72.72 0 00.54-.481.711.711 0 00-.156-.706L19.137 12zm-2.292 2.933a.71.71 0 00-.567.784l.302 2.607-2.384-1.095a.715.715 0 00-.92.298l-1.284 2.291-1.286-2.286a.708.708 0 00-.92-.303l-2.382 1.095.301-2.607a.717.717 0 00-.567-.784l-2.57-.518 1.774-1.934a.72.72 0 000-.971L4.567 9.576l2.571-.518a.71.71 0 00.567-.784l-.301-2.608 2.383 1.096a.715.715 0 00.92-.298L11.99 4.18l1.286 2.287a.712.712 0 00.92.298l2.383-1.095-.302 2.608a.717.717 0 00.567.783l2.57.518-1.774 1.934a.72.72 0 000 .972l1.775 1.934-2.571.513zm-3.778-3.47h-2.988a2.847 2.847 0 012.81-2.318c.498 0 .992.133 1.426.385a.537.537 0 00.536-.93 3.923 3.923 0 00-1.968-.532 3.934 3.934 0 00-3.888 3.4H8.42a.533.533 0 00-.535.537c0 .298.238.536.535.536h.576a3.934 3.934 0 003.889 3.4c.686 0 1.367-.183 1.966-.531a.539.539 0 00.197-.733.533.533 0 00-.732-.197 2.85 2.85 0 01-1.427.384 2.864 2.864 0 01-2.809-2.328h2.987a.533.533 0 00.536-.536.533.533 0 00-.536-.536z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOfferEuroRegular;
