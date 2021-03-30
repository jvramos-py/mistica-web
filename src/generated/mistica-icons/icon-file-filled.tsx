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

const IconFileFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.51 2.025c.232 0 .448.09.616.25L21.423 7.4c.11.109.174.243.216.386.03.073.047.154.047.238V20.33c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.773h-2.3A2.427 2.427 0 012 15.132v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.673-1.384 1.41-1.384h7.414zm-1.244 7.807H4.42a1.21 1.21 0 00-1.207 1.21v4.092c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.092c0-.667-.54-1.21-1.207-1.21zm-5.244 1.361l1.373 3.804h-.93l-.317-.955H7.913l-.294.955h-.83l1.278-3.804h.955zm2.695 0v3.804h-.868v-3.804h.868zm-3.193.95h-.011l-.395 1.269h.823l-.417-1.27zm7.325-8.446v1.765c0 .658.215 1.213.622 1.608.414.4.997.61 1.691.61h1.802l-4.115-3.983z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileFilled;
