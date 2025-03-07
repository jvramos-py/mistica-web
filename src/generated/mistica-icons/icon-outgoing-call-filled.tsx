/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOutgoingCallFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.84 17.894c-.013-.848-.43-1.686-1.234-2.49a4.768 4.768 0 00-1.003-.787c-.544-.336-1.101-.507-1.661-.507-.157 0-.314.011-.474.04-.717.12-1.423.523-2.095 1.195a5.5 5.5 0 00-.442.496.216.216 0 01-.118.025c-.188 0-.543-.112-1.135-.518-.882-.605-1.924-1.613-2.63-2.32l-.084-.083c-.706-.709-1.714-1.748-2.32-2.63-.52-.762-.56-1.135-.495-1.252a5.7 5.7 0 00.496-.443c.672-.672 1.073-1.375 1.196-2.095.123-.72-.034-1.44-.465-2.135a4.924 4.924 0 00-.787-1c-.804-.804-1.642-1.218-2.49-1.235h-.054c-.86 0-1.728.415-2.582 1.23a6.334 6.334 0 00-.706.848l-.02.026c-.795 1.154-.776 2.94.06 5.033.87 2.188 2.568 4.58 4.907 6.919l.002.001.003.002.079.078c2.339 2.34 4.73 4.037 6.918 4.908 1.073.428 2.065.641 2.93.641.827 0 1.541-.193 2.104-.582a.154.154 0 01.03-.023l.012-.008c.006-.005.012-.01.02-.014.15-.11.533-.389.812-.68.83-.872 1.244-1.76 1.227-2.64zm-8.246-8.683l.95 1.056a.762.762 0 00.614.31.75.75 0 00.518-.206l2.532-2.177.557.62a.61.61 0 00.451.212.626.626 0 00.143-.02.59.59 0 00.417-.464l.813-3.79a.633.633 0 00-.625-.779c-.017 0-.036 0-.053.003l-3.846.3a.579.579 0 00-.515.355.584.584 0 00.128.614l.552.613-2.52 2.219a.771.771 0 00-.115 1.134z"
            />
        </svg>
    );
};

export default IconOutgoingCallFilled;
