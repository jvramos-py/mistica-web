/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCleaningRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.45 4.991h1.676V2h-6.523c-.148 0-.3.076-.411.184L7.768 4.987a.516.516 0 00-.076.597c.076.184.3.336.523.336h1.49v2.242H6.87v11.596A2.246 2.246 0 009.106 22h5.218a2.246 2.246 0 002.236-2.242V8.17h-2.795V6.116l.036-.076.782 1.31c.112.184.3.264.483.264.09 0 .155-.024.237-.054l.063-.022c.263-.149.335-.485.183-.785L14.543 5.07l.076-.076c.008-.004.83-.004.83-.004zm-.376 14.767a.75.75 0 01-.746.748H9.114a.75.75 0 01-.747-.748V9.664h6.707v10.094zM10.79 5.368a.574.574 0 00-.558-.561h-.823l1.453-1.682h5.143v.749h-1.677a.537.537 0 00-.447.224l-1.118 1.494a.594.594 0 00-.112.336V8.17h-1.86V5.367z"
            />
        </svg>
    );
};

export default IconCleaningRegular;
