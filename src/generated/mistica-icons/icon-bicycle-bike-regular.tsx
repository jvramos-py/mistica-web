/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBicycleBikeRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.68 11.653c.382-.104.79-.174 1.253-.174 2.375 0 3.736 1.42 3.74 3.896 0 2.477-1.362 3.894-3.737 3.894-2.373 0-3.734-1.42-3.734-3.894 0-1.537.526-2.666 1.495-3.302l-.879-1.779-1.966 3.95c.305.283.476.711.476 1.26 0 .731-.3 1.247-.824 1.49l.314.656h.485a.54.54 0 01.529.552v.002a.539.539 0 01-.53.55h-.809a.528.528 0 01-.473-.306l-.636-1.325c-.653-.112-1.073-.543-1.19-1.215H9.45c-.19 2.134-1.504 3.355-3.697 3.355-2.376 0-3.737-1.417-3.737-3.89 0-2.474 1.361-3.894 3.737-3.894.406.003.812.056 1.204.163L8.21 9.078l-.854-1.82h-.81a.541.541 0 01-.53-.552.54.54 0 01.53-.552H9.28a.54.54 0 01.53.552.54.54 0 01-.53.552h-.742l.6 1.28h5.145v-2.56a.549.549 0 01.415-.538c.154-.034 1.535-.334 2.35.35.255.213.56.613.56 1.302a.54.54 0 01-.53.552.541.541 0 01-.529-.552c0-.271-.087-.378-.162-.442-.23-.193-.678-.224-1.042-.193v2.498l1.336 2.698zm-4.94 2.196c.014 0 .027.002.04.003a.547.547 0 00.069.005l2.095-4.216H9.655l1.98 4.216c.02 0 .036-.002.053-.004a.408.408 0 01.051-.004zm6.193 4.143c1.717 0 2.515-.832 2.515-2.617 0-1.79-.798-2.621-2.515-2.621-.25 0-.47.02-.68.056l1.134 2.294c.134.269.033.6-.23.745a.516.516 0 01-.714-.238l-1.185-2.4c-.56.416-.838 1.122-.838 2.162 0 1.787.798 2.619 2.513 2.619zm-5.667-2.488c0-.414-.126-.549-.527-.549-.397 0-.526.132-.526.55 0 .42.123.548.527.548.403 0 .526-.129.526-.549zm-6.515 2.488c1.532 0 2.33-.667 2.484-2.082H5.734a.525.525 0 01-.451-.263.564.564 0 01-.022-.538l1.128-2.31a4.144 4.144 0 00-.638-.048c-1.717 0-2.516.834-2.516 2.622 0 1.787.801 2.619 2.516 2.619zm2.482-3.188c-.087-.754-.365-1.286-.84-1.622l-.796 1.622h1.636zm.563-4.485l-.844 1.729c.869.549 1.379 1.495 1.499 2.759h.815c.076-.219.205-.412.373-.569L8.796 10.32z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBicycleBikeRegular;
