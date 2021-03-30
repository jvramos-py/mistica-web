/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: number;
};

const IconBatteryFullRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.931 18.636V7.544c0-.818-.193-1.404-.588-1.787-.395-.387-.997-.575-1.84-.575H8.797c-.835 0-1.434.194-1.838.589-.397.392-.59.969-.59 1.773v11.092c0 .827.193 1.415.59 1.796.395.38.995.566 1.838.566h5.706c.84 0 1.442-.185 1.837-.566.395-.381.589-.97.591-1.796zM9.853 3.67v.666h3.591V3.67c0-.367-.115-.48-.151-.516-.037-.036-.152-.148-.53-.148H10.54c-.372 0-.49.115-.53.154-.038.036-.156.151-.156.51zm7.106 1.49c.566.552.84 1.33.84 2.384v11.092c0 1.065-.277 1.849-.848 2.398-.566.546-1.367.812-2.448.812H8.797c-1.081 0-1.882-.266-2.448-.812-.572-.55-.849-1.333-.849-2.398V7.544c0-1.037.275-1.81.843-2.367.574-.566 1.378-.84 2.457-.84h.187V3.67c0-.468.138-.84.407-1.104.268-.272.655-.406 1.142-.406h2.225c.49 0 .876.132 1.145.398.272.263.406.638.406 1.112v.666h.188c1.087 0 1.894.27 2.46.824zM15.211 18V7.463H8.085V18c0 .661.552 1.2 1.233 1.2h4.661c.678 0 1.232-.539 1.232-1.2zm.435-11.383c.24 0 .434.187.434.423V18c0 1.13-.941 2.045-2.104 2.045H9.318c-1.16 0-2.104-.916-2.104-2.045V7.04c0-.236.196-.423.434-.423h7.998z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBatteryFullRegular;
