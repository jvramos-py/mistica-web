/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileZipLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.913 11.49h.845v3.703h-.845V11.49zm-3.46 3.207l1.798-2.583H5.506v-.622h2.785v.519l-1.77 2.56H8.3v.622H5.454v-.496zm6.387-3.207h-1.278v3.703h.846v-1.278h.597c.487 0 .823-.114 1.04-.358.184-.207.277-.504.277-.9 0-.394-.096-.68-.297-.865-.239-.221-.605-.302-1.185-.302zm-.009 1.792v.003h-.417v-1.182h.395c.26 0 .417.036.52.129.099.092.141.24.141.44 0 .215-.048.372-.146.47-.109.101-.221.14-.493.14z"
                fill={fillColor}
            />
            <path
                d="M21.806 7.907c.022.05.034.104.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.269v-4.18A2.27 2.27 0 014.422 8.88h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.572c.179 0 .355.07.484.194l5.406 5.235c.09.087.143.202.171.322zM20.61 21.01c.207 0 .406-.185.406-.379V8.75h-2.568c-.98 0-1.827-.316-2.443-.916-.622-.602-.952-1.426-.952-2.384V2.977H8.17c-.185 0-.403.204-.403.378v5.518h6.703a2.27 2.27 0 012.266 2.27v4.178a2.27 2.27 0 01-2.266 2.27H7.803l-.036 3.041c0 .182.204.373.403.373h12.44v.006zM2.98 15.324c0 .796.644 1.443 1.44 1.443h10.053c.792 0 1.44-.647 1.44-1.443v-4.179c0-.795-.645-1.443-1.44-1.443H4.42c-.793 0-1.44.648-1.44 1.443v4.18zM15.879 3.16v2.29c0 .729.24 1.348.7 1.79.46.446 1.107.684 1.869.684h2.35V7.92l-4.92-4.762z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileZipLight;
