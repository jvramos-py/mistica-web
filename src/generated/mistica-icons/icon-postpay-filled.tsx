/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPostpayFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.175 8.049l-2.73-2.732a.562.562 0 00-.396-.165h-.26c-.045-.938-.314-1.644-.815-2.154-.563-.566-1.37-.843-2.468-.843H6.951c-1.109 0-1.915.269-2.47.826-.555.558-.82 1.362-.82 2.465v13.11c0 1.114.27 1.927.825 2.479.552.546 1.359.812 2.465.812h6.555c1.107 0 1.913-.266 2.465-.813.558-.551.826-1.364.826-2.479v-2.45h2.67c.524 0 .874-.353.874-.877V8.443a.55.55 0 00-.166-.394zm-1.467.114h-.286c-.39 0-.67-.08-.832-.246-.162-.165-.246-.443-.246-.832v-.286l1.364 1.364zM13.24 6.27h2.983v.812c0 1.398.801 2.199 2.199 2.199h.798v5.7c-1.056.003-4.946.003-5.98 0V6.27zm5.053 4.092a.42.42 0 01-.42.42h-3.286a.42.42 0 110-.84h3.286a.42.42 0 01.42.42zm-.42 2.06a.42.42 0 100-.841h-3.286a.42.42 0 100 .84h3.286zm.42 1.217a.42.42 0 01-.42.42h-3.286a.42.42 0 110-.84h3.286a.42.42 0 01.42.42zm-8.885 5.57c-.193-.2-.288-.471-.288-.81 0-.698.414-1.115 1.112-1.115.697 0 1.112.417 1.112 1.115 0 .341-.098.613-.289.81-.19.195-.485.305-.826.305-.342 0-.628-.107-.82-.306z"
            />
        </svg>
    );
};

export default IconPostpayFilled;
