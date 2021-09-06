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

const IconWinnerFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.648 20.238l.596-1.605a1.021 1.021 0 011.303-.596l1.591.588-2.322-5.048c-.894.796-2.112 1.258-3.588 1.4l2.42 5.261zM4.83 18.622l1.6-.588c.52-.19 1.1.07 1.302.588l.596 1.608 2.446-5.303c-1.46-.207-2.628-.761-3.465-1.663l-2.48 5.358zm6.073-7.308a.61.61 0 00.285-.073l1.028-.563h.017l1.028.563a.583.583 0 00.283.073c.12 0 .235-.036.33-.106a.598.598 0 00.25-.605l-.19-1.202c-.009-.009 0-.017 0-.025l.837-.846a.62.62 0 00.151-.639.604.604 0 00-.482-.406l-1.15-.17s-.01 0-.01-.01l-.526-1.083a.577.577 0 00-1.061 0l-.513 1.084c-.008.008-.008.008-.017.008l-1.151.17a.585.585 0 00-.473.407.618.618 0 00.14.639l.837.846c0 .008.009.016.009.025l-.2 1.202a.608.608 0 00.25.605.545.545 0 00.328.106zm1.322-9.154c4.061 0 6.431 2.056 6.431 6.437 0 1.633-.322 2.941-.952 3.936l2.8 6.08a.984.984 0 01-.13 1.054.997.997 0 01-1.004.356l-2.039-.745-.728 1.963c-.216.395-.555.605-.927.605h-.034a.99.99 0 01-.888-.588l-2.762-5.992-2.767 5.992a.994.994 0 01-.894.588h-.025c-.373 0-.714-.199-.894-.538l-.761-2.028-1.958.72a1.32 1.32 0 01-.309.037.972.972 0 01-.778-.362 1.009 1.009 0 01-.132-1.061l2.983-6.48c.009-.024.026-.033.042-.055-.465-.93-.706-2.09-.706-3.48C5.791 4.217 8.16 2.16 12.225 2.16z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWinnerFilled;
