/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCoinsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.526 7.632a7.91 7.91 0 00-2.144-2.144A7.844 7.844 0 009.858 2C5.525 2 2 5.525 2 9.858a7.85 7.85 0 003.483 6.524 7.908 7.908 0 002.144 2.144A7.85 7.85 0 0014.142 22C18.475 22 22 18.475 22 14.142c.005-2.707-1.38-5.097-3.474-6.51zM3.43 9.858a6.436 6.436 0 016.427-6.427 6.436 6.436 0 016.428 6.427 6.436 6.436 0 01-6.428 6.428c-3.543.004-6.427-2.88-6.427-6.428zm14.286 0a8.19 8.19 0 00-.05-.891c.488.905.767 1.938.767 3.035a6.436 6.436 0 01-6.427 6.428 6.364 6.364 0 01-3.036-.768c.288.036.586.055.887.055 4.334 0 7.859-3.525 7.859-7.859zm-3.57 10.716a6.365 6.365 0 01-3.036-.768c.292.032.59.05.891.05 4.334 0 7.858-3.525 7.858-7.858 0-.302-.018-.6-.05-.892.49.905.768 1.939.768 3.036-.004 3.547-2.889 6.432-6.432 6.432zm-4.65-7.402c1.605 0 2.862-1 2.862-2.276 0-.585-.284-1.125-.755-1.54.467-.371.75-.87.75-1.422 0-1.18-1.257-2.108-2.861-2.108a3.7 3.7 0 00-1.486.297.714.714 0 10.576 1.308 2.25 2.25 0 01.914-.179c.864 0 1.435.412 1.435.682 0 .233-.543.662-1.435.672h-.352a.714.714 0 000 1.426h.352c.823.009 1.435.462 1.435.86 0 .402-.59.85-1.435.85-.388 0-.759-.096-1.038-.28a.716.716 0 00-.772 1.203c.507.33 1.152.508 1.81.508z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCoinsRegular;
