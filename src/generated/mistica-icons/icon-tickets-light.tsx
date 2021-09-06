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

const IconTicketsLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.01 18.305V4.055c0-.59-.482-1.07-1.076-1.07h-2.238a.174.174 0 00-.173.157 1.738 1.738 0 01-1.715 1.476 1.74 1.74 0 01-1.714-1.476.178.178 0 00-.174-.16h-2.238c-.59 0-1.072.482-1.072 1.07v14.25c0 .59.481 1.07 1.072 1.07h2.255a.18.18 0 00.174-.149 1.733 1.733 0 013.395 0 .185.185 0 00.176.149h2.255a1.065 1.065 0 001.073-1.067zm-10.426 2.594l1.241-.695h-.143a1.901 1.901 0 01-1.876-1.622c-.04.011-.076.03-.118.03a.418.418 0 01-.361-.21L4.96 10.659a.412.412 0 01.154-.563s.003 0 .003-.003l4.658-2.61V4.704l-1.653.927c-.05.028-.073.09-.048.14a1.59 1.59 0 01-.703 1.95 1.602 1.602 0 01-2.036-.414.114.114 0 00-.148-.034l-1.737.972a.89.89 0 00-.429.549.897.897 0 00.081.689l6.239 11.064c.12.21.313.362.549.429a.91.91 0 00.694-.078zM5.887 10.61l3.89 6.896V8.431l-3.89 2.179zm14.05-8.454c1.05 0 1.902.849 1.905 1.9v14.249a1.9 1.9 0 01-1.905 1.896h-2.255c-.481 0-.896-.342-.988-.815a.9.9 0 00-1.765 0 1.008 1.008 0 01-.989.815h-.82a.91.91 0 01-.373.434l-1.754.983c-.403.227-.88.286-1.322.16a1.73 1.73 0 01-1.047-.82L2.38 9.892a1.735 1.735 0 01.664-2.364l1.74-.972a.947.947 0 011.212.25.756.756 0 101.305-.732.933.933 0 01.418-1.162l1.736-.972c.11-.062.23-.098.35-.135a1.902 1.902 0 011.88-1.65h2.235c.505 0 .925.364.998.869a.906.906 0 00.89.767c.443 0 .83-.33.894-.767.073-.505.493-.869.997-.869h2.238zm-7.224 13.62h6.311V6.63h-6.31v9.145zm6.726-9.973c.23 0 .414.185.414.415v9.972c0 .23-.187.414-.414.414h-7.143a.414.414 0 01-.415-.414V6.215c0-.227.185-.414.415-.414h7.143v.002z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTicketsLight;
