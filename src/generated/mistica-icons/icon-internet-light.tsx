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

const IconInternetLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.994 2.156c3.14 0 5.574.813 7.24 2.418 1.726 1.663 2.603 4.162 2.603 7.425 0 1.523-.19 2.875-.567 4.053a.137.137 0 01.004.037.28.28 0 01-.08.196c-1.268 3.647-4.385 5.55-9.2 5.55-6.434 0-9.838-3.401-9.838-9.838 0-6.437 3.4-9.84 9.838-9.84zm8.58 14.213h-3.727a11.47 11.47 0 01-1.004 2.448c-.608 1.08-1.335 1.881-2.133 2.368 3.499-.383 5.793-1.995 6.864-4.816zm-8.926 0l-4.247.001c.239.791.543 1.524.91 2.176.91 1.618 2.089 2.544 3.338 2.627v-4.805zm4.614 0h-4.025v4.78c1.167-.172 2.261-1.082 3.115-2.603.367-.653.671-1.385.91-2.176zm-9.446 0H3.417c1.028 2.71 3.187 4.305 6.456 4.765-.767-.49-1.466-1.273-2.053-2.317-.41-.73-.747-1.555-1.004-2.447zm-.283-7.62H3.07c-.235.968-.354 2.05-.354 3.248 0 1.436.17 2.707.51 3.813h3.442a16.28 16.28 0 01-.445-3.833c0-1.116.106-2.204.31-3.228zm5.115 0H7.107a16.007 16.007 0 00-.32 3.228c0 1.345.158 2.645.459 3.833l4.402-.002V8.75zm4.908 0h-4.319v7.06h4.18c.3-1.186.46-2.486.46-3.832 0-1.12-.11-2.21-.321-3.228zm4.366 0h-3.793a16.58 16.58 0 01.31 3.228c0 1.34-.152 2.637-.443 3.833l3.77-.001c.338-1.105.508-2.376.508-3.812 0-1.198-.117-2.28-.352-3.248zM9.799 2.867l-.217.034c-3.322.548-5.45 2.318-6.358 5.288h3.432c.27-1.125.662-2.16 1.164-3.052.568-1.01 1.241-1.777 1.979-2.27zm2.44-.062l-.002 5.384h4.191c-.256-1.024-.618-1.965-1.076-2.78-.854-1.525-1.946-2.433-3.114-2.604zm1.543.009l.142.094c.715.495 1.366 1.247 1.919 2.229.5.893.893 1.927 1.163 3.052h3.762c-.963-3.153-3.3-4.953-6.986-5.375zm-2.134-.033l.183-.006c-1.316 0-2.568.936-3.52 2.633-.459.816-.82 1.757-1.077 2.782h4.414V2.78z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconInternetLight;
