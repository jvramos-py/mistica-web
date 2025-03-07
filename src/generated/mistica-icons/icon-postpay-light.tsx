/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPostpayLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.421 10.644a.28.28 0 00.28-.28.28.28 0 00-.28-.28h-3.823a.28.28 0 00-.28.28c0 .154.126.28.28.28h3.823zm0 1.638a.28.28 0 00.28-.28.28.28 0 00-.28-.28h-3.823a.28.28 0 00-.28.28c0 .154.126.28.28.28h3.823zm-3.823 1.639a.281.281 0 01-.28-.28.28.28 0 01.28-.28h3.823a.28.28 0 01.28.28.28.28 0 01-.28.28h-3.823zm-4.376 3.905c.505 0 .832.266.832.834 0 .275-.075.477-.21.614-.145.148-.358.221-.622.221-.263 0-.476-.073-.621-.221-.135-.137-.21-.342-.21-.614 0-.568.327-.834.831-.834z"
            />
            <path
                fill={fillColor}
                d="M13.777 21.834h-7.1c-1.029 0-1.771-.238-2.267-.731-.501-.499-.745-1.244-.745-2.28V5.167c0-1.028.24-1.767.74-2.266.498-.498 1.24-.745 2.271-.745h7.101c1.02 0 1.762.25 2.269.762.499.507.742 1.241.742 2.25v.266h.535a.29.29 0 01.107.02.302.302 0 01.092.06l2.731 2.732a.277.277 0 01.081.199v6.784c0 .367-.226.597-.593.597h-2.953v2.997c0 1.036-.243 1.781-.745 2.28-.496.493-1.238.731-2.266.731zm5.602-13.67l-1.776-1.773v.415c0 .938.42 1.359 1.359 1.359h.417zm-2.336-2.17h-3.762c-.014 0-.03 0-.045.003-.002.014-.002.028-.002.042v9.173c0 .017 0 .034.002.05a.227.227 0 00.045.003h6.457c.011 0 .022 0 .034-.002.002-.011.002-.023.002-.034V8.725h-.812c-.622 0-1.1-.165-1.429-.493-.327-.328-.49-.807-.49-1.426v-.812zm-.815-.827c0-.854-.19-1.462-.583-1.857-.397-.4-1.008-.594-1.87-.594h-7.1c-.874 0-1.487.19-1.877.58-.389.39-.574 1-.574 1.871v13.656c0 1.742.709 2.45 2.451 2.45h7.101c1.74 0 2.451-.708 2.451-2.45v-2.997H13.28c-.38 0-.608-.23-.608-.614V6.04c0-.373.233-.605.608-.605h2.947v-.267z"
            />
        </svg>
    );
};

export default IconPostpayLight;
