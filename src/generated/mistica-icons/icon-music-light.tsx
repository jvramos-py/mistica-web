/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMusicLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M22 2.365c0-.22-.144-.365-.363-.365-.22 0-.364.145-.364.365v10.44a3.632 3.632 0 00-2.914-1.466c-2.005 0-3.642 1.65-3.642 3.662s1.641 3.662 3.642 3.662c2 0 3.641-1.65 3.641-3.662V2.365zm-3.641 15.568c-1.606 0-2.915-1.322-2.915-2.932 0-1.61 1.313-2.93 2.915-2.93 1.6 0 2.914 1.32 2.914 2.93s-1.317 2.932-2.914 2.932zm-.947-14.761c.18-.072.4.073.436.257.035.185-.076.402-.224.474L9.283 6.176v12.162C9.283 20.35 7.642 22 5.64 22 3.641 22 2 20.35 2 18.338s1.637-3.662 3.641-3.662c1.202 0 2.26.586 2.915 1.466V5.882c0-.18.112-.329.256-.365l8.6-2.345zM5.606 21.233c1.605 0 2.914-1.32 2.914-2.931 0-1.61-1.313-2.931-2.914-2.931-1.602 0-2.915 1.32-2.915 2.93 0 1.611 1.31 2.932 2.915 2.932zM19.52 3.574a.729.729 0 00.727-.73.729.729 0 00-.727-.732.729.729 0 00-.726.731c0 .404.325.731.726.731z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.809 4.707a.87.87 0 01.812.86h.003v12.818h-.014c.001.022.004.042.007.062.004.025.007.05.007.078 0 3.093-2.692 3.3-3.232 3.309l-.28.002c-1.563-.022-3.236-.907-3.236-3.327s1.661-3.295 3.216-3.309l.291.003c.863.02 1.748.314 2.378.958V8.128l-9.6-2.56-.01 9.01h-.017c-.174 2.796-2.695 2.998-3.216 3.006a4.86 4.86 0 01-.285 0c-1.56-.022-3.233-.907-3.233-3.327s1.658-3.297 3.216-3.309c.049.002.1.002.15.002l.144.001c.857.02 1.742.311 2.372.955V3.013c0-.474.393-.863.877-.863l.112.017 9.538 2.54zm-9.65-1.691l-.003 1.669 9.6 2.557V5.565l-.126-.026-9.47-2.523zM6.82 16.733h.077c.717-.014 2.384-.278 2.384-2.46S7.605 11.817 6.885 11.8c-.084-.003-.18-.003-.266-.003-.71.006-2.359.26-2.359 2.46 0 2.204 1.667 2.467 2.38 2.476.06.002.122 0 .179 0zm10.553 4.249c.717-.011 2.384-.277 2.387-2.454 0-2.182-1.678-2.456-2.398-2.473l-.266-.003c-.709.006-2.359.258-2.359 2.457 0 2.204 1.667 2.467 2.381 2.476l.255-.003z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMusicLight;
