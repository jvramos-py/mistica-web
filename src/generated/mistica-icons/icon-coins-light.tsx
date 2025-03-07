/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCoinsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.957 6.535a8.06 8.06 0 00-1.19-1.062C15.29 3.372 12.873 2 10.148 2 5.654 2 2 5.724 2 10.302a8.336 8.336 0 003.398 6.738A8.264 8.264 0 007.9 19.358C9.39 20.981 11.502 22 13.848 22a8.072 8.072 0 003.882-1 .38.38 0 00.147-.512.365.365 0 00-.503-.15 7.31 7.31 0 01-3.526.909 7.22 7.22 0 01-3.568-.942c.554.12 1.128.188 1.72.188 4.493 0 8.147-3.724 8.147-8.302 0-1.246-.275-2.43-.758-3.492a7.584 7.584 0 011.867 4.999 7.731 7.731 0 01-.858 3.535.385.385 0 00.152.512.37.37 0 00.502-.155A8.414 8.414 0 0022 13.703a8.344 8.344 0 00-4.043-7.168zM2.744 10.297c0-4.163 3.322-7.544 7.403-7.544 4.085 0 7.403 3.386 7.403 7.544 0 4.164-3.323 7.545-7.403 7.545-4.08.004-7.403-3.381-7.403-7.544zM12 19.73a7.25 7.25 0 01-4.54-1.599c.843.3 1.749.469 2.692.469 4.493 0 8.147-3.724 8.147-8.303 0-.96-.162-1.883-.46-2.743a7.62 7.62 0 011.564 4.632c0 4.163-3.322 7.544-7.403 7.544zm.37-8.336c0 1.12-1.166 2.028-2.597 2.028-.612 0-1.209-.169-1.678-.478a.38.38 0 01-.11-.521.364.364 0 01.513-.111c.35.231.8.357 1.275.357 1.004 0 1.857-.585 1.857-1.275s-.82-1.26-1.834-1.275h-.398a.374.374 0 01-.37-.377c0-.208.166-.377.37-.377h.403c.995-.01 1.83-.512 1.83-1.096 0-.594-.849-1.096-1.858-1.096-.394 0-.773.077-1.095.217a.367.367 0 01-.488-.193.382.382 0 01.19-.498 3.459 3.459 0 011.393-.285c1.454 0 2.597.812 2.597 1.85 0 .618-.408 1.155-1.048 1.493.64.372 1.048.966 1.048 1.637zm7.038 8.713a.748.748 0 00.739-.754.747.747 0 00-.74-.753.747.747 0 00-.739.753c0 .416.332.754.74.754z"
            />
        </svg>
    );
};

export default IconCoinsLight;
