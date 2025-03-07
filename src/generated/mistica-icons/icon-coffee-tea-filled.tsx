/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCoffeeTeaFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.807 6.115c.037.075.075.189.037.264l-.226.641c-.15.377.076.83.453.98a.642.642 0 00.264.039.773.773 0 00.716-.49l.265-.717c0-.038 0-.038.037-.076a2.076 2.076 0 00-.188-1.433L16.9 4.87a.367.367 0 01-.038-.34l.377-.64c.151-.378.038-.83-.34-1.019-.377-.226-.83-.113-1.018.264l-.415.717c0 .038-.037.038-.037.075-.264.566-.189 1.207.113 1.735l.264.453zm-5.243 0c.038.075.075.15.038.264l-.264.641a.764.764 0 00.415.98c.113.039.226.039.301.039a.774.774 0 00.717-.49l.264-.717c0-.038.038-.076.038-.076a2.075 2.075 0 00-.189-1.433l-.264-.453a.367.367 0 01-.038-.34l.377-.678c.19-.377.076-.83-.301-1.019-.377-.188-.83-.075-1.019.302l-.377.717s-.038.038-.038.075c-.264.566-.188 1.207.114 1.735l.226.453zm2.64-.34c.076.151.113.302.076.453l-.302.792a.752.752 0 00.453.98.642.642 0 00.264.039.774.774 0 00.716-.49l.302-.83c0-.038 0-.038.038-.076a2.035 2.035 0 00-.227-1.622l-.34-.566c-.112-.15-.112-.377-.037-.565l.415-.793a.776.776 0 00-.302-1.018.776.776 0 00-1.018.302l-.415.83s0 .037-.038.037a2.241 2.241 0 00.113 1.962l.302.565zM5.962 9.17v1.509H4.831a2.27 2.27 0 00-2.264 2.263v3.395A2.27 2.27 0 004.832 18.6H6.3a5.256 5.256 0 004.942 3.394h4.903c2.905 0 5.28-2.376 5.28-5.28V9.17H5.963zm-1.131 7.921a.757.757 0 01-.755-.754v-3.395c0-.415.34-.754.755-.754h1.131v4.526c0 .113 0 .264.038.377H4.83z"
            />
        </svg>
    );
};

export default IconCoffeeTeaFilled;
