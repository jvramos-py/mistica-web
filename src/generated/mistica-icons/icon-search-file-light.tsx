/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSearchFileLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.551 21.78c-.563 0-.874-.314-.874-.88v-4.773a.3.3 0 01.01-.074 5.513 5.513 0 01-2.057-1.172l-3.992 4.122a.28.28 0 11-.4-.39l3.995-4.128a5.522 5.522 0 012.444-8.976V3.026c0-.55.32-.866.871-.869h.686c1.211 0 3.63-.002 5.824 0a.278.278 0 01.2.082l5.46 5.461a.277.277 0 01.081.199v13.028c0 .54-.31.851-.848.851h-11.4zm.776-5.48c-.373 0-.737-.037-1.09-.107V20.9c0 .258.062.32.317.32h11.398c.224 0 .288-.068.291-.292V8.18H18.79c-.88 0-1.633-.289-2.179-.832-.546-.543-.832-1.297-.832-2.18v-2.45h-6.23c-.24 0-.31.07-.31.308v2.34a5.52 5.52 0 016.61 5.414 5.53 5.53 0 01-1.616 3.904 5.502 5.502 0 01-3.905 1.616zm10.518-8.68l-4.507-4.505V5.17c0 1.487.961 2.45 2.451 2.45h2.056zM5.366 10.78a4.961 4.961 0 109.923-.001 4.961 4.961 0 00-9.923 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchFileLight;
