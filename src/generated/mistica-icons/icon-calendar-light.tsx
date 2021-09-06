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

const IconCalendarLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.428 3.797a2.397 2.397 0 012.395 2.395l.001 1.67.002.027-.004.027v9.791a2.482 2.482 0 01-2.478 2.48H4.55a2.397 2.397 0 01-2.395-2.396v-11.6A2.397 2.397 0 014.55 3.797h14.877zm1.842 4.369H2.707l.001 9.625c0 1.017.826 1.843 1.843 1.843h14.793a1.93 1.93 0 001.927-1.927V8.166zm-9.56 2.7c.662 0 1.152.147 1.477.435.3.266.451.642.451 1.129 0 .244-.034.468-.104.672a2.82 2.82 0 01-.347.664c-.162.238-.398.538-.703.902l-1.426 1.678h2.684v.574h-3.474a.675.675 0 01-.033-.202c0-.12.022-.232.07-.333.047-.1.14-.235.277-.403l1.364-1.667c.348-.428.591-.776.728-1.048.14-.268.208-.537.208-.803 0-.359-.107-.617-.322-.768-.213-.154-.533-.23-.956-.23-.417 0-.834.045-1.249.132v-.566c.44-.11.89-.165 1.356-.165zm7.718-6.517H4.551a1.845 1.845 0 00-1.843 1.843v1.42H21.27l.001-1.42a1.845 1.845 0 00-1.843-1.843zM7.593 5.439c.342 0 .544.204.544.546a.55.55 0 01-.14.395.574.574 0 01-.407.148.54.54 0 01-.4-.148.548.548 0 01-.14-.395c0-.342.201-.547.543-.547zm8.754 0c.16 0 .294.047.39.137a.55.55 0 01.153.409c0 .165-.047.3-.14.395a.574.574 0 01-.406.148.54.54 0 01-.4-.148.548.548 0 01-.14-.395c0-.342.201-.547.543-.547z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCalendarLight;
