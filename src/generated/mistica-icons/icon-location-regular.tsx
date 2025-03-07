/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLocationRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.475 21.74c.14.184.315.26.527.26a.627.627 0 00.527-.26c.247-.26 5.971-7.004 5.971-12.372C18.5 5.22 15.655 2 12.002 2S5.504 5.22 5.5 9.368c0 5.26 5.49 11.795 5.952 12.345l.023.027zM6.91 9.372c0-3.368 2.178-5.888 5.09-5.888 2.914 0 5.092 2.516 5.092 5.888 0 3.924-3.684 8.964-5.091 10.74-1.404-1.74-5.09-6.816-5.09-10.74z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.547 21.816a.6.6 0 00.854 0c.83-.842 6.664-7.921 6.675-12.603.015-4.5-2.625-7.194-7.056-7.208h-.032c-4.411 0-7.054 2.677-7.068 7.165-.014 4.363 5.276 11.275 6.627 12.646zM6.126 9.173c.011-3.834 2.093-5.945 5.862-5.945h.029c3.789.014 5.868 2.136 5.856 5.982-.011 3.57-4.263 9.36-5.902 11.272-1.8-2.088-5.856-7.901-5.845-11.31zM12 7.304c.97.003 1.445.48 1.445 1.468 0 .984-.473 1.465-1.445 1.465-.973 0-1.445-.481-1.445-1.468 0-.984.475-1.465 1.445-1.465zM9.349 8.772c0 1.658 1.015 2.69 2.65 2.69 1.636 0 2.652-1.032 2.652-2.69S13.635 6.08 12 6.08c-1.636 0-2.651 1.033-2.651 2.69z"
                />
            </svg>
        );
    }
};

export default IconLocationRegular;
