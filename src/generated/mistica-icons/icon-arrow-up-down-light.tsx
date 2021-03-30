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

const IconArrowUpDownLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.275 21.851a.481.481 0 01-.37-.17l-4.411-4.474-.017-.02a.515.515 0 01-.064-.549.485.485 0 01.442-.283l2.244-.02-.006-3.389c0-.529.432-.96.961-.96h2.46c.529 0 .96.431.96.96l.003 3.393 2.247.02a.49.49 0 01.44.282.515.515 0 01-.085.569l-4.434 4.47a.481.481 0 01-.37.171zm-4.283-4.935l4.286 4.341 4.308-4.341-2.176-.017h-.006a.5.5 0 01-.484-.51l-.006-3.44a.4.4 0 00-.4-.4h-2.46a.4.4 0 00-.4.4l.005 3.44a.5.5 0 01-.484.51h-.006l-2.177.017zm-3.478-4.897a.962.962 0 01-.961-.96l-.003-3.39-2.247-.02a.489.489 0 01-.44-.282.515.515 0 01.085-.569l4.434-4.47a.498.498 0 01.31-.169.488.488 0 01.43.168l4.411 4.474c.006.005.011.014.017.02a.515.515 0 01.064.548.485.485 0 01-.442.283l-2.244.02.006 3.386c0 .53-.432.961-.961.961h-2.46zm-.404-4.4l.003 3.44c0 .22.18.4.4.4h2.46a.4.4 0 00.4-.4l-.005-3.437a.501.501 0 01.484-.51h.006l2.177-.017-4.286-4.342L4.44 7.09l2.176.017h.006c.274.011.49.238.487.513z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowUpDownLight;
