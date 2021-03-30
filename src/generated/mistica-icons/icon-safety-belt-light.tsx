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

const IconSafetyBeltLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.04 20.852l2.81-2.81-1.717-1.717a.408.408 0 01-.118-.25l-.193-1.985-2.176-2.177-.709.709a.425.425 0 01-.583 0l-1.714-1.72-2.81 2.81 1.72 1.72c.16.16.16.42 0 .58l-.711.71 2.168 2.169 2.048.12c.1.006.196.048.266.12l1.72 1.72zm3.681-3.101c.16.16.16.42 0 .58l-3.386 3.389c-.16.16-.42.16-.583 0l-1.893-1.9-2.05-.12a.398.398 0 01-.267-.12l-2.569-2.572a.41.41 0 010-.58l.712-.71-1.72-1.72a.41.41 0 010-.58l3.39-3.39a.41.41 0 01.58 0l1.716 1.72.709-.709a.41.41 0 01.58 0l2.568 2.572c.068.067.11.157.118.252l.19 1.983 1.905 1.905zM11.097 7.698c.008-.012.02-.023.028-.034l.711-.712L9.814 4.93l-1.978-.059a.425.425 0 01-.28-.12L5.951 3.146 3.147 5.952l1.605 1.606a.41.41 0 01.118.263L5 9.734l2.028 2.028.706-.706 3.362-3.358zm.638.515c-.008.011-.02.022-.028.034L7.318 12.63a.407.407 0 01-.577.003l-.003-.003-2.426-2.425a.402.402 0 01-.117-.264L4.06 8.028 2.276 6.241a.41.41 0 010-.58l3.387-3.39a.421.421 0 01.58 0L8.02 4.054l1.978.06a.412.412 0 01.28.12l2.426 2.428c.16.16.16.42 0 .58l-.97.972z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSafetyBeltLight;
