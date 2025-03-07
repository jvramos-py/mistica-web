/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRoadSignLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12.001c0-6.44-3.403-9.846-9.846-9.846-6.437 0-9.84 3.406-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84zm-.823 0c0 5.986-3.034 9.02-9.023 9.02-5.983 0-9.02-3.034-9.02-9.02s3.034-9.022 9.02-9.022S21.018 6.012 21.018 12zm-7.255.499s0-.975-.006-.975a.504.504 0 00-.151-.317.505.505 0 00-.32-.145h-1.63a.41.41 0 00-.409.409v5.456H9.11V8.881c0-.04.014-.076.042-.101a.142.142 0 01.101-.042h4.04c.223 0 .47-.236.47-.463v-.983L16.452 9.9l-2.69 2.6zm3.378-3.073l-3.123-3.028a.658.658 0 00-.703-.084.64.64 0 00-.373.582v1.02l-3.689-.003a.952.952 0 00-.68.283.956.956 0 00-.284.68v8.46a.41.41 0 00.41.41h2.963a.41.41 0 00.409-.41v-5.454h.868v1.012c0 .252.149.479.376.585.23.106.498.076.73-.115l3.074-2.975a.642.642 0 00.022-.964z"
            />
        </svg>
    );
};

export default IconRoadSignLight;
