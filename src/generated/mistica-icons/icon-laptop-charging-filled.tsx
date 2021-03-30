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

const IconLaptopChargingFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.763 12.17l.98-.128-.002 1.697c0 .11.09.2.199.197h.006a.204.204 0 00.187-.118l1.305-2.89a.185.185 0 00-.025-.197.213.213 0 00-.19-.076l-1.079.143.02-1.67a.2.2 0 00-.165-.195.207.207 0 00-.23.117l-1.224 2.85a.186.186 0 00.028.192c.045.062.115.084.19.079zm-5.442 4.883c-1.04 0-1.84-.272-2.375-.807-.519-.515-.782-1.26-.782-2.22v-6.02c0-.958.263-1.7.782-2.21.535-.524 1.336-.79 2.375-.79L18.663 5c1.042 0 1.84.266 2.375.793.518.51.781 1.252.781 2.21v6.017c0 .958-.263 1.705-.778 2.22-.538.536-1.34.808-2.378.808 0-.003-13.342.005-13.342.005zm4.512-7.899c0-.31.073-.53.222-.675.151-.146.38-.219.708-.219h2.463c.33 0 .563.07.711.213.149.14.219.362.219.678v4.729c0 .319-.073.543-.219.683-.148.14-.38.207-.709.207h-2.462c-.33 0-.563-.067-.708-.207-.149-.14-.222-.364-.222-.683-.003 0-.003-4.726-.003-4.726zm1.535-1.784c.028-.028.11-.031.143-.031h.961c.073 0 .126.011.146.03.017.015.03.057.03.138v.168h-1.31v-.168c0-.042.002-.112.03-.137zm-.607 7.989h2.462c.501 0 .874-.124 1.14-.379.272-.257.403-.619.403-1.103V9.154c0-.479-.131-.837-.398-1.095-.26-.252-.627-.378-1.109-.384v-.17c0-.233-.07-.421-.21-.555-.14-.135-.336-.202-.58-.202h-.96c-.244 0-.44.067-.583.204a.752.752 0 00-.207.552v.171c-.48.006-.844.132-1.107.39-.266.26-.398.616-.398 1.09v4.725c0 .484.132.845.401 1.103.272.252.647.376 1.146.376zm10.462 2.406a.6.6 0 01.613.59.601.601 0 01-.613.589H2.766a.602.602 0 01-.616-.588c0-.325.275-.591.613-.591h18.46z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLaptopChargingFilled;
