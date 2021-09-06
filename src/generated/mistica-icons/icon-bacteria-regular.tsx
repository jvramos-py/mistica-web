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

const IconBacteriaRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.412 11.053c.266-.005 1.339-.106 1.339-1.42 0-1.308-1.07-1.42-1.345-1.426-.033 0-.073-.003-.11-.003h-.021c-.283.003-1.328.101-1.328 1.42 0 1.32 1.056 1.426 1.339 1.43h.126zm.02-3.829c1.148.028 2.305.784 2.305 2.412 0 1.63-1.157 2.38-2.311 2.403l-.101.003h-.053c-1.149-.017-2.308-.767-2.308-2.412 0-1.644 1.156-2.392 2.302-2.403h.034l.131-.003zM9.1 12.087c.148-.003.745-.059.745-.79 0-.728-.594-.79-.748-.793h-.073c-.157.003-.736.056-.736.79 0 .737.588.793.745.796H9.1v-.003zm.022-2.572c.821.023 1.706.589 1.706 1.78 0 1.198-.888 1.758-1.711 1.775h-.104c-.826-.011-1.714-.574-1.714-1.779 0-1.157.862-1.767 1.708-1.773h.037l.078-.003zm4.572 6.138c.182-.065.888-.384.582-1.28-.201-.589-.596-.715-.899-.715-.154 0-.283.034-.35.053-.028.009-.062.02-.092.028-.19.068-.883.376-.577 1.278.201.59.593.72.893.72.154 0 .286-.034.353-.056l.09-.028zm-.317-2.98c.852 0 1.538.517 1.832 1.383.437 1.283-.308 2.207-1.188 2.524l-.112.039a2.143 2.143 0 01-.655.104c-.846 0-1.53-.521-1.826-1.39-.44-1.291.305-2.213 1.196-2.526l.112-.037a2.17 2.17 0 01.641-.098zm-1.207 4.915c1.633-.033 5.442-.65 5.442-5.722 0-5.082-3.834-5.723-5.484-5.762-.149 0-.32-.009-.493-.009h-.123c-1.62.017-5.387.608-5.387 5.729 0 1.708.535 5.697 5.443 5.764h.602zm8.899-6.361c.336 0 .616.28.616.616 0 .336-.28.616-.616.616h-2.24c-.099 1.83-.656 3.146-1.43 4.073l1.404 1.404a.617.617 0 010 .868.649.649 0 01-.434.182.616.616 0 01-.434-.182l-1.412-1.412c-1.446 1.123-3.185 1.373-4.065 1.412v2.266c0 .336-.28.616-.616.616a.622.622 0 01-.616-.616v-2.258c-.927-.058-2.636-.31-4.048-1.437L5.75 18.804a.634.634 0 01-.437.182.617.617 0 01-.434-1.05l1.428-1.429c-.748-.93-1.288-2.235-1.395-4.048H2.616A.622.622 0 012 11.843c0-.336.28-.616.616-.616h2.3c.098-1.824.633-3.135 1.378-4.065L4.882 5.751a.615.615 0 01.871-.868l1.404 1.403c1.428-1.124 3.16-1.37 4.073-1.412V2.616A.62.62 0 0111.846 2c.336 0 .616.28.616.616v2.275c.894.05 2.61.31 4.04 1.428l1.436-1.437a.615.615 0 01.872.869l-1.42 1.42c.77.927 1.335 2.232 1.436 4.056h2.244z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBacteriaRegular;
