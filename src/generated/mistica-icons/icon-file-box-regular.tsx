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

const IconFileBoxRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.263 20.429H3.482a.202.202 0 01-.196-.197v-7.128a.2.2 0 01.196-.19h5.546v.237a2.753 2.753 0 002.748 2.751h.193a2.754 2.754 0 002.75-2.75v-.239h5.547c.112 0 .177.081.19.137l.006 7.185a.2.2 0 01-.199.194zM4.88 3.557a.673.673 0 00.008-.103c0-.107.087-.193.193-.193l13.58.014c.132 0 .258.145.294.327l1.277 8.048h-6.14a.629.629 0 00-.627.63v.866c0 .823-.67 1.49-1.496 1.49h-.193c-.824 0-1.493-.67-1.493-1.49v-.866c0-.347-.28-.63-.628-.63H3.521L4.88 3.557zm16.823 9.437c-.003-.02.006-.033.003-.053L20.19 3.392c-.148-.81-.775-1.375-1.529-1.375l-13.58-.014c-.778 0-1.417.619-1.448 1.395L2.04 12.874c-.003.025.003.05.003.076-.006.05-.017.1-.017.154v7.128c0 .804.65 1.457 1.451 1.457h16.787c.801 0 1.451-.653 1.451-1.457v-7.128c0-.04-.008-.076-.01-.11z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileBoxRegular;
