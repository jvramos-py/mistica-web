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

const IconCareHealthRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.115 16.978c.434-.275.442-.435.266-.782-.18-.314-.515-.434-.82-.33l-3.69 1.252a5.27 5.27 0 00-.314.126 1.777 1.777 0 01-.94.271h-4.85a.601.601 0 01-.602-.602v-.003c0-.327.266-.605.603-.605h4.848c.314 0 .642-.327.642-.644 0-.288-.18-.588-.507-.588h-.275c-.804.017-2.479.056-4.061-.936-.009-.008-.821-.473-3.42-.538v4.373l4.613 2.224c.336.193.74.283 1.227.283.417 0 .762-.064 1.042-.193.025-.017 4.767-2.376 6.238-3.308zm-14.32 2.72V13.09a.219.219 0 00-.218-.219H3.429a.224.224 0 00-.225.219v6.607a.23.23 0 00.225.227H5.57a.229.229 0 00.225-.227zm15.645-4.065c.288.55.568 1.577-.684 2.367-1.515.958-6.162 3.277-6.364 3.381-.448.202-.972.308-1.557.308-.706 0-1.308-.146-1.79-.428L7 19.31v.386a1.43 1.43 0 01-1.429 1.435H3.43A1.434 1.434 0 012 19.697V13.09c0-.787.639-1.426 1.429-1.426H5.57c.538 0 .995.3 1.244.734 3.098.05 4.093.619 4.269.74 1.244.78 2.625.75 3.373.733h.31c.457.006.891.199 1.205.532.305.322.49.773.49 1.264l2.706-.942a1.848 1.848 0 012.233.838c-.003-.003.039.07.039.07zM4.479 13.53c.426 0 .714.289.714.717 0 .418-.288.71-.714.71-.417 0-.714-.292-.714-.71 0-.425.297-.717.714-.717zM15.045 3.207c-2.874 0-4.27 1.404-4.27 4.286 0 2.882 1.396 4.283 4.27 4.283 2.877 0 4.274-1.4 4.274-4.283-.002-2.882-1.4-4.286-4.274-4.286zm0 9.779c-3.53 0-5.474-1.95-5.474-5.49C9.57 3.95 11.513 2 15.045 2s5.476 1.952 5.476 5.493c0 3.543-1.947 5.493-5.476 5.493zM12.728 7.21v.566h1.432c.333 0 .602.269.602.602l.003 1.437h.563V8.378c0-.333.269-.605.602-.605h1.431v-.566H15.93a.604.604 0 01-.602-.605V5.168h-.566l.003 1.437a.605.605 0 01-.6.605h-1.437zm.832 1.773h-1.123c-.493 0-.91-.39-.91-.849v-1.28c0-.462.417-.851.91-.851h1.12v-1.13c0-.495.39-.912.846-.912h1.278c.46 0 .846.417.846.916V6h1.123c.493 0 .91.39.91.849v1.28c0 .46-.417.849-.91.849h-1.123v1.128c0 .496-.387.914-.846.914h-1.272c-.46 0-.846-.418-.846-.914l-.003-1.123z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareHealthRegular;
