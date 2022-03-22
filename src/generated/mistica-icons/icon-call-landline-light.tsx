/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCallLandlineLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.918 21.962a.37.37 0 00.354.29.37.37 0 00.09-.017c2.605-.63 5.26-2.29 7.666-4.797 3.176-3.298 4.988-6.856 4.972-9.746-.008-1.446-.485-2.685-1.368-3.596l-1.442-1.47c-.781-.79-1.995-.84-2.703-.102l-2.158 2.244a1.82 1.82 0 00-.5 1.285c0 .55.231 1.097.626 1.496l1.507 1.537c.33.332.492.773.492 1.32.008 1.222-.802 2.764-2.202 4.226-2.093 2.176-4.304 2.923-5.383 1.827l-1.507-1.537c-.781-.79-1.995-.84-2.703-.101L2.5 17.064a1.821 1.821 0 00-.501 1.285c0 .55.232 1.097.627 1.496l1.441 1.47c.237.232.493.45.782.63a.35.35 0 00.501-.117.374.374 0 00-.114-.517 4.041 4.041 0 01-.652-.53l-1.44-1.461a1.39 1.39 0 01-.412-.97c0-.299.098-.56.289-.757l2.15-2.251c.427-.446 1.18-.391 1.673.109l1.507 1.537c1.384 1.412 4.022.656 6.413-1.835 1.539-1.61 2.422-3.344 2.414-4.764 0-.74-.248-1.378-.708-1.845l-1.507-1.537a1.371 1.371 0 01-.411-.962c0-.298.098-.559.289-.756L17 3.045c.427-.445 1.18-.39 1.673.11l1.442 1.47c.765.781 1.152 1.819 1.16 3.08.008 2.692-1.722 6.053-4.764 9.216-2.316 2.407-4.849 3.987-7.32 4.592a.37.37 0 00-.273.45z"
                    fill={fillColor}
                />
                <path
                    d="M7.098 23c.4 0 .724-.335.724-.748a.736.736 0 00-.724-.747c-.4 0-.725.334-.725.747s.324.748.725.748z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.898 21.2c1.07.427 2.054.64 2.91.64.79 0 1.468-.182 1.998-.547l.014-.01.022-.018a6.34 6.34 0 00.816-.68c1.578-1.652 1.575-3.289-.003-4.87a4.87 4.87 0 00-.975-.768c-1.677-1.04-3.098-.187-3.997.71a5.03 5.03 0 00-.46.518c-.356.3-1.099-.095-1.665-.482-.928-.636-2.012-1.687-2.75-2.424l-.086-.087c-.735-.735-1.789-1.822-2.425-2.75-.387-.563-.782-1.309-.482-1.665.182-.143.356-.294.518-.46.9-.897 1.752-2.32.71-3.997a4.791 4.791 0 00-.768-.975c-1.581-1.578-3.218-1.58-4.87-.003-.192.185-.422.46-.677.816l-.017.022a.061.061 0 00-.011.014c-.763 1.105-.732 2.848.092 4.908.883 2.217 2.61 4.647 4.992 7.03v.003l.084.084c2.383 2.38 4.813 4.106 7.03 4.992zm.207-.52c-2.147-.855-4.51-2.54-6.839-4.866l-.036-.042-.048-.048c-2.33-2.326-4.01-4.692-4.869-6.84-.384-.958-.585-1.835-.6-2.606-.013-.723.138-1.317.446-1.769a5.56 5.56 0 01.636-.774c.738-.703 1.427-1.042 2.103-1.03.653.01 1.3.347 1.976 1.022.263.258.493.547.68.864l.006.008c.334.538.457 1.08.368 1.612-.096.563-.432 1.135-.995 1.698a4.448 4.448 0 01-.488.43.09.09 0 00-.026.022.333.333 0 01-.008.008c-.967 1.051.827 3.123 2.912 5.208l.087.087c2.086 2.085 4.157 3.88 5.208 2.912a.337.337 0 00.031-.034 5.04 5.04 0 01.429-.487c.566-.566 1.135-.9 1.698-.995.533-.09 1.077.033 1.612.367l.009.005c.316.191.605.418.863.682.675.675 1.012 1.323 1.023 1.976.011.68-.325 1.37-1.029 2.108a5.536 5.536 0 01-.737.61l-.036.026c-.452.31-1.046.46-1.769.445-.77-.016-1.648-.215-2.607-.6z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCallLandlineLight;
