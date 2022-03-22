/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAdnRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.22 7.382c1.689 1.057 3.302 2.348 3.302 4.611s-1.613 3.555-3.305 4.608c1.69 1.056 3.303 2.347 3.303 4.61a.633.633 0 01-.645.623.634.634 0 01-.644-.622c0-1.838-1.46-2.821-3.221-3.877-1.76 1.056-3.221 2.036-3.221 3.877a.633.633 0 01-.645.622.635.635 0 01-.644-.622c0-2.264 1.613-3.555 3.303-4.611-.757-.47-1.493-.994-2.082-1.627a.618.618 0 01-.148-.16c-.642-.75-1.07-1.656-1.07-2.82 0-2.261 1.613-3.555 3.302-4.612-1.689-1.056-3.302-2.347-3.302-4.61 0-.345.288-.622.644-.622.356 0 .644.28.644.622 0 1.84 1.46 2.82 3.222 3.877 1.761-1.054 3.22-2.037 3.22-3.877 0-.345.29-.622.645-.622.356 0 .644.28.644.622 0 2.263-1.613 3.554-3.302 4.61zm-1.21.732c-.434.26-.843.52-1.224.784h2.45a21.176 21.176 0 00-1.226-.784zm-2.574 5.759h5.15c.28-.37.483-.776.578-1.244H8.859c.095.468.294.877.577 1.244zm3.761 1.243h-2.372c.367.255.767.505 1.185.757.42-.252.818-.502 1.188-.757zm1.412-4.974H9.413a3.004 3.004 0 00-.557 1.243h6.31a3.004 3.004 0 00-.557-1.243z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAdnRegular;
