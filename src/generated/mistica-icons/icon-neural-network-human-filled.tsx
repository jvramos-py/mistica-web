/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconNeuralNetworkHumanFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.212 2.155c5.039 0 7.815 2.726 7.815 7.672 0 1.003-.118 1.866-.317 2.62h-5.182a1.716 1.716 0 00-.535-.695l1.25-3.376c.75-.19 1.308-.854 1.308-1.65 0-.944-.782-1.711-1.745-1.711-.7 0-1.306.409-1.58.997h-1.519v-3.84l.168-.007a7.45 7.45 0 01.337-.01zm.703 12.644a1.748 1.748 0 001.616-1.07h4.709c-.639 1.348-1.569 2.205-2.482 2.726l-.011 4.532a.865.865 0 01-.872.854H9.481a.865.865 0 01-.872-.854v-1.532c-1.17-.118-2.033-.482-2.568-1.09-.462-.52-.586-1.137-.552-1.543l-.025-1.675-1.832-.474a.867.867 0 01-.616-.594.849.849 0 01.204-.823 10.2 10.2 0 001.583-2.126c.37-.675.58-1.362.619-2.042.227-3.866 2.333-6.227 5.977-6.793V6.4L9.727 8.107a1.783 1.783 0 00-.661-.131c-.96 0-1.745.767-1.745 1.711 0 .944.781 1.712 1.745 1.712.96 0 1.742-.768 1.742-1.712 0-.235-.05-.468-.145-.683l1.67-1.706h1.837c.137.38.403.695.75.896l-1.184 3.202c-.877.09-1.564.81-1.564 1.695 0 .944.782 1.711 1.743 1.708zm1.893-7.641a.432.432 0 01-.437-.429c0-.235.196-.428.437-.428.238 0 .434.193.434.428a.433.433 0 01-.434.429zM9.312 9.343a.445.445 0 00-.246-.087.434.434 0 00-.437.428.434.434 0 00.437.429c.24 0 .437-.193.437-.429a.421.421 0 00-.087-.24.233.233 0 00-.075-.077.214.214 0 01-.029-.024zm4.6 3.316a.433.433 0 00-.434.429.433.433 0 00.434.428c.24 0 .437-.193.437-.428a.434.434 0 00-.437-.429z"
            />
        </svg>
    );
};

export default IconNeuralNetworkHumanFilled;
