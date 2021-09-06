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

const IconBicycleBikeRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.933 17.992c-1.715 0-2.513-.832-2.513-2.62 0-1.039.277-1.745.838-2.162l1.185 2.4a.516.516 0 00.714.238.565.565 0 00.23-.744l-1.135-2.294c.21-.037.431-.056.68-.056 1.718 0 2.516.831 2.516 2.621 0 1.785-.798 2.617-2.515 2.617zm-6.194-4.143c-.036 0-.067.008-.103.008l-1.98-4.216h4.288l-2.095 4.216c-.037 0-.07-.005-.11-.008zm0 1.106c.401 0 .527.135.527.55 0 .42-.123.548-.527.548-.403 0-.526-.129-.526-.549 0-.417.129-.549.526-.549zm-5.988 3.037c-1.715 0-2.516-.832-2.516-2.62 0-1.787.799-2.621 2.516-2.621.23 0 .44.017.638.047L5.261 15.11a.564.564 0 00.022.538.525.525 0 00.45.263h2.502c-.154 1.415-.952 2.082-2.484 2.082zm1.641-4.81c.476.336.754.868.84 1.622H6.597l.795-1.622zm1.404-2.863l1.843 3.92c-.168.156-.297.35-.373.568h-.815c-.12-1.264-.63-2.21-1.499-2.76l.844-1.728zm9.137 1.16c-.462 0-.871.07-1.252.174l-1.336-2.698V6.457c.364-.031.812 0 1.042.193.075.064.162.17.162.442 0 .306.238.552.53.552a.54.54 0 00.529-.552c0-.689-.305-1.09-.56-1.302-.816-.684-2.196-.384-2.35-.35a.549.549 0 00-.415.538v2.56H9.137l-.6-1.28h.743a.54.54 0 00.53-.552.54.54 0 00-.53-.552H6.546a.54.54 0 00-.53.552c0 .305.239.552.53.552h.81l.854 1.82-1.252 2.563a4.728 4.728 0 00-1.204-.162c-2.376 0-3.737 1.42-3.737 3.894 0 2.473 1.361 3.89 3.737 3.89 2.193 0 3.507-1.221 3.697-3.355h.742c.118.672.538 1.103 1.19 1.215l.637 1.325c.09.188.274.306.473.306h.81a.539.539 0 00.529-.55v-.002a.54.54 0 00-.53-.552h-.484l-.314-.656c.524-.243.824-.759.824-1.49 0-.549-.171-.977-.476-1.26l1.966-3.95.88 1.779c-.97.636-1.496 1.765-1.496 3.302 0 2.474 1.361 3.894 3.734 3.894 2.375 0 3.736-1.417 3.736-3.894-.003-2.476-1.364-3.896-3.74-3.896z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBicycleBikeRegular;
