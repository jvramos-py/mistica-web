/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFastForwardRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12zm1.43 0c0-4.726 3.844-8.57 8.57-8.57 4.726 0 8.57 3.844 8.57 8.57 0 4.726-3.844 8.57-8.57 8.57-4.726 0-8.57-3.844-8.57-8.57zm4.434 5.146l4.639-4.643a.714.714 0 000-1.01l-4.64-4.64a.714.714 0 00-1.01 1.01L10.99 12l-4.136 4.136a.714.714 0 001.01 1.01zm10.713-4.643l-4.644 4.643a.713.713 0 11-1.01-1.01L17.06 12l-4.136-4.136a.714.714 0 011.01-1.01l4.644 4.639a.714.714 0 010 1.01z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.846 2C5.406 2 2 5.403 2 11.846c0 6.437 3.403 9.84 9.846 9.84 6.437 0 9.84-3.403 9.84-9.84 0-6.443-3.403-9.846-9.84-9.846zm0 18.476c-5.731 0-8.636-2.905-8.636-8.63 0-5.731 2.905-8.636 8.636-8.636 5.728 0 8.63 2.905 8.63 8.636 0 5.725-2.905 8.63-8.63 8.63zM7.504 9.65v3.79s3.168-1.885 3.171-1.885L7.505 9.65zm9.093 1.899l-3.171-1.905v3.79l3.17-1.885zM6.29 8.579c0-.218.118-.42.308-.526a.61.61 0 01.611.009l4.952 2.974c.014.008.023.02.032.03a.1.1 0 00.024.026V8.574a.605.605 0 01.916-.518l4.953 2.98a.604.604 0 01-.003 1.036l-4.952 2.948a.606.606 0 01-.913-.521v-2.482c-.01.007-.018.017-.026.027a.115.115 0 01-.033.032l-4.953 2.946a.606.606 0 01-.916-.521V8.58z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconFastForwardRegular;
