/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPrepaidRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.58 2H8.42C6.534 2 5 3.6 5 5.571V18.43C5 20.399 6.533 22 8.42 22h6.16c1.887 0 3.42-1.6 3.42-3.571V5.576C18 3.605 16.467 2 14.58 2zM6.366 17.363V6.646h10.266v10.717H6.367zm8.212-13.932c1.016 0 1.857.773 2.024 1.788H6.397c.167-1.015 1.008-1.788 2.024-1.788h6.158zm0 17.147H8.421c-1.016 0-1.857-.773-2.024-1.788h10.206c-.167 1.015-1.008 1.788-2.024 1.788zm-.854-4.646a.522.522 0 00.513-.535.529.529 0 00-.513-.54H10.9c.057-.168.088-.347.088-.534v-1.61h1.541a.522.522 0 00.513-.535.522.522 0 00-.513-.535h-1.541v-1.426c0-.59.46-1.07 1.024-1.07.237 0 .46.082.644.238a.5.5 0 00.723-.078.553.553 0 00-.074-.755 2.012 2.012 0 00-1.293-.475c-1.134 0-2.054.965-2.054 2.144v1.427h-.17a.522.522 0 00-.513.535c0 .297.228.535.512.535h.171v1.61a.516.516 0 01-.512.534.522.522 0 00-.513.535c0 .298.228.535.513.535h4.28z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.186 19.519c-.342 0-.628-.107-.821-.306-.193-.199-.289-.47-.289-.81 0-.697.415-1.114 1.112-1.114.698 0 1.112.417 1.112 1.115 0 .341-.098.613-.288.81-.19.195-.482.305-.826.305z"
                    fill={fillColor}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.83 13.098a.35.35 0 00.7 0v-.328c.41-.056.754-.198 1.011-.42.33-.288.507-.691.507-1.17 0-.586-.267-1.315-1.518-1.504V8.223c.196.041.389.114.588.223l.006.003c.07.039.151.061.235.064.224 0 .404-.18.404-.403 0-.087-.031-.252-.236-.379a2.488 2.488 0 00-.997-.33V7.09a.35.35 0 00-.7 0v.311c-.857.12-1.395.703-1.395 1.552 0 .56.248 1.254 1.395 1.464v1.538a2.318 2.318 0 01-.832-.358.499.499 0 00-.266-.084.411.411 0 00-.418.409c0 .151.065.272.197.364.394.272.847.44 1.319.492v.32zm0-3.541V8.222c-.36.089-.566.335-.566.694 0 .162 0 .473.566.641zm.7.967v1.43c.433-.092.69-.36.69-.746 0-.277-.09-.547-.69-.684z"
                    fill={fillColor}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.443 21.04c.552.546 1.359.812 2.465.812h6.555c1.106 0 1.913-.266 2.465-.812.555-.552.826-1.365.826-2.48V5.452c0-1.103-.266-1.907-.82-2.465-.555-.557-1.362-.826-2.471-.826h-6.555c-1.098 0-1.904.277-2.468.843-.506.514-.774 1.225-.817 2.173-1.293.088-2.32.492-3.056 1.203-.874.843-1.317 2.09-1.317 3.708 0 1.62.443 2.866 1.317 3.709.736.71 1.76 1.113 3.05 1.202v3.563c0 1.114.269 1.927.826 2.479zm.294-6.041v3.562c0 1.582.589 2.17 2.171 2.17h6.555c1.582 0 2.17-.588 2.17-2.17V5.45c0-.792-.162-1.341-.492-1.675-.33-.333-.883-.496-1.678-.496h-6.555c-1.445 0-2.09.555-2.163 1.896 1.289.09 2.313.494 3.048 1.203.874.843 1.317 2.09 1.317 3.708 0 1.62-.443 2.866-1.317 3.709-.737.71-1.763 1.114-3.056 1.203zM5.345 7.185c.625-.602 1.577-.907 2.835-.907s2.21.305 2.835.907c.647.622.974 1.6.974 2.902 0 1.303-.327 2.28-.974 2.902-.625.602-1.58.908-2.835.908s-2.21-.306-2.835-.908c-.647-.622-.975-1.6-.975-2.902s.328-2.28.975-2.902z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPrepaidRegular;
