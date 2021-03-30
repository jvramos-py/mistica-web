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

const IconHotelLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.434 21.016c2.014-.036 8.588-.793 8.588-8.989 0-3.549-1.216-6.112-3.608-7.613-1.955-1.227-4.163-1.406-5.022-1.429a32.3 32.3 0 00-.737-.008h-.171c-.854.008-3.045.157-4.972 1.367-2.347 1.476-3.535 4.042-3.535 7.625 0 3.585 1.202 6.16 3.571 7.655 1.944 1.224 4.154 1.384 5.014 1.398.098.003.196.003.295.003l.577-.009zM12.41 2.167c1.927.045 9.432.807 9.432 9.86 0 9.073-7.513 9.776-9.393 9.813a36.18 36.18 0 01-.593.005c-.104 0-.208 0-.309-.002-1.977-.031-9.392-.746-9.392-9.874 0-9.115 7.348-9.796 9.322-9.813h.177c.258 0 .524.003.756.011zm3.902 15.163V6.669H13.88v4.347h-3.76V6.67H7.687v10.66h2.434v-4.486h3.759v4.49l2.434-.003zm0-11.48a.82.82 0 01.82.822v10.66a.82.82 0 01-.82.821H13.88a.82.82 0 01-.82-.82v-3.67h-2.12v3.67a.82.82 0 01-.821.82H7.688a.82.82 0 01-.82-.82V6.669a.82.82 0 01.82-.82h2.435a.82.82 0 01.82.82v3.526h2.118V6.67a.82.82 0 01.82-.82c-.002.002 2.432.002 2.432.002z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHotelLight;
