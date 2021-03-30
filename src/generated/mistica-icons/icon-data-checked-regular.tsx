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

const IconDataCheckedRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.585 12.199a.605.605 0 01.855 0 .602.602 0 010 .851l-3.647 3.633a.604.604 0 01-.852 0L5.303 15.05a.602.602 0 010-.851.605.605 0 01.854 0l1.21 1.207 3.218-3.207zm8.286 6.798c.745-.224 1.633-.619 1.633-1.224v-2.59a5.599 5.599 0 01-1.28.556c-1.129.34-2.61.527-4.168.527-.216 0-.423-.011-.633-.02-.014.087-.025.174-.04.255v.003c-.173.997-.985 1.947-1.949 2.76.796.134 1.68.21 2.61.21 1.44 0 2.8-.169 3.827-.477zM8.367 20.443c1.462-.729 4.549-2.57 4.826-4.146.247-1.426.297-4.448.306-5.773h-.003c-1.182 0-1.927-.493-2.6-.936-.7-.462-1.358-.896-2.526-.899h-.003c-1.165 0-1.826.437-2.527.896-.68.451-1.462.942-2.602.947.008 1.328.059 4.342.308 5.762.278 1.58 3.362 3.42 4.82 4.149zM9.588 6.24v1.392c.832.205 1.434.594 1.978.952.74.49 1.325.877 2.426.704a.626.626 0 01.495.134.615.615 0 01.224.454l-.002.689c.117.003.232.008.35.008 1.442 0 2.798-.168 3.82-.476.942-.283 1.446-.7 1.628-1.003V6.25a5.87 5.87 0 01-1.28.535c-1.132.34-2.614.527-4.168.527-1.558 0-3.037-.185-4.171-.524a5.722 5.722 0 01-1.3-.546zm1.636-2.535c-.854.258-1.39.594-1.56.958.162.367.706.711 1.571.97 1.023.304 2.381.472 3.821.472 1.443 0 2.798-.168 3.82-.473.852-.255 1.401-.594 1.57-.958-.205-.462-.942-.779-1.578-.972-1.02-.305-2.378-.473-3.823-.473-1.443.002-2.801.17-3.82.476zm3.468 8.064a61.37 61.37 0 01-.14 3.278c.168.005.336.014.507.014 1.445 0 2.8-.168 3.82-.474.939-.283 1.446-.7 1.628-1.003v-2.89a5.599 5.599 0 01-1.28.557c-1.132.339-2.614.527-4.168.527-.126 0-.247-.009-.367-.009zm4.526-9.215c1.656.498 2.496 1.297 2.496 2.375v12.843c0 1.079-.84 1.88-2.496 2.375-1.137.34-2.619.527-4.173.527-1.434 0-2.796-.165-3.894-.46a21.12 21.12 0 01-2.526 1.438.594.594 0 01-.516-.003c-.54-.255-5.3-2.563-5.753-5.154-.345-1.95-.33-6.437-.33-6.628a.604.604 0 01.75-.582c1.073.17 1.653-.219 2.392-.712.782-.515 1.664-1.098 3.193-1.098h.012V4.92c0-.177.025-.348.072-.513.238-.826 1.054-1.454 2.423-1.865 1.132-.34 2.614-.527 4.171-.527 1.566.014 3.048.202 4.18.54z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataCheckedRegular;
