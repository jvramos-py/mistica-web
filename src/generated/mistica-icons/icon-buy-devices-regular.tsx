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

const IconBuyDevicesRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.92 2h6.16c1.887 0 3.42 1.605 3.42 3.576v12.853c0 1.97-1.533 3.571-3.42 3.571H8.92c-1.887 0-3.42-1.6-3.42-3.571V5.57C5.5 3.601 7.033 2 8.92 2zM6.868 6.646v10.717h10.266V6.646H6.867zM8.92 3.43c-1.016 0-1.857.773-2.024 1.788h10.206c-.167-1.015-1.008-1.788-2.024-1.788H8.921zm0 17.147h6.158c1.016 0 1.857-.773 2.024-1.788H6.897c.167 1.015 1.008 1.788 2.024 1.788zm5.633-10.183l-.719-1.65a.503.503 0 00-.679-.266.543.543 0 00-.254.709l.526 1.207h-2.856l.526-1.207a.543.543 0 00-.254-.709.503.503 0 00-.68.265l-.718 1.651H7.594l.998 4.595c.136.522.666.942 1.183.942h4.45c.513 0 1.043-.425 1.187-.969l.994-4.568h-1.852zm-.329 4.467h-4.45c-.057-.004-.175-.1-.188-.132l-.71-3.26h6.242l-.701 3.237c-.018.06-.136.155-.193.155z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.6 10.906c0-.404.229-.591.588-.591.358 0 .59.187.588.59 0 .197-.053.34-.149.438-.103.106-.255.156-.44.156-.184 0-.336-.05-.44-.156-.095-.098-.148-.244-.148-.437z"
                />
                <path
                    fill={fillColor}
                    d="M17.888 4.004V6.79h3.38a.562.562 0 01.544.697c-.099.392-.254 1.013-.434 1.737l-.001.003v.002l-.321 1.284-.346 1.386v.001c-.247.99-.456 1.832-.54 2.145-.265 1.025-.652 1.779-1.181 2.308-.558.557-1.26.84-2.09.84h-6.258c-.837 0-1.58-.283-2.148-.815-.591-.557-.975-1.361-1.137-2.39-.13-.82-1.451-8.492-1.636-9.526-.12-.672-.821-1.176-1.633-1.176h-1.35a.562.562 0 01-.56-.56.56.56 0 01.56-.56h1.352c1.367 0 2.519.882 2.737 2.1.049.273.222 1.267.438 2.521h3.226V4.004c0-1.208.63-1.843 1.823-1.843h3.751c1.21 0 1.824.619 1.824 1.843zm-5.575 9.227c-1.21 0-1.823-.62-1.823-1.844V7.91H7.458c.428 2.481.926 5.383 1.01 5.907.123.776.389 1.361.798 1.748.358.339.823.513 1.378.513H16.9c.683 0 1.653-.239 2.188-2.311.08-.31.288-1.143.533-2.125v-.004l.349-1.395.116-.466c.173-.695.336-1.349.467-1.865h-2.664v3.474c-.003 1.224-.617 1.846-1.824 1.846h-3.75zm-.983-9.227v7.38c0 .76.238 1.003.983 1.003h3.751c.742 0 .983-.243.983-1.002V4.004c0-.76-.238-1.003-.983-1.003h-3.75c-.726 0-.984.263-.984 1.003zM9.448 21.407c.291.28.692.423 1.193.423.502 0 .905-.143 1.194-.423.305-.294.459-.706.459-1.23 0-.523-.154-.935-.46-1.23-.29-.28-.694-.422-1.193-.422-.498 0-.902.143-1.193.423-.305.294-.46.706-.46 1.23 0 .523.155.935.46 1.23zm1.193-1.762c.41 0 .533.123.533.532 0 .41-.124.533-.533.533-.409 0-.532-.124-.532-.533 0-.409.123-.532.532-.532zm4.269 1.762c.291.28.692.423 1.193.423.502 0 .905-.143 1.194-.423.305-.294.46-.706.46-1.23 0-.523-.158-.935-.46-1.23-.292-.28-.695-.422-1.194-.422-.498 0-.902.143-1.193.423-.305.294-.46.706-.46 1.23 0 .523.155.935.46 1.23zm1.193-1.762c.41 0 .533.123.533.532 0 .41-.124.533-.533.533-.409 0-.532-.124-.532-.533 0-.409.123-.532.532-.532z"
                />
            </svg>
        );
    }
};

export default IconBuyDevicesRegular;
