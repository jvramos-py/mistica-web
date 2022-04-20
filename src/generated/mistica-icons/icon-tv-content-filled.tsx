/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTvContentFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M22 4.5v12.596h-7.961v1.294h2.409c.308 0 .554.247.554.555a.553.553 0 01-.554.555h-8.89a.553.553 0 01-.556-.555c0-.308.247-.555.555-.555h2.409v-1.294H2V4.5h20zM11.07 18.39h1.855v-1.294H11.07v1.294z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M5.59 17.374h12.806c1.118 0 1.986-.311 2.58-.927.572-.588.86-1.434.86-2.51V7.94c0-2.2-1.221-3.412-3.44-3.412L5.59 4.52c-2.219 0-3.44 1.21-3.44 3.411v5.998c0 1.075.288 1.921.857 2.515.594.616 1.462.93 2.583.93zm3.94 2.199h4.917c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56H9.53a.562.562 0 00-.56.56c0 .308.252.56.56.56z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTvContentFilled;
