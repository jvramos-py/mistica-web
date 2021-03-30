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

const IconExchangeFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.507 13.487a1.35 1.35 0 01-.305.499 1.314 1.314 0 01-.49.283 2.519 2.519 0 01-.846.132c-.331 0-.614-.048-.85-.132a1.333 1.333 0 01-.481-.28 1.326 1.326 0 01-.305-.502 2.525 2.525 0 01-.135-.862c0-.404.07-.731.193-.998.068-.142.146-.271.25-.372.14-.135.316-.235.532-.305a2.6 2.6 0 01.796-.11c.305 0 .565.037.792.11.219.07.4.173.54.308.104.1.183.227.25.37.126.266.196.593.196.997 0 .333-.047.619-.137.862m8.087-7L19.02 3.882c-.183-.227-.516-.266-.802-.033l-2.59 2.638a.557.557 0 00-.068.583.53.53 0 00.476.305l.916.006c-.173.874-.815 2.56-3.16 3.3-.01-.009-.016-.02-.025-.028-.445-.429-1.084-.647-1.904-.647-.818 0-1.46.218-1.902.647-.011.01-.017.025-.028.036-2.336-.725-2.98-2.37-3.154-3.308l.918-.006a.53.53 0 00.482-.308c.09-.19.062-.42-.098-.613l-2.53-2.569-.086-.09a.513.513 0 00-.392-.112.493.493 0 00-.322.163l-2.6 2.636a.551.551 0 00-.073.582.53.53 0 00.48.309l1.03.005c.126.967.625 3.177 2.544 4.826-3.863 2.082-3.91 6.239-3.91 6.28 0 .872.705 1.583 1.588 1.592.862 0 1.577-.706 1.588-1.575.005-.392.201-3.523 4.398-4.14.056.07.103.149.168.21.442.429 1.08.645 1.899.645.82 0 1.46-.216 1.904-.645.062-.058.11-.131.163-.198 4.081.641 4.28 3.739 4.283 4.123A1.595 1.595 0 0019.8 20.08c.877 0 1.588-.714 1.588-1.596 0-.042-.045-4.163-3.834-6.255 1.95-1.636 2.459-3.804 2.59-4.852l1.026-.008a.529.529 0 00.482-.308.525.525 0 00-.06-.575"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExchangeFilled;
