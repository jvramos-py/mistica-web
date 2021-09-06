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

const IconAlarmLightCrossLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.943 21.31c.2 0 .373-.128.396-.184L19.336 19a.57.57 0 00-.39-.162H5.442c-.21 0-.367.12-.39.17v2.14c.014.037.174.163.39.163h13.501zM6.646 11.849v6.124h11.097v-6.124c0-3.7-1.87-5.574-5.549-5.574-3.685 0-5.548 1.872-5.548 5.574zm12.3 6.15c.655 0 1.226.467 1.226 1.002v2.148c0 .532-.574 1.002-1.226 1.002H5.442c-.666 0-1.226-.458-1.226-1.002V19c0-.544.563-1.002 1.226-1.002h.367v-6.152c0-4.198 2.208-6.415 6.382-6.415 4.177 0 6.388 2.217 6.388 6.415v6.15h.367v.002zM12.194 4.515a.42.42 0 01-.418-.421V2.568a.419.419 0 01.836 0v1.528a.419.419 0 01-.418.419c0 .003 0 .003 0 0zM4.51 9.629c0 .23-.188.418-.418.42H2.568a.419.419 0 01-.418-.417v-.003a.42.42 0 01.418-.422h1.52a.42.42 0 01.42.422zm17.223-.393a.419.419 0 010 .837H20.21a.419.419 0 01-.418-.419v-.003c0-.23.188-.42.418-.42l1.523.005zM5.735 5.739L4.66 4.657a.424.424 0 010-.595.417.417 0 01.589-.002l.002.002 1.076 1.082a.425.425 0 01-.006.597.42.42 0 01-.586-.003zm11.803-.003a.42.42 0 01-.296-.717l1.075-1.082a.417.417 0 01.59-.003l.002.003a.424.424 0 010 .595l-1.075 1.081a.415.415 0 01-.296.123zm-2.814 7.051v-.97h-1.656a.419.419 0 01-.419-.418V9.734h-.97v1.665a.42.42 0 01-.415.42H9.608v.974h1.656a.42.42 0 01.418.418v1.665h.97v-1.665a.42.42 0 01.418-.42l1.654-.004zm.102-1.81c.393 0 .734.314.734.672v1.31c0 .358-.344.67-.734.67h-1.34v1.35c0 .4-.307.737-.669.737h-1.303c-.361 0-.669-.339-.669-.737v-1.346h-1.34c-.398 0-.734-.308-.734-.672v-1.309c0-.364.336-.672.734-.672h1.34V9.632c0-.393.313-.738.67-.738h1.302c.356 0 .669.345.669.738v1.346h1.34z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmLightCrossLight;
