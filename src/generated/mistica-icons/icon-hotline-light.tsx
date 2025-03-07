/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHotlineLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.006 21.39a.34.34 0 00.329.269.232.232 0 00.073-.014c2.33-.57 4.95-2.286 7.38-4.827 2.265-2.376 3.799-4.85 4.43-7.163.638-2.326.282-4.33-1-5.645L18.846 2.6c-.741-.76-1.889-.804-2.564-.1l-2.058 2.157c-.67.705-.619 1.9.122 2.658l1.438 1.478c1.03 1.06.363 3.255-1.629 5.34-1.996 2.092-4.114 2.815-5.145 1.755l-1.438-1.477a1.957 1.957 0 00-1.29-.598 1.626 1.626 0 00-1.274.503l-2.057 2.156c-.671.705-.62 1.9.121 2.658l1.373 1.41c.22.225.468.432.74.607.16.103.369.054.468-.112a.358.358 0 00-.108-.486 3.708 3.708 0 01-.624-.511L3.557 18.64c-.476-.49-.528-1.235-.117-1.666l2.057-2.156a.966.966 0 01.763-.292c.307.014.61.153.844.396L8.542 16.4c1.312 1.347 3.824.624 6.103-1.765 2.269-2.38 2.936-4.985 1.624-6.332L14.83 6.826c-.477-.49-.529-1.235-.117-1.667l2.057-2.155c.411-.431 1.13-.386 1.607.103l1.373 1.41c1.113 1.141 1.399 2.856.823 4.954-.602 2.2-2.075 4.571-4.262 6.862-2.339 2.447-4.847 4.095-7.055 4.634a.351.351 0 00-.251.422zm-2.36-.09c0-.387.302-.701.675-.701.377 0 .675.314.675.7a.69.69 0 01-.675.701.69.69 0 01-.676-.7zm5.313-9.225a.354.354 0 00.087-.336L11.37 9.12a4.67 4.67 0 00.373-1.84c0-2.52-1.98-4.572-4.41-4.572-2.429 0-4.408 2.047-4.408 4.571 0 2.524 1.98 4.572 4.409 4.572.62 0 1.212-.13 1.775-.386l2.525.7a.29.29 0 00.087.014.332.332 0 00.238-.104zm-4.625-.925C5.277 11.15 3.6 9.412 3.6 7.28c0-2.134 1.677-3.872 3.734-3.872s3.733 1.738 3.733 3.871a3.94 3.94 0 01-.36 1.657.36.36 0 00-.021.243l.559 2.155-2.08-.579a.29.29 0 00-.086-.013.34.34 0 00-.147.035 3.59 3.59 0 01-1.598.373zM7.32 4.81a.514.514 0 00-.507.525c0 .292.225.525.507.525a.514.514 0 00.506-.525.514.514 0 00-.506-.526zm.36 2.105v2.457a.367.367 0 01-.36.373c-.2 0-.36-.167-.36-.373V6.915c0-.206.16-.372.36-.372.199 0 .36.166.36.372z"
            />
        </svg>
    );
};

export default IconHotlineLight;
