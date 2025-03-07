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

const IconTrainFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.5 9.638V22h-1.398a.1.1 0 01-.014-.023l-2.834-2.89A1.804 1.804 0 0017 17.27v-.465a1.067 1.067 0 01-.713.284 1.08 1.08 0 01-1.07-1.09c0-.6.48-1.089 1.07-1.089.274 0 .526.107.713.284V13.46H7v1.736c.192-.172.439-.284.713-.284.59 0 1.07.489 1.07 1.09 0 .6-.48 1.089-1.07 1.089-.274 0-.526-.107-.713-.284v.465c0 .987.782 1.792 1.746 1.815l-2.843 2.89L5.89 22H4.5V9.638C4.5 5.426 7.864 2 12 2s7.5 3.426 7.5 7.638zm-5.759 9.453L16.593 22H7.398l2.86-2.909h3.483zM17 8.911c0-1-.8-1.82-1.787-1.82H8.787C7.804 7.092 7 7.907 7 8.912v3.454h10V8.912z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.332 16.98a.757.757 0 01-.177-.492V5.273c0-.384.269-.697.602-.697h10.337c.117-.004 3.392-.094 7.204 4.311 1.135 1.312 1.65 2.668 1.53 4.027-.171 1.936-1.583 3.276-2.407 3.903a1.87 1.87 0 01-1.132.393h-.017c-1.009-.01-4.54-.028-15.515-.028a.568.568 0 01-.425-.203zm17.708-6.306a6.332 6.332 0 00-.591-.801c-2.205-2.544-4.167-3.431-5.301-3.742v4.543h5.892zm-1.28 4.98a6.38 6.38 0 00.919-.864H3.359v1.001c10.508 0 13.932.019 14.922.028h.008a.755.755 0 00.47-.164zM5.363 10.599V7.376H3.36v3.222h2.003zm1.39 0h2.155V7.376H6.753v3.222zm5.573 0V7.376H10.17v3.222h2.157zm9.519 8.13c0-.387-.27-.697-.603-.697H2.757c-.333 0-.602.31-.602.697 0 .386.269.697.602.697h18.485c.334 0 .603-.31.603-.697z"
                />
            </svg>
        );
    }
};

export default IconTrainFilled;
