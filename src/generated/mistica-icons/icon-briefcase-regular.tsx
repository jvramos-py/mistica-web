/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBriefcaseRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.808 5.667h3.885C20.96 5.667 22 6.737 22 8.042v11.083c0 1.305-1.04 2.375-2.307 2.375H4.307C3.04 21.5 2 20.43 2 19.125V8.042c0-1.305 1.04-2.375 2.307-2.375h3.885C8.384 3.887 10.038 2.5 12 2.5c1.962 0 3.575 1.388 3.808 3.167zm-1.54.004c-.23-.912-1.152-1.585-2.268-1.585-1.116 0-2.039.673-2.271 1.585h4.538zm5.425 1.578H4.307c-.425 0-.77.36-.77.793v3.167h16.926V8.042a.785.785 0 00-.77-.793zM3.537 19.126c0 .437.349.792.77.792h15.386c.425 0 .77-.355.766-.797v-6.33H3.537v6.334z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.933 7.182h3.46c.806 0 1.453.653 1.453 1.463v11.73c0 .813-.65 1.471-1.454 1.471H3.62c-.804 0-1.46-.66-1.46-1.47V8.645c0-.81.656-1.463 1.46-1.463h3.454v-.355c0-2.569 2.174-4.667 4.84-4.667h.188c2.667 0 4.832 2.098 4.832 4.667v.355zm-8.63-.355v.355h7.4v-.355c0-1.883-1.616-3.429-3.602-3.429h-.188c-1.986 0-3.61 1.546-3.61 3.429zm12.313 5.462V8.647a.222.222 0 00-.22-.224H3.621a.23.23 0 00-.23.224v3.527c1.656 1.305 4.348 1.89 8.687 1.89 4.232 0 6.874-.554 8.537-1.775zm-9.196 4.146h1.174v-1.132H11.42v1.131zm8.975 4.17a.222.222 0 00.221-.23h-.002v-6.621c-1.591.91-3.734 1.39-6.793 1.512v1.39a.94.94 0 01-.434.818c-.205.131-.46.199-.787.199h-1.196c-.32 0-.583-.068-.787-.2a.955.955 0 01-.43-.817V15.26c-3.075-.14-5.215-.644-6.797-1.586v6.7c0 .132.106.23.23.23h16.775z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconBriefcaseRegular;
