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

const IconShieldRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.588 5.835c.008 1.736.07 6.327.437 8.45.409 2.376 4.936 5.093 6.96 6.102 2.026-1.012 6.561-3.729 6.97-6.101.361-2.126.42-6.717.429-8.454-1.673.084-2.726-.616-3.737-1.294-1.006-.675-1.955-1.311-3.656-1.314h-.005c-1.698 0-2.65.639-3.656 1.314-1.014.68-2.067 1.398-3.742 1.297zm7.398 15.851a.597.597 0 01-.258-.059c-.745-.355-7.286-3.577-7.896-7.128-.474-2.743-.457-9.082-.457-9.35 0-.191.087-.367.235-.485a.611.611 0 01.521-.11c1.603.258 2.449-.316 3.524-1.039C8.717 2.804 9.92 2 11.983 2h.008c2.065.003 3.266.807 4.325 1.518 1.076.723 1.927 1.289 3.552 1.034a.625.625 0 01.502.137.625.625 0 01.226.462c0 .27.017 6.608-.448 9.35-.61 3.552-7.16 6.773-7.905 7.13a.637.637 0 01-.257.055z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShieldRegular;
