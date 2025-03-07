/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconManagedLanLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.002 17.505a1.475 1.475 0 001.09-1.427c0-.82-.652-1.484-1.457-1.484-.676 0-1.239.474-1.402 1.11H13.4a1.461 1.461 0 00-1.038-1.058V12h6.55c.22 0 .364-.147.364-.37V2.37c0-.223-.144-.37-.363-.37H5.089c-.219 0-.363.147-.363.37v9.265c0 .223.144.37.363.37h6.546v2.645a1.462 1.462 0 00-1.038 1.058H5.764a1.458 1.458 0 00-1.401-1.11c-.801 0-1.453.664-1.453 1.48 0 .687.466 1.261 1.09 1.427v3.386c0 .203.163.37.363.37.2 0 .363-.167.363-.37v-3.386a1.46 1.46 0 001.038-1.057h4.833c.13.516.53.924 1.038 1.057v3.386c0 .203.163.37.364.37.2 0 .363-.167.363-.37v-3.386a1.46 1.46 0 001.038-1.057h4.838c.13.516.53.924 1.038 1.057v1.536c0 .204.163.37.363.37.2 0 .363-.166.363-.37v-1.536zM19.64 22c.4 0 .727-.332.727-.74a.734.734 0 00-.727-.74c-.4 0-.726.333-.726.74 0 .408.326.74.726.74zm-1.094-10.74H5.452V2.74h13.093v8.52zM4.363 15.338c.4 0 .726.332.726.74 0 .407-.326.74-.726.74a.734.734 0 01-.727-.74c0-.408.326-.74.727-.74zm8.362.74c0 .407-.326.74-.726.74a.734.734 0 01-.727-.74c0-.408.326-.74.727-.74.4 0 .726.332.726.74zm6.914-.74c.4 0 .727.332.727.74 0 .407-.326.74-.727.74a.734.734 0 01-.726-.74c0-.408.326-.74.726-.74z"
            />
        </svg>
    );
};

export default IconManagedLanLight;
