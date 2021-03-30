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

const IconLinkFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.178 16.598a.806.806 0 011.14-.04.813.813 0 01.04 1.146 26.58 26.58 0 01-.804.84c-1.967 1.976-3.757 3.303-5.544 3.303-1.08 0-2.156-.484-3.271-1.602-1.367-1.372-1.838-2.784-1.446-4.314.336-1.3 1.303-2.703 3.138-4.546 3.154-3.168 5.857-4.672 8.812-1.7.737.74 1.202 1.473 1.426 2.238a.81.81 0 01-1.552.457c-.146-.5-.48-1.006-1.02-1.55-1.602-1.613-3.053-1.792-6.53 1.7-3.475 3.494-3.296 4.953-1.691 6.567 1.605 1.613 3.056 1.792 6.532-1.7.235-.228.51-.516.77-.799zm8.096-12.852c1.364 1.373 1.837 2.785 1.445 4.314-.336 1.3-1.302 2.703-3.137 4.546-1.832 1.844-3.23 2.816-4.521 3.152-.345.09-.684.134-1.017.134-1.14 0-2.219-.524-3.275-1.585-.669-.673-1.112-1.336-1.358-2.028a.808.808 0 111.521-.543c.162.459.482.924.978 1.425 1.218 1.224 2.106 1.193 2.745 1.028.986-.255 2.187-1.123 3.784-2.728 1.597-1.605 2.46-2.815 2.714-3.807.165-.641.2-1.532-1.022-2.76-1.219-1.226-2.107-1.195-2.745-1.027-.986.258-2.188 1.123-3.787 2.728-.303.306-.583.6-.844.885a.801.801 0 01-1.14.054.813.813 0 01-.053-1.146c.275-.303.574-.616.897-.941 1.834-1.843 3.23-2.815 4.523-3.151 1.521-.398 2.925.078 4.292 1.45z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLinkFilled;
