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

const IconEditLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.003 16.943l-.174.154a.33.33 0 01-.117.068l-3.838 1.269a.342.342 0 01-.428-.432l1.285-3.835a.337.337 0 01.098-.148c2.505-2.21 7.325-6.482 7.659-6.818.52-.52 1.084-.641 1.493-.641a2.22 2.22 0 011.546.641c.403.403.644.983.641 1.552-.002.555-.227 1.07-.65 1.487-.15.152-1.324 1.219-7.515 6.703zm5.566.897c0 .986-.26 1.764-.773 2.313-.544.58-1.345.874-2.381.874H6.272c-1.036 0-1.838-.294-2.378-.874-.513-.549-.773-1.327-.773-2.313V6.218c0-2.059 1.148-3.238 3.151-3.238h9.143c1.846 0 2.963 1.022 3.123 2.798a2.927 2.927 0 00-1.63.846c-.263.263-4.123 3.69-7.622 6.782a1.18 1.18 0 00-.333.501l-1.286 3.837a1.157 1.157 0 001.098 1.53c.123 0 .246-.02.364-.059l3.838-1.269a1.16 1.16 0 00.403-.232l.174-.154c1.689-1.496 3.56-3.157 5.022-4.46v4.74h.003zm3.417-9.084a3.073 3.073 0 00-.882-2.135 3.04 3.04 0 00-1.748-.846c-.174-2.235-1.655-3.619-3.944-3.619h-9.14c-2.451 0-3.972 1.555-3.972 4.06v11.62c0 1.203.336 2.169.994 2.875.703.75 1.703 1.132 2.978 1.132h9.143c1.272 0 2.274-.381 2.977-1.132.662-.706.998-1.672.998-2.874v-5.454c0-.003-.003-.008-.003-.014.93-.829 1.577-1.414 1.709-1.543.58-.575.887-1.292.89-2.07z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEditLight;
