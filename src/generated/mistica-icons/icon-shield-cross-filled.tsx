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

const IconShieldCrossFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.434 4.56c1.602.258 2.454-.322 3.527-1.053C8.913 2.86 9.983 2.143 11.683 2v9.045H3.81c-.14-2.76-.132-5.703-.132-5.885 0-.19.087-.37.232-.49a.616.616 0 01.524-.11zm16.47.602c0 .183.01 3.127-.128 5.886h-7.877V2c1.7.143 2.77.86 3.723 1.507 1.075.731 1.933 1.303 3.552 1.048a.636.636 0 01.725.529c0 .028.003.053.006.078zM12.9 21.686v-9.395h7.804c-.062.891-.14 1.715-.246 2.345v.003c-.558 3.271-6.014 6.263-7.558 7.047zm-8.762-7.05c-.109-.63-.187-1.454-.252-2.347h7.801v9.394c-1.543-.781-6.994-3.773-7.549-7.047z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShieldCrossFilled;
