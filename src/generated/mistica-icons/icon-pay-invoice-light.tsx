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

const IconPayInvoiceLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.182 2.16a.31.31 0 01.069.008l-.069-.008a.279.279 0 01.184.069.09.09 0 01.015.012l5.336 5.336a.278.278 0 01.082.198v13.209c0 .565-.325.893-.891.893l-.487-.002H7.829c-.59 0-.918-.331-.918-.925v-6.89c-1.463-.05-2.612-.468-3.412-1.239-.888-.857-1.339-2.14-1.339-3.812 0-1.673.451-2.955 1.339-3.813.8-.774 1.95-1.19 3.415-1.238v-.882c0-.577.333-.91.915-.91l.375-.002h.291l.169-.001.59-.001h.22l.988-.001h.268l5.452-.001zm-.28.563H9.471l-.221.001H8.203l-.12.001h-.254c-.271 0-.355.082-.355.351l-.001.88.038.002c1.465.048 2.616.464 3.417 1.238.887.858 1.338 2.14 1.338 3.813 0 1.672-.45 2.955-1.338 3.812-.809.78-1.97 1.197-3.457 1.24v6.889c0 .286.078.364.358.364h13.079c.255 0 .33-.078.333-.333V8.059h-2.597l-.107-.001h-.173l-.12-.002c-.636-.002-1.161-.2-1.552-.567-.506-.474-.787-1.23-.79-2.209V2.723zm2.61 14.765a.28.28 0 01.281.28.28.28 0 01-.28.28h-8.28a.28.28 0 01-.28-.28.28.28 0 01.28-.28h8.28zm.004-3.278a.28.28 0 01.28.28c0 .155-.129.28-.283.28H11.39a.28.28 0 01-.28-.28.28.28 0 01.28-.28h7.126zM7.213 4.513c-1.46 0-2.577.367-3.328 1.087-.775.748-1.168 1.893-1.168 3.409 0 1.515.393 2.66 1.168 3.409.748.722 1.869 1.087 3.328 1.087 1.46 0 2.577-.365 3.328-1.087.773-.748 1.168-1.894 1.168-3.41 0-1.515-.392-2.66-1.168-3.408-.748-.723-1.868-1.087-3.328-1.087zm-.042 1.053a.28.28 0 01.28.28v.302c.406.044.78.165 1.079.35.134.082.207.2.207.326a.337.337 0 01-.336.336.515.515 0 01-.213-.059l-.003-.003a2.306 2.306 0 00-.733-.266L7.45 8.631l.06.008c.728.117 1.54.484 1.54 1.532.005.912-.599 1.515-1.599 1.638v.52a.28.28 0 01-.28.28.28.28 0 01-.28-.28l-.001-.505-.059-.002a3.023 3.023 0 01-1.473-.528.364.364 0 01-.171-.313.348.348 0 01.353-.345.426.426 0 01.232.076c.372.248.746.392 1.118.433V9.26l-.13-.02c-1.188-.213-1.444-.924-1.444-1.497 0-.916.61-1.528 1.574-1.606v-.29a.28.28 0 01.28-.28zm11.342 5.367a.28.28 0 01.28.28.28.28 0 01-.28.28h-5.336a.28.28 0 01-.28-.28.28.28 0 01.28-.28h5.336zM7.453 9.342v1.788c.565-.094.903-.432.903-.928 0-.339-.113-.7-.902-.86zm-1.44-1.639c0 .313.106.683.877.845l.002-1.736c-.547.062-.88.39-.88.891zm13.028-.206h.518l.2.001h1.083l-4.378-4.38V5.28c.002.824.235 2.208 1.778 2.216l.653.001h.146z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPayInvoiceLight;
