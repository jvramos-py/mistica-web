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

const IconArrowDownRightLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.453 3.454a.727.727 0 100-1.454.727.727 0 000 1.454zM8.782 22H22V8.719c0-.735-.42-1.355-1.09-1.638a1.854 1.854 0 00-2.016.411l-3.078 3.08-6.646-6.65a.361.361 0 00-.515 0 .362.362 0 000 .515l6.95 6.97.064.024c.057.026.1.045.144.047.125.007.258-.127.774-.642L19.4 8.004a1.114 1.114 0 011.226-.252c.391.168.635.531.635.967v12.55H8.786c-.435 0-.79-.244-.958-.655a1.18 1.18 0 01.252-1.274l3.321-3.324.024-.063a.416.416 0 00.03-.094c.026-.167-.174-.366-1.471-1.664L2.623 6.829a.361.361 0 00-.515 0 .362.362 0 000 .516l8.463 8.468-3.014 3.015a1.885 1.885 0 00-.403 2.066C7.437 21.58 8.056 22 8.782 22z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.821 20.474a.638.638 0 00.47-.187.67.67 0 00.183-.538v-12.6c.003-.383-.188-.686-.518-.829-.36-.154-.827-.081-1.09.171L16.087 9.27a.143.143 0 01-.11.042.191.191 0 01-.134-.06l-5.168-5.237-.003-.003c-.274-.272-.848-.84-1.593-.157L4.023 8.92c-.334.33-.496.658-.502.997-.003.341.16.68.485 1.005l5.067 5.096c.04.036.059.084.062.134a.155.155 0 01-.042.11l-2.572 2.57c-.266.29-.341.788-.176 1.16.134.3.4.474.728.474l12.678.005a.609.609 0 00.07.003zm-.056-.56l-12.684-.006c-.075 0-.165-.016-.22-.143-.076-.168-.04-.422.072-.549l2.56-2.56a.711.711 0 00.205-.523.756.756 0 00-.224-.513L4.4 10.527c-.219-.218-.322-.414-.32-.602.003-.185.115-.39.337-.61l5.044-5.05c.275-.25.41-.259.816.145l5.168 5.238c.137.14.319.218.512.224a.707.707 0 00.524-.204l2.77-2.77c.093-.085.311-.132.48-.06.123.054.179.152.179.314v12.616l.002.028c.006.045-.002.084-.02.101-.016.017-.052.025-.1.02-.008-.003-.02-.003-.028-.003z"
                />
            </svg>
        );
    }
};

export default IconArrowDownRightLight;
