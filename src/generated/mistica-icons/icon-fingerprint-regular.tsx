/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFingerprintRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.152 6.538a.41.41 0 00.338.18.41.41 0 00.233-.075.422.422 0 00.105-.58c-1.127-1.655-2.968-3.015-4.93-3.637-2.927-.925-6.1-.329-8.697 1.638A14.102 14.102 0 004.206 5.93a.42.42 0 00.03.588l.009.008a.407.407 0 00.57-.039 13.222 13.222 0 011.88-1.755c2.382-1.81 5.287-2.36 7.96-1.51 1.791.565 3.472 1.806 4.497 3.316zm-5.667 15.42a.37.37 0 01-.098-.012c-1.606-.394-3.256-1.255-4.647-2.428-3.096-2.61-5.571-8.662-2.581-12.585 1.667-2.187 4.628-3.226 7.357-2.588.01 0 4.227.66 5.394 5.558.015.048.441 1.59-.352 2.672-.468.636-1.235.963-2.277.974.018.003-.718.091-1.402-.466-.62-.5-.989-1.343-1.099-2.501-.04-.409-.208-.733-.5-.963-.386-.298-.977-.414-1.585-.31-.184.017-1.516.185-1.633 1.71-.135 1.784 1.244 4.813 4.632 5.649a.415.415 0 01-.193.805c-3.845-.953-5.406-4.455-5.25-6.522.136-1.815 1.595-2.411 2.348-2.47.803-.142 1.61.03 2.184.473.474.37.758.9.818 1.542.084.907.354 1.57.78 1.923.236.201.542.31.852.295.817-.011 1.366-.224 1.673-.642.545-.74.221-1.95.218-1.961-1.045-4.377-4.716-4.95-4.753-4.953-2.468-.574-5.085.34-6.56 2.277-2.654 3.485-.317 9.104 2.456 11.447 1.295 1.09 2.829 1.894 4.314 2.258a.418.418 0 01.304.5.412.412 0 01-.4.318zm.567-2.164a.38.38 0 00.111.016.409.409 0 00.391-.304.413.413 0 00-.283-.51c-2.37-.667-4.517-2.4-5.597-4.518-.823-1.607-.96-3.303-.392-4.913.557-1.686 2.405-2.735 4.294-2.445 1.937.301 3.444 1.96 3.43 3.77a.412.412 0 00.407.422h.001a.414.414 0 00.41-.416c.02-2.214-1.795-4.233-4.127-4.597-2.273-.358-4.514.935-5.193 2.996-.644 1.826-.49 3.749.437 5.566 1.185 2.314 3.527 4.205 6.111 4.933zm-.815-5.126c.802.66 1.803.988 2.993.988a7.724 7.724 0 001.31-.12l.007-.001a.417.417 0 10-.155-.818c-1.522.266-2.75.03-3.635-.694-1.46-1.195-1.568-3.365-1.568-3.388a.416.416 0 00-.425-.397.418.418 0 00-.395.432v.003c.008.142.134 2.57 1.868 3.995z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFingerprintRegular;
