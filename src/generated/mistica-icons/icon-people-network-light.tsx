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

const IconPeopleNetworkLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.957 3.305c-.224.215-.336.574-.336 1.067s.112.849.334 1.064c.215.208.565.314 1.042.314.476 0 .826-.106 1.044-.314.224-.213.337-.571.337-1.061 0-.493-.115-.852-.34-1.067-.218-.21-.568-.317-1.041-.317-.474 0-.824.106-1.04.314zm1.04 3.277c-.698 0-1.241-.185-1.617-.546-.392-.378-.59-.936-.59-1.664 0-.728.198-1.289.59-1.667.376-.364.92-.549 1.617-.549s1.243.185 1.621.55c.393.377.591.94.591 1.666 0 .725-.198 1.286-.59 1.664-.379.361-.925.546-1.622.546zM8.91 10.008v.154h6.182v-.154c0-.336-.07-.813-.404-1.16-.37-.386-.935-.465-1.341-.465h-2.695c-.409 0-.972.081-1.342.465-.333.345-.4.824-.4 1.16zm-.583.989a.253.253 0 01-.252-.253v-.736c0-.703.219-1.306.633-1.737.451-.47 1.123-.72 1.941-.72h2.695c.818 0 1.49.25 1.944.72.414.434.636 1.034.636 1.737v.736c0 .138-.112.25-.25.253H8.327zM5.04 14.15c-.222.215-.334.574-.334 1.067s.112.849.334 1.064c.215.208.565.314 1.042.314.476 0 .826-.104 1.042-.314.224-.215.336-.571.336-1.061s-.112-.85-.336-1.065c-.219-.21-.569-.316-1.042-.316-.477-.003-.827.103-1.042.31zm1.039 3.277c-.698 0-1.241-.185-1.62-.546-.391-.378-.587-.936-.587-1.664 0-.726.198-1.286.588-1.664.375-.364.921-.549 1.619-.549.697 0 1.244.185 1.619.549.392.378.59.941.59 1.667 0 .725-.198 1.285-.59 1.664-.375.358-.919.543-1.62.543zm3.095 3.58v-.154c0-.336-.07-.813-.403-1.157-.37-.384-.936-.465-1.345-.465H4.733c-.409 0-.975.081-1.339.465-.333.347-.4.82-.4 1.16v.154c-.003-.003 6.18-.003 6.18-.003zm-1.748-2.61c.82 0 1.493.248 1.944.719.418.434.636 1.036.636 1.737v.736c0 .14-.112.253-.252.253H2.408a.251.251 0 01-.252-.253v-.736c0-.703.219-1.303.633-1.737.451-.47 1.124-.723 1.941-.723l2.695.003zm9.451-4.253c-.221.216-.333.574-.333 1.067s.112.849.333 1.062c.216.207.566.314 1.04.314.476 0 .826-.107 1.044-.314.224-.216.336-.572.336-1.062 0-.493-.112-.848-.336-1.067-.218-.207-.568-.314-1.045-.314-.473 0-.823.107-1.039.314zm-.58 2.731c-.392-.378-.588-.935-.588-1.664 0-.728.196-1.288.588-1.666.376-.365.922-.55 1.617-.55.697 0 1.243.185 1.621.55.395.378.591.938.591 1.666 0 .726-.198 1.286-.59 1.664-.379.361-.922.546-1.622.546-.695 0-1.241-.185-1.617-.546zm4.715 4.126v-.154c0-.336-.07-.812-.404-1.157-.37-.383-.935-.465-1.344-.465H16.57c-.41 0-.972.082-1.34.465-.332.348-.4.821-.4 1.16v.154h6.18v-.003zm.193-1.89c.417.434.639 1.033.639 1.736v.737c0 .14-.113.252-.253.252h-7.344a.251.251 0 01-.252-.252v-.737c0-.703.218-1.305.633-1.737.45-.47 1.123-.72 1.941-.72h2.695c.818 0 1.49.25 1.94.72zm-6.726-2.726a.418.418 0 01-.571.14l-1.924-1.176-1.925 1.176a.414.414 0 01-.571-.137.414.414 0 01.137-.572l1.944-1.19v-2.258a.418.418 0 01.835 0v2.258l1.94 1.188a.42.42 0 01.135.57z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPeopleNetworkLight;
