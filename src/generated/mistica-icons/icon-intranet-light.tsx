/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconIntranetLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10a9.871 9.871 0 01-1.572 5.356c-.104.18-.32.216-.5.108-.18-.104-.216-.32-.108-.5a9.588 9.588 0 001.428-4.608H17.32c-.036 3.824-1.216 7.036-2.928 8.608.892-.252 1.752-.608 2.536-1.108.176-.108.392-.072.5.108.108.176.072.392-.108.5A9.925 9.925 0 0112 22C6.5 22 2 17.5 2 12zm5.464-5.356c.5-1.536 1.248-2.784 2.144-3.608C5.752 4.072 2.856 7.5 2.716 11.644h3.928c0-.536.036-1.036.108-1.536a1.823 1.823 0 01-1.18-1.68c0-1 .784-1.784 1.784-1.784h.108zm.964 1.784c0-.608-.468-1.068-1.072-1.072-.608 0-1.072.464-1.072 1.072 0 .608.468 1.072 1.072 1.072.608 0 1.072-.464 1.072-1.072zM6.64 12.356H2.716c.14 4.144 3.036 7.572 6.888 8.608-1.712-1.572-2.892-4.788-2.964-8.608zm5.004 8.928v-8.928H7.36c.104 4.716 1.96 8.572 4.284 8.928zm-4.284-9.64h4.284l.004-8.924c-1.428.212-2.712 1.856-3.464 4.14.568.288.964.892.964 1.572 0 .96-.752 1.748-1.68 1.784a9.186 9.186 0 00-.108 1.428zm4.996 9.64c2.32-.356 4.18-4.216 4.284-8.928h-4.284v8.928zm0-18.568v8.928h4.284c-.104-4.716-1.96-8.572-4.284-8.928zm5 8.928h3.928c-.144-4.144-3.036-7.572-6.892-8.608 1.712 1.572 2.892 4.788 2.964 8.608z"
                    fill={fillColor}
                />
                <path d="M18.784 19.5a.716.716 0 100-1.432.716.716 0 000 1.432z" fill={fillColor} />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.566 12.515h-4.79a.322.322 0 01-.1-.02v1.491h3.117c.227 0 .42.18.42.409l.05 4.728h1.26c.01 0 .015.002.022.004a.042.042 0 00.02.005c.194-.964 1.068-1.695 2.118-1.695 1.188 0 2.154.941 2.154 2.098 0 1.163-.969 2.106-2.154 2.106-1.05 0-1.924-.736-2.117-1.703a.071.071 0 01-.042.009h-1.68a.422.422 0 01-.421-.404l-.05-4.733h-2.698v6.619a.412.412 0 01-.42.409c-4.028 0-6.885-1.272-8.516-3.712-.006-.007-.016-.012-.026-.018a.113.113 0 01-.04-.032.541.541 0 01-.076-.157c-.942-1.516-1.429-3.465-1.437-5.824 0-.008-.009-.017-.009-.017v-.007l.009-.01c-.009-.022-.009-.047-.009-.064 0-6.437 3.499-9.846 10.104-9.846.235 0 .42.188.42.41v6.792h2.697l.051-4.734a.42.42 0 01.42-.403h1.68c.01 0 .015.002.022.004a.06.06 0 00.02.004c.194-.966 1.068-1.703 2.118-1.703 1.188 0 2.154.941 2.154 2.104 0 1.157-.969 2.098-2.154 2.098-1.05 0-1.924-.729-2.117-1.695-.009 0-.015.002-.021.004-.007.002-.013.004-.021.004h-1.26l-.051 4.729a.417.417 0 01-.42.409h-3.118v1.549l.034-.01a.217.217 0 01.067-.015h4.79a2.15 2.15 0 012.117-1.687c1.188 0 2.154.941 2.154 2.095 0 1.163-.969 2.107-2.154 2.107a2.151 2.151 0 01-2.117-1.698zm-5.731-9.504c-1.614.272-2.992 2.023-3.757 4.538a21.12 21.12 0 003.757.515V3.011zm-4.572 4.32c.544-1.804 1.404-3.247 2.454-4.146-2.305.4-4.011 1.375-5.126 2.924.807.54 1.74.936 2.672 1.222zm-3.12-.527C3.42 8.1 3.042 9.72 3.008 11.669h3.605c.026-1.26.168-2.456.429-3.546-1-.302-2.008-.73-2.9-1.32zM3.008 12.49c.06 1.885.446 3.46 1.152 4.72.865-.583 1.882-1.008 2.89-1.31a16.692 16.692 0 01-.437-3.41H3.008zm8.824 3.457c-.664.033-2.151.14-3.748.524.76 2.498 2.146 4.243 3.748 4.504v-5.028zm9.162 3.59c0-.705-.588-1.28-1.31-1.28-.729 0-1.317.572-1.32 1.28 0 .712.588 1.287 1.32 1.287.722 0 1.31-.575 1.31-1.286zM4.605 17.906c1.118 1.54 2.815 2.507 5.104 2.899-1.045-.89-1.902-2.325-2.44-4.112-.95.288-1.874.68-2.664 1.213zm7.227-6.236V8.886a20.393 20.393 0 01-3.966-.54 15.927 15.927 0 00-.412 3.324h4.378zm.003.821H7.457a15.75 15.75 0 00.411 3.188 20.435 20.435 0 013.967-.55V12.49zm9.16-7.865c0-.706-.589-1.286-1.312-1.286-.728 0-1.316.583-1.319 1.286 0 .706.588 1.277 1.32 1.277.722 0 1.31-.571 1.31-1.277zm-1.312 6.201c-.728 0-1.316.574-1.319 1.278 0 .711.588 1.285 1.32 1.285.722 0 1.31-.574 1.31-1.285 0-.704-.588-1.278-1.31-1.278z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconIntranetLight;
