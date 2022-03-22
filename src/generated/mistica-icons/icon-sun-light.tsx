/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSunLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.909 11.524h2.513c.238 0 .423.196.418.42 0 .236-.185.42-.423.42h-2.514a.426.426 0 01-.11-.016c-.041 1.998-.602 3.396-1.398 4.375a.21.21 0 01.104.067l1.6 1.586c.16.17.16.432 0 .6a.424.424 0 01-.305.117.41.41 0 01-.297-.117l-1.592-1.586c-.019-.019-.032-.041-.045-.062l-.014-.023c-1.55 1.427-3.59 1.654-4.422 1.68v2.437c0 .227-.194.42-.423.42a.424.424 0 01-.424-.42v-2.438c-.888-.034-2.853-.277-4.36-1.667l-.017.029c-.008.014-.015.028-.025.038l-1.6 1.592a.46.46 0 01-.177.1.45.45 0 01-.272.101.424.424 0 01-.297-.126.43.43 0 010-.6l1.754-1.734a.176.176 0 01.05-.034c-.764-.978-1.305-2.36-1.355-4.332l-.006.002a.261.261 0 01-.081.015H2.573a.417.417 0 01-.423-.42c0-.228.185-.421.423-.421h2.618c.022 0 .044.007.067.015a.431.431 0 00.034.01c.1-1.959.695-3.315 1.499-4.243-.017-.017-.034-.025-.05-.033L4.977 5.52a.42.42 0 010-.6.413.413 0 01.594 0l1.762 1.755c.009.008.015.017.022.025a.222.222 0 00.02.025c1.491-1.264 3.363-1.457 4.201-1.474V2.57c0-.235.188-.42.424-.42.23 0 .423.185.423.42v2.682c.815.034 2.712.253 4.229 1.516a.183.183 0 00.025-.042l1.821-1.804a.423.423 0 01.603 0c.16.162.16.431 0 .6L17.28 7.325a.186.186 0 01-.042.025c.83.928 1.432 2.276 1.541 4.198a.63.63 0 00.047-.01.303.303 0 01.082-.015zm-7.17 6.62h.595c1.693-.034 5.624-.684 5.622-6.012 0-5.327-3.955-5.994-5.658-6.036-.152-.009-.323-.009-.49-.009h-.119c-1.678.017-5.574.634-5.574 6.012 0 5.389 3.93 6.02 5.625 6.044z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSunLight;
