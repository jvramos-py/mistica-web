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

const IconBlogLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.588 2.156c1.168 0 2.07.33 2.689.983.582.617.88 1.485.88 2.583l-.002 4.603a1.58 1.58 0 011.136-.362 1.707 1.707 0 011.585 1.703c0 .434-.176.835-.504 1.16a174.7 174.7 0 01-2.216 1.986v3.4c0 1.098-.294 1.967-.88 2.583-.618.653-1.523.983-2.691.983h-9.86c-1.168 0-2.07-.33-2.69-.983-.582-.616-.879-1.485-.879-2.583V5.722c.003-1.095.3-1.964.883-2.583.616-.652 1.52-.983 2.689-.983h9.86zm.002.56H6.73c-2.484 0-3.005 1.636-3.005 3.006v12.49c0 1.373.52 3.006 3.005 3.006h9.86c2.485 0 3.006-1.636 3.006-3.006V15.31c-1.485 1.318-3.032 2.687-3.151 2.793a.263.263 0 01-.098.056l-2.958.975a.337.337 0 01-.09.017.28.28 0 01-.266-.37l.427-1.275H6.725a.28.28 0 01-.28-.28.28.28 0 01.28-.28h6.923l.377-1.12a.257.257 0 01.08-.12L16.038 14H6.725a.28.28 0 01-.28-.28.28.28 0 01.28-.28h9.91l.03.003a557.858 557.858 0 002.932-2.607l-.001-5.114c0-1.372-.521-3.006-3.006-3.006zm3.813 8.138c-.16.16-1.472 1.33-2.822 2.526l-.45.399a1246.587 1246.587 0 01-2.6 2.296l-.79 2.353 2.373-.784 2.053-1.819.612-.542a317.064 317.064 0 003.198-2.858c.224-.221.339-.476.339-.762a1.17 1.17 0 00-.336-.81 1.18 1.18 0 00-.731-.333c-.219-.016-.54.028-.846.334zm-3.818-.919a.28.28 0 01.28.28.28.28 0 01-.28.28h-9.86a.28.28 0 01-.28-.28.28.28 0 01.28-.28h9.86zm0-3.507a.28.28 0 01.28.28.28.28 0 01-.28.28h-9.86a.28.28 0 01-.28-.28.28.28 0 01.28-.28h9.86z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBlogLight;
