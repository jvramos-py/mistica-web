/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRepeatFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.002 7.429H4.604l.536.648a.81.81 0 01-.074 1.068.686.686 0 01-.47.19c-.218 0-.398-.117-.541-.268L2 6.668 4.023 4.27c.254-.346.725-.346 1.01-.078.329.268.329.766.075 1.068l-.504.648h7.403c3.172 0 5.735 2.7 5.735 6.054a6.206 6.206 0 01-.757 3.008.693.693 0 01-.614.38.65.65 0 01-.36-.112c-.328-.19-.434-.649-.254-1.029.397-.687.577-1.447.577-2.247 0-2.515-1.949-4.533-4.332-4.533z"
                fill={fillColor}
            />
            <path
                d="M18.93 14.857a.712.712 0 011.01.079L22 17.334l-2.055 2.398a.682.682 0 01-.54.268c-.148 0-.328-.078-.471-.19-.328-.268-.328-.765-.074-1.068l.54-.648h-7.398c-3.177 0-5.772-2.74-5.772-6.093 0-1.028.254-2.096.757-2.934.18-.38.614-.493.975-.303.36.19.466.649.286 1.029-.397.687-.577 1.448-.577 2.247 0 2.515 1.948 4.533 4.331 4.533h7.393l-.54-.648c-.25-.307-.217-.804.074-1.068z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRepeatFilled;
