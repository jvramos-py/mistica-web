/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCopyRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.081 7.602h4.146c.804 0 1.46.656 1.456 1.46v11.165a1.46 1.46 0 01-1.459 1.46H9.062c-.804 0-1.46-.656-1.46-1.46v-4.143H3.51c-.832 0-1.51-.678-1.51-1.51V3.51C2 2.675 2.675 2 3.507 2h11.064c.832 0 1.51.675 1.51 1.51v4.092zM3.275 14.574c0 .13.103.233.232.236h11.064a.237.237 0 00.236-.236V3.51a.237.237 0 00-.236-.235H3.51a.237.237 0 00-.235.235v11.064zm17.137 5.653V9.062a.183.183 0 00-.185-.185h-4.143v5.694c0 .832-.678 1.51-1.51 1.51H8.88v4.146c0 .1.08.185.184.185h11.163c.1 0 .185-.081.185-.185z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCopyRegular;
