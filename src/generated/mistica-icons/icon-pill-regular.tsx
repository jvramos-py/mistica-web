/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPillRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.8 2.16c1.378-.027 2.784.628 4.1 1.945 2.555 2.552 2.595 5.367.11 7.927l-7.93 7.933a1.982 1.982 0 01-.19.185c-1.208 1.129-2.477 1.694-3.751 1.694-1.364 0-2.734-.65-4.034-1.95-1.32-1.316-1.972-2.694-1.95-4.094.026-1.348.678-2.673 1.945-3.939l.145-.151c.12-.126.238-.247.362-.353l6.776-6.779c.077-.094.197-.208.32-.325l.002-.002.154-.146c1.266-1.263 2.59-1.919 3.94-1.944zm3.339 9.012c2.017-2.081 1.986-4.112-.104-6.199-1.053-1.053-2.115-1.588-3.154-1.588h-.056c-1.022.017-2.064.552-3.098 1.585l-.174.168a4.125 4.125 0 00-.269.272L9.777 7.917a.24.24 0 00-.004.034.216.216 0 01-.007.047c-.445 1.367.149 2.84 1.815 4.507 1.124 1.124 2.77 2.365 4.25 1.891.02-.007.039-.007.058-.008.012 0 .025 0 .037-.003l3.213-3.213zm-7.863 7.863l3.342-3.34c-1.222-.17-2.53-.946-3.902-2.318-1.426-1.426-2.177-2.78-2.292-4.101l-2.98 2.98a4.496 4.496 0 00-.305.3l-.168.174c-1.034 1.033-1.569 2.075-1.586 3.095-.02 1.056.516 2.134 1.589 3.207 2.058 2.056 4.053 2.126 6.103.204.055-.049.083-.08.113-.112l.002-.002.084-.087z"
            />
        </svg>
    );
};

export default IconPillRegular;
