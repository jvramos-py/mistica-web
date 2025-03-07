/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLidarFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.646 2H7.354a.72.72 0 00-.713.726v14.186c0 .4.32.726.713.726h2.858v3.673c0 .4.32.689.713.689h2.145c.393 0 .713-.289.713-.689v-3.673h2.858a.7.7 0 00.499-.219.725.725 0 00.214-.508V2.732A.718.718 0 0016.646 2zM3.32 10.222a.458.458 0 00.357.144c.142 0 .284-.07.393-.182a.533.533 0 00-.036-.763 2.922 2.922 0 01-.965-2.146c0-.801.357-1.602.965-2.147.215-.181.215-.544.036-.763a.51.51 0 00-.75-.037C2.466 5.054 2 6.148 2 7.275c0 1.126.498 2.183 1.321 2.947zm16.608-.038c.11.107.251.182.393.182a.437.437 0 00.357-.144C21.534 9.495 22 8.402 22 7.275s-.498-2.184-1.321-2.947c-.215-.22-.535-.182-.75.037a.532.532 0 00.036.763c.608.545.965 1.309.965 2.147 0 .838-.357 1.601-.965 2.146-.215.181-.215.545-.036.763zm-1.427-1.126c.11.144.252.219.43.219.105 0 .21-.038.32-.15a2.305 2.305 0 00.965-1.89c0-.763-.357-1.452-.965-1.89-.252-.144-.572-.111-.75.145-.142.256-.11.582.142.763.32.256.498.62.498 1.02s-.178.8-.498 1.02a.546.546 0 00-.142.763zm-13.434.219a.584.584 0 01-.32-.108 2.305 2.305 0 01-.965-1.89c0-.763.357-1.452.965-1.89.252-.181.572-.107.75.145.178.25.105.581-.142.763-.32.219-.498.62-.498 1.02s.178.763.498 1.02c.252.18.284.507.142.763a.61.61 0 01-.43.177zm5.144 4.362c0-1.02.787-1.82 1.788-1.82s1.788.8 1.788 1.82S13 15.459 12 15.459s-1.788-.8-1.788-1.82zM12 10.734c-1.788 0-3.214-1.453-3.214-3.273S10.212 4.188 12 4.188s3.214 1.453 3.214 3.273-1.426 3.273-3.214 3.273zm.713 2.905a.72.72 0 00-.713-.726.72.72 0 00-.713.726c0 .4.32.726.713.726a.72.72 0 00.713-.726zM12 5.278c-1.18 0-2.144.982-2.144 2.183 0 1.201.964 2.183 2.144 2.183 1.18 0 2.145-.982 2.145-2.183 0-1.201-.965-2.183-2.145-2.183zM10.573 7.46c0-.796.645-1.453 1.427-1.453s1.427.657 1.427 1.453-.64 1.452-1.427 1.452-1.427-.656-1.427-1.452z"
            />
        </svg>
    );
};

export default IconLidarFilled;
