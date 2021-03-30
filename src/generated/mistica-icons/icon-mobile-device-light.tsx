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
    size?: number;
};

const IconMobileDeviceLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.55 2.156c1.03 0 1.773.244 2.271.745.499.502.74 1.241.74 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731H8.449c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28V5.167c0-1.008.243-1.745.742-2.249.507-.512 1.25-.762 2.269-.762h7.1zm0 .56H8.449c-.863 0-1.474.194-1.871.594-.393.395-.583 1.003-.583 1.857v13.656c0 1.742.711 2.45 2.45 2.45h7.102c1.742 0 2.45-.708 2.45-2.45V5.167c0-.87-.187-1.484-.574-1.87-.386-.387-1-.58-1.873-.58zm-3.544 15.11c.504 0 .83.266.83.834 0 .275-.074.477-.208.614-.146.148-.359.221-.622.221s-.476-.073-.622-.221c-.134-.137-.21-.339-.21-.614 0-.568.328-.834.832-.834z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileDeviceLight;
