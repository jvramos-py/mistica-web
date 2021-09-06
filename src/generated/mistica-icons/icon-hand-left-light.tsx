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
    size?: string | number;
};

const IconHandLeftLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.518 19.39c.748 0 1.33-.193 1.728-.58.398-.386.62-1.016.62-1.778V9.245c0-.19-.166-.342-.586-.535-.32-.148-1.378-.667-2.496-1.218-1.865-.92-4.187-2.062-5.636-2.74-.5-.235-.988-.168-1.266.18a.986.986 0 00-.218.624c0 .25.09.499.255.703.207.26.52.504 1.047.812a.81.81 0 01.373.916.823.823 0 01-.793.6H4.171c-1.21.078-1.347.787-1.347 1.316 0 .863.462 1.32 1.338 1.32h2.902c.451 0 .818.36.821.812a.823.823 0 01-.03.218 1.68 1.68 0 00-.06.465c0 .628.255 1.02.76 1.163a.819.819 0 01.554 1.04 1.642 1.642 0 00-.075.52c0 .63.257 1.022.767 1.165a.82.82 0 01.504.4.806.806 0 01.056.64 1.624 1.624 0 00-.075.518c0 .812.417 1.224 1.24 1.224l6.992.003zM9.46 18.168c0-.283.04-.544.118-.774-.857-.238-1.367-.94-1.367-1.946 0-.283.042-.544.118-.776-.849-.241-1.353-.941-1.353-1.944 0-.247.03-.476.09-.684H4.16C2.83 12.041 2 11.223 2 9.906c0-1.266.77-2.042 2.118-2.129h.042l7.386-.003c-.577-.339-.98-.644-1.271-1.008a1.934 1.934 0 01-.432-1.207c0-.404.132-.804.398-1.132.52-.65 1.409-.81 2.263-.409 1.448.68 3.776 1.826 5.647 2.745 1.166.574 2.171 1.07 2.476 1.21.317.146 1.062.49 1.062 1.272v7.787c0 .983-.308 1.82-.865 2.361-.555.538-1.331.81-2.3.81h-7c-1.275 0-2.065-.779-2.065-2.036z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandLeftLight;
