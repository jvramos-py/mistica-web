/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCircuitsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.293 4.365A1.84 1.84 0 0120.147 2.5c1.038 0 1.848.82 1.848 1.865a1.84 1.84 0 01-1.853 1.864c-.446 0-.816-.147-1.148-.41l-4.849 4.879H7.48a1.075 1.075 0 01-1.038.744c-.626 0-1.11-.486-1.11-1.116 0-.63.48-1.116 1.11-1.116.483 0 .891.296 1.038.744h6.371l4.665-4.693a1.808 1.808 0 01-.223-.896zm.038 8.193a1.866 1.866 0 011.816-1.488c1.038 0 1.853.81 1.853 1.855a1.84 1.84 0 01-1.854 1.865 1.86 1.86 0 01-1.815-1.488H4.147a1.075 1.075 0 01-1.038.744A1.096 1.096 0 012 12.93c0-.63.479-1.116 1.11-1.116.483 0 .89.296 1.037.744h14.184zm-15.222.744a.33.33 0 00.261-.11.337.337 0 00.109-.262c0-.224-.147-.372-.37-.372s-.37.148-.37.372.185.372.37.372zm17.815.41c.223-.22.332-.486.332-.782 0-.296-.11-.558-.332-.782-.185-.224-.484-.334-.777-.334-.626 0-1.11.52-1.11 1.116 0 .296.11.558.332.782.223.224.484.334.777.334.294 0 .593-.11.778-.334zM6.703 10.584c.037-.039.109-.11.109-.263 0-.224-.147-.372-.37-.372s-.37.148-.37.372.185.372.37.372a.33.33 0 00.26-.11zM20.147 5.48c.293 0 .592-.11.777-.334.223-.224.332-.487.332-.782 0-.296-.11-.558-.332-.782-.185-.225-.484-.334-.777-.334-.626 0-1.11.52-1.11 1.116 0 .295.11.558.332.782.223.224.484.334.777.334zM3.108 8.833c.484 0 .891-.295 1.038-.744h6.258l2.11-2.122a1.7 1.7 0 00.962.262 1.84 1.84 0 001.853-1.864A1.84 1.84 0 0013.477 2.5a1.84 1.84 0 00-1.484 2.947l-1.887 1.898H4.147a1.075 1.075 0 00-1.038-.744C2.48 6.601 2 7.088 2 7.717c0 .63.479 1.116 1.11 1.116zm11.145-5.255c.223.224.332.486.332.782 0 .296-.11.596-.332.782-.185.224-.445.334-.777.334-.294 0-.555-.11-.778-.334a1.076 1.076 0 01-.332-.782c.038-.63.522-1.116 1.11-1.116.294 0 .592.11.777.334zM3.11 7.34c.223 0 .37.147.37.372 0 .139-.067.214-.103.255l-.006.007a.33.33 0 01-.26.11.371.371 0 01-.37-.372c0-.225.146-.372.37-.372zm4.371 7.826h8.367l3.598 3.615a.362.362 0 010 .52.415.415 0 01-.26.11.39.39 0 01-.262-.11l-3.37-3.391H7.48a1.075 1.075 0 01-1.038.744c-.626 0-1.11-.487-1.11-1.116 0-.63.48-1.116 1.11-1.116.483 0 .891.295 1.038.744zm-.777.634a.347.347 0 00.109-.262c0-.224-.147-.372-.37-.372s-.37.148-.37.372a.37.37 0 00.37.372.33.33 0 00.26-.11zm13.444 4.955c0-.41.331-.744.739-.744a.743.743 0 010 1.488.743.743 0 01-.74-.744z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCircuitsLight;
