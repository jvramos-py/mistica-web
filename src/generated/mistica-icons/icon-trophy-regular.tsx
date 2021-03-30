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

const IconTrophyRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.6 9.927a5.675 5.675 0 01-.418-.008c.53-1.451.717-3.289.737-5.412v-.479c.93.078 2.51.56 2.51 2.93 0 2.641-1.978 2.955-2.83 2.97m-.94-5.432c-.054 5.652-1.27 7.624-4.785 7.697-.011-.003-.16.006-.199.006-3.7 0-4.958-1.992-4.986-7.888V3.244h9.97c.002.515.002 1.173 0 1.252m-1.805 15.947H8.83c.185-1.64 1.157-2.41 3.011-2.41 1.857 0 2.83.77 3.014 2.41M6.087 9.927c-.852-.011-2.83-.325-2.83-2.966 0-2.104 1.247-2.72 2.177-2.888v.24c.011 2.21.196 4.116.745 5.611-.03 0-.061.003-.092.003m11.832-7.143v-.16a.625.625 0 00-.628-.621H6.061a.625.625 0 00-.627.622v.193C3.678 3.045 2 4.216 2 6.96c0 3.061 2.1 4.182 4.067 4.21h.13c.078 0 .153 0 .218-.003.092 0 .22-.008.358-.022.868 1.364 2.26 2.173 4.44 2.277v3.412c-2.367.221-3.675 1.692-3.675 4.23 0 .344.283.621.63.621h7.347c.348 0 .628-.28.628-.622 0-2.537-1.308-4.005-3.675-4.23V13.41c2.03-.168 3.325-.975 4.145-2.305l.135.025a4.94 4.94 0 00.74.042h.128c1.967-.028 4.067-1.151 4.067-4.21.003-2.919-1.893-4.062-3.764-4.177"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTrophyRegular;
