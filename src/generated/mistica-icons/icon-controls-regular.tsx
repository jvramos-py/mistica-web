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
    size?: string | number;
};

const IconControlsRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.09 4.842a1.735 1.735 0 00-.233 1.333c.107.46.39.852.796 1.104a1.8 1.8 0 001.358.23 1.8 1.8 0 001.129-.782c.255-.398.339-.871.233-1.333a1.757 1.757 0 00-.796-1.104 1.823 1.823 0 00-1.359-.23c-.465.101-.87.381-1.128.782zM2.627 6.374a.597.597 0 01-.602-.591c0-.325.27-.588.602-.588h1.05a2.89 2.89 0 01.396-.984 2.996 2.996 0 011.88-1.3 3.022 3.022 0 012.265.382 2.912 2.912 0 011.328 1.84c.006.02.003.042.006.062h11.504c.33 0 .602.266.602.59a.597.597 0 01-.602.592H9.555c-.07.35-.205.68-.398.98a2.967 2.967 0 01-1.88 1.3 3.022 3.022 0 01-2.266-.381 2.938 2.938 0 01-1.328-1.84c-.005-.02-.005-.04-.008-.062H2.627zm14.381 7.49c.995 0 1.804-.793 1.804-1.767 0-.975-.81-1.768-1.804-1.768s-1.804.793-1.804 1.768c0 .972.81 1.767 1.804 1.767zm4.026-2.358c.333 0 .602.263.602.59a.595.595 0 01-.602.589h-1.082c-.277 1.342-1.493 2.356-2.944 2.356-1.45 0-2.663-1.014-2.944-2.356H2.602A.597.597 0 012 12.094c0-.325.269-.591.602-.591h11.46c.28-1.342 1.493-2.356 2.944-2.356 1.45 0 2.666 1.014 2.944 2.356h1.084v.003zM9.305 20.158c.995 0 1.804-.792 1.804-1.767 0-.975-.81-1.768-1.804-1.768s-1.804.793-1.804 1.768.81 1.767 1.804 1.767zm11.726-2.356c.333 0 .602.264.602.592a.597.597 0 01-.602.59h-8.782c-.28 1.342-1.493 2.356-2.944 2.356-1.45 0-2.664-1.014-2.944-2.355H2.602A.597.597 0 012 18.394c0-.325.269-.589.602-.589h3.76c.28-1.341 1.492-2.355 2.943-2.355s2.664 1.014 2.944 2.355l8.782-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconControlsRegular;
