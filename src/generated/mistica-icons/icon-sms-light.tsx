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

const IconSmsLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.02 14.955v-8.96c0-1.23-1.04-2.232-2.318-2.232H5.288c-1.278 0-2.32 1-2.32 2.233v8.96c0 1.078.729 1.98 1.77 2.185a.403.403 0 01.329.39v2.168c0 .271.28.526.574.526.098 0 .3 0 .504-.263l2.118-2.622a.412.412 0 01.322-.152h10.112c1.283-.002 2.322-1.003 2.322-2.233zM18.701 2.97c1.729 0 3.138 1.356 3.138 3.026v8.96c0 1.67-1.41 3.025-3.138 3.025H8.79L6.8 20.444a1.403 1.403 0 01-1.156.577c-.757 0-1.396-.605-1.396-1.32v-1.863a2.994 2.994 0 01-2.098-2.883v-8.96c0-1.669 1.41-3.025 3.138-3.025h13.414zM6.896 10.148c.714.277 1.605.619 1.605 1.779 0 1.025-.728 1.614-1.994 1.614a4.466 4.466 0 01-1.398-.219.294.294 0 01-.188-.347l.053-.216a.294.294 0 01.149-.188.31.31 0 01.243-.025c.76.233 1.664.221 2.012-.008.104-.065.272-.23.272-.6 0-.577-.398-.76-1.104-1.03-.695-.27-1.558-.606-1.558-1.702 0-.47.165-.862.48-1.131.531-.457 1.5-.527 2.546-.233a.296.296 0 01.213.359l-.053.207a.301.301 0 01-.146.185.32.32 0 01-.238.028 3.366 3.366 0 00-.93-.137c-1.029 0-1.029.484-1.029.689 0 .535.387.711 1.065.975zm7.335-2.387a.303.303 0 01.308.297v5.08a.301.301 0 01-.308.296h-.216a.303.303 0 01-.308-.297V9.691l-1.345 2.468a.314.314 0 01-.272.16h-.23a.312.312 0 01-.274-.162l-1.292-2.435v3.418a.301.301 0 01-.308.297H9.77a.303.303 0 01-.308-.297V8.06c0-.165.138-.296.308-.296h.233a.31.31 0 01.275.162l1.709 3.222 1.756-3.227a.316.316 0 01.275-.16h.213zm3.247 2.387c.714.277 1.605.619 1.605 1.779 0 1.025-.728 1.614-1.995 1.614a4.466 4.466 0 01-1.398-.219.294.294 0 01-.187-.347l.053-.216a.294.294 0 01.148-.188.31.31 0 01.244-.025c.76.233 1.664.221 2.012-.008.103-.065.271-.23.271-.6 0-.577-.397-.76-1.103-1.03-.695-.27-1.56-.606-1.56-1.702 0-.47.164-.862.481-1.131.532-.457 1.502-.527 2.547-.233a.298.298 0 01.213.359l-.054.207a.301.301 0 01-.145.185.321.321 0 01-.238.028 3.362 3.362 0 00-.928-.137c-1.028 0-1.028.484-1.028.689-.006.535.381.711 1.062.975z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSmsLight;
