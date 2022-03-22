/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBugLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.451 12.136c.24 0 .437.185.437.417v1.678a.43.43 0 01-.437.42.429.429 0 01-.437-.42v-1.258h-1.76l.006.155c.003.076.006.152.006.235 0 1.694-.148 3.14-.608 4.285l2.353.687c.19.056.32.232.308.423l-.14 2.53a.43.43 0 01-.437.397h-.022a.43.43 0 01-.415-.44v-.003l.124-2.201-2.163-.625c-.851 1.37-2.364 2.14-4.991 2.14-2.634 0-4.146-.773-4.998-2.151l-2.201.638.12 2.202a.423.423 0 01-.409.44H4.76a.43.43 0 01-.434-.398l-.14-2.53a.419.419 0 01.31-.422l2.396-.698c-.457-1.14-.602-2.582-.602-4.271 0-.083.003-.16.006-.235l.005-.155H4.54v1.258a.429.429 0 01-.436.42.429.429 0 01-.437-.42v-1.678c0-.232.196-.42.437-.42h2.221c.1-1.787.434-3.067 1.053-3.98l-2.88-.84a.419.419 0 01-.31-.424l.14-2.53a.431.431 0 01.46-.397c.24.011.425.21.414.443l-.12 2.201 2.834.827c.016.003.03.013.044.022l.018.011.131-.117c-.252-.418-.39-.928-.39-1.563 0-1.844 1.037-2.583 2.715-2.835l-.25-.238a.408.408 0 01-.016-.577l.017-.017a.454.454 0 01.619 0l.767.737.135-.006c.188-.007.378-.014.577-.014.162 0 .315.005.467.01l.222.007.768-.734a.454.454 0 01.619 0 .41.41 0 010 .594l-.247.235c1.692.25 2.734.989 2.734 2.838 0 .638-.137 1.15-.395 1.57l.052.046.052.045.01-.007c.007-.004.014-.008.023-.01l2.838-.827-.123-2.201a.428.428 0 01.411-.443h.003a.418.418 0 01.46.398l.14 2.53a.42.42 0 01-.309.422l-2.834.827c.627.91.96 2.179 1.056 3.991l2.221.006zM8.597 5.79c0 .457.084.807.238 1.087.874-.462 1.997-.7 3.442-.7 1.457 0 2.583.244 3.457.709.157-.283.24-.636.24-1.096 0-1.4-.57-2.109-3.688-2.109-3.12 0-3.69.712-3.69 2.11zm8.792 7.575c0-3.017-.504-4.67-1.689-5.524-.764-.555-1.885-.824-3.423-.824-1.549 0-2.678.275-3.445.838-1.168.86-1.667 2.507-1.667 5.51 0 4.806 1.241 6.347 5.112 6.347s5.112-1.54 5.112-6.348zm-4.745-4.174a.429.429 0 00-.437-.42.429.429 0 00-.437.42v8.1a.429.429 0 00.437.42.429.429 0 00.437-.42v-8.1z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBugLight;
