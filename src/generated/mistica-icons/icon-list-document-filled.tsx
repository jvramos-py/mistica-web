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

const IconListDocumentFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.575 12.632h-5.566a.606.606 0 01-.605-.602c0-.331.272-.603.605-.603h5.566c.333 0 .605.27.605.603 0 .33-.272.602-.605.602m0 4.011h-5.566a.606.606 0 01-.605-.602c0-.334.272-.603.605-.603h5.566c.333 0 .605.27.605.603 0 .33-.272.6-.605.602M10.93 7.399h5.563a.604.604 0 110 1.204H10.93a.606.606 0 01-.606-.601c0-.334.272-.603.606-.603m-2.726 5.434a.803.803 0 11-.001-1.603.803.803 0 01.001 1.603m0 4.009a.803.803 0 01-.804-.801.803.803 0 011.608 0 .802.802 0 01-.804.8m-.008-9.7c.442 0 .804.36.806.802a.802.802 0 01-.806.8.803.803 0 01-.804-.8c0-.443.361-.801.804-.801m9.778-4.992H5.992c-.728 0-1.392.756-1.392 1.588v16.507c0 .86.639 1.591 1.392 1.591l11.98.003c.754 0 1.393-.728 1.393-1.591V3.741c.002-.832-.661-1.591-1.39-1.591"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconListDocumentFilled;
