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

const IconBicycleBikeLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.23 18.073c-1.872 0-2.78-.953-2.78-2.908 0-1.218.353-2.045 1.07-2.498l1.32 2.68a.412.412 0 00.56.188.443.443 0 00.18-.586l-1.272-2.582c.28-.065.577-.107.921-.107 1.871 0 2.782.953 2.782 2.908-.003 1.952-.914 2.905-2.782 2.905zm-6.337-4.34c-.064 0-.12.01-.18.015l-2.15-4.6h4.792l-2.28 4.6c-.059-.006-.115-.017-.182-.014zm0 2.258c-.476 0-.661-.193-.661-.694 0-.499.185-.695.66-.695.48 0 .665.196.665.695 0 .501-.185.694-.664.694zM5.77 18.073c-1.871 0-2.779-.953-2.779-2.908s.908-2.907 2.779-2.907c.322 0 .61.039.876.098l-1.268 2.596a.45.45 0 00.016.426.406.406 0 00.356.207h2.776c-.132 1.664-1.028 2.488-2.756 2.488zm2.753-3.359H6.431l1.008-2.067c.647.39 1 1.078 1.084 2.067zm.359-5.028l2.039 4.359a1.336 1.336 0 00-.443.672H9.352c-.098-1.339-.624-2.305-1.54-2.835l1.07-2.196zm9.344 1.7c-.487 0-.918.07-1.31.188l-1.46-2.963V5.893c.39-.042.966-.039 1.269.216.092.079.216.219.216.558a.426.426 0 00.417.434.427.427 0 00.417-.434c0-.659-.285-1.037-.526-1.239-.787-.66-2.143-.37-2.297-.333a.435.435 0 00-.325.426V8.28H9.153l-.739-1.577h.96a.427.427 0 00.418-.434.424.424 0 00-.417-.434H6.582a.427.427 0 00-.417.434.428.428 0 00.417.437h.905l.935 2.003-1.395 2.857a4.48 4.48 0 00-1.263-.174c-2.325-.006-3.608 1.336-3.608 3.773 0 2.437 1.283 3.779 3.614 3.779 2.19 0 3.44-1.196 3.585-3.359h1.065c.09.709.515 1.157 1.19 1.255l.68 1.429c.07.148.216.24.373.24h.827a.427.427 0 00.417-.433.428.428 0 00-.417-.437h-.569l-.417-.874c.565-.205.888-.72.888-1.465 0-.56-.188-.99-.524-1.252l2.173-4.381 1.101 2.235c-.991.6-1.526 1.703-1.526 3.266 0 2.437 1.283 3.779 3.613 3.779s3.614-1.342 3.614-3.779-1.283-3.782-3.617-3.782z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBicycleBikeLight;
