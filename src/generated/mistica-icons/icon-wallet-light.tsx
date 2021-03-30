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

const IconWalletLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.018 15.9v-2.952a.439.439 0 00-.434-.445H12.45c-.972 0-1.765.812-1.765 1.815v.218c0 1 .79 1.813 1.765 1.813h8.137a.443.443 0 00.431-.449zm-1.546 3.138l-.003-1.846h-7.02c-1.425 0-2.588-1.194-2.588-2.659v-.218c0-1.468 1.16-2.661 2.589-2.661h7.002l-.002-1.745c.025-.516-.096-.922-.356-1.205-.26-.285-.647-.437-1.12-.442l-13.496.005V8.26c-.558 0-1.079-.21-1.496-.58v11.255c-.025.507.098.91.356 1.193.263.286.666.446 1.14.451l13.498-.005c.824.005 1.496-.687 1.496-1.535zM2.982 5.842v.033c0 .412.154.798.44 1.09.086.09.187.165.294.23v-.393A1.33 1.33 0 015.04 5.47l11.666-.838V3.444l-12.199.86a1.49 1.49 0 00-1.086.45c-.286.29-.44.676-.44 1.088zm14.933.07a.5.5 0 00-.505-.49l-.291.022h-.003L5.07 6.309c-.306 0-.533.222-.533.49v.617l13.379.005v-1.51zm2.672 5.745c.692 0 1.255.58 1.255 1.291V15.9c0 .712-.563 1.292-1.255 1.292h-.294l.003 1.846c0 1.316-1.04 2.386-2.32 2.386l-13.501.006c-.703-.006-1.317-.26-1.737-.717-.414-.454-.616-1.076-.577-1.796V5.842c0-.636.24-1.236.678-1.687.44-.45 1.02-.7 1.641-.7l12.611-.89a.403.403 0 01.308.111.43.43 0 01.132.308v1.608c.686.07 1.21.633 1.21 1.32v1.633a2.1 2.1 0 01.958.582c.414.454.613 1.079.577 1.804l.003 1.723h.308v.003zm-7.941 3.582a.804.804 0 00.792-.815.804.804 0 00-.792-.815.806.806 0 00-.793.815c0 .448.356.815.793.815zm0-2.476c.89 0 1.613.745 1.613 1.661s-.725 1.661-1.613 1.661c-.891 0-1.617-.745-1.617-1.66 0-.917.726-1.662 1.617-1.662z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWalletLight;
