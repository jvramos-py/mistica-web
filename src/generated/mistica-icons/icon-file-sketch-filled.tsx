/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileSketchFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.337 7.914a.61.61 0 01.045.238v12.306c0 .75-.636 1.383-1.387 1.383H6.001c-.737 0-1.387-.647-1.387-1.384V3.54c0-.726.662-1.384 1.387-1.384h7.3c.23 0 .442.087.605.25l5.213 5.125c.114.11.176.244.218.384zm-1.652-.106L13.63 3.824V5.59c0 .658.213 1.213.614 1.608.406.398.98.61 1.664.61h1.775zm-2.558 4.08l-.339.987h.838l-.499-.986zm-.67 1.959h1.015L13.53 16.56l.928-2.714zm-3.93 2.756l-.94-2.756h-1.05l1.99 2.756zm-.433-4.23l-.42-1.23h1.38l-.96 1.23zm2.876-1.23l.978 1.233.423-1.232h-1.4zm-2.047 1.732l1.09-1.39 1.1 1.39h-2.19zm1.095 5.137l1.426-4.165h-2.85l1.424 4.165zM8.91 11.87l.345 1.006H8.39l.521-1.006zm7.926 1.276l-.001-.007-1.364-2.692-.003-.01c-.002-.005-.005-.007-.008-.01l-.003-.002a.451.451 0 00-.2-.19c-.01-.005-.018-.011-.027-.017-.01-.007-.018-.013-.028-.017a.405.405 0 00-.092-.016l-.037-.004a.039.039 0 01-.015-.004c-.005-.002-.01-.004-.016-.004h-6.04a.039.039 0 00-.015.004.039.039 0 01-.015.004l-.021.002a.393.393 0 00-.105.015.236.236 0 00-.04.024.434.434 0 01-.013.01.502.502 0 00-.193.18.043.043 0 01-.01.009.043.043 0 00-.01.01l-1.41 2.703v.008c0 .003 0 .006-.002.008a.484.484 0 00-.049.22l.002.01c0 .01.003.02.006.03l.005.02c.008.068.03.127.064.183.003.005.004.011.006.018a.079.079 0 00.005.018l4.429 6.132h.003a.453.453 0 00.148.128c.014.009.028.014.042.02a.447.447 0 00.193.048h.003c.068 0 .132-.02.19-.048l.022-.011a.501.501 0 00.17-.14h.001l.001-.003 4.39-6.132c.004-.005.005-.011.006-.018.002-.006.003-.012.007-.018a.46.46 0 00.062-.174.173.173 0 01.005-.023.12.12 0 00.006-.033c0-.004.002-.007.003-.01l.003-.012a.583.583 0 00-.053-.202c-.002-.003-.002-.005-.002-.007z"
            />
        </svg>
    );
};

export default IconFileSketchFilled;
