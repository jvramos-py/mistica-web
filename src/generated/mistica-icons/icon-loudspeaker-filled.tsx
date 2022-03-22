/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLoudspeakerFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.773 18.508a.941.941 0 00.807-.134.972.972 0 00.4-.788V6.401a.971.971 0 00-.4-.787.92.92 0 00-.807-.134L3.283 9.233a.532.532 0 00-.547-.504c-.302 0-.546.233-.546.516v5.51c0 .285.244.515.546.515.303 0 .546-.23.546-.515l3.18.955-.18.574a.822.822 0 00.538 1.028l2.27.711a.782.782 0 00.625-.056.801.801 0 00.402-.482l.195-.618 5.46 1.64zm-8.365-2.154l.07-.224 1.748.549-.07.224-1.748-.55zm11.687-8.185a.545.545 0 01-.387-.933l1.546-1.546a.548.548 0 01.773.773L19.482 8.01a.545.545 0 01-.386.16zm.067 4.109a.545.545 0 110-1.092h2.185a.545.545 0 110 1.092h-2.185zm1.084 5.432a.545.545 0 00.773 0 .548.548 0 000-.774l-1.507-1.506a.548.548 0 00-.773.773l1.507 1.507z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLoudspeakerFilled;
