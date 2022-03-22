/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSupportAgentFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.703 12.16H16.9c1.156 0 2.1-.916 2.096-2.037V9.93c0-3.69-3.025-6.799-6.743-6.924a7.066 7.066 0 00-5.114 1.892C5.76 6.186 5 7.923 5 9.781c0 .376.313.68.701.68a.693.693 0 00.702-.68c0-1.486.611-2.877 1.712-3.91 1.101-1.03 2.555-1.566 4.09-1.517 2.975.103 5.396 2.603 5.396 5.572v.193c0 .377-.317.68-.701.68h-4.197a.693.693 0 00-.701.681c0 .376.317.68.701.68z"
                    fill={fillColor}
                />
                <path
                    d="M12.703 13.179H14.8c2.527.749 4.204 2.558 4.2 4.773V22H5v-4.04c0-2.212 1.642-3.975 4.165-4.72-1.046-.81-1.716-2.053-1.716-3.447 0-1.19.49-2.27 1.285-3.064l.03-.032.029-.032a5.09 5.09 0 01.3-.267l.025-.022.032-.023c.088-.065.179-.133.27-.194.02-.011.035-.023.05-.034a5.698 5.698 0 01.377-.22 7 7 0 01.345-.16c.02-.008.039-.015.055-.023a9.05 9.05 0 01.344-.121l.038-.012.037-.011a3.8 3.8 0 01.345-.084c.026-.003.049-.009.074-.015l.016-.004a4.734 4.734 0 01.356-.053.619.619 0 01.086-.015 4.57 4.57 0 01.459-.023 4.238 4.238 0 01.321.015c.075.004.15.008.224.02l.057.006a4.642 4.642 0 01.428.073h.004c1.956.464 3.444 2.223 3.511 4.29h-3.844c-.964 0-1.747.76-1.747 1.696 0 .935.783 1.695 1.747 1.695z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.48 3.557C15.41 2.524 13.856 2 11.864 2c-1.79 0-3.232.423-4.283 1.26-1.1.877-1.756 2.188-1.952 3.894a.56.56 0 001.112.129c.16-1.403.678-2.46 1.535-3.146.846-.672 2.053-1.017 3.582-1.017 1.692 0 2.984.418 3.84 1.244.889.852 1.337 2.174 1.34 3.927l-.009.544v.008c0 .185-.03.431-.17.574-.113.112-.3.168-.552.168h-2.53c-.157-.232-.428-.367-.781-.367-.577 0-.939.359-.939.933 0 .283.084.513.247.678.162.165.403.255.689.255.286 0 .527-.087.689-.255a.702.702 0 00.098-.123h2.518c.56 0 1.011-.165 1.34-.49.327-.325.503-.799.503-1.364l.009-.544V8.3c.008-2.076-.558-3.67-1.67-4.743zm3.846 18.138H3.393a.562.562 0 01-.56-.56v-1.64c0-1.565.49-2.904 1.42-3.87 1.012-1.05 2.513-1.605 4.34-1.605h6.534c1.827 0 3.328.554 4.34 1.605.93.966 1.42 2.305 1.42 3.87v1.64c0 .31-.25.56-.56.56z"
                    fill={fillColor}
                />
                <path
                    d="M11.906 11.221c.275.278.65.423 1.09.423.414 0 .776-.131 1.042-.38H15.6c-.712 1.128-1.978 1.725-3.731 1.725-2.838 0-4.4-1.563-4.4-4.4 0-2.838 1.562-4.401 4.4-4.401 2.837 0 4.4 1.563 4.4 4.4 0 .149-.005.294-.014.437h-2.23c-.263-.238-.618-.367-1.03-.367-.437 0-.807.143-1.082.415-.274.272-.417.644-.417 1.078 0 .429.143.799.41 1.07z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconSupportAgentFilled;
