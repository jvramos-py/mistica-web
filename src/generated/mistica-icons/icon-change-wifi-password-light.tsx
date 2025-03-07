/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChangeWifiPasswordLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.005 18.553c-.286 0-.474.148-.474.47 0 .154.042.27.12.345.085.084.205.123.354.123.148 0 .271-.039.352-.123a.475.475 0 00.12-.345c0-.322-.187-.47-.472-.47zM7.402 15.13c0 .162.132.294.294.294.082 0 .157-.03.213-.087.9-.933 2.278-1.406 4.098-1.406 1.813 0 3.19.47 4.09 1.398.115.115.3.117.417.005a.298.298 0 00.006-.417c-1.014-1.048-2.532-1.577-4.513-1.577-1.986 0-3.51.532-4.523 1.585a.308.308 0 00-.082.205zm1.471 2.32c0 .162.132.293.294.293a.316.316 0 00.213-.086c.571-.594 1.462-.897 2.627-.897 1.166 0 2.048.3 2.622.89.115.116.3.119.418.007a.299.299 0 00.005-.418c-.686-.711-1.711-1.07-3.045-1.07-1.339 0-2.364.361-3.053 1.076a.308.308 0 00-.081.204z"
            />
            <path
                fill={fillColor}
                d="M7.929 9.27V6.491c0-2.078 1.787-3.77 3.98-3.77h.19c2.197 0 3.981 1.689 3.981 3.77 0 .154.123.278.278.278a.276.276 0 00.277-.278c0-2.384-2.037-4.325-4.535-4.325h-.19c-2.502 0-4.536 1.941-4.536 4.328v2.848c-.574.115-1.046.349-1.409.698-.557.538-.84 1.336-.84 2.376v.002l.003.446-.003 5.8c0 1.037.283 1.838.84 2.376.538.518 1.317.782 2.314.782h7.429c.997 0 1.775-.26 2.316-.782.56-.535.849-1.333.863-2.372v-6.255c-.014-1.04-.303-1.838-.863-2.373-.54-.518-1.32-.781-2.316-.781H8.279c-.12 0-.237.003-.35.011zM5.71 12.438v-.022c0-.874.224-1.53.663-1.944.423-.41 1.065-.617 1.905-.617h7.426c1.722 0 2.568.84 2.59 2.569v6.247c-.022 1.728-.868 2.568-2.59 2.568H8.276c-.84 0-1.482-.207-1.904-.616-.44-.423-.662-1.081-.662-1.953l.003-5.806c0-.245-.002-.376-.002-.426z"
            />
        </svg>
    );
};

export default IconChangeWifiPasswordLight;
