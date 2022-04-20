/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSupportAgentRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.153 11.642H16.03c-.284.428-.64.808-1.043 1.124 2.651.788 4.379 2.64 4.379 4.967v3.547c0 .396-.33.716-.738.716a.726.726 0 01-.738-.716v-3.547c0-2.288-2.478-3.951-5.893-3.951-1.719 0-3.257.424-4.337 1.188-1.019.72-1.555 1.68-1.555 2.767v3.547c0 .396-.33.716-.738.716a.726.726 0 01-.738-.716v-3.547c0-1.54.767-2.931 2.157-3.92.635-.447 1.39-.799 2.222-1.047-1.097-.852-1.802-2.163-1.802-3.627 0-2.56 2.148-4.643 4.787-4.643 2.64 0 4.788 2.083 4.788 4.643 0 .368-.046.728-.128 1.072h.499a.73.73 0 00.738-.716v-.204c0-3.123-2.544-5.755-5.674-5.863a5.955 5.955 0 00-4.309 1.6C6.75 6.12 6.11 7.579 6.11 9.142c0 .397-.33.717-.738.717a.726.726 0 01-.738-.716c0-1.956.8-3.78 2.251-5.139 1.448-1.36 3.361-2.068 5.381-2a7.32 7.32 0 015.051 2.256 7.236 7.236 0 012.046 5.035v.204c0 1.183-.994 2.143-2.21 2.143zm-5.155-5.714c-1.83 0-3.315 1.443-3.315 3.215 0 1.771 1.489 3.211 3.32 3.22.787 0 1.509-.269 2.078-.717h-1.345a.726.726 0 01-.738-.716c0-.395.33-.715.739-.715h2.387a3.09 3.09 0 00.19-1.072c0-1.776-1.485-3.215-3.316-3.215z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.89 10.706h.414c.56 0 1.011-.168 1.339-.493.327-.325.504-.796.504-1.364l.008-.544v-.008c0-2.073-.563-3.667-1.675-4.74C15.41 2.524 13.856 2 11.864 2c-1.79 0-3.232.423-4.283 1.26-1.098.877-1.753 2.185-1.95 3.894a.563.563 0 00.494.622.563.563 0 00.621-.493c.16-1.403.675-2.462 1.535-3.146.846-.675 2.054-1.017 3.583-1.017 1.692 0 2.983.418 3.84 1.244.883.852 1.33 2.174 1.33 3.93l-.008.544v.008c0 .182-.027.431-.17.571-.112.112-.297.168-.552.168h-.108c.047-.312.071-.645.071-.997 0-2.837-1.566-4.4-4.4-4.4-2.835 0-4.4 1.563-4.4 4.4 0 2.838 1.562 4.4 4.4 4.4 2.025 0 3.4-.795 4.022-2.282zm-2.1 0h.839c-.094.143-.2.272-.32.386-.537.519-1.358.782-2.442.782s-1.905-.263-2.443-.782c-.557-.535-.837-1.375-.837-2.501s.283-1.966.837-2.501c.538-.519 1.359-.782 2.443-.782 1.087 0 1.907.26 2.442.782.558.535.838 1.375.838 2.501 0 .361-.03.693-.087.994h-1.28c-.157-.233-.428-.367-.781-.367-.58 0-.939.359-.939.933 0 .286.084.51.247.678.162.168.403.255.689.255.285 0 .532-.09.694-.255a.789.789 0 00.1-.123zM3.393 21.695h16.933c.311 0 .56-.25.56-.56v-1.64c0-1.565-.49-2.904-1.42-3.87-1.011-1.05-2.512-1.605-4.339-1.605H8.592c-1.826 0-3.327.554-4.339 1.605-.93.966-1.42 2.305-1.42 3.87v1.64c0 .307.252.56.56.56zm.56-1.12v-1.08c0-1.271.384-2.341 1.11-3.092.807-.837 1.994-1.263 3.532-1.263h6.532c1.538 0 2.726.426 3.533 1.263.722.751 1.106 1.821 1.106 3.093v1.078H3.954z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconSupportAgentRegular;
