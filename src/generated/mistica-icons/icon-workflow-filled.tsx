/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWorkflowFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.6 3.638h-6.037V8.58h2.265v6.84h-5.66V8.58h2.264V2.5h8.308v2.923l.565-.496a.543.543 0 01.792.04.552.552 0 01-.039.797L19.17 7.437l-1.89-1.673c-.227-.19-.227-.57-.038-.798.188-.228.565-.228.792-.039l.565.496V3.638zm-6.602 12.925l-1.889 1.673a.552.552 0 00-.039.798c.112.112.266.19.416.19.15 0 .265-.04.377-.151l.565-.497v1.786H5.39V15.42h2.266V8.58H2v6.84h2.265v6.08h8.303v-2.928l.565.496c.227.19.603.19.792-.04.188-.228.188-.607-.039-.797l-1.888-1.668zM16.34 8.58v6.84h2.265v5.165c0 .302.265.57.565.57.3 0 .565-.268.565-.57V15.42H22V8.58h-5.66z"
            />
        </svg>
    );
};

export default IconWorkflowFilled;
