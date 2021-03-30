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

const IconDatabaseLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.58 19.03c.531 0 .739-.21.739-.75 0-.538-.208-.751-.74-.751s-.74.21-.74.75c-.002.541.205.751.74.751zm0-2.339c.982 0 1.57.594 1.57 1.591 0 .995-.585 1.591-1.57 1.591-.984 0-1.57-.594-1.57-1.59-.002-.995.583-1.592 1.57-1.592zm0-3.94c.531 0 .739-.211.739-.752 0-.537-.208-.75-.74-.75s-.74.21-.74.75c-.002.541.205.751.74.751zm0-2.343c.982 0 1.57.594 1.57 1.591 0 .995-.585 1.591-1.57 1.591-.984 0-1.57-.593-1.57-1.59-.002-.995.583-1.592 1.57-1.592zm.016-5.44c-.532 0-.74.21-.74.751 0 .538.208.748.74.748s.742-.21.742-.748c0-.535-.215-.75-.742-.75zm0 2.34c-.983 0-1.569-.594-1.569-1.589 0-.994.586-1.59 1.569-1.59s1.571.593 1.571 1.59c0 .995-.588 1.589-1.571 1.589zm2.412 13.252l.005-4.558a.442.442 0 00-.437-.442H3.431a.437.437 0 00-.437.442l-.009 4.558a.44.44 0 00.437.442h17.146c.244 0 .44-.199.44-.442zM2.99 3.44l-.006 4.557a.44.44 0 00.437.442h17.146c.244 0 .44-.199.437-.442l.006-4.558a.44.44 0 00-.437-.442H3.43a.441.441 0 00-.44.442zm.431 11.282h17.146a.439.439 0 00.437-.443l.006-4.557a.44.44 0 00-.437-.443H3.43a.439.439 0 00-.437.443l-.006 4.557a.438.438 0 00.434.443zm18.42-5l-.005 4.557c0 .331-.129.63-.333.86.207.227.339.533.339.866l-.006 4.555c0 .705-.569 1.283-1.269 1.283H3.422a1.277 1.277 0 01-1.266-1.283l.006-4.558c0-.33.129-.63.333-.857a1.295 1.295 0 01-.339-.868l.006-4.558c0-.333.129-.63.333-.86a1.275 1.275 0 01-.339-.862l.006-4.558c0-.706.569-1.283 1.269-1.283h17.145c.698 0 1.267.577 1.267 1.283l-.006 4.558c0 .33-.129.63-.333.86.207.226.339.529.339.865zM4.79 6.137a.417.417 0 01-.414-.42c0-.233.185-.42.414-.42h5.757c.23 0 .414.187.414.42a.417.417 0 01-.414.42H4.789zm5.757 5.442a.42.42 0 010 .84H4.789a.416.416 0 01-.414-.417c0-.232.185-.42.414-.42 0-.003 5.757-.003 5.757-.003zm0 6.322a.42.42 0 010 .84H4.789a.416.416 0 01-.414-.417c0-.232.185-.42.414-.42h5.757v-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDatabaseLight;
