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

const IconArrowDownLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.939 21.883h-.003c-.154 0-.297-.07-.426-.204l-8.93-8.967c-.38-.361-.52-.854-.355-1.258.143-.35.473-.554.888-.549L6.89 10.9c.082 0 .146-.079.146-.174V3.827c-.008-.524.14-.936.44-1.23.31-.305.778-.456 1.353-.44h6.218c.658-.01 1.112.124 1.426.426.288.28.434.684.443 1.238v.006l-.003 6.902c0 .095.064.174.145.174l3.519-.023c.523-.017.991.244 1.165.653.165.384.045.818-.33 1.185l-8.959 8.902c-.17.176-.341.263-.515.263zm-8.843-10.39c-.163 0-.277.065-.325.183-.056.134-.03.372.218.608l.006.005 8.936 8.975.005.006c.003.005.009.008.011.01a.49.49 0 00.087-.075l.003-.003 8.96-8.907c.116-.112.292-.33.205-.532-.078-.183-.333-.306-.608-.295h-.008l-3.524.023a.75.75 0 01-.736-.762l.002-6.9c-.005-.386-.092-.655-.263-.82-.19-.185-.521-.269-1.008-.26H8.813c-.286-.009-.678.03-.924.271-.18.177-.27.446-.264.801v6.908a.75.75 0 01-.736.762l-3.782.005h-.006c.003-.002-.002-.002-.005-.002z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowDownLight;
