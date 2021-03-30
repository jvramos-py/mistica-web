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

const IconShieldAntivirusLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.631 14.378c.392-2.294.44-7.364.445-8.913-1.806.148-2.888-.569-3.93-1.266-1.01-.678-2.058-1.375-3.865-1.378h-.006c-1.81 0-2.854.7-3.868 1.378-1.05.7-2.132 1.414-3.93 1.272.006 1.557.053 6.616.454 8.91.496 2.882 6.263 5.896 7.344 6.44 1.087-.544 6.86-3.56 7.356-6.443zm1.26-9.375c0 .274.017 6.734-.456 9.518-.616 3.583-7.68 6.983-7.98 7.126a.398.398 0 01-.348 0c-.302-.143-7.358-3.546-7.975-7.126-.484-2.784-.467-9.244-.465-9.518a.409.409 0 01.496-.398c1.754.269 2.703-.359 3.799-1.09C9.023 2.804 10.225 2 12.275 2h.006c2.05.003 3.255.807 4.314 1.515 1.095.731 2.036 1.367 3.792 1.09a.433.433 0 01.504.398zm-8.613 10.003c1.538 0 1.98-.594 1.98-2.65 0-1.289-.193-1.983-.638-2.322-.292-.219-.731-.328-1.342-.328-.616 0-1.059.11-1.35.333-.443.342-.63 1.037-.63 2.317 0 2.056.442 2.65 1.98 2.65zm.003-6.807c-1.37 0-1.37.339-1.37.734 0 .073.006.131.014.185.37-.152.812-.233 1.353-.233.543 0 .989.081 1.359.233.008-.054.014-.115.014-.188 0-.392 0-.731-1.37-.731zm3.515 3.38a.41.41 0 01.406.41v.759a.407.407 0 11-.812 0v-.35h-.316c-.003.664-.065 1.25-.21 1.745l.806.246c.18.056.297.227.286.415l-.059 1.143a.407.407 0 01-.406.39h-.022a.414.414 0 01-.387-.432l.045-.824-.605-.185c-.412.589-1.104.928-2.244.928-1.143 0-1.837-.342-2.246-.933l-.622.19.042.824a.411.411 0 01-.384.431h-.022a.407.407 0 01-.407-.39l-.058-1.142a.41.41 0 01.288-.415l.826-.252c-.145-.496-.204-1.075-.207-1.74h-.316v.35a.407.407 0 11-.813 0v-.758c0-.227.182-.41.406-.41h.751c.037-.515.137-1.016.342-1.445l-.986-.302a.41.41 0 01-.289-.415l.056-1.142a.406.406 0 11.813.042l-.042.82.74.227a1.901 1.901 0 01-.051-.437c0-.975.577-1.336 1.185-1.473l-.07-.073a.41.41 0 010-.58.402.402 0 01.568-.005l.006.005.372.373c.05.056.087.123.101.196h.009a.4.4 0 01.1-.196l.37-.373a.4.4 0 01.569-.005c.003.002.005.002.005.005.16.16.16.42 0 .58l-.067.067c.616.129 1.216.488 1.216 1.48 0 .156-.02.293-.05.425l.711-.219-.042-.82a.411.411 0 01.384-.432.401.401 0 01.426.376v.01l.061 1.144a.408.408 0 01-.286.414l-.969.297c.208.429.306.933.345 1.448.003.009.753.009.753.009zm-3.549-.848a.41.41 0 01.406.41v2.842a.407.407 0 11-.812 0v-2.84a.41.41 0 01.406-.412z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShieldAntivirusLight;
