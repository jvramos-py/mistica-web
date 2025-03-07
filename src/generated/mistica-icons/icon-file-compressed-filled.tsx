/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileCompressedFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.124 7.53c.166.163.26.39.26.622v12.311a1.4 1.4 0 01-1.383 1.381h-12c-.737 0-1.384-.644-1.384-1.38V3.535c0-.723.659-1.381 1.384-1.381h2.255v3.19h-.935a.6.6 0 00-.594.606.6.6 0 00.594.605h.935v1.523h-.935a.6.6 0 00-.594.605.6.6 0 00.594.605h.935v1.524h-.935a.6.6 0 00-.594.605.6.6 0 00.594.605h.935v1.857H7.33a.6.6 0 00-.594.606v2.266a.6.6 0 00.594.605h3a.6.6 0 00.594-.605v-2.266a.6.6 0 00-.594-.606h-.885v-.493h.907a.6.6 0 00.594-.604.6.6 0 00-.594-.606h-.907v-1.523h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605h-.907V7.92h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605h-.907V5.186h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605h-.907V2.155h3.862a.86.86 0 01.6.244l5.218 5.131zm-3.21.28H17.7l-4.068-4v1.776c0 .659.213 1.216.614 1.611.409.4.986.613 1.67.613zm-7.988 7.522v.815h1.81v-.815h-1.81z"
            />
        </svg>
    );
};

export default IconFileCompressedFilled;
