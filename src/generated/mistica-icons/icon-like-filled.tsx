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

const IconLikeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.107 5.904l.64-2.193c.191-.72.868-1.211 1.68-1.211.942 0 1.787.803 1.787 1.794l-.178 1.253-.89 3.046h5.711a2.15 2.15 0 011.394 3.78 2.151 2.151 0 01-1.188 3.313c.096.248.155.515.155.794 0 .991-.672 1.827-1.581 2.074.096.248.155.514.155.794A2.15 2.15 0 0116.65 21.5h-6.077c-.854 0-1.713-.349-2.29-.927-.31-.312-.799-.505-1.279-.505H2v-10.4h4.999c.192 0 .37-.074.507-.211l3.6-3.552z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.841 10.942c0 .672-.168 1.16-.38 1.504.212.334.38.787.383 1.387 0 .658-.26 1.263-.748 1.748.126.294.221.678.221 1.168 0 .787-.411 1.468-1.148 1.93.07.347.064.74-.011 1.196-.009.036-.017.073-.031.11-.563 1.526-1.465 1.856-5.076 1.856-2.24 0-3.2-.28-3.968-.503l-.015-.004-.21-.059c-.316-.095-.569-.165-.731-.165l-2.807-.036a.475.475 0 01-.13-.024 1.126 1.126 0 00-.06-.015c-.252.21-.574.341-.927.341H3.612a1.457 1.457 0 01-1.457-1.456v-7.594c0-.807.653-1.46 1.457-1.46h2.585c.333 0 .639.118.885.309.55-.283 1.768-1.042 1.885-2.275.11-1.123.096-2.527.07-3.639l-.001-.02-.001-.022a3.032 3.032 0 00-.018-.241l-.002-.016-.02-.23c-.067-.95.275-1.53.569-1.849.443-.476 1.11-.728 1.927-.728 1.566 0 2.499.95 2.499 2.535l-.003.098-.006.132c0 1.26-.002 2.787-.005 3.613l2.07.062h3.412c1.204.067 2.383.818 2.383 2.347zm-1.59 1.958a.584.584 0 01-.191-.45c0-.175.073-.34.202-.455.235-.21.358-.574.358-1.05 0-.95-.832-1.098-1.19-1.118h-3.395l-2.687-.081a.614.614 0 01-.596-.616s.008-2.398.008-4.222v-.033l.006-.12c0-.975-.379-1.365-1.27-1.365-.324 0-.767.06-1.027.336-.19.205-.272.516-.244.925l.017.19.001.015c.008.079.016.156.021.249.003.022.006.044.006.067.025 1.157.042 2.641-.076 3.851-.173 1.818-1.781 2.857-2.54 3.25v.014a.235.235 0 01.005.042v7.52l2.476.034c.328 0 .653.093 1.062.21l.216.062.01.003c.73.212 1.558.454 3.628.454 3.44 0 3.653-.334 3.902-.998.084-.546.003-.79-.08-.94a.609.609 0 01-.04-.5.604.604 0 01.342-.36c.414-.174.91-.5.91-1.062 0-.395-.087-.706-.255-.902a.617.617 0 01.118-.908c.44-.3.664-.672.664-1.104 0-.4-.12-.717-.362-.938zM4.882 14.472c.449 0 .76-.314.76-.762 0-.451-.311-.762-.76-.762-.448 0-.762.313-.762.762 0 .448.314.761.762.761z"
                />
            </svg>
        );
    }
};

export default IconLikeFilled;
