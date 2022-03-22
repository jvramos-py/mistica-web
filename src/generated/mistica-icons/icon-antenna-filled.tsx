/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAntennaFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.255 2.182c.95.961 1.431 2.35 1.431 4.135 0 1.781-.482 3.17-1.431 4.128a.593.593 0 01-.871-.017.665.665 0 01.017-.913c.697-.705 1.053-1.781 1.053-3.198 0-1.42-.356-2.499-1.053-3.208a.665.665 0 01-.014-.913.593.593 0 01.868-.014zM4.289 9.515a.67.67 0 01.016.916.6.6 0 01-.874.014C2.481 9.487 2 8.098 2 6.317c0-1.782.482-3.171 1.431-4.135a.597.597 0 01.874.017.665.665 0 01-.014.913c-.697.709-1.053 1.787-1.053 3.205-.003 1.417.353 2.493 1.05 3.198zm14.96 8.757a.633.633 0 00-.619-.647v.003h-1.372l-3.535-9.933c.21-.364.319-.821.319-1.376 0-.759-.199-1.344-.594-1.742-.378-.38-.924-.574-1.622-.574-.697 0-1.24.193-1.619.574-.39.395-.588.98-.588 1.74 0 .554.106 1.014.317 1.375L6.4 17.625H5.073a.635.635 0 00-.62.647v2.77c0 .359.278.647.62.647H18.63c.342 0 .62-.291.62-.647v-2.77zm-8.185-12.77c.171-.174.51-.21.762-.213.252 0 .591.036.765.212.177.18.213.541.213.813 0 .272-.037.633-.213.807-.176.176-.513.212-.768.212-.207 0-.58-.028-.761-.21-.174-.176-.21-.537-.21-.81 0-.27.036-.632.212-.812zm.104 9.44l.664-1.88.675 1.88h-1.339zm-.457 1.293h2.255l.499 1.39h-.868c-.062 0-.177.003-.177.003s-.115-.003-.176-.003h-.799c-.067 0-.187.003-.187.003s-.13-.003-.196-.003h-.84l.49-1.39zm7.303 4.16H5.692v-1.479h5.37c.067 0 .19-.003.19-.003s.126.003.193.003h.799c.061 0 .173-.003.173-.003s.118.003.18.003h5.417v1.48zM6.232 9.056c.12.123.275.182.43.182a.626.626 0 00.447-.196.67.67 0 00-.017-.913c-.386-.39-.582-1-.582-1.815s.196-1.426.582-1.818a.665.665 0 00.014-.913.6.6 0 00-.874-.017c-.638.644-.96 1.569-.96 2.745 0 1.18.322 2.104.96 2.745zm10.334-.927a.667.667 0 00-.017.913.618.618 0 00.443.199.61.61 0 00.431-.18c.636-.644.96-1.565.96-2.744 0-1.177-.321-2.101-.96-2.745a.597.597 0 00-.874.014.668.668 0 00.017.915c.386.39.582 1.003.582 1.816 0 .812-.196 1.423-.582 1.812z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAntennaFilled;
