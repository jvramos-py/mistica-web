/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconNotesRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.385 8.152a.866.866 0 00-.26-.619l-5.216-5.129a.833.833 0 00-.603-.249H5.998c-.72 0-1.378.661-1.378 1.378v16.93c0 .731.642 1.378 1.378 1.378h12c.754 0 1.387-.627 1.387-1.378V8.153zm-1.188 12.311c0 .073-.095.168-.199.171h-12c-.095 0-.19-.115-.19-.17V3.533c.008-.057.12-.169.19-.169h6.446V5.59c0 .992.341 1.854.974 2.476.642.628 1.496.958 2.496.958h2.283v11.44zm-.49-12.65v.003h-1.79c-.68 0-1.26-.218-1.664-.613-.406-.395-.619-.961-.619-1.614V3.808l4.073 4.005zm-1.849 5.644c-.148.146-1.815 1.653-4.456 4.031l-1.99.692.65-1.966c.39-.345 4.247-3.812 4.502-4.07.238-.241.493-.292.675-.275a.93.93 0 01.62.283.97.97 0 01.277.67c0 .24-.096.45-.278.636zm1.468-.635c0-.558-.233-1.13-.628-1.533-.728-.742-2.036-.944-2.971-.005a1.222 1.222 0 01-.03.028c-.033.03-.085.079-.152.148H7.577a.604.604 0 00-.594.605c0 .34.27.605.594.605h4.636c-.17.15-.345.309-.528.474-.21.19-.43.389-.66.59H7.578a.598.598 0 00-.594.606c0 .33.27.605.594.605h2.1l-.428.386a1.11 1.11 0 00-.302.46l-.07.21h-1.3a.598.598 0 00-.594.605c0 .33.27.605.594.605h.905l-.286.88a.712.712 0 00-.037.163l-.002.013h-.58a.604.604 0 00-.594.605c0 .33.27.605.594.605h1.465c.017 0 .03 0 .048-.008a.29.29 0 00.087.008c.103 0 .215-.014.324-.047l2.261-.765a.998.998 0 00.364-.21l.07-.065c1.933-1.74 4.28-3.86 4.493-4.07.415-.409.636-.927.636-1.498z"
            />
        </svg>
    );
};

export default IconNotesRegular;
