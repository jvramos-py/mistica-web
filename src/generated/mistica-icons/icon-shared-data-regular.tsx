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

const IconSharedDataRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.098 17.62a.561.561 0 010 1.12H2.594a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h18.504zM18.4 4.508c1.099 0 1.942.328 2.505.972.523.6.787 1.468.787 2.583v4.938c0 1.115-.266 1.984-.787 2.583-.563.644-1.406.972-2.505.972H5.291c-1.098 0-1.94-.328-2.504-.97-.52-.601-.787-1.47-.787-2.585V8.063c0-1.115.266-1.983.787-2.583.563-.644 1.403-.972 2.504-.972h13.11zm0 1.12l-13.109.004c-.773 0-1.313.193-1.658.588-.339.386-.513 1.008-.513 1.843v4.938c0 .835.174 1.457.513 1.846.345.395.888.589 1.658.589h13.11c.77 0 1.313-.194 1.658-.589.339-.39.512-1.01.512-1.846V8.063c0-.835-.173-1.457-.512-1.846-.345-.395-.888-.588-1.659-.588zm-4.35 1.303c.42 0 .751.115.995.345.255.24.384.59.384 1.04 0 .428-.12.77-.356 1.007-.236.239-.594.373-1.025.373-.432 0-.785-.129-1.023-.373l-.038-.044-1.979.99a2.069 2.069 0 010 .495l1.98.989a.908.908 0 01.068-.071c.24-.227.574-.345.994-.345.42 0 .754.115.995.345.255.24.384.591.384 1.04 0 .428-.12.77-.356 1.008s-.594.372-1.025.372c-.432 0-.785-.129-1.023-.372-.238-.244-.353-.58-.353-1.009 0-.061.003-.12.007-.179l-2.021-1.01-.085.078c-.232.185-.554.288-.929.288-.431 0-.784-.13-1.022-.373-.238-.244-.356-.58-.356-1.008 0-.448.129-.799.384-1.04.24-.226.574-.344.994-.344.42 0 .754.115.995.345l.022.023 2.018-1.007a2.177 2.177 0 01-.007-.179c0-.448.13-.798.384-1.04.24-.226.574-.344.994-.344z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSharedDataRegular;
