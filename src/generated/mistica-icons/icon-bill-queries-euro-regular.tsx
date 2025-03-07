/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBillQueriesEuroRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.131 22V11.398c1.841-.27 3.26-1.887 3.26-3.84 0-2.059-1.572-3.747-3.552-3.88C18.37 2.689 17.378 2 16.233 2H7.899C6.299 2 5 3.328 5 4.963V22h14.131zm-5.797-7.406h-3.028c.255-1.37 1.433-2.41 2.847-2.4.505 0 1.006.138 1.447.399.26.151.594.061.742-.204a.564.564 0 00-.2-.759 3.917 3.917 0 00-1.994-.55c-2.012 0-3.677 1.536-3.942 3.518h-.584a.546.546 0 00-.543.555c0 .308.242.555.543.555h.584c.265 1.982 1.93 3.518 3.942 3.518.696 0 1.387-.19 1.995-.55a.564.564 0 00.199-.758.534.534 0 00-.742-.204 2.85 2.85 0 01-1.447.398c-1.415 0-2.592-1.038-2.848-2.409h3.029a.546.546 0 00.543-.555.546.546 0 00-.543-.554zm4.345 5.922H6.452V4.959c0-.816.649-1.48 1.447-1.48h8.333c.4 0 .756.166 1.02.437a3.888 3.888 0 00-2.471 3.636c0 1.826 1.238 3.357 2.898 3.775v9.189zm.91-15.742c1.497 0 2.717 1.247 2.717 2.778 0 1.537-1.22 2.779-2.718 2.779s-2.717-1.247-2.717-2.779c0-1.531 1.22-2.778 2.717-2.778zm-.103 4.078a.546.546 0 00-.542.554c0 .309.24.555.542.555a.547.547 0 00.543-.555.55.55 0 00-.543-.554zm-.004-3.704h.06c.408 0 .802.195 1.053.532.31.412.357 1.147-.065 1.578l-.32.328a.628.628 0 00-.181.44.547.547 0 01-.543.555.546.546 0 01-.542-.554c0-.465.176-.901.496-1.228l.32-.328a.356.356 0 00-.028-.123.25.25 0 00-.185-.09h-.06a.173.173 0 00-.154.09.538.538 0 01-.742.204.564.564 0 01-.2-.759c.224-.398.64-.645 1.09-.645z"
            />
        </svg>
    );
};

export default IconBillQueriesEuroRegular;
