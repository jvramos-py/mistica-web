/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHandConnectedRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.42 8.067c0-1.392 1.107-2.5 2.498-2.5a2.485 2.485 0 012.498 2.5c0 .396.324.716.715.716a.72.72 0 00.716-.716c0-2.18-1.75-3.927-3.925-3.927a3.921 3.921 0 00-3.93 3.927.714.714 0 101.427 0z"
            />
            <path
                fill={fillColor}
                d="M10.918 3.428a4.628 4.628 0 014.636 4.639c0 .396.324.716.716.716a.718.718 0 00.715-.716A6.065 6.065 0 0010.918 2 6.063 6.063 0 004.85 8.067c0 .396.324.716.715.716a.72.72 0 00.716-.716 4.626 4.626 0 014.637-4.64z"
            />
            <path
                fill={fillColor}
                d="M17.341 11.642c-.216 0-.428.036-.643.108a1.758 1.758 0 00-1.5-.824c-.18 0-.323.036-.463.072-.284-.68-.928-1.144-1.679-1.144-.108 0-.252 0-.356.036V8.067c0-1-.783-1.784-1.782-1.784-1 0-1.783.784-1.783 1.784v5.067c-.855.252-1.427 1.036-1.427 2.035v.284c0 2.252 1.963 4.392 2.678 5.067v.752c0 .396.324.716.716.716a.718.718 0 00.715-.716V20.2a.636.636 0 00-.252-.535c-.036-.037-2.426-2.212-2.426-4.252v-.216c0 .396.324.716.715.716a.718.718 0 00.716-.716v-7.13c0-.216.144-.356.356-.356.216 0 .355.144.355.356v4.283c0 .396.324.716.716.716a.72.72 0 00.715-.716v-.712c0-.216.144-.356.356-.356s.356.144.356.356v1.428c0 .396.324.716.715.716a.72.72 0 00.716-.716v-.356c0-.216.144-.356.355-.356.216 0 .356.144.356.356v1.072c0 .396.324.716.716.716a.718.718 0 00.715-.716v-.356c0-.216.144-.356.356-.356s.356.144.356.356v3.391s0 1.252-.716 1.252a.718.718 0 00-.715.716v2.5c0 .395.324.715.715.715a.717.717 0 00.716-.716v-1.963c1.107-.428 1.427-1.712 1.427-2.5V13.43a1.783 1.783 0 00-1.795-1.788z"
            />
        </svg>
    );
};

export default IconHandConnectedRegular;
