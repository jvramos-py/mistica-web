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

const IconMuseumLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.767 2.236a.412.412 0 01.476 0l9.426 6.568a.424.424 0 01.16.47.414.414 0 01-.398.295h-2.045v8.44h1.991c.23 0 .418.187.418.42v3.003c0 .232-.185.42-.418.42H2.632a.419.419 0 01-.417-.42v-3.003c0-.233.185-.42.417-.42h2.025v-8.44H2.58a.418.418 0 01-.4-.294.421.421 0 01.162-.47zm9.19 16.613H3.05v2.163h17.907v-2.163zM7.108 9.57H5.492v8.44h1.616V9.57zm8.992 0h-2.434v8.44H16.1V9.57zm-3.269 0h-1.616v8.44h1.616V9.57zm-2.454 0H7.943v8.44h2.434V9.57zm8.174 0h-1.616v8.44h1.616V9.57zm-6.546-6.476L3.912 8.729h1.154l.009-.003c.003 0 .005.003.008.003h2.434l.009-.003c.003 0 .005.003.008.003h3.252l.009-.003c.002 0 .005.003.008.003h2.434l.009-.003c.002 0 .005.003.008.003h3.252l.009-.003c.002 0 .005.003.008.003h2.434l.009-.003c.002 0 .005.003.008.003h1.12l-8.09-5.636z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMuseumLight;
