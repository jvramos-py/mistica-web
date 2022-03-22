/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowUpDownLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.77 21h6.226L19 14.688c0-.414-.265-.79-.672-.969-.418-.175-.862-.099-1.15.194l-1.18 1.2-8.004-8.146-1.646 1.675c-.112.114-.288.1-.415.046-.123-.053-.265-.167-.265-.338V2.688h5.552c.164 0 .28.148.332.27.052.121.067.307-.045.421L9.861 5.055l6.578 6.688c.13.13.343.13.47 0a.348.348 0 000-.479l-6.1-6.209 1.18-1.2c.28-.293.358-.757.19-1.171-.171-.414-.545-.684-.952-.684H5v6.33c0 .415.265.791.672.97.418.175.862.099 1.15-.194l1.187-1.2 8.012 8.131 1.646-1.676c.112-.114.288-.098.415-.045.123.053.265.167.265.338v5.658h-5.563c-.164 0-.28-.148-.332-.27-.053-.121-.068-.307.044-.421l1.632-1.676-4.234-4.31a.334.334 0 00-.47 0 .349.349 0 000 .48l3.763 3.83-1.18 1.2c-.28.293-.358.757-.19 1.171.172.414.545.684.952.684z"
                    fill={fillColor}
                />
                <path
                    d="M8.334 13.191c.362 0 .664-.3.664-.676a.672.672 0 00-.664-.677c-.362 0-.665.3-.665.677 0 .368.295.676.665.676z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.513 12.02a.962.962 0 01-.96-.961l-.003-3.39-2.247-.02a.489.489 0 01-.44-.282.515.515 0 01.085-.569l4.434-4.47a.498.498 0 01.31-.169.488.488 0 01.43.168l4.411 4.474a.122.122 0 01.008.01.514.514 0 01.073.559.485.485 0 01-.442.282l-2.244.02.006 3.387c0 .529-.432.96-.961.96h-2.46zm7.463 9.728a.486.486 0 00.67-.067l4.433-4.471a.515.515 0 00.084-.569.489.489 0 00-.44-.283l-2.246-.02-.003-3.392a.962.962 0 00-.96-.96h-2.46a.96.96 0 00-.96.96l.005 3.39-2.244.02a.485.485 0 00-.442.282.515.515 0 00.064.55.027.027 0 01.008.01.122.122 0 00.009.009l4.412 4.473a.52.52 0 00.07.068zm.302-.49l-4.286-4.342 2.177-.017h.006a.5.5 0 00.484-.51l-.005-3.44a.4.4 0 01.4-.4h2.46a.4.4 0 01.4.4l.006 3.44a.5.5 0 00.484.51h.006l2.176.017-4.308 4.341zm-8.165-10.2a.4.4 0 00.4.401h2.46a.4.4 0 00.4-.4l-.005-3.437a.501.501 0 01.484-.51h.006l2.176-.017L8.75 2.753 4.44 7.09l2.176.017h.006c.274.011.49.238.487.513l.003 3.44z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowUpDownLight;
