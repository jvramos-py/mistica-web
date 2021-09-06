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

const IconTvContentFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.396 17.374H5.59c-1.12 0-1.989-.314-2.583-.93-.568-.594-.857-1.44-.857-2.515V7.93c0-2.201 1.221-3.411 3.44-3.411l12.806.008c2.219 0 3.44 1.213 3.44 3.412v5.997c0 1.076-.288 1.922-.86 2.51-.594.616-1.462.927-2.58.927zm-3.95 2.199H9.532a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h4.916a.561.561 0 010 1.12z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTvContentFilled;
