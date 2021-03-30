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

const IconCloverLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.359 17.392c-.493 1.103-1.221 1.823-1.952 1.932-.55.078-1.096-.18-1.628-.776l-.115-.129-.176-.014c-.818-.07-1.359-.344-1.605-.815-.33-.63-.134-1.613.524-2.635.848-1.321 3.683-2.758 4.907-3.262.28 1.243.686 4.273.045 5.699m-6.3-6.469c-1.16-.468-1.918-1.162-2.027-1.86-.084-.52.19-1.041.815-1.548l.134-.11.017-.167c.073-.779.361-1.294.854-1.53.21-.1.462-.15.74-.15.588 0 1.3.224 2.028.65 1.389.809 2.898 3.505 3.428 4.67-1.308.269-4.493.655-5.989.045m6.793-5.998c.493-1.103 1.221-1.826 1.952-1.932.064-.012.129-.014.193-.014.482 0 .964.266 1.434.79l.115.128.177.017c.818.07 1.358.344 1.605.815.33.63.134 1.613-.527 2.635-.849 1.322-3.68 2.758-4.907 3.262-.275-1.243-.684-4.273-.042-5.701m6.299 6.468c1.157.47 1.916 1.165 2.028 1.86.084.52-.19 1.042-.812 1.548l-.138.11-.016.168c-.073.778-.362 1.293-.857 1.529-.662.316-1.695.128-2.768-.502-1.3-.753-2.689-3.139-3.297-4.407-.002-.003-.002-.006-.005-.009-.042-.087-.09-.185-.123-.257 1.31-.264 4.492-.653 5.988-.04m-2.258 8.331c1.684 1.347 3.555 2.106 5.185 2.106.073 0 .148-.003.221-.006a.7.7 0 00.336-.106.4.4 0 00.12-.574c-.122-.174-.313-.162-.548-.146-1.448.048-3.176-.647-4.75-1.91l-.07-.055a10.84 10.84 0 01-3.124-4.058c.575.77 1.216 1.462 1.871 1.843.872.512 1.731.772 2.485.772a2.61 2.61 0 001.131-.238c.516-.246 1.152-.798 1.314-2.03.96-.84 1.064-1.652.978-2.195-.16-.997-1.09-1.907-2.546-2.498-1.034-.42-2.622-.442-4.04-.333 1.222-.692 2.507-1.585 3.093-2.498.832-1.285 1.036-2.54.56-3.442-.258-.49-.837-1.095-2.131-1.251-.886-.916-1.737-1.017-2.306-.93-1.047.154-2.002 1.039-2.621 2.428-.443.983-.468 2.495-.35 3.842-.726-1.162-1.664-2.383-2.622-2.94-1.35-.793-2.67-.989-3.613-.535-.516.246-1.152.798-1.314 2.03-.96.84-1.064 1.652-.977 2.195.16.997 1.09 1.907 2.548 2.495.706.291 1.675.392 2.67.392.459 0 .921-.022 1.37-.059-1.225.692-2.508 1.585-3.096 2.498-.832 1.286-1.036 2.54-.56 3.442.258.49.838 1.095 2.132 1.249.728.756 1.436.955 1.983.955.115 0 .224-.012.325-.026 1.047-.15 2.002-1.038 2.621-2.425.266-.59.378-1.375.404-2.198a11.666 11.666 0 003.26 4.15"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloverLight;
