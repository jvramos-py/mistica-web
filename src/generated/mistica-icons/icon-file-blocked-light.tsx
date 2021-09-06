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

const IconFileBlockedLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.019 16.826v-2.684c0-.016 0-.098-.008-.198-.017-.157-.065-.379-.23-.552-.188-.205-.502-.306-.919-.306h-5.795c-.14 0-.524.026-.788.264-.179.173-.271.437-.271.781v5.011c0 .034-.025.463.246.748.19.2.493.297.902.297h5.706c.025 0 .56.034.888-.28.18-.174.272-.428.272-.773l-.003-2.308zm-1.51-5.266c0-2.157-1.616-2.429-2.322-2.443l-.255-.008c-.68.008-2.283.255-2.283 2.434v.723h4.86v-.706zm-7.322 2.574c0-.594.18-1.062.54-1.392a1.876 1.876 0 011.102-.462v-.74c0-2.378 1.599-3.24 3.103-3.258l.277.009c1.51.033 3.12.913 3.12 3.266v.74c.264.041.486.131.682.246V6.481a.431.431 0 00-.435-.434h-9.005a.412.412 0 01-.41-.412V4.226a.433.433 0 00-.433-.437H3.41a.433.433 0 00-.434.437v13.84c0 .242.196.438.434.438h8.776v-4.37zm9.644-.277c.017.162.009.285.009.319v4.964c0 .582-.182 1.042-.532 1.38-.583.544-1.39.494-1.48.494h-5.672c-.647 0-1.157-.19-1.501-.57a1.821 1.821 0 01-.468-1.117H3.411a1.265 1.265 0 01-1.255-1.26V4.227c0-.7.566-1.258 1.255-1.258h7.314c.689 0 1.255.56 1.255 1.257v.995h8.594c.689 0 1.255.56 1.255 1.258l.002 7.378zm-4.762 4.008c.423-.008.925-.185.925-.977 0-.796-.504-.975-.93-.986h-.118c-.414.002-.907.176-.907.977 0 .804.501.98.921.986h.11zm.012-2.784c.8.02 1.734.504 1.734 1.807 0 1.305-.933 1.784-1.729 1.798h-.143c-.795-.011-1.728-.493-1.728-1.807 0-1.32.927-1.793 1.723-1.801l.143.003zM4.826 9.899c.199 0 .501 0 .501-1.152 0-1.156-.302-1.156-.501-1.156-.202 0-.507 0-.507 1.156.003 1.149.308 1.149.507 1.152zm0-3.06c.834 0 1.255.64 1.255 1.906 0 1.26-.423 1.899-1.255 1.899-.838 0-1.26-.639-1.26-1.9.002-1.263.425-1.904 1.26-1.904zm3.182 3.057c.199 0 .501 0 .501-1.151 0-1.157-.302-1.157-.501-1.157-.202 0-.507 0-.507 1.157 0 1.15.305 1.15.507 1.15zm0-3.056c.835 0 1.255.639 1.255 1.905 0 1.26-.423 1.899-1.255 1.899-.838 0-1.26-.639-1.26-1.9 0-1.263.422-1.904 1.26-1.904zm-2.616 8.39c.17 0 .308.137.308.307v.118c0 .17-.138.308-.308.308h-1.12a.307.307 0 01-.309-.308v-.118c0-.17.137-.308.308-.308h.23v-2.232h-.193a.307.307 0 01-.309-.308v-.098a.31.31 0 01.278-.309c.196-.02.378-.028.448-.028.482 0 .518.35.518.457v2.521c.003-.003.149-.003.149-.003zm2.616.047c.199 0 .501 0 .501-1.151 0-1.157-.302-1.157-.501-1.157-.202 0-.507 0-.507 1.157 0 1.15.305 1.15.507 1.15zm0-3.056c.835 0 1.255.639 1.255 1.905 0 1.26-.423 1.899-1.255 1.899-.838 0-1.26-.639-1.26-1.9 0-1.263.422-1.904 1.26-1.904zm3.742 3.008c.171 0 .308.138.308.308v.118c0 .17-.137.308-.308.308h-1.118a.307.307 0 01-.308-.308v-.118c0-.17.138-.308.308-.308h.23v-2.232h-.193a.307.307 0 01-.308-.308v-.098a.31.31 0 01.277-.309c.196-.02.378-.028.448-.028.482 0 .518.35.518.457v2.521c.003-.003.146-.003.146-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileBlockedLight;
