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

const IconPackageTrolleyFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.357 4.327l1.437-.25.216 1.381c.025.11.08.21.168.278.064.05.145.075.232.075.025 0 .04 0 .065-.008l1.445-.252c.218-.034.361-.25.33-.477l-.224-1.38 1.437-.253.731 4.53-5.117.888-.72-4.532zm6.073 7.4a.416.416 0 00.33-.476l-.33-2.05 2.112-.362.899 5.628-7.255 1.263-.9-5.628 2.421-.425.328 2.042c.017.109.073.21.16.277a.39.39 0 00.232.076c.025 0 .042 0 .064-.009l1.939-.336zm4.347 4.462l-7.68 1.33a5.137 5.137 0 00-.225-.635l6.86-1.188c.28-.05.53-.215.7-.467.185-.27.258-.611.21-.956l-.907-5.658a1.301 1.301 0 00-.49-.829 1.03 1.03 0 00-.81-.202l-1.045.185-.756-4.706a1.125 1.125 0 00-.378-.686.97.97 0 00-.77-.216l-5.544.961c-.53.1-.89.653-.795 1.247l.779 4.865a1.2 1.2 0 00.207.476 1.273 1.273 0 00-.04.586l.788 4.924a3.129 3.129 0 00-.754-.059L7.334 4.001a.614.614 0 00-.481-.518l-2.885-.56c-.323-.067-.645.16-.71.502-.055.344.16.67.483.728l2.476.487 1.717 10.734c-1.544.51-2.314 1.866-2.022 3.667.16.997.577 1.776 1.22 2.252.483.358 1.076.543 1.743.543.224 0 .457-.025.7-.067 1.664-.294 2.628-1.406 2.667-2.997l7.737-1.347c.33-.05.546-.376.49-.72-.05-.348-.361-.583-.692-.516z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPackageTrolleyFilled;
