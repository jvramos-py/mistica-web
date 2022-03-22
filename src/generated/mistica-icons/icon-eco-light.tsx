/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconEcoLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.787 2.054c.142-.072.284-.072.39 0 .25.14 5.827 3.752 5.823 10.297 0 2.324-.707 4.216-2.082 5.649a.336.336 0 01-.493 0 .346.346 0 010-.5c1.232-1.289 1.868-3.04 1.868-5.149 0-5.509-4.341-8.9-5.293-9.58-.952.68-5.293 4.075-5.293 9.58 0 5.108 3.673 6.645 4.942 7.04v-12.4c0-.213.138-.357.351-.357.21 0 .351.14.351.356v14.654c0 .212-.138.356-.351.356-.21 0-.351-.14-.351-.356V20.14C10.447 19.784 6 18.136 6 12.347c0-6.455 5.432-10.058 5.776-10.286l.01-.007z"
                    fill={fillColor}
                />
                <path
                    d="M14.121 19.856c.39 0 .707-.32.707-.716a.712.712 0 00-.707-.716c-.39 0-.707.32-.707.716 0 .395.317.716.707.716z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M9.682 10.97c-.738.683-1.798 1.028-3.153 1.028-1.387 0-2.468-.364-3.21-1.079-.718-.689-1.105-1.694-1.157-2.99a.282.282 0 01-.006-.057V4.665A1.423 1.423 0 013.568 3.25h2.96c1.386 0 2.464.365 3.205 1.081.77.745 1.163 1.852 1.163 3.297 0 1.218-.278 2.199-.83 2.921 1.35 2.539 1.634 5.753 1.763 7.896.253-1.131.641-2.552 1.22-3.94a15.2 15.2 0 01.703-1.465c-.442-.693-.666-1.592-.666-2.68 0-1.44.39-2.544 1.157-3.286.74-.715 1.818-1.076 3.202-1.076h2.96c.77.003 1.401.63 1.401 1.4v3.208a.25.25 0 01-.01.073c-.054 1.284-.44 2.28-1.152 2.963-.737.714-1.813 1.076-3.2 1.076-1.383 0-2.461-.362-3.2-1.076a3.29 3.29 0 01-.143-.145c-1.17 2.232-1.8 5.005-2.127 7.008a.267.267 0 01-.26.224h-.004m-5.184-9.286c1.28 0 2.24-.328 2.878-.98-.82-1.389-1.907-2.347-3.25-2.86a.267.267 0 01.19-.499c1.533.586 2.629 1.64 3.415 2.91.388-.606.582-1.403.582-2.389 0-2.535-1.283-3.82-3.815-3.82H3.568a.865.865 0 00-.857.86v2.96c0 2.533 1.283 3.818 3.815 3.818zm10.919 2.748c2.543 0 3.832-1.288 3.832-3.832 0-.018.002-.037.005-.054V7.398a.882.882 0 00-.874-.873h-2.963c-2.544 0-3.832 1.288-3.832 3.834 0 .864.148 1.583.444 2.156.312-.506.643-.956.993-1.346.93-1.042 1.997-1.678 3.174-1.891a.265.265 0 01.095.521c-1.71.311-2.99 1.573-3.945 3.206.633.789 1.658 1.186 3.07 1.186z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconEcoLight;
