/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBillQueriesPoundFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.97 7.56c0 2.556 2.057 4.632 4.578 4.632.122 0 .244-.01.366-.019V22H5V3.854C5 2.83 5.825 2 6.832 2h10.25c.674 0 1.26.38 1.579.934a.887.887 0 01-.056-.002l-.057-.003c-2.525 0-4.578 2.076-4.578 4.632zM9.668 19.972h4.578a.56.56 0 00.549-.564.55.55 0 00-.549-.555h-3.022a1.7 1.7 0 00.093-.554V16.63h1.65a.55.55 0 00.548-.555.55.55 0 00-.548-.554h-1.65v-1.48c0-.61.492-1.108 1.097-1.108.253 0 .492.085.689.246a.546.546 0 00.773-.08.56.56 0 00-.08-.783 2.194 2.194 0 00-1.382-.493c-1.214 0-2.198 1-2.198 2.224v1.483h-.183a.55.55 0 00-.548.555.55.55 0 00.548.555h.183v1.668a.543.543 0 01-.548.555.55.55 0 00-.549.554.55.55 0 00.549.555zm8.88-8.519c-2.118 0-3.842-1.744-3.842-3.887 0-2.142 1.724-3.887 3.842-3.887 2.119 0 3.843 1.745 3.843 3.887 0 2.143-1.724 3.887-3.843 3.887zm-2.746-3.887c0 1.531 1.233 2.778 2.746 2.778 1.514 0 2.747-1.247 2.747-2.778 0-1.53-1.233-2.778-2.747-2.778-1.513 0-2.746 1.247-2.746 2.778zm2.643 2.404a.55.55 0 01-.548-.555.55.55 0 111.097 0 .552.552 0 01-.549.555zm-.553-1.934a.55.55 0 00.549.554.542.542 0 00.543-.554c0-.166.066-.323.183-.441l.323-.327c.427-.432.38-1.166.066-1.579a1.333 1.333 0 00-1.06-.53h-.06c-.45 0-.872.246-1.101.644a.56.56 0 00.201.758.548.548 0 00.75-.204.175.175 0 01.155-.09h.06c.07 0 .146.034.188.09a.4.4 0 01.028.124l-.323.327a1.735 1.735 0 00-.502 1.228z"
            />
        </svg>
    );
};

export default IconBillQueriesPoundFilled;
