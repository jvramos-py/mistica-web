/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAppsBusinessRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.874 2c1.186 0 2.17.912 2.35 2.097 1.143.083 2.048 1.068 2.053 2.278v2.667c0 1.263-.99 2.287-2.2 2.287H4.68c-1.214 0-2.199-1.029-2.199-2.287V6.375c0-1.205.905-2.195 2.044-2.278C4.703 2.912 5.687 2 6.874 2zm12.454.185H14.93c-1.21 0-2.2 1.024-2.2 2.288v4.574c0 1.258.985 2.287 2.2 2.287h4.398c1.21 0 2.2-1.024 2.2-2.287v-4.58c0-1.258-.985-2.282-2.2-2.282zm.737 6.857c0 .42-.329.761-.732.761h-4.398c-.404 0-.732-.341-.732-.76V4.467c0-.42.328-.761.732-.761h4.398c.403 0 .732.341.732.76v4.575zM4.679 12.851h4.394c1.21 0 2.2 1.024 2.204 2.287v4.575c0 1.263-.99 2.287-2.2 2.287H4.68c-1.214 0-2.199-1.029-2.199-2.287v-4.575c0-1.263.99-2.287 2.2-2.287zm5.126 6.857h.004v-4.575c0-.419-.328-.76-.731-.76H4.679c-.403 0-.731.341-.731.76v4.575c0 .42.328.76.731.76h4.394c.403 0 .732-.34.732-.76zM6.874 3.14c-.511 0-.952.312-1.158.761h2.316a1.282 1.282 0 00-1.158-.76zm2.2 6.662c.402 0 .73-.341.73-.76h.005V6.374c0-.42-.328-.761-.731-.761H4.679c-.403 0-.731.341-.731.76v2.668c0 .42.328.761.731.761h4.394zm10.254 3.048H14.93c-1.21 0-2.2 1.024-2.2 2.287v4.575c0 1.258.985 2.287 2.2 2.287h4.398c1.21 0 2.2-1.024 2.2-2.287v-4.575c0-1.263-.985-2.287-2.2-2.287zm.005 7.618h-4.398c-.404 0-.732-.342-.732-.761v-4.575c0-.419.328-.76.732-.76h4.398c.403 0 .732.341.732.76v4.575c0 .42-.329.76-.732.76z"
            />
        </svg>
    );
};

export default IconAppsBusinessRegular;
