/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBriefcaseBusinessFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.359 6.038h3.422A2.229 2.229 0 0122 8.274v10.99c0 1.235-1 2.236-2.223 2.236H4.223A2.233 2.233 0 012 19.264V8.274c0-1.235 1-2.236 2.223-2.236h3.243C7.945 4.02 9.85 2.5 12.002 2.5c2.129 0 3.892 1.459 4.357 3.538zM6.816 18.7c.408 0 .74-.334.74-.744v-1.115a.743.743 0 00-.74-.744.743.743 0 00-.74.744v1.116c0 .41.333.743.74.743zm4.262-.744V14.42a.743.743 0 00-.74-.744.743.743 0 00-.739.744v3.537c0 .41.332.744.74.744a.743.743 0 00.739-.744zm2.778.744c.408 0 .74-.334.74-.744v-6.145a.743.743 0 00-.74-.744.743.743 0 00-.74.744v6.146c0 .41.332.743.74.743zM9.087 5.851h5.665a2.955 2.955 0 00-2.75-1.863c-1.275 0-2.422.772-2.915 1.864zm8.471 12.85c.408 0 .74-.334.74-.744V9.39a.743.743 0 00-.74-.744.743.743 0 00-.74.744v8.567c0 .41.332.744.74.744z"
            />
        </svg>
    );
};

export default IconBriefcaseBusinessFilled;
