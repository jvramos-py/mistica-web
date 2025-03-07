/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBugFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.594 12.087c.336 0 .61.275.61.617v1.644a.613.613 0 01-.61.616.61.61 0 01-.608-.616V13.32h-1.224l.001.088.002.091c0 1.586-.126 2.952-.499 4.062l1.975.608a.62.62 0 01.431.621l-.131 2.477a.612.612 0 01-.608.582h-.034a.614.614 0 01-.577-.647l.107-1.994-1.687-.518c-.832 1.316-2.28 2.05-4.742 2.05-2.473 0-3.921-.74-4.75-2.062l-1.726.53.106 1.994a.612.612 0 01-.577.647H5.02a.614.614 0 01-.608-.582L4.28 18.79a.62.62 0 01.432-.624l2.014-.62c-.367-1.106-.493-2.47-.493-4.05l.002-.179h-1.22v1.03a.613.613 0 01-.609.617.615.615 0 01-.61-.616v-1.644c0-.342.274-.617.61-.617h1.871c.079-1.288.295-2.554.863-3.571L4.712 7.77a.617.617 0 01-.432-.625l.132-2.476a.613.613 0 01.639-.583c.336.02.593.309.577.647L5.52 6.73l2.286.703c-.16-.384-.244-.83-.244-1.353 0-1.838.975-2.602 2.322-2.908a.618.618 0 01.031-.829.602.602 0 01.852-.008l.008.008.644.653a15.7 15.7 0 011.149-.003l.644-.653a.603.603 0 01.854-.005l.006.005a.614.614 0 01.03.824c1.357.3 2.342 1.064 2.342 2.91 0 .516-.08.956-.235 1.334l2.216-.681-.107-1.994a.612.612 0 01.578-.647.614.614 0 01.64.582l.133 2.476a.614.614 0 01-.432.622l-2.39.731c.491.863.771 2.014.866 3.583.006.008 1.88.008 1.88.008zM12.008 4.22c-2.742 0-3.224.6-3.224 1.86 0 .333.042.58.107.77.812-.397 1.837-.596 3.11-.596 1.276 0 2.302.201 3.114.602a2.35 2.35 0 00.115-.776c.003-1.26-.48-1.86-3.222-1.86zm-.68 5.19v7.933c0 .34.272.617.608.617.336 0 .61-.278.61-.617V9.41a.615.615 0 00-.61-.617.61.61 0 00-.608.617z"
            />
        </svg>
    );
};

export default IconBugFilled;
