/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: number;
};

const IconBriefcaseLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.009 20.555a.444.444 0 01-.44.448H3.44a.444.444 0 01-.442-.442v-7.23c1.708 1.14 4.128 1.706 7.79 1.807l-.009.008v1.61c0 .253.076.457.227.608.151.143.35.219.594.219h.804c.252 0 .453-.076.594-.219.15-.15.226-.355.226-.607v-1.611c3.636-.092 6.065-.625 7.782-1.723.003 0 .003 7.132.003 7.132zm-9.19-5.4l.57-.009v.008l-.008 1.586-.762.017-.016-1.594.215-.009zM2.997 8.582a.444.444 0 01.437-.448h17.128c.244 0 .443.196.446.442v3.835c-1.692 1.283-4.356 1.871-8.605 1.908h-.325c-4.558 0-7.356-.633-9.081-2.034V8.583zm5.02-1.866c0-2.042 1.75-3.714 3.896-3.714h.182c2.154 0 3.896 1.672 3.896 3.714v.575H8.017v-.575zm12.548.575H16.83v-.575c0-2.507-2.12-4.557-4.736-4.557h-.182c-2.608 0-4.734 2.05-4.734 4.557v.575H3.44c-.703 0-1.28.574-1.28 1.291v11.972c0 .72.577 1.291 1.28 1.291h17.123a1.28 1.28 0 001.283-1.291V8.583a1.28 1.28 0 00-1.28-1.291z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBriefcaseLight;
