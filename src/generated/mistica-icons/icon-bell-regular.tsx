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

const IconBellRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.022 21.646c-1.633 0-2.911-.974-3.025-2.806l-.006-.15h-5.57a.421.421 0 01-.396-.272.4.4 0 01.13-.456c1.37-1.094 1.798-2.928 1.927-4.143l.03-.329.016-.288.006-.24-.002-.29-.003-.077v-3.9c0-1.101.175-2.076.508-2.923l.117-.278.417-.773a5.46 5.46 0 01.894-1.056C8.215 2.62 9.63 2.225 10.66 2.08l.312-.038.281-.024.247-.013.295-.005.23.007.229-.007.186.001.228.009.264.018.297.03c1.04.125 2.543.505 3.75 1.604 1.22 1.107 1.87 2.692 1.931 4.714l.005.323-.003 3.955-.002.204.006.31.013.255.023.29.016.155.042.331c.176 1.197.646 2.782 1.88 3.766a.407.407 0 01-.192.721l-.074.007h-1.726l-1.126-.003H15.06l-.008.16c-.149 1.829-1.412 2.796-3.031 2.796zm0-1.1c1.073 0 1.824-.562 1.932-1.756l.006-.1h-3.868l.005.11c.085 1.182.842 1.746 1.925 1.746zm.22-17.347l-.146.006h-.141a6.34 6.34 0 00-1.566.139c-.874.18-1.663.515-2.308 1.03l-.21.18-.188.183a4.235 4.235 0 00-.348.412l-.139.199-.348.638c-.303.675-.477 1.464-.512 2.366l-.007.344-.003 3.807.007.203.001.271c-.02 1.519-.304 3.002-1.009 4.243l-.163.27h12.614l1.126.003-.037-.057a6.88 6.88 0 01-.51-1.032l-.104-.277a9.539 9.539 0 01-.484-2.213c-.042-.405-.058-.77-.057-1.082l.006-.283v-3.85c0-1.856-.527-3.226-1.543-4.15-.678-.616-1.542-1.007-2.511-1.206a6.68 6.68 0 00-1.42-.144z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBellRegular;
