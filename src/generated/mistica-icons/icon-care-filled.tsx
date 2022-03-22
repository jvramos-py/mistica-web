/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCareFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.686 3.908c0-.813-.658-1.477-1.462-1.477v.003h-1.238c-.753 0-1.37.588-1.443 1.328l-2.904-1.4c-.395-.233-.88-.36-1.454-.36a2.99 2.99 0 00-1.272.259l-.13.066c-.678.344-3.721 1.89-4.783 2.564-.779.496-.992 1.243-.591 2.022a.34.34 0 01.042.076c.37.672 1.174.977 1.905.72l1.902-.673c.1.757.689 1.337 1.437 1.345h.271c.555-.01 1.58-.025 2.485.546.137.09.958.555 3.386.597.272.339.681.571 1.149.571h1.238c.807 0 1.462-.664 1.462-1.476V3.908zm-4.157 4.36c-1.806-.064-2.397-.377-2.397-.394a4.897 4.897 0 00-.47-.258c-1.092-.52-2.167-.499-2.727-.487h-.013l-.2.003a.213.213 0 01-.167-.087.342.342 0 01-.073-.219v-.002c0-.06.03-.118.07-.171.07-.096.176-.174.274-.174h3.734a.61.61 0 00.434-.182.326.326 0 00.05-.07l.02-.034a.408.408 0 01.024-.032.236.236 0 00.038-.06.482.482 0 00.022-.1l.006-.04a.222.222 0 01.009-.037.26.26 0 00.01-.064.62.62 0 00-.616-.622h-3.734a1.47 1.47 0 00-.787.233.602.602 0 00-.092.01L7.961 6.525c-.154.056-.32-.003-.42-.163a.027.027 0 00-.013-.011l-.01-.008c-.05-.095-.081-.154-.064-.21a.193.193 0 01.056-.082v-.002l.003-.003.036-.026c.014-.01.03-.02.042-.03l.016-.012a.95.95 0 01.057-.041c.033-.023.073-.046.115-.071l.064-.039c1.164-.704 3.997-2.14 4.521-2.405a14.4 14.4 0 00.084-.043c.067-.03.149-.05.23-.07.154-.04.32-.067.512-.067.353 0 .63.067.877.207l.135.067 3.327 1.617V8.27zm2.656-.33a.551.551 0 01-.566.575.556.556 0 01-.566-.575c0-.333.238-.574.566-.574.328 0 .566.244.566.574zm-9.137 6.068a6.875 6.875 0 01-.947-1.2c-.376-.587-.633-1.17-.765-1.736-.146-.613-.025-1.123.333-1.434.21-.182.493-.289.802-.305.028-.003.053-.003.08-.003.3 0 .606.084.889.243.106.06.216.124.333.197a.09.09 0 00.076 0 78.86 78.86 0 00.336-.197c.286-.16.59-.243.888-.243.028 0 .056 0 .081.003.308.016.594.123.801.305.359.31.48.82.334 1.434-.132.563-.39 1.149-.765 1.737a6.998 6.998 0 01-.936 1.187l-.011.012a2.97 2.97 0 01-.294.268.915.915 0 01-.328.152.616.616 0 01-.103.014h-.079a.862.862 0 01-.434-.165 2.782 2.782 0 01-.291-.27zm5.137 3.624c.03-.028.05-.053.056-.081.017-.056-.014-.115-.064-.21a.043.043 0 00-.01-.01l-.01-.01c-.101-.16-.266-.218-.423-.162l-2.983 1.042c-.009.003-.02.003-.028.003a.547.547 0 01-.065.005 1.47 1.47 0 01-.787.233H8.137a.617.617 0 01-.616-.622c0-.023.006-.044.011-.064a.385.385 0 00.009-.037l.006-.04a.473.473 0 01.022-.1c.009-.021.023-.04.037-.06a.475.475 0 00.045-.066c.014-.024.028-.05.05-.07a.614.614 0 01.433-.182h3.734c.101 0 .208-.079.275-.174a.303.303 0 00.07-.168v-.003a.348.348 0 00-.073-.218.214.214 0 00-.17-.087l-.2.003h-.002c-.558.011-1.638.033-2.734-.488a4.864 4.864 0 01-.471-.257c-.008-.009-.6-.322-2.403-.39v.003h-.003v3.137l3.33 1.617.135.064c.246.14.527.207.877.207.193 0 .358-.028.512-.067l.01-.002c.079-.02.158-.038.223-.068l.084-.043c.524-.265 3.357-1.7 4.52-2.405.061-.034.12-.071.17-.103l.01-.006.046-.035.01-.008.014-.01.022-.016c.022-.015.044-.03.056-.04l.004-.006.002-.003.001-.001.002-.002zm-11.55-1.885a.556.556 0 00-.568-.571.55.55 0 00-.566.571c0 .333.239.574.566.574.328 0 .569-.24.569-.574zm12.6.955a.34.34 0 00.042.076c.404.779.19 1.526-.59 2.025-1.061.676-4.097 2.216-4.78 2.563h-.002l-.003.002-.129.065a2.991 2.991 0 01-1.272.258c-.574 0-1.058-.123-1.45-.356l-2.905-1.4c-.073.74-.69 1.328-1.443 1.328H3.465c-.804 0-1.46-.664-1.46-1.477v-4.711c0-.813.656-1.476 1.46-1.476h1.238c.468 0 .877.232 1.149.571 2.428.042 3.249.507 3.389.597.905.57 1.93.555 2.485.546h.271c.745.008 1.336.588 1.437 1.345l1.902-.673c.726-.26 1.53.045 1.9.717z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareFilled;
