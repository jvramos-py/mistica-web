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

const IconSkullRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.091 12.686c.602-.01 1.608-.243 1.608-1.678 0-.112-.006-.218-.02-.319-.134-1.162-1.059-1.358-1.596-1.37l-.2-.002h-.002c-.538.005-1.46.196-1.569 1.411a2.703 2.703 0 00-.01.266c0 1.381.87 1.681 1.599 1.692h.19zm2.913-1.678c0 2.152-1.554 2.947-2.882 2.97l-.135.002H7.89c-1.333-.02-2.888-.812-2.888-2.986 0-.131.006-.257.017-.378.168-1.893 1.644-2.58 2.855-2.59.08-.004.17 0 .243.002 1.247.03 2.653.706 2.863 2.515.014.143.025.3.025.465zm4.883 1.678c.602-.01 1.607-.243 1.607-1.678 0-.112-.005-.218-.02-.319-.134-1.162-1.058-1.358-1.596-1.37l-.199-.002h-.003c-.537.005-1.459.196-1.568 1.411a2.703 2.703 0 00-.011.266c0 1.381.87 1.681 1.6 1.692h.19zm2.885-2.145c.017.145.028.302.028.467 0 2.152-1.555 2.947-2.883 2.97l-.134.002h-.098c-1.333-.02-2.888-.812-2.888-2.986 0-.131.006-.257.017-.378.168-1.893 1.644-2.58 2.854-2.59.073 0 .168 0 .244.002 1.243.028 2.65.703 2.86 2.513zm-7.474 4.05c.334.14.488.518.348.846l-.364.857a.654.654 0 01-.852.345.643.643 0 01-.347-.846l.364-.857a.657.657 0 01.851-.345zm1.723.345l.364.854a.643.643 0 01-.6.896.655.655 0 01-.602-.395l-.364-.854a.643.643 0 01.348-.846.655.655 0 01.854.345zm3.499 2.52c2.033-1.246 3.061-3.42 3.061-6.456 0-3.025-1.025-5.196-3.047-6.454-1.684-1.047-3.58-1.196-4.32-1.215-.255-.009-.53-.009-.781-.009h-.042c-2.182.011-7.247.779-7.247 7.63 0 3.087 1.028 5.278 3.06 6.513l.62.378v1.373c0 .305.049.708.281.91.219.199.605.297 1.104.297h5.336c.35 0 .818-.048 1.075-.28.233-.207.28-.62.28-.927v-1.381l.62-.378zm-4.275-15.42c1.762.04 8.642.737 8.642 8.961 0 4.137-1.734 6.364-3.681 7.558v.655c0 .82-.233 1.462-.703 1.882-.454.41-1.11.62-1.955.62H9.21c-.848 0-1.512-.21-1.966-.62-.482-.42-.723-1.061-.723-1.882v-.647c-1.946-1.185-3.68-3.429-3.68-7.616 0-8.294 6.734-8.913 8.546-8.922.277.003.588.003.857.011z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSkullRegular;
