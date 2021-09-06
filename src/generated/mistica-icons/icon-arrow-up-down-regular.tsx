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

const IconArrowUpDownRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.154 21.742a.76.76 0 01-.566-.255l-4.157-4.213a.793.793 0 01-.134-.874.758.758 0 01.68-.436l1.824-.017-.003-2.897c0-.663.538-1.201 1.202-1.201h2.32c.663 0 1.201.538 1.201 1.201l.003 2.905 1.826.014c.294 0 .555.168.684.437a.789.789 0 01-.138.872l-4.176 4.21a.752.752 0 01-.566.254zm-3.339-4.66l3.339 3.383 3.359-3.384-1.35-.011h-.012a.769.769 0 01-.748-.779l-.002-3.24a.081.081 0 00-.082-.082H14a.081.081 0 00-.081.081l.005 3.241a.768.768 0 01-.745.779h-.011l-1.353.011zm-2.04-5.172H7.46a1.201 1.201 0 01-1.201-1.201l-.003-2.902-1.824-.014a.754.754 0 01-.683-.437.788.788 0 01.1-.832c.012-.014.023-.028.037-.04L8.06 2.278a.75.75 0 011.129 0l4.154 4.208a.793.793 0 01.134.874.758.758 0 01-.68.437l-1.821.014.003 2.899c0 .66-.538 1.201-1.202 1.201zm-2.4-4.442l.003 3.238c0 .045.037.081.081.081h2.317a.081.081 0 00.081-.081l-.003-3.238a.768.768 0 01.745-.779h.012l1.35-.011-3.336-3.381-3.353 3.38 1.347.012h.011c.42.011.75.361.745.779z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowUpDownRegular;
