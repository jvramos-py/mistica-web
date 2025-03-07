/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTalkRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.864 6.544a.826.826 0 100-1.652.826.826 0 000 1.652zm0-1.093a.266.266 0 110 .532.266.266 0 010-.532zm2.185 1.093a.826.826 0 11-.001-1.652.826.826 0 010 1.652zm0-1.093a.268.268 0 00-.267.266c0 .146.12.267.267.267a.266.266 0 100-.532zm1.358.266a.826.826 0 101.652 0 .826.826 0 00-1.652 0zm.56 0a.266.266 0 11.532 0 .266.266 0 01-.532 0z"
            />
            <path
                fill={fillColor}
                d="M14.754 11.743a.741.741 0 01-.112-.009c-.414-.061-.75-.462-.75-.888v-1.56h-.11c-.87 0-1.529-.695-1.529-1.613v-3.9c0-.89.723-1.613 1.614-1.613h6.366c.891 0 1.614.723 1.614 1.613v3.902c0 .891-.723 1.614-1.614 1.614h-3.288c-.314.496-.978 1.54-1.11 1.74-.29.445-.705.714-1.08.714zm-.887-8.463a.494.494 0 00-.494.493v3.902c0 .247.127.493.41.493h.669c.308 0 .56.253.56.56v1.51c.328-.51 1.143-1.795 1.151-1.81a.56.56 0 01.474-.26h3.596a.494.494 0 00.493-.493V3.773a.494.494 0 00-.493-.493h-6.367zM5.909 14.244c.655.695 1.602 1.045 2.817 1.045 1.213 0 2.163-.35 2.818-1.048.617-.652.93-1.563.93-2.703s-.313-2.05-.93-2.703C10.89 8.143 9.942 7.79 8.726 7.79c-1.215 0-2.162.353-2.817 1.048-.617.653-.93 1.563-.93 2.703s.31 2.05.93 2.703zm2.817-5.333c1.743 0 2.628.885 2.628 2.627 0 1.742-.885 2.628-2.628 2.628-1.742 0-2.627-.886-2.627-2.628s.882-2.627 2.627-2.627zM2.715 21.843h12.02c.31 0 .56-.249.56-.56v-1.039c0-1.345-.356-2.38-1.059-3.09-.703-.708-1.737-1.067-3.075-1.067H6.289c-1.336 0-2.372.361-3.075 1.067-.703.706-1.059 1.745-1.059 3.09v1.04c0 .307.252.56.56.56zm.56-1.12v-.479c0-1.036.25-1.81.734-2.3.485-.49 1.252-.736 2.28-.736h4.874c1.028 0 1.796.249 2.28.736.485.488.732 1.264.732 2.3v.479h-10.9z"
            />
        </svg>
    );
};

export default IconTalkRegular;
