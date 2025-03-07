/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOfferEuroFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.328 9.617L19.137 12l2.19 2.383a.711.711 0 01.156.706.72.72 0 01-.54.481l-3.17.637.371 3.217a.703.703 0 01-.288.66.723.723 0 01-.718.074L14.2 18.81l-1.587 2.823a.711.711 0 01-1.245 0L9.783 18.81l-2.936 1.348a.721.721 0 01-.719-.074.723.723 0 01-.288-.66l.375-3.217-3.17-.637a.705.705 0 01-.54-.481.724.724 0 01.156-.706L4.851 12 2.66 9.617a.711.711 0 01-.155-.706.72.72 0 01.54-.481l3.17-.637-.376-3.217a.703.703 0 01.288-.66.712.712 0 01.719-.074L9.782 5.19l1.588-2.823a.712.712 0 011.244 0L14.2 5.19l2.937-1.348a.713.713 0 011.006.733l-.37 3.218 3.17.637c.256.05.462.234.54.481a.724.724 0 01-.156.706zM13.598 12a.533.533 0 00-.536-.536v.01h-2.987a2.864 2.864 0 012.809-2.33c.498 0 .992.134 1.427.386a.537.537 0 00.535-.93 3.923 3.923 0 00-1.967-.532 3.934 3.934 0 00-3.888 3.4h-.576a.533.533 0 00-.536.537c0 .298.238.536.536.536h.576a3.934 3.934 0 003.888 3.4c.686 0 1.368-.183 1.967-.531a.539.539 0 00.197-.733.533.533 0 00-.732-.197 2.85 2.85 0 01-1.427.384 2.864 2.864 0 01-2.809-2.328h2.987a.533.533 0 00.535-.536z"
            />
        </svg>
    );
};

export default IconOfferEuroFilled;
