/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBalanceRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.596 19.069c0 .308.252.56.56.56.308 0 .56-.252.56-.56V7.643a.562.562 0 00-.56-.56.562.562 0 00-.56.56v11.426zm6.896.336a.42.42 0 10.84 0V19.1c.4-.06.737-.205.992-.429.336-.291.516-.703.516-1.19 0-.589-.265-1.322-1.507-1.523v-1.489a2.2 2.2 0 01.56.219l.005.003a.529.529 0 00.241.067.406.406 0 00.407-.406c0-.09-.031-.258-.239-.384a2.486 2.486 0 00-.974-.332v-.295a.42.42 0 10-.84 0v.305c-.823.148-1.334.73-1.334 1.566 0 .556.239 1.244 1.333 1.475v1.578a2.424 2.424 0 01-.767-.348.511.511 0 00-.27-.086.42.42 0 00-.42.414c0 .154.068.277.2.37.377.26.807.426 1.257.49v.3zM16 17.515c0 .383-.247.655-.666.758V16.82c.578.143.666.415.666.693zm-2.003-2.343c0-.341.18-.583.496-.69v1.321c-.426-.152-.496-.398-.496-.63zm-3.082 4.471a.562.562 0 01-.56-.56v-7.056c0-.308.252-.56.56-.56.308 0 .56.252.56.56v7.056c0 .31-.249.56-.56.56z"
                fill={fillColor}
            />
            <path
                d="M18.153 21.842H5.856c-.588 0-1.106-.518-1.106-1.107V3.256c0-.568.538-1.106 1.106-1.106h7.381c.143 0 .283.056.387.154l5.462 5.182a.557.557 0 01.174.406v12.843c0 .589-.518 1.107-1.107 1.107zm-12.269-1.12h12.25l.005-.006V8.999h-2.45c-.956 0-1.78-.317-2.376-.916-.597-.6-.916-1.42-.916-2.376V3.27H5.893a.085.085 0 00-.023.023V20.71a.061.061 0 00.014.011zm7.633-16.973v1.958c0 .653.205 1.2.589 1.583.383.384.933.588 1.582.588h2.183l-4.353-4.13z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBalanceRegular;
