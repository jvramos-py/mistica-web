/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRouterRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.833 5.016c1.44 0 2.834.613 3.833 1.68a.706.706 0 01-.036 1.003.706.706 0 01-1.004-.036 3.795 3.795 0 00-2.793-1.226 3.795 3.795 0 00-2.793 1.226.715.715 0 01-1.003.036A.715.715 0 0112 6.696a5.264 5.264 0 013.833-1.68zm-5.45.73a.712.712 0 00.514-.217 6.79 6.79 0 014.94-2.112c1.88 0 3.634.75 4.942 2.112a.714.714 0 001.003.022.714.714 0 00.023-1.003A8.195 8.195 0 0015.842 2 8.195 8.195 0 009.88 4.548a.71.71 0 00.019 1.003.683.683 0 00.486.196zM5.37 17.256a1.24 1.24 0 101.24 1.24c0-.686-.554-1.24-1.24-1.24zm16.499 1.24a3.374 3.374 0 01-3.37 3.37H5.369A3.374 3.374 0 012 18.494a3.374 3.374 0 013.37-3.37h9.755V9.802a.71.71 0 011.417 0v5.323h1.952a3.375 3.375 0 013.375 3.37zm-1.422 0a1.956 1.956 0 00-1.953-1.953H5.37a1.956 1.956 0 00-1.953 1.952c0 1.077.876 1.953 1.953 1.953h13.129a1.955 1.955 0 001.948-1.953z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.258 6.91c-.025-2.305-1.518-3.683-1.535-3.697a.604.604 0 01-.044-.854l.002-.003a.62.62 0 01.869-.045c.078.07 1.907 1.731 1.938 4.569.006.098.104 2.89-1.913 4.672a.623.623 0 01-.868-.048.606.606 0 01.042-.854l.003-.002.002-.004c1.588-1.403 1.507-3.708 1.504-3.734zm8.583 10.33c0-.94-.252-1.677-.745-2.184-.515-.53-1.277-.795-2.266-.795H8.085V6.927a.615.615 0 00-.617-.61.613.613 0 00-.616.61v7.33H5.17c-.992 0-1.754.267-2.27.796-.495.51-.744 1.244-.744 2.185v1.622c0 .941.25 1.678.745 2.188.515.529 1.277.795 2.269.795h13.658c.992 0 1.753-.266 2.269-.795.493-.507.745-1.244.745-2.185V17.24zm-1.233 1.62c.003.616-.134 1.067-.397 1.339-.275.28-.737.423-1.381.423H5.169c-.644 0-1.107-.143-1.381-.423-.266-.272-.4-.723-.4-1.339v-1.622c0-.616.134-1.067.4-1.339.274-.28.737-.423 1.38-.423h13.659c.641 0 1.106.143 1.381.423.266.272.4.723.4 1.34v1.621zM5.95 18.151c0-.518-.305-.759-.776-.759-.47 0-.773.241-.776.762 0 .25.07.434.197.56.137.135.336.196.58.196.243 0 .445-.064.58-.198.125-.127.195-.311.195-.56zm2.824 0c0-.518-.305-.759-.776-.759-.47 0-.776.241-.776.76 0 .249.07.433.196.56.137.134.336.198.58.198.246 0 .445-.064.58-.198.126-.127.196-.311.196-.56zm1-13.397c.011.008.88.82.896 2.179v.002c.001.056.025 1.392-.874 2.183l-.005.005a.604.604 0 00-.045.855.62.62 0 00.868.05c1.356-1.196 1.289-3.067 1.286-3.123-.023-1.894-1.25-3.009-1.303-3.056a.62.62 0 00-.874.053.603.603 0 00.05.852z"
                />
            </svg>
        );
    }
};

export default IconRouterRegular;
