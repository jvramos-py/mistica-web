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

const IconPersonLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.819 6.754a2.701 2.701 0 00.961-2.075C14.78 3.202 13.61 2 12.171 2c-1.438 0-2.608 1.202-2.608 2.679 0 .8.347 1.518.894 2.011C9.064 6.933 8 8.18 8 9.68v6.25h1.389v5.713c0 .197.156.357.347.357.192 0 .348-.16.348-.357v-6.427h-1.39V9.68c0-1.257 1.038-2.322 2.262-2.322h2.088c1.224 0 2.261 1.065 2.261 2.322v5.536h-1.389v3.927c0 .196.156.356.348.356.191 0 .347-.16.347-.356v-3.214H16V9.68c-.005-1.394-.926-2.574-2.181-2.926zM10.257 4.68c0-1.084.86-1.966 1.914-1.966 1.056 0 1.915.882 1.915 1.966 0 1.083-.86 1.966-1.92 1.966-1.054-.005-1.909-.883-1.909-1.966zM14.26 22c.383 0 .695-.32.695-.713a.705.705 0 00-.695-.713.705.705 0 00-.694.713c0 .393.312.713.694.713z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.35 4.479c0 1.473.872 2.32 2.387 2.32 1.518 0 2.39-.847 2.39-2.32 0-.75-.22-1.336-.65-1.74-.415-.389-1-.588-1.74-.588-.742 0-1.328.2-1.74.588-.428.404-.647.99-.647 1.74zm.844 0c0-.521.128-.908.389-1.151.252-.236.639-.356 1.157-.356.515 0 .902.12 1.154.359.26.243.392.63.392 1.148 0 1.025-.493 1.501-1.549 1.501-1.053 0-1.543-.479-1.543-1.501zm5.887 10.507a.526.526 0 01-.4-.05.512.512 0 01-.24-.278l-.539-2.893c-.039-.21-.224-.345-.45-.336a.416.416 0 00-.384.409v8.655a.528.528 0 01-.53.527.529.529 0 01-.532-.527v-5.16a.418.418 0 00-.423-.409h-1.188a.414.414 0 00-.42.41v5.156a.53.53 0 01-1.062 0v-8.655a.414.414 0 00-.383-.41c-.23-.01-.415.127-.454.337l-.532 2.865a.503.503 0 01-.247.309.516.516 0 01-.406.05h-.006a.523.523 0 01-.372-.636l1.21-4.336a.308.308 0 00.034-.092.159.159 0 01.004-.015l.007-.022c.182-.865.977-1.493 1.888-1.493h2.664c.913 0 1.708.628 1.888 1.493l.016.056c.012.04.026.079.042.115l1.196 4.289a.526.526 0 01-.381.642zm.241.787a1.341 1.341 0 00.956-1.641l-1.185-4.264a.869.869 0 00-.056-.17c-.27-1.233-1.404-2.127-2.706-2.127h-2.664c-1.303 0-2.44.894-2.709 2.132a.825.825 0 00-.047.14l-1.2 4.294-.002.009a1.34 1.34 0 00.97 1.63 1.39 1.39 0 001.403-.41v5.127c0 .742.616 1.347 1.372 1.347.756 0 1.373-.605 1.373-1.347v-4.75h.336v4.747a1.36 1.36 0 001.372 1.348c.757 0 1.373-.605 1.373-1.348v-5.123a1.396 1.396 0 001.414.406z"
                />
            </svg>
        );
    }
};

export default IconPersonLight;
