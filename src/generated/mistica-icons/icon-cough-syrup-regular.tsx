/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCoughSyrupRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.557 10.113c0-1.63-.644-2.815-1.829-3.398.011-.07.022-.14.017-.213V3.578c0-.784-.636-1.423-1.418-1.423H8.585c-.781 0-1.417.639-1.417 1.423v2.924c0 .093.011.182.028.27-.263.14-.51.302-.72.506-.695.67-1.045 1.622-1.045 2.835v7.924c0 1.213.35 2.166 1.04 2.835.663.644 1.588.97 2.747.97h5.566c2.356 0 3.765-1.424 3.765-3.805l.008-7.924zM8.367 3.578c0-.123.1-.224.221-.221h6.742c.12 0 .222.098.222.221v2.924a.22.22 0 01-.222.222H8.588a.222.222 0 01-.221-.222V3.578zm6.417 17.064v.003H9.221c-.84 0-1.482-.213-1.916-.633a2.023 2.023 0 01-.44-.683h10.258c-.358.865-1.134 1.313-2.339 1.313zM16.036 7.73c.672.27 1.093.807 1.25 1.602H6.707c.101-.49.295-.896.597-1.187.174-.165.39-.289.625-.39.196.107.42.171.658.171h6.742c.26 0 .499-.075.706-.196zM6.627 18.037h.003V10.53h10.731l-.008 7.507c0 .016-.002.03-.003.045a.468.468 0 00-.003.045H6.633a.468.468 0 00-.003-.045l-.003-.045zM9.4 6.186a.598.598 0 01-.596-.6V4.47a.6.6 0 01.596-.6.6.6 0 01.597.6v1.117c.003.33-.266.6-.597.6zm1.112-.6a.598.598 0 101.194 0V4.47a.6.6 0 00-.597-.6.6.6 0 00-.597.6v1.117zm2.303.6a.598.598 0 01-.597-.6V4.47a.6.6 0 01.597-.6.6.6 0 01.597.6v1.117a.6.6 0 01-.597.6zm1.11-.6a.598.598 0 101.192 0V4.47a.598.598 0 10-1.193 0v1.117zm.27 9.185l-1.795.006v1.804h-.862l-.003-1.804H9.739v-.866l1.796-.002v-1.804h.863v1.803h1.798v.863zm1.037-.994c0-.493-.44-.908-.96-.908l-.84.003v-.84c0-.521-.415-.964-.906-.964h-1.128c-.49 0-.905.443-.905.964v.84h-.835c-.53 0-.96.409-.96.908v1.131c0 .502.43.908.96.908h.838v.837c0 .533.406.964.904.964h1.13c.498 0 .904-.431.904-.964v-.843h.838c.52 0 .96-.414.96-.905v-1.131z"
            />
        </svg>
    );
};

export default IconCoughSyrupRegular;
