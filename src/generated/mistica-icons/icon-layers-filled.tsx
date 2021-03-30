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

const IconLayersFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.773 19.066l-7.952-4.087 1.02-.527 6.103 3.135c.26.131.546.201.832.201.28 0 .56-.064.818-.196l6.23-3.145 1.044.532-8.095 4.087zm0-14.404l8.092 4.12-8.092 4.085-7.952-4.084 7.952-4.12zm-7.952 7.219l1.02-.527 6.103 3.138a1.814 1.814 0 001.65.005l6.23-3.146 1.044.533-8.092 4.087-7.955-4.09zm17.865.003c0-.642-.344-1.224-.888-1.552a1.808 1.808 0 00-.106-3.171l-8.093-4.12a1.812 1.812 0 00-1.66.005l-7.953 4.12a1.824 1.824 0 00-.983 1.622 1.81 1.81 0 00.885 1.544 1.81 1.81 0 00-.885 1.552 1.82 1.82 0 00.885 1.546 1.812 1.812 0 00.104 3.17l7.952 4.085a1.814 1.814 0 001.65.005l8.092-4.086c.614-.309 1-.936 1-1.622a1.82 1.82 0 00-.888-1.555c.54-.325.888-.902.888-1.543z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLayersFilled;
