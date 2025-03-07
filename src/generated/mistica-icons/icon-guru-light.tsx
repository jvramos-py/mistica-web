/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconGuruLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.827 19.454a.372.372 0 00.153-.497c-1.168-2.28-3.673-3.916-6.699-4.5 2.29-.98 3.902-3.289 3.902-5.977 0-3.574-2.854-6.48-6.365-6.48-3.51 0-6.364 2.906-6.364 6.48 0 2.688 1.611 4.997 3.906 5.978C5.133 15.283 2 18.184 2 21.63c0 .204.163.37.363.37.2 0 .363-.166.363-.37 0-3.674 4.078-6.665 9.092-6.665 3.767 0 7.193 1.745 8.515 4.338a.366.366 0 00.494.151zM11.818 2.74c2.403 0 4.456 1.54 5.266 3.702h-3.808c-.48 0-.88.317-1.03.754l-.023-.007a.141.141 0 00-.041-.008h-.727a.141.141 0 00-.041.008.267.267 0 01-.024.007 1.093 1.093 0 00-1.029-.754H6.553c.81-2.162 2.863-3.702 5.265-3.702zm4.004 4.441v1.11a1.1 1.1 0 01-1.09 1.109h-.725a1.1 1.1 0 01-1.09-1.11v-.739c0-.204.163-.37.363-.37h2.542zm-7.998 0h2.542c.2 0 .363.166.363.37v.74A1.1 1.1 0 019.64 9.4h-.726a1.1 1.1 0 01-1.089-1.11V7.182zm-1.49-.004c.005 0 .01 0 .014.002l.014.002h.726v1.11c0 1.019.815 1.853 1.82 1.853h.727c1 0 1.82-.83 1.82-1.853v-.37h.727v.37c0 1.019.814 1.853 1.82 1.853h.726c1.001 0 1.82-.83 1.82-1.853V7.18h.727c.004 0 .009 0 .014-.002l.014-.002c.097.417.153.853.153 1.303 0 3.167-2.528 5.74-5.638 5.74s-5.637-2.573-5.637-5.74c0-.45.056-.882.153-1.303zM22 21.256c0 .408-.325.74-.726.74a.733.733 0 01-.727-.74c0-.409.326-.74.727-.74.4 0 .726.331.726.74z"
            />
        </svg>
    );
};

export default IconGuruLight;
