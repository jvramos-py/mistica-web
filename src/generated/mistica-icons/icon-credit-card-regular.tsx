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

const IconCreditCardRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.714 9.328v3.767c0 .031-.014.053-.017.084v4.642c0 .804-.666 1.46-1.484 1.46H3.523c-.82 0-1.487-.656-1.487-1.46v-4.678c-.002-.017-.01-.031-.01-.048V9.328c0-.017.008-.031.01-.048V6.793c0-.807.667-1.46 1.488-1.46h16.689c.818 0 1.484.653 1.484 1.46v2.45c.003.029.017.054.017.085zm-1.501 8.717c.126 0 .23-.101.232-.227V13.71H3.291v4.11c0 .126.107.23.233.227 0-.003 16.689-.003 16.689-.003zM3.523 6.565a.229.229 0 00-.232.228V8.71h17.152V6.793a.229.229 0 00-.233-.227H3.524zm-.232 5.914h17.152V9.944H3.29v2.535z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCreditCardRegular;
