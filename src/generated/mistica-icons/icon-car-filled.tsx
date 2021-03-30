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

const IconCarFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.605 16.472c-.938 0-1.398-.443-1.398-1.353 0-.91.457-1.353 1.398-1.353.938 0 1.395.443 1.395 1.353 0 .91-.457 1.353-1.395 1.353m-8.552-.006c-.938 0-1.398-.442-1.398-1.353 0-.91.457-1.355 1.398-1.355.941 0 1.398.442 1.398 1.355 0 .91-.457 1.353-1.398 1.353m14.031-4.56c-1.106-1.86-3.011-2.32-3.768-2.434-.613-.818-2.84-3.294-7.305-3.294-2.815 0-4.697 1.26-5.781 2.32-1.538 1.5-2.219 3.282-2.21 4.344-.087 1.431.148 2.383.156 2.425a.611.611 0 00.597.454H4.49c.23 1.208 1.168 1.939 2.566 1.939s2.333-.729 2.566-1.939h3.42c.23 1.213 1.168 1.944 2.566 1.944 1.4 0 2.336-.73 2.566-1.944h2.383a.623.623 0 00.4-.145c.063-.056 1.525-1.328.127-3.67"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCarFilled;
