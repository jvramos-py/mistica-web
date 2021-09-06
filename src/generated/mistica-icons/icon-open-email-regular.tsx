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

const IconOpenEmailRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.622 20.464c-.591.01-3.272.014-7.356.01h-.042c-3.58 0-7.493 0-8.157-.01-.232-.003-.54-.048-.694-.227-.171-.202-.132-.535-.132-.535l.008-.05-.005-8.404 6.812 4.291c.07.053.728.51 1.661.51.563 0 1.1-.165 1.588-.485l7.138-4.448-.009 8.482.009.104c0 .002.042.327-.126.53-.152.184-.463.226-.695.232zM10.899 4.34a1.84 1.84 0 01.95-.271c.535 0 .935.269.96.288l7.36 4.647c.15.107.24.348.262.667l-7.795 4.86a1.658 1.658 0 01-.919.288 1.8 1.8 0 01-.96-.294L3.243 9.791V9.79c.008-.387.103-.664.246-.768l7.41-4.68zm10.782 5.418c-.023-1.003-.44-1.51-.815-1.773l-7.362-4.647a3.071 3.071 0 00-1.67-.502c-.926 0-1.582.448-1.624.482L2.93 7.915 2.793 8c-.345.25-.765.757-.787 1.774l.008 9.787c-.025.218-.062.899.4 1.456.25.3.734.658 1.63.678.505.008 2.822.011 5.455.011h2.764c1.933 0 6.527.003 7.381-.01.894-.018 1.378-.38 1.628-.679.462-.557.428-1.238.403-1.456-.003-.003.006-9.804.006-9.804z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOpenEmailRegular;
