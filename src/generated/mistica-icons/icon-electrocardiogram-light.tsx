/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconElectrocardiogramLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.46 2c-2.107 0-3.391.824-5.462 3.471C9.995 2.898 8.533 2 6.357 2 4.249 2 2 3.429 2 6.543c0 4.869 6.574 11.949 9.75 15.352a.377.377 0 00.252.105.4.4 0 00.252-.105.385.385 0 00.036-.5c-3.108-3.292-9.572-10.23-9.572-14.847 0-1.823 1.143-3.829 3.643-3.829 1.714 0 3.109.573 5.358 3.577a.328.328 0 00.283.142.323.323 0 00.284-.142c2.285-3.078 3.428-3.577 5.18-3.577 1.892 0 3.82 1.324 3.82 3.865 0 2.038-1.284 4.759-3.784 8.12l-2.643 3.293c-.105.142-.105.394.037.5.142.105.393.105.498-.037l2.68-3.293C20.714 11.627 22 8.797 22 6.58 22 3.575 19.714 2 17.46 2zm-5.462 14.317c.215 0 .356-.143.356-.358v-3.577h3.57c.215 0 .357-.142.357-.357s-.142-.357-.356-.357h-3.57V8.091c0-.215-.142-.357-.357-.357s-.357.142-.357.357v3.577h-3.57c-.215 0-.357.142-.357.357s.142.357.357.357h3.57v3.577c0 .21.142.358.357.358zm1.074 3.572c0-.394.32-.715.713-.715a.715.715 0 010 1.43.715.715 0 01-.713-.715z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.63 11.93h1.798a.412.412 0 01.417.411c0 .23-.187.415-.417.415h-2.21a25.37 25.37 0 01-.994 1.68c-1.07 1.645-1.925 2.709-3.376 4.196l-.017.019a.38.38 0 01-.016.018c-.143.145-.642.644-1.065.947-.364.26-.773.445-1.185.529a2.242 2.242 0 01-.372.053h-.009l-.008.003c-.034.003-.07.003-.112.003h-.034l-.109-.003-.008-.003h-.009a2.242 2.242 0 01-.372-.053 3.206 3.206 0 01-1.185-.53c-.423-.302-.922-.8-1.065-.946-1.47-1.504-2.333-2.574-3.409-4.233a24.286 24.286 0 01-1.036-1.764H2.574a.416.416 0 01-.418-.415.418.418 0 01.418-.415h1.848C3.845 10.646 3.4 9.462 3.12 8.305c-.518-2.163-.09-3.961 1.204-5.062.754-.641 1.779-1.022 2.885-1.078.099-.006.197-.009.295-.009 1.075 0 2.176.297 3.204.86.403.221.807.451 1.202.692a.303.303 0 00.277 0 46.17 46.17 0 011.205-.689c1.025-.566 2.126-.86 3.201-.86.098 0 .2.003.297.008 1.11.056 2.135.44 2.885 1.079 1.294 1.1 1.72 2.9 1.202 5.062-.286 1.182-.748 2.395-1.347 3.621zM3.932 8.113c.294 1.216.782 2.465 1.423 3.734h.936l1.935-6.202c.056-.182.238-.322.418-.29.19.008.35.142.389.33l1.76 8.725.671-2.185a.42.42 0 01.4-.294h1.2l1.1-3.717a.417.417 0 01.39-.297.399.399 0 01.403.277l1.322 3.737h2.424c.663-1.294 1.165-2.574 1.465-3.815.442-1.849.109-3.356-.936-4.244-.61-.52-1.46-.834-2.384-.882a7.566 7.566 0 00-.252-.006c-.933 0-1.9.264-2.798.757a38.6 38.6 0 00-1.182.675 1.132 1.132 0 01-1.115.006c-.437-.258-.82-.477-1.196-.684-.9-.493-1.869-.756-2.799-.756a7.06 7.06 0 00-.252.005c-.927.048-1.773.362-2.386.883-1.048.89-1.378 2.397-.936 4.243zm13.591 5.874c.266-.412.504-.823.742-1.235h-2.28a.417.417 0 01-.392-.277l-.991-2.802-.824 2.782a.418.418 0 01-.4.297h-1.202l-1.065 3.462a.42.42 0 01-.4.294.417.417 0 01-.41-.333L8.54 7.436l-1.543 4.939a.415.415 0 01-.398.291h-.81c.25.448.513.885.79 1.317 1.045 1.607 1.88 2.644 3.308 4.106.093.098.575.583.953.852.26.19.557.325.87.395.082.02.166.03.247.036h.014l.065.003.092-.003h.023c.078-.003.156-.014.226-.03a2.41 2.41 0 00.891-.396c.289-.207.681-.577.95-.851l.025-.031.008-.006c1.407-1.442 2.233-2.47 3.272-4.07z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconElectrocardiogramLight;
