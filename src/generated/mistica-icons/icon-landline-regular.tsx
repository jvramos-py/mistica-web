/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLandlineRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.688 16.4l1.81 1.973a.74.74 0 01-.022 1.02.682.682 0 01-.985-.027l-1.797-1.958a1.708 1.708 0 00-2.448.013l-3.473 3.632c-.61.63-1.417.947-2.22.947a3.079 3.079 0 01-2.216-.947 3.257 3.257 0 01-.918-2.285c0-.487.107-.956.303-1.383a3.608 3.608 0 01-1.841-1.003l-1.012-1.034a1.99 1.99 0 01-.566-1.278 1.754 1.754 0 01.477-1.324l1.516-1.581c.668-.699 1.8-.667 2.523.069l1.061 1.085c.468.482 1.739.193 3.16-1.288 1.414-1.475 1.677-2.78 1.205-3.263l-1.061-1.08c-.723-.736-.763-1.904-.094-2.603l1.516-1.581c.668-.699 1.8-.667 2.523.069l1.012 1.034c1.066 1.085 1.369 2.717.852 4.593-.486 1.77-1.654 3.654-3.38 5.452-1.73 1.802-3.553 3.034-5.27 3.558a6.952 6.952 0 01-.949.211l-.085.088c-.316.33-.499.781-.499 1.26 0 .477.178.928.508 1.268a1.707 1.707 0 002.461 0l3.473-3.632a3.066 3.066 0 014.436-.004zM4.69 13.984a.522.522 0 00.156.34l1.008 1.034c.584.598 1.346.736 2.064.676a.6.6 0 01.2-.023c.29-.037.571-.101.825-.18 1.472-.445 3.13-1.58 4.677-3.19 1.534-1.6 2.613-3.314 3.027-4.831.263-.956.393-2.28-.49-3.181l-1.012-1.034c-.174-.175-.424-.212-.553-.079l-1.516 1.582c-.125.133-.089.395.085.57l1.061 1.08c1.177 1.2.695 3.328-1.195 5.296-1.894 1.972-3.959 2.496-5.131 1.296l-1.061-1.085a.5.5 0 00-.348-.16.274.274 0 00-.205.078l-1.516 1.58a.288.288 0 00-.076.23z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLandlineRegular;
