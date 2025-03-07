/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowUpDownLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.808 22h6.555l.004-6.644c0-.436-.28-.832-.707-1.02-.44-.184-.908-.104-1.21.204l-1.243 1.264-8.425-8.576-1.733 1.764c-.118.12-.303.104-.437.048-.13-.056-.279-.176-.279-.356v-5.96h5.844c.173 0 .295.156.35.284.055.128.07.324-.047.444L9.747 5.216l6.924 7.04a.351.351 0 00.495 0 .367.367 0 000-.504l-6.421-6.536 1.242-1.264c.294-.308.377-.796.2-1.232-.18-.436-.574-.72-1.002-.72H4.63v6.664c0 .436.279.832.707 1.02.44.184.908.104 1.21-.204l1.25-1.264 8.434 8.56 1.733-1.764c.118-.12.303-.104.436-.048.13.056.28.176.28.356v5.956h-5.856c-.173 0-.295-.156-.35-.284-.055-.128-.07-.324.047-.444l1.717-1.764-4.456-4.536a.351.351 0 00-.495 0 .367.367 0 000 .504l3.961 4.032-1.242 1.264c-.295.308-.377.796-.2 1.232.18.436.574.72 1.002.72z"
                />
                <path
                    fill={fillColor}
                    d="M8.14 13.78c.38 0 .699-.316.699-.712a.707.707 0 00-.7-.712c-.38 0-.7.316-.7.712 0 .388.311.712.7.712z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.503 12.014a.962.962 0 01-.96-.96l-.003-3.39-2.247-.02a.489.489 0 01-.44-.282.515.515 0 01.085-.569l4.434-4.47a.498.498 0 01.31-.169.488.488 0 01.43.168l4.411 4.474a.12.12 0 01.008.01.514.514 0 01.073.559.485.485 0 01-.442.282l-2.244.02.006 3.386c0 .53-.432.961-.961.961h-2.46zm7.463 9.729a.486.486 0 00.67-.067l4.433-4.471a.515.515 0 00.084-.569.489.489 0 00-.44-.283l-2.246-.02-.003-3.392a.962.962 0 00-.96-.96h-2.46a.96.96 0 00-.96.96l.005 3.39-2.244.02a.485.485 0 00-.442.282.514.514 0 00.072.56l.009.009 4.412 4.473a.52.52 0 00.07.068zm.302-.49l-4.286-4.342 2.177-.017h.006a.5.5 0 00.484-.51l-.005-3.44a.4.4 0 01.4-.4h2.46a.4.4 0 01.4.4l.006 3.44a.5.5 0 00.484.51h.006l2.176.017-4.308 4.341zm-8.165-10.2a.4.4 0 00.4.401h2.46a.4.4 0 00.4-.4l-.005-3.437a.501.501 0 01.484-.51h.006l2.176-.017L8.74 2.748 4.43 7.084l2.176.017h.006c.274.011.49.238.487.513l.003 3.44z"
                />
            </svg>
        );
    }
};

export default IconArrowUpDownLight;
