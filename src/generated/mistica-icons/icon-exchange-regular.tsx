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

const IconExchangeRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.169 6.49l-.036.572c-.034.504-.317 3.109-2.667 4.74l-.896.618.994.44c3.65 1.627 3.742 5.314 3.745 5.465a.54.54 0 11-1.081-.003c-.006-.465-.222-4.132-4.77-4.963a3.537 3.537 0 00-.06-1.757c3.222-1.115 3.606-3.829 3.65-4.46l.003-.646-.815-.009 1.356-1.375 1.364 1.375-.787.003zM4.654 18.325a.54.54 0 01-1.081.006c.002-.157.095-3.872 3.814-5.485l.998-.434-.891-.628C5.189 10.16 4.9 7.566 4.869 7.062l-.095-.566-.728-.006 1.361-1.375L6.768 6.49l-.86.003.045.653c.045.627.426 3.339 3.65 4.456a3.318 3.318 0 00-.146.997c0 .272.034.519.082.746-4.659.809-4.88 4.512-4.885 4.98zm8.663-5.726a2.2 2.2 0 01-.075.617.887.887 0 01-.23.411c-.25.239-.689.286-1.017.286-.325 0-.767-.047-1.01-.283a.897.897 0 01-.23-.414 2.171 2.171 0 01-.076-.614c0-.28.036-.507.103-.692a.853.853 0 01.202-.339c.247-.238.686-.288 1.011-.288.325 0 .768.05 1.014.288a.895.895 0 01.202.34c.07.184.106.408.106.688zm8.359-6.109l-2.518-2.535a.73.73 0 00-1.014-.117l-2.628 2.658a.749.749 0 00-.09.79.723.723 0 00.653.414l.642.006c-.233.905-.933 2.258-3.023 2.857-.423-.33-.988-.507-1.7-.507-.711 0-1.272.176-1.695.504-2.09-.6-2.79-1.95-3.02-2.854L7.92 7.7a.73.73 0 00.66-.417c.124-.26.088-.569-.13-.838L5.99 3.961l-.12-.12a.729.729 0 00-.539-.155c-.193.023-.364.12-.44.222l-2.56 2.585a.748.748 0 00-.092.79.723.723 0 00.653.417l.826.006c.16 1.05.675 2.938 2.314 4.456-3.63 2.126-3.675 6.115-3.675 6.16 0 .96.784 1.75 1.764 1.76.958 0 1.751-.782 1.765-1.743.006-.364.193-3.311 4.25-3.849.002.003.005.011.01.014.432.418 1.06.628 1.86.628.802 0 1.43-.21 1.863-.625.003-.003.003-.006.006-.008 3.86.532 4.129 3.249 4.137 3.832a1.77 1.77 0 001.765 1.753c.972 0 1.765-.793 1.765-1.765 0-.042-.043-3.997-3.603-6.131 1.678-1.535 2.2-3.477 2.359-4.482l.823-.009c.286 0 .538-.16.661-.42a.766.766 0 00-.106-.787z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExchangeRegular;
