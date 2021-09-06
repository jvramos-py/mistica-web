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

const IconFilePngRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.535 2.025a.86.86 0 01.613.25L21.445 7.4c.115.109.18.243.222.386.03.073.047.154.047.238V20.33c0 .751-.644 1.384-1.409 1.384H8.123c-.75 0-1.409-.647-1.409-1.384l.034-2.773H4.445a2.425 2.425 0 01-2.42-2.423V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.67-1.384 1.41-1.384h7.414zm-.877 1.219H8.123c-.073 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.425 2.425 0 01-2.42 2.423h-6.33l-.034 2.78c0 .05.1.159.193.159h12.182v.003c.098 0 .194-.096.194-.169V8.896h-2.314c-1.014 0-1.89-.33-2.532-.952-.65-.63-.995-1.487-.995-2.482V3.244zm-.364 6.585H4.448a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.208 1.207 1.208h9.846a1.21 1.21 0 001.207-1.208V11.04c0-.666-.54-1.21-1.207-1.21zm-1.02 1.434c.365 0 .802.076 1.037.177l-.107.613a3.292 3.292 0 00-.87-.134c-.743 0-1.048.44-1.048 1.24 0 .415.053.754.215.978.135.188.356.297.709.297.134 0 .317-.017.445-.036v-.773h-.515v-.603h1.35V14.9c-.35.107-.907.188-1.31.188-1.32-.003-1.765-.729-1.765-1.894 0-1.151.607-1.93 1.86-1.93zm-7.66.07c.574 0 .94.082 1.176.3.199.182.297.468.297.86 0 .392-.093.689-.275.894-.215.24-.549.355-1.03.355H5.19v1.27h-.84v-3.679h1.263zm2.683 0l1.742 2.353v-2.353h.737v3.675h-.672l-1.69-2.23v2.23h-.736v-3.675h.619zm-2.714.608H5.19v1.171h.412c.27 0 .381-.036.49-.14.098-.098.146-.252.146-.468 0-.199-.042-.344-.14-.434-.1-.092-.258-.129-.515-.129zm10.29-8.246v1.764c0 .656.217 1.213.623 1.608.414.4.997.61 1.689.61h1.8l-4.111-3.982z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePngRegular;
