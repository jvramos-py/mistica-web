/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWinnerFiberQualityRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.873 14.69l2.056 3.62c.11.19.091.429-.045.595a.526.526 0 01-.567.184l-3.069-.922-.92 3.432a.528.528 0 01-.441.392c-.027.004-.05.004-.073.004a.528.528 0 01-.458-.262l-2.378-4.24-2.374 4.23a.533.533 0 01-.463.277c-.018 0-.04 0-.063-.005a.543.543 0 01-.45-.396l-.921-3.427-3.023.922a.534.534 0 01-.567-.18.545.545 0 01-.05-.6l1.997-3.653A7.781 7.781 0 014.353 9.75C4.353 5.464 7.766 2 11.978 2c4.216 0 7.624 3.469 7.624 7.75 0 1.876-.64 3.597-1.729 4.94zm-9.281 2.665l.722 2.69 1.452-2.634a7.536 7.536 0 01-3.93-1.933l-1.203 2.2 2.292-.701a.537.537 0 01.413.046c.122.074.218.19.254.332zM5.774 9.75c0-3.469 2.795-6.305 6.204-6.305 3.413 0 6.204 2.841 6.204 6.305 0 3.469-2.796 6.306-6.204 6.306-3.413 0-6.204-2.837-6.204-6.306zm9.848 7.274a.526.526 0 01.409-.046l2.31.696-1.24-2.181a7.544 7.544 0 01-4.02 1.932l1.552 2.662.735-2.73a.536.536 0 01.254-.333z"
                fill={fillColor}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.106 10.833V7.48c.518-.212.885-.729.885-1.333a1.43 1.43 0 00-1.416-1.44 1.43 1.43 0 00-1.416 1.44c0 .604.368 1.12.885 1.333v3.348h-2.128v-.825c.517-.212.885-.729.885-1.333a1.43 1.43 0 00-1.416-1.44 1.43 1.43 0 00-1.416 1.44c0 .604.367 1.12.885 1.333v.825a1.25 1.25 0 00-1.24 1.26v1.439c0 .3.237.54.532.54.295 0 .53-.24.53-.54v-1.435a.18.18 0 01.178-.18h4.257c.1 0 .177.083.177.18v1.44c0 .3.236.54.53.54.296 0 .532-.24.532-.54v-1.44a1.255 1.255 0 00-1.244-1.259zm-.53-5.046c.194 0 .353.161.353.36 0 .198-.159.36-.354.36a.357.357 0 01-.354-.36c0-.199.155-.36.354-.36zM10.733 8.67a.357.357 0 00-.354-.36.357.357 0 00-.354.36c0 .198.159.36.354.36a.357.357 0 00.354-.36z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWinnerFiberQualityRegular;
