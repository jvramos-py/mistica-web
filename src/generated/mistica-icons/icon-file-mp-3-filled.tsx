/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileMp3Filled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.18 14.966v-.582c.215.039.47.064.739.064.302 0 .481-.04.61-.123.13-.087.2-.227.2-.426 0-.193-.07-.325-.186-.406-.134-.098-.341-.129-.72-.129h-.103v-.54h.129c.339 0 .512-.043.644-.157.087-.076.146-.2.146-.378 0-.14-.04-.261-.124-.337-.109-.098-.29-.14-.582-.14-.238 0-.507.023-.723.054v-.572c.25-.053.563-.081.849-.081.465 0 .86.11 1.087.336.156.157.254.373.254.68 0 .384-.168.653-.49.816.39.14.622.431.622.913 0 .286-.087.535-.26.714-.244.255-.639.384-1.2.384a4.653 4.653 0 01-.893-.09zm-7.911-3.683h.664L6.1 13.347l1.204-2.064h.647v3.695h-.77v-2.13l-.767 1.286h-.647l-.79-1.308v2.152h-.71v-3.695zm4.487 0h1.27c.576 0 .943.081 1.181.302.2.185.297.471.297.866s-.092.692-.274.896c-.216.244-.552.356-1.037.356H9.6v1.275h-.843v-3.695zm1.751 1.647c.098-.098.146-.255.146-.47 0-.2-.042-.345-.14-.438-.104-.092-.26-.129-.519-.129H9.6v1.18h.418v-.003c.269 0 .383-.04.49-.14z"
                fill={fillColor}
            />
            <path
                d="M21.639 7.76c.03.072.047.153.047.237v12.305c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.773H4.423A2.422 2.422 0 012 15.106v-4.095a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.096 2h7.414a.89.89 0 01.619.252l5.291 5.123a.843.843 0 01.219.384zm-5.793-4.09v1.764c0 .656.216 1.213.625 1.608.414.4.997.61 1.689.61h1.803L15.846 3.67zM4.42 16.315h9.846a1.21 1.21 0 001.207-1.21V11.01c0-.666-.54-1.21-1.207-1.21H4.42a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMp3Filled;
