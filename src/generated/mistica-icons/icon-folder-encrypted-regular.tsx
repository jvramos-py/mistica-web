/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFolderEncryptedRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.376 5.993c.807 0 1.465.656 1.465 1.462v11.286c0 .807-.655 1.462-1.465 1.462H3.617a1.463 1.463 0 01-1.462-1.462V5.262c0-.807.655-1.462 1.462-1.462h7.143c.807 0 1.462.655 1.462 1.462v.734h8.154v-.003zm.19 12.748V7.458a.184.184 0 00-.187-.187h-8.793a.638.638 0 01-.638-.64V5.263a.184.184 0 00-.188-.188H3.617a.184.184 0 00-.187.188v13.48c0 .106.08.187.187.187h16.76c.106 0 .19-.081.19-.188zM9.184 8.794c-.913 0-1.26.586-1.26 1.712s.347 1.706 1.26 1.706 1.26-.58 1.26-1.706-.347-1.712-1.26-1.712zm.543 1.712c0 .907-.154 1.154-.543 1.154-.39 0-.543-.247-.543-1.154 0-.91.154-1.207.543-1.207.39 0 .543.3.543 1.207zM5.592 8.794c-.913 0-1.26.586-1.26 1.712s.347 1.706 1.26 1.706 1.26-.58 1.26-1.706-.347-1.712-1.26-1.712zm.543 1.712c0 .907-.154 1.154-.543 1.154-.39 0-.543-.247-.543-1.154 0-.91.154-1.207.543-1.207.39 0 .543.3.543 1.207zm12.171-1.712c-.913 0-1.26.586-1.26 1.712s.344 1.706 1.26 1.706c.913 0 1.26-.58 1.26-1.706s-.346-1.712-1.26-1.712zm.54 1.712c0 .907-.153 1.154-.543 1.154-.389 0-.543-.247-.543-1.154 0-.91.154-1.207.543-1.207.39 0 .544.3.544 1.207zm-6.834 1.193h-.554v.488h1.694v-.485h-.465V9.215c0-.241-.115-.323-.45-.323-.233 0-.561.028-.754.056v.46h.53v2.291zM4.8 17.1h.552v-2.29h-.527v-.46a6.17 6.17 0 01.754-.056c.336 0 .451.081.451.322v2.487h.465v.485H4.799V17.1zm10.12-5.4h-.551v.488h1.695v-.485h-.465V9.215c0-.241-.115-.323-.451-.323-.233 0-.56.028-.754.056v.46h.527v2.291zm-6.996 4.21c0-1.126.347-1.711 1.26-1.711s1.26.585 1.26 1.711c0 1.126-.347 1.706-1.26 1.706s-1.26-.58-1.26-1.706zm1.26-1.207c-.39 0-.543.297-.543 1.207 0 .91.154 1.154.543 1.154.39 0 .543-.246.543-1.154 0-.907-.154-1.207-.543-1.207zm7.863 1.207c0-1.126.347-1.711 1.26-1.711s1.26.585 1.26 1.711c0 1.126-.346 1.706-1.26 1.706-.916 0-1.26-.58-1.26-1.706zm1.258-1.207c-.39 0-.544.297-.544 1.207 0 .91.154 1.154.543 1.154.39 0 .544-.246.544-1.154 0-.907-.154-1.207-.544-1.207zm-6.292 2.4v-2.29h-.53v-.46c.194-.028.522-.056.754-.056.336 0 .451.081.451.322v2.487h.465v.485h-1.694v-.488h.554zm2.908 0h-.552v.488h1.695v-.485h-.465v-2.487c0-.241-.115-.322-.451-.322-.233 0-.56.028-.754.056v.46h.527v2.29z"
            />
        </svg>
    );
};

export default IconFolderEncryptedRegular;
