/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBuyDataRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.734 17.04h-6.258c-.837 0-1.58-.284-2.148-.816-.591-.557-.975-1.361-1.137-2.39-.13-.82-1.451-8.492-1.636-9.526-.12-.672-.821-1.176-1.633-1.176h-1.35a.562.562 0 01-.56-.56.56.56 0 01.56-.56h1.352c1.367 0 2.519.882 2.737 2.1.049.273.222 1.267.438 2.521h3.248v-1.19c0-.021 0-.042.003-.062.033-.448.452-.798 1.25-1.036.652-.197 1.515-.306 2.422-.306.908 0 1.77.11 2.423.306.753.225 1.169.55 1.241.961a.426.426 0 01.017.137v1.193h3.4a.562.562 0 01.544.697l-.434 1.736-.002.005v.001l-.32 1.284-.335 1.34-.003.015c-.25 1.002-.463 1.858-.547 2.177-.267 1.025-.653 1.778-1.182 2.308-.558.557-1.26.84-2.09.84zm.97-9.284v5.502c0 .476-.421.846-1.253 1.095-.653.199-1.515.305-2.426.305-.91 0-1.77-.109-2.425-.305-.832-.25-1.253-.62-1.253-1.095V7.753H7.293c.428 2.482.926 5.384 1.01 5.908.123.776.389 1.361.798 1.748.358.339.823.513 1.378.513h6.255c.683 0 1.653-.239 2.188-2.311.076-.295.268-1.062.497-1.98l.385-1.541.14-.564.002-.007.44-1.763h-2.683zm-.841 2.863V8.995c-.124.053-.26.102-.41.147h-.002l-5.26-.145-.003 1.622c.033.042.207.21.826.37.555.143 1.269.221 2.011.221.742 0 1.457-.078 2.011-.221.62-.16.793-.33.827-.37zm-5.67-4.229l-.005 1.624c.033.042.207.21.826.37.555.143 1.269.221 2.011.221.742 0 1.457-.078 2.011-.221.62-.16.793-.33.827-.37V6.389a4.241 4.241 0 01-.412.149c-.653.196-1.515.305-2.423.305-.908 0-1.77-.11-2.423-.305a3.866 3.866 0 01-.412-.148zm5.639-.95c-.076-.068-.283-.205-.796-.34-.554-.142-1.269-.22-2.01-.22-.743 0-1.457.078-2.012.22-.513.135-.72.273-.795.34.056.05.186.14.46.238.094.033.205.067.335.1.555.144 1.269.222 2.011.222.65 0 1.278-.06 1.796-.17a5.3 5.3 0 00.215-.051c.514-.133.721-.273.796-.34zm-5.644 7.79c.036.042.213.21.826.37.555.142 1.269.22 2.011.22.742 0 1.457-.078 2.011-.22.614-.157.79-.325.827-.37v-1.628a4.215 4.215 0 01-.412.149c-.653.196-1.515.305-2.423.305-.908 0-1.77-.11-2.426-.305a4.215 4.215 0 01-.412-.149l-.002 1.628zm-.712 8.445c-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422.499 0 .902.143 1.193.423.306.294.46.706.46 1.23 0 .523-.154.935-.46 1.23-.288.28-.691.422-1.193.422zm-.532-1.653c0 .41.123.533.532.533.41 0 .532-.124.532-.533 0-.409-.123-.532-.532-.532-.409 0-.532.123-.532.532zm5.994 1.653c-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422.499 0 .902.143 1.194.423.302.294.46.706.46 1.23 0 .523-.155.935-.46 1.23-.289.28-.692.422-1.194.422zm-.532-1.653c0 .41.123.533.532.533.41 0 .533-.124.533-.533 0-.409-.124-.532-.533-.532-.409 0-.532.123-.532.532z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBuyDataRegular;
