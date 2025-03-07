/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSafetyBeltLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.721 8.23a.293.293 0 00.014-.017l.97-.972a.41.41 0 000-.58l-2.426-2.428a.412.412 0 00-.28-.12l-1.978-.06-1.779-1.781a.421.421 0 00-.58 0l-3.386 3.39a.41.41 0 000 .579L4.06 8.028l.135 1.913a.402.402 0 00.117.264l2.429 2.428c.16.16.417.157.577-.003l4.39-4.383a.293.293 0 01.013-.017zm-.624-.532L7.03 11.762 5 9.734l-.13-1.913a.408.408 0 00-.118-.263L3.147 5.952l2.804-2.806L7.556 4.75a.425.425 0 00.28.12l1.978.06 2.022 2.021-.711.712a.297.297 0 01-.014.017l-.014.017zM21.72 18.33a.41.41 0 000-.58l-1.904-1.905-.19-1.983a.409.409 0 00-.118-.252l-2.57-2.572a.41.41 0 00-.579 0l-.709.709-1.717-1.72a.41.41 0 00-.58 0l-3.389 3.39a.41.41 0 000 .58l1.72 1.72-.712.71a.41.41 0 000 .58l2.57 2.572c.07.073.164.115.265.12l2.05.12 1.894 1.9c.163.16.423.16.583 0l3.386-3.39zm-.87-.289l-2.81 2.81-1.72-1.72a.398.398 0 00-.266-.12l-2.048-.121-2.168-2.168.711-.712a.41.41 0 000-.58l-1.72-1.72 2.81-2.809 1.714 1.72a.425.425 0 00.583 0l.709-.709 2.176 2.177.194 1.986c.008.092.05.182.117.249l1.717 1.717z"
            />
        </svg>
    );
};

export default IconSafetyBeltLight;
