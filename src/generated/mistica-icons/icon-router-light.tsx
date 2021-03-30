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

const IconRouterLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.91 17.345c.405 0 .669.21.669.664 0 .219-.062.378-.168.49-.118.118-.289.177-.502.177-.21 0-.384-.056-.501-.177-.11-.109-.168-.271-.168-.49 0-.454.263-.664.67-.664zm2.436 0c.406 0 .67.21.67.664 0 .219-.062.378-.169.49-.117.118-.288.177-.498.177-.213 0-.384-.056-.502-.177-.109-.109-.168-.271-.168-.49-.002-.454.26-.664.667-.664zm13.67 1.482v-1.639c0-.733-.174-1.282-.516-1.638-.353-.367-.916-.552-1.675-.552H5.164c-.76 0-1.325.185-1.675.552-.342.356-.515.905-.515 1.638v1.64c0 .733.173 1.282.515 1.638.353.367.916.552 1.675.552h13.661c.76 0 1.322-.185 1.675-.552.342-.356.516-.905.516-1.639zm.075-3.846c.493.513.745 1.255.745 2.207v1.64c0 .951-.252 1.694-.745 2.206-.515.535-1.277.804-2.269.804H5.164c-.992 0-1.753-.269-2.269-.804-.496-.512-.745-1.255-.745-2.207v-1.639c0-.952.25-1.694.745-2.207.516-.532 1.277-.804 2.269-.804h1.888V6.771a.41.41 0 01.818 0v7.409h10.95c.994 0 1.756.269 2.271.801zm-7.633-8.238c-.025-2.42-1.585-3.866-1.6-3.88a.411.411 0 01.55-.61c.075.067 1.84 1.689 1.87 4.465.006.103.102 2.829-1.842 4.566a.41.41 0 01-.58-.034.41.41 0 01.033-.58c1.656-1.473 1.572-3.902 1.57-3.927zm-2.588.028c-.017-1.482-.952-2.339-.96-2.347a.41.41 0 01.548-.608c.05.045 1.213 1.112 1.233 2.933.002.061.064 1.854-1.216 3.002a.408.408 0 01-.577-.03l-.003-.003a.41.41 0 01.034-.58c.994-.888.94-2.353.94-2.367z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRouterLight;
