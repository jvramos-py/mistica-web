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

const IconPowerRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.999 2.15c3.129 0 5.563.818 7.238 2.429 1.737 1.675 2.616 4.17 2.616 7.425 0 3.252-.88 5.751-2.616 7.423-1.675 1.611-4.11 2.426-7.238 2.426-3.13 0-5.563-.818-7.236-2.428-1.733-1.673-2.613-4.169-2.613-7.423 0-3.253.88-5.751 2.613-7.426C6.436 2.968 8.87 2.15 12 2.15zm0 1.09c-5.813 0-8.76 2.95-8.76 8.764 0 5.813 2.947 8.76 8.76 8.76 5.815 0 8.764-2.947 8.764-8.76C20.761 6.19 17.813 3.24 12 3.24zm1.694 2.832c1.435.263 2.544.899 3.303 1.89.77 1.009 1.16 2.37 1.16 4.05 0 1.995-.547 3.536-1.625 4.572-1.036 1.006-2.535 1.513-4.454 1.513-1.919 0-3.417-.507-4.454-1.507-1.075-1.037-1.621-2.577-1.621-4.572 0-1.658.378-3.005 1.126-4.008.736-.989 1.82-1.633 3.218-1.91a.559.559 0 11.219 1.098c-2.32.462-3.446 2.039-3.446 4.82 0 1.681.432 2.947 1.28 3.765.821.79 2.06 1.19 3.678 1.19 1.62 0 2.857-.4 3.678-1.193.849-.818 1.28-2.084 1.28-3.764 0-2.821-1.16-4.404-3.543-4.84a.56.56 0 11.201-1.104zM12.05 4.326c.308 0 .56.253.56.56v4.099c0 .308-.252.56-.56.56a.562.562 0 01-.56-.56V4.887c0-.308.252-.56.56-.56z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPowerRegular;
