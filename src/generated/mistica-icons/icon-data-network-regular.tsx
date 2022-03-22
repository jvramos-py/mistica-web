/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataNetworkRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.233 7.58a.547.547 0 01.072.224c.252.941.381 1.983.384 3.132 0 5.837-3.123 8.924-9.036 8.924a14.02 14.02 0 01-2.32-.185v.073c0 .512-.283 1.218-1.647 1.619-.692.21-1.59.322-2.524.322-.932 0-1.826-.112-2.515-.322C2.283 20.967 2 20.26 2 19.747v-7.473c0-.128.014-.249.048-.36v-.01c.162-.562.697-.988 1.582-1.251C3.728 4.992 6.843 2 12.65 2c4.568 0 7.52 1.955 8.583 5.58zm-9.191-.328V3.3c-1.291.375-2.434 1.899-3.076 3.952h3.076zm1.216-3.944v3.944h2.862c-.574-2.076-1.621-3.566-2.862-3.944zm4.266 10.583h2.571c.244-.866.376-1.852.373-2.958 0-.908-.09-1.726-.252-2.48h-2.597c.123.78.188 1.597.188 2.463a15.7 15.7 0 01-.283 2.975zm-.3 1.204c-.38 1.3-.941 2.39-1.63 3.207 1.916-.515 3.269-1.58 4.056-3.207h-2.426zm-3.966 3.462c1.137-.35 2.109-1.641 2.7-3.456h-2.7v3.456zM16.38 8.454h-3.123v5.445l3.033-.008c.194-.916.3-1.925.3-2.975 0-.857-.073-1.686-.21-2.462zm1.008-1.202h2.465c-.73-1.877-2.142-3.112-4.201-3.68.764.913 1.364 2.181 1.736 3.68zM10.331 13.9h1.711V8.454H8.667a12.263 12.263 0 00-.236 2.134c.082.014.171.031.252.056 1.365.41 1.648 1.107 1.648 1.628v1.627zm1.711 4.731v-3.526h-1.711v3.375a.48.48 0 00.053-.004.479.479 0 01.053-.004c.501.095 1.045.137 1.605.16zm-3.697-3.59c.42-.13.663-.306.77-.427h.003v-1.176l-.031.012c-.128.052-.25.1-.392.14-.692.21-1.583.321-2.524.321-.933 0-1.835-.114-2.516-.322a4.36 4.36 0 01-.437-.16v1.202c.09.104.334.272.788.41 1.15.335 3.179.335 4.339 0zm.77 2.187h.003v-1.202c-.14.065-.278.12-.423.16-.692.21-1.583.322-2.524.322-.933 0-1.835-.112-2.516-.322a2.31 2.31 0 01-.358-.127 11.57 11.57 0 00-.079-.033v1.219c.082.098.303.266.788.409 1.15.336 3.179.336 4.339 0 .42-.13.663-.306.77-.426zm-.779 2.991c.535-.162.779-.352.779-.473h.003V18.64a8.074 8.074 0 00-.095.038 3.203 3.203 0 01-.328.121c-.692.21-1.583.322-2.524.322-.933 0-1.835-.114-2.516-.322a4.36 4.36 0 01-.437-.16v1.107c0 .12.244.311.78.473 1.159.337 3.17.337 4.338 0zm-4.342-8.42c-.364.112-.565.224-.672.311.104.095.308.216.68.328 1.152.336 3.18.336 4.331 0 .39-.118.583-.232.681-.32-.112-.095-.33-.215-.68-.319-1.152-.344-3.188-.344-4.34 0zm3.423-3.344H5.09c-.138.602-.21 1.26-.236 1.955a12.376 12.376 0 012.37-.022c.022-.667.087-1.309.193-1.933zm2.126-4.849c-2.002.583-3.375 1.804-4.095 3.65h2.247c.406-1.468 1.044-2.728 1.848-3.65z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataNetworkRegular;
