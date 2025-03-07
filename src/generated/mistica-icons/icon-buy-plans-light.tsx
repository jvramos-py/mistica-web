/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBuyPlansLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.464 7.632h4.37a.28.28 0 00.28-.28.28.28 0 00-.28-.28h-4.37a.28.28 0 00-.28.28c0 .154.126.28.28.28zm0 1.914h4.37a.28.28 0 00.28-.28.28.28 0 00-.28-.28h-4.37a.28.28 0 00-.28.28c0 .154.126.28.28.28zm4.37 1.91h-4.37a.28.28 0 01-.28-.28.28.28 0 01.28-.28h4.37a.28.28 0 01.28.28.28.28 0 01-.28.28z"
            />
            <path
                fill={fillColor}
                d="M10.63 16.918h6.554c.754 0 1.39-.255 1.897-.759.49-.493.854-1.207 1.106-2.182.118-.454.507-2.017.882-3.524l.364-1.458.393-1.57a.28.28 0 00-.272-.35h-3.812V5.448a.277.277 0 00-.082-.2l-3.01-3.01a.29.29 0 00-.2-.082h-4c-.4 0-.647.25-.647.645v4.271H7.051a633.45 633.45 0 00-.514-3.045 2.174 2.174 0 00-.854-1.347 2.694 2.694 0 00-1.608-.524H2.436a.28.28 0 00-.28.28c0 .154.126.28.28.28h1.639c.468 0 .919.146 1.269.412.344.258.569.614.639.997.16.894 1.495 8.928 1.638 9.827.154.963.507 1.711 1.053 2.227.513.484 1.19.74 1.956.74zm6.543-11.193v7.277a.276.276 0 01-.008.067.24.24 0 01-.065.009h-1.199c-.411 0-4.997 0-5.45-.003a.189.189 0 01-.08-.008.259.259 0 01-.01-.082V2.801a.168.168 0 01.008-.073.254.254 0 01.079-.012h3.717v1.359c.003.501.098.88.291 1.154.232.328.597.496 1.081.499h.347l1.29-.003zm-2.445-2.61l2.048 2.052H15.54c-.42-.002-.81-.134-.812-1.095v-.957zm6.467 4.52c-.162.64-.401 1.605-.654 2.62l-.015.06-.409 1.638a391.2 391.2 0 01-.473 1.887c-.224.863-.547 1.51-.961 1.924-.4.4-.89.597-1.499.597H10.63c-1.328 0-2.202-.888-2.454-2.496-.084-.539-.598-3.64-1.031-6.233h2.658v5.353c0 .41.241.653.647.653h6.154l.505-.003c.389 0 .633-.243.633-.633V7.635h3.453zM9.257 20.462c0 .87.501 1.372 1.373 1.372.874 0 1.372-.501 1.372-1.372 0-.872-.501-1.373-1.372-1.373-.872 0-1.373.501-1.373 1.373zm1.373-.813c.563 0 .812.25.812.813s-.25.812-.812.812c-.563 0-.813-.25-.813-.812 0-.564.25-.813.813-.813zm4.09.813c0 .87.5 1.372 1.372 1.372.874 0 1.372-.501 1.372-1.372 0-.872-.501-1.373-1.372-1.373-.871 0-1.373.501-1.373 1.373zm1.372-.813c.563 0 .812.25.812.813s-.25.812-.812.812c-.563 0-.812-.25-.812-.812 0-.564.249-.813.812-.813z"
            />
        </svg>
    );
};

export default IconBuyPlansLight;
