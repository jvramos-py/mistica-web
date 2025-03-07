/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEmergencyCrossRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.397 8.595l4.86-.003c.829 0 1.582.658 1.582 1.384v4.045c0 .722-.756 1.38-1.582 1.38l-4.858.003.003 4.86c0 .857-.633 1.583-1.38 1.583H9.975c-.747 0-1.38-.726-1.38-1.583l-.003-4.857-4.86.003c-.86 0-1.583-.633-1.583-1.381l.003-4.045c0-.748.725-1.38 1.583-1.38L8.59 8.6l-.003-4.86c0-.829.658-1.582 1.381-1.582h4.045c.723 0 1.38.756 1.38 1.582l.004 4.855zm-.6 5.6l5.46-.004c.187 0 .358-.142.383-.207l-.003-4.017a.546.546 0 00-.378-.176l-5.465.003a.605.605 0 01-.602-.603l-.003-5.456c0-.188-.14-.359-.201-.378L9.97 3.36a.546.546 0 00-.177.378L9.797 9.2a.601.601 0 01-.602.602l-5.457.003c-.207 0-.361.134-.378.188v4.033c.014.04.168.174.376.174l5.462-.003a.605.605 0 01.602.602l.003 5.46c0 .21.131.361.187.378h4.031c.042-.017.177-.168.177-.378l-.003-5.463a.605.605 0 01.602-.602z"
            />
        </svg>
    );
};

export default IconEmergencyCrossRegular;
