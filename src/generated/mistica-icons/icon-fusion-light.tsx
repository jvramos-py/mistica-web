/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFusionLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path d="M11.668 2.714h-.04L11.644 2h.043l-.018.714z" fill={fillColor} />
            <path d="M11.64 2.714l.028-.357-.032.357.007-.714.057.004-.06.71z" fill={fillColor} />
            <path
                d="M21.572 12.422l-1.175-1.175a1.256 1.256 0 00-.618-.329c0-.014.003-.025.003-.04a7.819 7.819 0 00-2.914-5.05c-.003-.003-.007-.003-.01-.003-.53-2.168-2.472-3.793-4.794-3.821h-.035v.003C12.018 2.004 12.01 2 12 2c-.007 0-.028 0-.057.004-2.325.025-4.271 1.65-4.8 3.821-.004.004-.007.004-.01.004A7.846 7.846 0 005.61 7.422a.36.36 0 00.29.567c.11 0 .22-.05.288-.15.243-.335.515-.646.811-.939l-.003.1a5.002 5.002 0 004.942 4.997.65.65 0 00.061.003l.043-.003h.018A5.01 5.01 0 0017 7c0-.036-.004-.068-.004-.104a7.082 7.082 0 012.075 4.083c0 .003.003.003.003.007-.15.06-.289.146-.403.26l-.925.926a1.22 1.22 0 000 1.721l.817.818c.283.282.186.75.054 1.093-.196.507-.603 1.096-1.125 1.618-.521.521-1.107.928-1.618 1.125-.343.132-.81.228-1.093-.054l-.818-.818c-.453-.453-1.267-.453-1.725 0l-.925.925a1.25 1.25 0 00-.289.475 7.131 7.131 0 01-2.957-1.11v-4.536c0-.79-.64-1.429-1.429-1.429H4.854c0-.128.003-.253.01-.378a.356.356 0 00-.339-.375.352.352 0 00-.375.339 15.76 15.76 0 00-.007.414h-.714C2.639 12 2 12.64 2 13.43v6.07c0 .79.64 1.429 1.429 1.429h3.214c.79 0 1.429-.64 1.429-1.429v-.7a7.801 7.801 0 002.942.99c.058.2.158.382.304.532l1.175 1.175c.321.321.929.5 1.679.5.053 0 .107 0 .16-.004 1.793-.06 3.704-1.053 5.111-2.66 2.614-2.983 3-6.036 2.129-6.911zm-5.304-5.78h-1.771c-.043-1.828-.432-2.938-.886-3.61a4.302 4.302 0 012.657 3.61zm-2.486 0h-1.425v-3.81c.5.264 1.354 1.11 1.425 3.81zm-2.139-3.806v3.807h-1.425c.071-2.697.921-3.543 1.425-3.807zm0 4.521v3.807c-.504-.264-1.354-1.114-1.425-3.807h1.425zm.714 3.811v-3.81h1.425c-.071 2.7-.925 3.546-1.425 3.81zm-1.953-8.143c-.461.671-.854 1.782-.9 3.618H7.732a4.294 4.294 0 012.672-3.618zM7.732 7.357h1.772c.046 1.836.439 2.947.9 3.618a4.294 4.294 0 01-2.672-3.618zm5.875 3.611c.458-.671.843-1.782.886-3.61h1.772a4.29 4.29 0 01-2.658 3.61zM2.714 14.143h4.643v4.643H2.714v-4.643zm.715-1.429h3.214c.393 0 .714.322.714.715H2.714c0-.393.322-.715.715-.715zm3.214 7.5H3.429a.716.716 0 01-.715-.714h4.643a.716.716 0 01-.714.715zm12.264-1.346c-1.892 2.16-3.996 2.397-4.596 2.414-.679.025-1.15-.128-1.31-.289l-1.176-1.175a.512.512 0 010-.714l.922-.922a.515.515 0 01.357-.15c.132 0 .264.054.357.147l.818.818c.914.914 2.528.121 3.718-1.072 1.192-1.193 1.985-2.803 1.071-3.718l-.818-.818a.512.512 0 010-.714l.922-.921a.514.514 0 01.303-.143l.054-.007a.51.51 0 01.357.146l1.175 1.175c.49.486.34 3.093-2.154 5.943zM4.143 9.5c0-.393.321-.714.714-.714.393 0 .714.321.714.714a.716.716 0 01-.714.714.716.716 0 01-.714-.714z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFusionLight;
