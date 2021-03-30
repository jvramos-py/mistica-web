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

const IconChangeWifiPasswordRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.718 2.025c2.575 0 4.667 2.003 4.667 4.465a.52.52 0 01-1.036.034V6.49c0-1.888-1.628-3.426-3.63-3.426h-.185c-2 0-3.63 1.538-3.63 3.426l-.001 2.633h7.499c1.034 0 1.846.278 2.417.824.591.568.9 1.4.91 2.476v5.933c-.013 1.075-.319 1.91-.91 2.476-.571.549-1.383.826-2.417.826H7.828c-1.034 0-1.849-.277-2.418-.826-.59-.569-.89-1.406-.89-2.482l.002-5.65-.001-.183-.001-.086c0-1.078.3-1.913.89-2.481.38-.366.867-.612 1.457-.735V6.49c0-2.462 2.092-4.465 4.667-4.465h.184zm3.687 8.132H7.828c-1.544.003-2.264.717-2.27 2.252l.001.137.003.146v.003l-.003 5.655c0 1.55.72 2.269 2.269 2.269h7.577c1.543 0 2.271-.723 2.291-2.274V12.43c-.02-1.551-.748-2.274-2.291-2.274zm-3.779 7.863c.406 0 .67.21.67.663 0 .219-.06.381-.169.49-.117.121-.288.177-.5.177-.214 0-.385-.059-.502-.176-.107-.11-.168-.272-.168-.49 0-.454.263-.664.67-.664zm.003-2.334c1.364 0 2.417.376 3.134 1.112a.52.52 0 01-.01.734.52.52 0 01-.735-.011c-.512-.53-1.316-.798-2.39-.798-1.072 0-1.882.269-2.394.8a.519.519 0 01-.745-.717c.717-.742 1.773-1.12 3.14-1.12zm.003-2.756c1.994 0 3.53.54 4.563 1.605a.52.52 0 01-.012.734.52.52 0 01-.733-.011c-.832-.857-2.118-1.292-3.821-1.292-1.709 0-2.997.437-3.826 1.3a.519.519 0 11-.745-.72c1.033-1.073 2.574-1.616 4.574-1.616z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChangeWifiPasswordRegular;
