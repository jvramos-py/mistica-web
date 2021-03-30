/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: number;
};

const IconTramTrainLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.285 3.6a.408.408 0 110 .817h-6.273V6.28a.408.408 0 01-.409.409H13.09c-.005.005-.005.013-.01.019l-1.404 1.396h3.361c.191.009 4.172.237 6.01 3.94 2.04 4.105-.364 5.673-1.521 6.424l-.076.049a1.876 1.876 0 01-1.042.313h-.017l-.835-.005c-.059.933-.675 1.51-1.647 1.51-.975 0-1.594-.582-1.648-1.521l-3.02-.006c-.05.942-.67 1.527-1.647 1.527-.98 0-1.6-.585-1.65-1.53h-.86c-.05.945-.67 1.53-1.65 1.53-.981 0-1.6-.588-1.65-1.532H2.561a.41.41 0 01-.41-.408v-2.723c-.002-.01 0-.013 0-.016v-1.832c-.002 0-.002-.003-.002-.006V8.514a.4.4 0 01.12-.289.406.406 0 01.289-.12h5.488l1.42-1.415H9.24a.41.41 0 01-.41-.409V4.417H2.56a.408.408 0 110-.817zm-5.373 14.248c-.564 0-.838.275-.838.839 0 .56.272.836.838.836.563 0 .837-.273.837-.836 0-.564-.274-.839-.837-.839zm-6.318 0c-.566 0-.84.275-.84.839 0 .56.274.836.84.836.563 0 .84-.273.838-.836 0-.564-.275-.839-.838-.839zm-4.16 0c-.564 0-.838.275-.838.839 0 .56.274.836.837.836.566 0 .841-.273.841-.836 0-.564-.275-.839-.84-.839zm15.341-1.772H2.976v1.914h.922c.23-.604.776-.958 1.541-.958.765 0 1.314.356 1.541.96h1.076c.227-.606.773-.96 1.54-.96.768 0 1.317.356 1.544.963l3.23.006c.225-.61.777-.97 1.544-.97.77 0 1.323.363 1.547.978l.941.005a1.11 1.11 0 00.603-.177l.075-.049c.56-.364 1.311-.86 1.695-1.712zm-6.797-7.154l-11.007.003v.803h9.764a.41.41 0 01.409.408v3.683a.408.408 0 01-.41.409H2.972v1.029h17.807c.076 0 .14.024.202.06a3.626 3.626 0 00-.026-1.021h-6.567a.41.41 0 01-.409-.409V8.922zm1.05 0h-.231v4.557h5.959a8.248 8.248 0 00-.443-1.072c-1.625-3.275-5.256-3.482-5.292-3.485zM5.77 10.548h-2.8v2.867h2.8v-2.867zm3.154 0H6.591v2.867h2.333v-2.867zm3.401 0h-2.58v2.867h2.58v-2.867zM11.94 6.69h-1.311l-1.42 1.415h1.31l1.42-1.415zm2.258-2.273H9.653v1.456h4.544V4.417z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTramTrainLight;
