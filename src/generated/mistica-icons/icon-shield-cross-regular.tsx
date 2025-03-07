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

const IconShieldCrossRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.305 5.036c-3.49 0-6.268-2.323-6.762-2.766-.191-.17-.316-.265-.53-.27h-.018c-.213.005-.338.1-.53.27-.493.443-3.271 2.766-6.762 2.766H4v9.287c0 4.993 5.511 6.886 7.71 7.613a.689.689 0 00.58 0c2.203-.727 7.71-2.62 7.71-7.613V5.036h-.695zm-8 15.18c-2.924-1.07-5.912-2.67-5.912-5.893V12h5.913v8.217zm-5.912-9.643V6.467c2.56-.187 4.675-1.445 5.913-2.323v6.43H5.393zm13.214 3.75c0 3.223-2.988 4.824-5.912 5.894V12h5.912v2.323zm-5.912-3.75V4.14c1.237.873 3.352 2.135 5.912 2.323v4.11h-5.912z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.39 4.85c.134.114.23.28.23.458v.028c0 .524.006 6.642-.457 9.32-.61 3.552-7.16 6.773-7.905 7.129l-.005.001-.006.001a.57.57 0 01-.496 0l-.008-.002c-.745-.356-7.286-3.577-7.896-7.13-.463-2.677-.458-8.798-.457-9.322v-.027a.632.632 0 01.235-.482.611.611 0 01.521-.11c1.603.253 2.451-.316 3.527-1.039C8.734 2.964 9.936 2.16 12 2.16h.008c2.064 0 3.266.804 4.325 1.515 1.076.723 1.93 1.292 3.552 1.037a.642.642 0 01.504.137zM11.4 3.417c-1.336.131-2.174.692-3.053 1.283-1.011.678-2.062 1.38-3.74 1.294.009 1.053.031 3.154.132 5.12H11.4V3.418zm-6.356 11.03c.373 2.16 4.152 4.6 6.353 5.785v-7.888H4.813c.059.807.134 1.543.232 2.103zm7.569 5.785c2.204-1.185 5.989-3.625 6.361-5.785.096-.56.168-1.296.227-2.103h-6.588v7.888zm6.79-14.238c-1.679.089-2.72-.61-3.723-1.285l-.014-.01-.016-.01c-.876-.584-1.712-1.141-3.037-1.272v7.697h6.661c.1-1.966.123-4.067.129-5.12z"
                />
            </svg>
        );
    }
};

export default IconShieldCrossRegular;
