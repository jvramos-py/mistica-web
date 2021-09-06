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

const IconNotConexionFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.595 15.4a5.119 5.119 0 00-1-.788c-.543-.336-1.1-.504-1.66-.504-.158 0-.314.014-.474.042-.72.12-1.423.524-2.095 1.196-.171.17-.278.291-.443.496a.277.277 0 01-.118.025c-.184 0-.54-.115-1.131-.518-.883-.605-1.922-1.614-2.628-2.322l-.084-.082c-.706-.705-1.714-1.747-2.319-2.63-.524-.762-.563-1.134-.496-1.252.205-.165.322-.269.496-.442.672-.673 1.076-1.379 1.199-2.096.12-.72-.034-1.44-.465-2.134a4.86 4.86 0 00-.787-1c-.81-.807-1.65-1.224-2.496-1.241H6.04c-.86 0-1.731.415-2.583 1.23-.305.288-.6.697-.695.829l-.014.017-.016.025c-.796 1.154-.776 2.941.056 5.033.874 2.188 2.568 4.58 4.907 6.92l.006.002.073.073.005.005c2.34 2.34 4.731 4.037 6.919 4.908 1.07.426 2.062.641 2.93.641.826 0 1.54-.193 2.104-.582l.025-.02.017-.011c.134-.095.54-.39.832-.692.831-.871 1.246-1.759 1.226-2.639-.016-.845-.431-1.683-1.238-2.49m-3.826-3.341c-3.053 0-4.832-1.544-4.832-4.838 0-3.3 1.779-4.843 4.832-4.843s4.835 1.543 4.835 4.843-1.782 4.838-4.835 4.838zm-2.07-2.77a.602.602 0 00.852.002l.002-.003L16.77 8.07l1.221 1.224a.604.604 0 00.852.003l.003-.003a.605.605 0 000-.854l-1.222-1.222 1.222-1.224a.604.604 0 00-.852-.854l-1.222 1.22-1.216-1.218a.605.605 0 00-.854.854l1.215 1.218-1.215 1.219a.603.603 0 00-.003.854z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNotConexionFilled;
