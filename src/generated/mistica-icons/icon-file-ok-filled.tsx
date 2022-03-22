/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileOkFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.686 8a.897.897 0 00-.266-.622l-5.286-5.126A.846.846 0 0015.532 2H8.134c-.73 0-1.397.661-1.394 1.387v3.977c-.916.146-1.541.546-2.057.885l-.011.008c-.622.413-1.078.717-1.924.58a.612.612 0 00-.513.113.576.576 0 00-.232.473c-.009.162-.017 3.977.272 5.627.33 1.91 3.29 3.62 4.462 4.227v1.034c0 .742.652 1.378 1.397 1.378h12.149c.762 0 1.403-.627 1.403-1.378V8zm-3.515-.339c-.69-.003-1.275-.21-1.686-.613-.41-.395-.625-.95-.625-1.614V3.661l4.118 4H18.17zM5.717 13.115l1.04 1.045 2.834-2.85a.601.601 0 01.849-.002l.003.003a.605.605 0 010 .854l-3.26 3.278a.598.598 0 01-.847.002l-.003-.002-1.465-1.471a.605.605 0 010-.854.596.596 0 01.85-.003zm13.03 1.905a.605.605 0 01-.601.605l-5.762-.003a2.57 2.57 0 00.185-.572c.02-.115.037-.243.055-.38l.034-.255h5.49c.334.002.6.271.6.605zm-.601 3.473h-8.69c.533-.339 1.11-.742 1.622-1.21h7.068a.605.605 0 01.602.605v.003a.601.601 0 01-.602.602zm-9.652-.822l-.005.003a6.548 6.548 0 01-.547.312 8.564 8.564 0 01-.522.274c-1.524-.764-3.756-2.257-3.955-3.425-.202-1.16-.252-3.605-.258-4.765.947-.025 1.58-.445 2.143-.824l.023-.015c.593-.386 1.113-.724 2.047-.724h.009c.308.006.613.056.907.146.025.008.056.016.09.025.112.04.221.084.328.137.033.017.067.034.103.048.07.036.136.076.203.117l.077.045.119.075c.078.05.157.1.243.152.554.373 1.17.782 2.143.807-.006 1.17-.054 3.622-.255 4.79-.017.12-.065.24-.13.37-.003.008-.008.014-.012.02a2.334 2.334 0 01-.245.39.307.307 0 00-.05.066 4.64 4.64 0 01-.328.361c-.008.012-.02.024-.03.036-.01.01-.019.018-.026.028l-.066.062c-.11.103-.224.21-.343.311-.008.004-.015.01-.021.015a7.407 7.407 0 01-.503.396c0 .01-.008.01-.008.01a17.077 17.077 0 01-.551.391c-.007.004-.014.007-.018.012a.62.62 0 00-.05.033 6.858 6.858 0 01-.511.32zm9.63-6.167a.61.61 0 01.602.605v.003c0 .33-.27.602-.603.602H12.78c.017-.412.033-.823.042-1.21h5.302z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileOkFilled;
