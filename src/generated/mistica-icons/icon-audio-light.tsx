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

const IconAudioLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.106 5.559c.11.1 2.686 2.49 2.73 6.577.007.145.147 4.165-2.694 6.73a.783.783 0 01-.532.205.806.806 0 01-.597-.269.815.815 0 01.065-1.14c2.28-2.059 2.162-5.448 2.16-5.482-.037-3.414-2.18-5.403-2.202-5.422a.815.815 0 01-.062-1.14.802.802 0 011.132-.06zm-.95 6.616c.006.087.098 2.765-1.8 4.479a.796.796 0 01-1.129-.064.812.812 0 01.064-1.14c1.325-1.197 1.269-3.216 1.266-3.236-.02-2.008-1.244-3.17-1.297-3.218a.814.814 0 01-.05-1.14.79.79 0 011.12-.06c.076.07 1.798 1.665 1.826 4.379zm-6.011 5.51V6.304c-2.146.033-3.664.745-4.583 2.12-.016.045-.061.067-.086.107a.73.73 0 01-.174.218l-.023.017a.785.785 0 01-.49.185l-3.039.003.008 6.095 3.023-.003c.308 0 .569.185.703.443.014.025.045.036.056.067.91 1.386 2.457 2.1 4.605 2.129zm.078-12.997c.872 0 1.519.655 1.519 1.456V17.85c0 .798-.642 1.448-1.432 1.448-3.285 0-5.022-1.358-5.944-2.641l-3.4.002a.801.801 0 01-.799-.803l-.01-7.71a.805.805 0 01.798-.806l3.425-.003c.925-1.288 2.656-2.65 5.843-2.65z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAudioLight;
