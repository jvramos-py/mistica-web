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

const IconBalanceRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.237 2.15c.143 0 .283.056.387.154l5.462 5.182a.557.557 0 01.174.406v12.843c0 .589-.518 1.107-1.107 1.107H5.856c-.588 0-1.106-.518-1.106-1.107V3.256c0-.568.538-1.106 1.106-1.106h7.381zm-.84 1.12H5.893a.085.085 0 00-.023.023V20.71a.061.061 0 00.014.011h12.25l.005-.005V8.998h-2.45c-.956 0-1.78-.316-2.376-.915-.597-.6-.916-1.42-.916-2.376V3.27zm2.515 9.65a.42.42 0 01.42.42v.297c.364.048.701.161.975.33.208.127.239.295.239.385a.406.406 0 01-.407.406.528.528 0 01-.24-.067l-.006-.003a2.18 2.18 0 00-.56-.219l-.001 1.49.06.01c1.191.214 1.448.933 1.448 1.512 0 .487-.18.899-.516 1.19-.255.224-.592.368-.99.43l-.001.304a.42.42 0 11-.84 0v-.3a2.95 2.95 0 01-1.258-.49.432.432 0 01-.2-.37.42.42 0 01.42-.414.51.51 0 01.27.086c.255.17.512.286.768.348l-.002-1.578c-1.094-.231-1.332-.92-1.332-1.475 0-.835.51-1.418 1.333-1.566v-.306a.42.42 0 01.42-.42zm-3.997-1.453c.308 0 .56.252.56.56v7.056c0 .31-.249.56-.56.56a.562.562 0 01-.56-.56v-7.056c0-.308.252-.56.56-.56zM8.156 7.083c.308 0 .56.252.56.56v11.426c0 .308-.252.56-.56.56a.562.562 0 01-.56-.56V7.643c0-.308.252-.56.56-.56zm7.179 9.739l-.002 1.45c.419-.102.666-.374.666-.758 0-.278-.088-.55-.664-.692zm-1.339-1.65c0 .233.07.478.494.63l.001-1.319a.683.683 0 00-.495.69zm3.874-7.294l-4.353-4.13v1.96c0 .652.205 1.198.589 1.582.383.384.933.588 1.582.588h2.182z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBalanceRegular;
