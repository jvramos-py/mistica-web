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

const IconLongDistanceCallFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.68 16.108c-.471-.333-1.087-.504-1.835-.504-.163 0-.328.009-.49.028-.043-.033-.225-.224-.348-1.028-.12-.773-.134-1.778-.134-2.465v-.09c0-.688.014-1.691.134-2.464.126-.804.305-.995.347-1.028.163.02.325.028.49.028.746 0 1.365-.171 1.835-.505.471-.333.79-.829.939-1.459.081-.322.12-.655.117-.989 0-1.834-.988-2.826-2.857-2.868-.33-.008-.714.056-.84.076l-.014.002-.025.003c-1.087.196-2.065 1.19-2.757 2.799-.714 1.655-1.092 3.87-1.092 6.403v.09c0 2.532.375 4.745 1.09 6.406.692 1.607 1.67 2.602 2.756 2.8l.025.006.014.003c.12.02.468.076.784.076h.056c1.872-.042 2.858-1.037 2.858-2.869a3.93 3.93 0 00-.118-.988c-.146-.636-.462-1.126-.936-1.463zm12.338-7.86a9.797 9.797 0 00-9.036-5.988h-.022a.53.53 0 00-.63.52v18.6a.532.532 0 00.733.493c5.42-.045 9.776-4.476 9.731-9.893a9.884 9.884 0 00-.776-3.731zm-1.767 8.684a11.21 11.21 0 00-2.474-1.03 17.97 17.97 0 00.395-3.284h3.535a8.65 8.65 0 01-1.456 4.314zm-6.86-7.83a17.8 17.8 0 003.4-.391c.185.938.292 1.888.317 2.843h-3.717V9.103zm0-1.064V3.37c.361.081.717.266 1.064.557.502.42.955 1.034 1.35 1.821.306.616.552 1.263.737 1.927a16.568 16.568 0 01-3.151.364zm1.064 12.169c-.347.29-.703.476-1.064.557v-4.44a16.6 16.6 0 013.09.35 10.76 10.76 0 01-.676 1.715c-.395.787-.848 1.397-1.35 1.818zm-1.064-4.947v-2.64h3.717a16.62 16.62 0 01-.361 3.023 17.552 17.552 0 00-3.356-.384zm4.784-3.706a17.793 17.793 0 00-.35-3.107c.947-.28 1.804-.641 2.535-1.08a8.675 8.675 0 011.353 4.187h-3.538zm.989-5.67c.199.2.387.404.563.62-.613.355-1.345.663-2.154.907a11.983 11.983 0 00-.815-2.14 7.935 7.935 0 00-.95-1.482 8.718 8.718 0 013.356 2.095zm-3.359 14.463c.345-.415.664-.91.95-1.482.308-.622.56-1.27.756-1.933.776.23 1.485.518 2.084.852a8.45 8.45 0 01-.434.465 8.63 8.63 0 01-3.356 2.098z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLongDistanceCallFilled;
