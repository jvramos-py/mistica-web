/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCodeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.413 4.622c.787 0 1.428.62 1.428 1.379v12.008c0 .759-.641 1.378-1.428 1.378H3.586c-.79.003-1.431-.616-1.431-1.375V6c0-.76.641-1.379 1.431-1.379h16.827zM4.785 6.295a.55.55 0 00-.56.535v.002c0 .297.25.538.557.538a.548.548 0 00.56-.538.548.548 0 00-.557-.537zm15.852 11.717V8.348H3.36v9.664c0 .117.1.215.224.215h16.829a.221.221 0 00.224-.215zM7.02 6.832a.548.548 0 00-.558-.537H6.46a.548.548 0 00-.557.537c0 .297.25.538.557.538a.548.548 0 00.56-.538zm1.12-.537h-.003a.55.55 0 00-.56.535v.002c0 .297.25.538.56.538a.548.548 0 00.56-.538.548.548 0 00-.557-.537zm.955 5.736a.528.528 0 00.02-.748.579.579 0 00-.796-.036l-2.294 2.006a.53.53 0 00-.006.801l2.295 2.036a.576.576 0 00.815-.048.53.53 0 00-.05-.745l-1.844-1.641 1.84-1.608.01-.008.01-.009zm6.538-.784l2.294 2.006c.115.1.182.246.185.397a.53.53 0 01-.182.4l-2.294 2.043a.584.584 0 01-.384.146.57.57 0 01-.412-.174.53.53 0 01.009-.748.146.146 0 01.022-.02l1.843-1.641-1.84-1.605a.528.528 0 01-.059-.745l.01-.011a.582.582 0 01.808-.048zm-2.216.647a.534.534 0 00-.283-.717.57.57 0 00-.742.274l-1.86 4.003a.532.532 0 00.283.715c.073.03.151.047.23.047a.564.564 0 00.512-.32l1.86-4.002z"
            />
        </svg>
    );
};

export default IconCodeFilled;
