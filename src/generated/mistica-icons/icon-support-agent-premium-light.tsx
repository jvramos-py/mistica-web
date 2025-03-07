/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSupportAgentPremiumLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.299 19.5c-.213 0-.353-.142-.353-.358v.004h-.024v-1.393c0-2.498-2.494-4.319-5.973-4.319-1.09 0-2.108.175-3.022.534-.177.07-.385-.037-.457-.216-.069-.18.036-.391.212-.465.421-.142.842-.252 1.263-.358-1.511-.75-2.53-2.319-2.53-4.14 0-2.57 2.037-4.64 4.566-4.64 2.53 0 4.566 2.07 4.566 4.64 0 .787-.209 1.5-.525 2.143h.878c.597 0 1.054-.464 1.054-1.071v-.93c0-3.32-2.598-6.107-5.76-6.213-1.616-.069-3.163.538-4.358 1.716-1.194 1.14-1.828 2.677-1.828 4.355 0 .216-.14.359-.352.359-.213 0-.353-.143-.353-.359 0-1.858.737-3.61 2.036-4.893 1.335-1.284 3.055-1.964 4.883-1.89 3.547.142 6.43 3.247 6.43 6.926v.929c0 .998-.774 1.784-1.757 1.784h-1.334c-.425.534-.95.962-1.548 1.284 2.778.607 4.638 2.465 4.638 4.82v1.393c0 .216-.14.359-.352.359zM14.977 4.863c-2.145 0-3.864 1.747-3.864 3.927 0 2.176 1.72 3.924 3.864 3.932a3.753 3.753 0 002.634-1.072h-2.634c-.212 0-.353-.142-.353-.358s.14-.359.353-.359h3.231a4.007 4.007 0 00.633-2.143c0-2.18-1.72-3.927-3.864-3.927zM22 21.285a.707.707 0 01-.701.713.707.707 0 01-.702-.713c0-.393.314-.713.701-.713.388 0 .702.32.702.713zM9.317 14.607l3.584.392c.14 0 .248.11.348.248a.404.404 0 01-.104.391l-2.597 2.323.701 3.606a.346.346 0 01-.14.358l-.01.006a.462.462 0 01-.203.067c-.072 0-.104 0-.176-.036l-3.09-1.785-3.091 1.785a.37.37 0 01-.385-.037.346.346 0 01-.14-.358l.701-3.606-2.597-2.323a.404.404 0 01-.104-.39c.036-.143.14-.25.28-.25l3.584-.39 1.399-3.285c.036-.142.176-.215.316-.215s.245.073.317.215l1.407 3.284zm.461 3.285a.293.293 0 01.104-.322l2.149-1.928-2.986-.322c-.105 0-.245-.11-.281-.215l-1.159-2.75-1.194 2.75c-.036.11-.14.215-.28.215l-2.987.322 2.177 1.928c.068.073.14.179.104.322l-.597 3.035 2.597-1.5c.072-.036.104-.036.176-.036.073 0 .105 0 .177.037l2.597 1.499-.597-3.035z"
            />
        </svg>
    );
};

export default IconSupportAgentPremiumLight;
