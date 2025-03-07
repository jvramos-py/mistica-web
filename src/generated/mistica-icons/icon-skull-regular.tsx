/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSkullRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.026 11.122c0-8.224-6.879-8.921-8.64-8.96-.2-.007-.422-.008-.637-.01l-.221-.002c-1.812.009-8.546.628-8.546 8.922 0 4.188 1.734 6.431 3.68 7.616v.647c0 .82.241 1.462.723 1.883.454.409 1.118.619 1.966.619h5.337c.845 0 1.501-.21 1.955-.62.47-.42.703-1.061.703-1.882v-.655c1.947-1.194 3.68-3.42 3.68-7.558zm-4.366 6.46l-.62.378v1.38c0 .309-.047.72-.28.928-.257.232-.725.28-1.075.28H9.349c-.499 0-.886-.098-1.104-.297-.232-.202-.28-.605-.28-.91v-1.373l-.622-.378c-2.03-1.235-3.059-3.426-3.059-6.513 0-6.851 5.065-7.619 7.247-7.63h.042c.252 0 .526 0 .781.009.74.02 2.636.168 4.32 1.215C18.696 5.93 19.72 8.1 19.72 11.125c0 3.037-1.028 5.21-3.061 6.457zm-8.398-3.48c1.328-.022 2.882-.817 2.882-2.969 0-.165-.011-.322-.025-.464-.21-1.81-1.616-2.485-2.863-2.516a3.475 3.475 0 00-.244-.003c-1.21.011-2.686.698-2.854 2.591-.011.12-.017.247-.017.379 0 2.173 1.555 2.966 2.888 2.986h.098l.074-.002.06-.001zm1.577-2.969c0 1.435-1.006 1.667-1.608 1.678h-.19c-.729-.01-1.6-.31-1.6-1.691 0-.093.003-.183.011-.267.11-1.215 1.031-1.406 1.569-1.411h.003l.199.002c.537.012 1.462.208 1.596 1.37.014.101.02.207.02.32zm6.187 1.678h-.19c-.728-.01-1.6-.31-1.6-1.691 0-.093.003-.183.012-.267.109-1.215 1.03-1.406 1.568-1.411h.003l.2.002c.537.012 1.461.208 1.596 1.37.014.101.02.207.02.32 0 1.434-1.006 1.666-1.609 1.677zm2.914-1.678c0-.165-.012-.322-.028-.467-.21-1.81-1.617-2.485-2.86-2.513-.076-.003-.171-.003-.244-.003-1.21.011-2.686.698-2.854 2.591-.011.12-.017.247-.017.379 0 2.173 1.555 2.966 2.888 2.986h.098l.073-.002.061-.001c1.328-.023 2.883-.818 2.883-2.97zm-7.502 3.583c.334.14.488.518.348.846l-.364.857a.654.654 0 01-.852.345.643.643 0 01-.347-.846l.364-.857a.657.657 0 01.851-.345zm2.087 1.199l-.364-.854a.655.655 0 00-.854-.345.643.643 0 00-.348.846l.364.854a.655.655 0 00.855.345.643.643 0 00.347-.846z"
            />
        </svg>
    );
};

export default IconSkullRegular;
