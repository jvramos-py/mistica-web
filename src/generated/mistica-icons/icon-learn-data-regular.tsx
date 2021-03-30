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

const IconLearnDataRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.594 9.636c-.19.328-.74.762-1.706 1.053-1.056.32-2.445.493-3.918.502-.026-.017-.06-.034-.09-.05l-5.5-2.469a1.243 1.243 0 00-.224-.076V6.589a5.86 5.86 0 001.364.585c1.188.359 2.737.552 4.367.552 1.622 0 3.168-.193 4.359-.552a5.71 5.71 0 001.347-.577v3.04zm0 4.734c-.182.32-.73.762-1.706 1.056-1.073.328-2.496.502-4 .502-.341 0-.692-.009-1.025-.034v-2.042l1.017-.451c.398-.177.667-.544.714-.972 1.364-.042 2.647-.235 3.653-.544a5.502 5.502 0 001.347-.593v3.078zm0 4.42c0 .645-.93 1.062-1.714 1.297-1.081.328-2.504.504-4.011.504-1.499 0-2.922-.176-4-.504-.684-.21-1.482-.552-1.673-1.07.241-.05.474-.151.681-.31.857-.687 2.056-1.015 2.905-1.163.291-.05.549-.202.73-.41.45.034.909.051 1.373.051 1.622 0 3.177-.193 4.359-.552.507-.16.964-.361 1.347-.593v2.75h.003zM8.771 17.72c-1.065-.846-2.47-1.23-3.513-1.473v-1.782l3.12 1.398c.157.076.334.11.5.11.176 0 .34-.034.5-.11l3.222-1.44-.034 1.883c-1 .185-2.395.568-3.462 1.414a.273.273 0 01-.333 0zM3.39 12.29l5.49-2.47 5.493 2.434-5.485 2.46-5.498-2.426zm7.479-8.37c1.073-.328 2.495-.504 4-.504 1.515 0 2.938.176 4.01.504.668.21 1.44.544 1.656 1.028a.689.689 0 01-.16.235c-.257.303-.78.577-1.498.788-1.064.327-2.487.5-3.994.5-1.516 0-2.939-.176-4.003-.5a4.623 4.623 0 01-1.04-.435c-.324-.176-.532-.383-.624-.593.17-.395.754-.757 1.653-1.023zm8.37-1.199c-1.183-.358-2.737-.56-4.368-.56-1.63 0-3.176.202-4.358.56-1.431.429-2.28 1.09-2.53 1.958-.05.177-.075.362-.075.544v3.66l-5.025 2.253c-.448.21-.723.636-.723 1.137 0 .485.283.93.723 1.132l1.131.501v2.342c0 .636.449 1.188 1.082 1.297.815.143 1.963.45 2.812 1.095v.151c0 1.13.874 1.975 2.605 2.502 1.19.353 2.737.551 4.358.551 1.622 0 3.18-.201 4.367-.551 1.732-.527 2.605-1.373 2.605-2.502V5.222c0-1.135-.873-1.98-2.605-2.502z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLearnDataRegular;
