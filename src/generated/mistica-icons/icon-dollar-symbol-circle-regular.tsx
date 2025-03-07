/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDollarSymbolCircleRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 18.555a.562.562 0 01-.56-.56v-.745a5.632 5.632 0 01-2.694-.972c-.224-.157-.333-.358-.333-.613 0-.376.31-.68.694-.68a.87.87 0 01.454.145c.623.414 1.253.673 1.88.768l-.002-3.352c-2.295-.375-2.788-1.724-2.788-2.808 0-1.659 1.077-2.784 2.787-2.975V6.01c0-.308.252-.56.56-.56.308 0 .56.252.56.56v.755c.77.077 1.483.303 2.05.654.261.16.404.387.404.639a.663.663 0 01-.664.664.925.925 0 01-.409-.115l-.008-.006a4.232 4.232 0 00-1.372-.486v3.188c.98.13 1.734.439 2.243.917.518.488.784 1.149.784 1.964 0 .913-.333 1.684-.963 2.23-.513.446-1.218.725-2.062.82v.762a.56.56 0 01-.56.56zm2.211-4.316c0-.606-.207-1.252-1.651-1.534v3.192c1.033-.16 1.651-.766 1.651-1.658zm-2.773-6.134c-.381.064-.7.205-.936.417-.31.277-.476.672-.476 1.143 0 .442.132.762.418 1.008.226.196.56.348.995.454V8.105z"
            />
            <path
                fill={fillColor}
                d="M12 21.847c-3.122 0-5.556-.818-7.229-2.429-1.736-1.675-2.616-4.17-2.616-7.417s.88-5.742 2.616-7.417c1.673-1.611 4.107-2.429 7.23-2.429s5.557.818 7.23 2.429c1.736 1.672 2.616 4.168 2.616 7.417 0 3.25-.88 5.742-2.616 7.417-1.673 1.61-4.107 2.429-7.23 2.429zm0-18.572c-2.823 0-4.993.712-6.45 2.115C4.04 6.844 3.275 9.068 3.275 12c0 2.934.765 5.155 2.275 6.611 1.457 1.404 3.627 2.115 6.45 2.115 2.824 0 4.995-.711 6.452-2.114 1.51-1.454 2.274-3.678 2.274-6.611s-.764-5.154-2.274-6.61C16.995 3.986 14.824 3.274 12 3.274z"
            />
        </svg>
    );
};

export default IconDollarSymbolCircleRegular;
