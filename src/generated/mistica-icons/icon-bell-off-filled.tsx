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

const IconBellOffFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.019 20.482c.638 0 1.1-.165 1.411-.501.325-.353.43-.838.46-1.19h-3.74c.028.35.13.837.454 1.19.311.339.773.501 1.415.501zM4.122 2.202L20.89 20.653a.593.593 0 01-.037.838l-.014.014a.623.623 0 01-.868-.05l-2.42-2.662h-2.423c-.036.544-.193 1.356-.77 1.99-.55.601-1.336.907-2.336.907-1.003 0-1.79-.306-2.34-.908-.576-.633-.73-1.445-.764-1.989H3.615a.615.615 0 01-.58-.4.59.59 0 01.191-.667c2.05-1.641 1.857-5.056 1.854-5.092l-.002-3.835c0-.356.022-.695.058-1.023l.034-.263c.011-.084.017-.17.03-.255l.015.017c.084-.54.23-1.07.434-1.577L3.204 3.001a.593.593 0 01.036-.838l.014-.014a.629.629 0 01.868.053zM20.817 17.72c.202.16.277.429.19.67a.604.604 0 01-.126.196L7.223 3.558c1.913-1.591 4.423-1.538 4.799-1.518.386-.02 3.053-.081 4.986 1.678 1.296 1.179 1.955 2.888 1.955 5.078v3.796c-.003.072-.188 3.498 1.854 5.128z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBellOffFilled;
