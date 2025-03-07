/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPayInvoicePoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.292 21.287h13.43c.195 0 .345.16.345.356a.35.35 0 01-.344.357H4.6V7.211L9.626 2h9.445v15.36a.35.35 0 01-.344.357.35.35 0 01-.344-.357V2.718h-8.267v4.996H5.292v13.573zM9.424 3.22L5.777 7h3.647V3.22zm9.99 16.283a.702.702 0 01-.687.713.702.702 0 01-.688-.713c0-.393.309-.713.688-.713.38 0 .688.315.688.713zm-8.438-5.362v1.787c0 .402-.305.718-.693.713A.35.35 0 009.94 17a.35.35 0 00.344.356h4.313A.35.35 0 0014.94 17a.35.35 0 00-.344-.357h-3.113a1.44 1.44 0 00.185-.713v-1.787h1.724a.35.35 0 00.344-.357.35.35 0 00-.344-.356h-1.724v-1.61c0-.685.538-1.248 1.204-1.248.282 0 .542.096.758.28a.34.34 0 00.485-.056.365.365 0 00-.053-.502 1.848 1.848 0 00-1.19-.44c-1.045 0-1.896.883-1.896 1.966v1.61h-.344a.35.35 0 00-.344.356.35.35 0 00.344.357h.344z"
            />
        </svg>
    );
};

export default IconPayInvoicePoundLight;
