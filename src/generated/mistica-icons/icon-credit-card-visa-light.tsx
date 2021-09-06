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

const IconCreditCardVisaLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.708 18.184a.438.438 0 00.441-.43v-6.159H2.845v6.156c0 .24.197.43.441.43h17.422v.003zM3.283 5.816a.438.438 0 00-.44.43v1.437h18.303V6.246a.433.433 0 00-.44-.43H3.282zm-.438 4.96h18.307V8.502H2.845v2.276zM22 8.095v3.093c0 .031-.011.056-.017.082v6.482c0 .69-.572 1.249-1.272 1.249H3.283a1.26 1.26 0 01-1.272-1.249v-6.513C2.01 11.22 2 11.204 2 11.188V8.093c0-.017.009-.034.011-.051V6.249c0-.69.572-1.249 1.272-1.249h17.425c.703 0 1.272.56 1.272 1.249v1.763c.009.025.02.053.02.082zm-4.118 8.167c.501-.009 1.343-.203 1.343-1.387 0-1.187-.848-1.386-1.354-1.398l-.162-.002c-.148.002-.598.047-.928.34.14.29.225.638.225 1.06 0 .416-.083.76-.217 1.046.333.29.789.34.937.344l.156-.003zm-3.056 0c.5-.009 1.343-.203 1.343-1.387 0-1.187-.848-1.386-1.355-1.398l-.162-.002c-.495.005-1.326.19-1.326 1.386 0 1.201.842 1.392 1.343 1.4h.157zm3.062-3.603c1.004.025 2.171.619 2.171 2.213 0 1.598-1.164 2.186-2.163 2.205h-.182c-.287-.005-.922-.073-1.44-.495-.412.338-.942.487-1.434.495h-.182c-.999-.017-2.166-.604-2.166-2.216 0-1.614 1.161-2.196 2.155-2.205l.185.003c.489.011 1.015.163 1.428.495.515-.427 1.153-.495 1.443-.498l.185.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCreditCardVisaLight;
