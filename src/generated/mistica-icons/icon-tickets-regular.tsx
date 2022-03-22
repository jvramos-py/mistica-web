/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTicketsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.862 22.78c.132.143.315.22.503.22.192 0 .37-.082.507-.22L21.79 10.258a.772.772 0 000-1.056l-2.41-2.529a.707.707 0 00-1.01 0 .576.576 0 01-.823 0 .63.63 0 010-.864.777.777 0 000-1.06l-2.409-2.53a.682.682 0 00-1.005 0L2.21 14.747a.772.772 0 000 1.056l2.41 2.529a.69.69 0 001.01 0 .56.56 0 01.823 0c.11.115.169.268.169.432 0 .163-.06.316-.17.431a.772.772 0 000 1.056l2.41 2.53zm.503-1.59l-1.49-1.564a2.16 2.16 0 00.178-.868c0-.562-.21-1.094-.59-1.493a1.949 1.949 0 00-2.245-.432l-1.49-1.564L14.64 3.814l1.486 1.56a2.184 2.184 0 00.411 2.356 1.956 1.956 0 002.25.437l1.49 1.564-10.912 11.46zm1.16-4.577a.529.529 0 01-.173-.03.557.557 0 01-.357-.474l-.196-2.16-1.797-.859a.574.574 0 01-.315-.518.561.561 0 01.329-.509l1.879-.83.233-2.092a.55.55 0 01.375-.47.519.519 0 01.562.172l1.303 1.594 2.002-.404c.21-.043.42.048.544.236a.574.574 0 01.014.614l-1.042 1.761.978 1.91a.58.58 0 01-.046.605.526.526 0 01-.544.206l-1.965-.46-1.395 1.53a.515.515 0 01-.388.178zm-.004-3.556a.56.56 0 01.311.456l.114 1.257.791-.873a.512.512 0 01.503-.159l1.12.264-.567-1.113a.584.584 0 01.018-.562l.558-.95-1.11.226a.516.516 0 01-.508-.188l-.709-.873-.128 1.137a.555.555 0 01-.324.451l-1.038.466.97.46z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.714 4.062A2.069 2.069 0 0019.644 2h-2.19a1.185 1.185 0 00-1.18 1.022.68.68 0 01-1.344 0A1.18 1.18 0 0013.754 2H11.56c-.989 0-1.84.703-2.025 1.678-.03.012-.06.022-.09.032a.883.883 0 00-.162.066l-1.703.952c-.49.272-.703.866-.496 1.387a.546.546 0 01-.24.658.548.548 0 01-.69-.137 1.116 1.116 0 00-1.448-.3l-1.703.953A1.885 1.885 0 002.1 8.434a1.875 1.875 0 00.17 1.446l6.113 10.832a1.89 1.89 0 001.148.901 1.902 1.902 0 001.451-.173l1.717-.961c.174-.095.308-.235.407-.4h.663a1.196 1.196 0 001.168-.964.678.678 0 011.328 0c.11.56.602.963 1.168.963h2.21c1.14 0 2.068-.921 2.07-2.061V4.062zm-1.221 0v13.955c0 .468-.38.846-.849.843l-2.179.02a1.902 1.902 0 00-1.863-1.527c-.905 0-1.686.644-1.832 1.507h-2.21a.848.848 0 01-.849-.846v-9.97l.001-.032a.541.541 0 000-.065V4.062a.85.85 0 01.848-.846l2.163-.02a1.91 1.91 0 001.88 1.62c.938 0 1.744-.698 1.85-1.6h2.191a.85.85 0 01.849.846zm-9.44 15.944l-.666.375a.697.697 0 01-.942-.26L3.333 9.282V9.28a.686.686 0 01.266-.933l1.634-.913a1.777 1.777 0 002.207.398 1.762 1.762 0 00.807-2.087l1.246-.7v2.641L5.56 9.888h-.003a.606.606 0 00-.23.826l3.978 7.05a.582.582 0 00.188.191v.059a2.058 2.058 0 001.56 1.992zm-1.56-4.387l-2.801-4.966L9.493 9.08v6.538zm3.28-.28V6.787h5.773v8.552h-5.773zm6.994-9.16a.61.61 0 00-.61-.608h-6.992a.61.61 0 00-.61.608v9.768a.61.61 0 00.61.608h6.992a.61.61 0 00.61-.608V6.179z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTicketsRegular;
