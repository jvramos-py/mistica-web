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

const IconArrowRightFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.894 21.69c-.152 0-.3-.029-.44-.085-.434-.176-.7-.602-.695-1.106l-.003-3.65a.195.195 0 00-.039-.056l-6.882-.02c-.617.009-1.07-.146-1.384-.468-.314-.322-.46-.776-.443-1.392v-6.04C2 8.454 2.04 7.85 2.445 7.43c.407-.42 1.009-.48 1.426-.488h.009l6.711.003a.453.453 0 00.157-.053l-.009-3.56v-.006c.006-.857.415-1.149.659-1.247.417-.168.899-.014 1.322.42l8.658 8.712c.087.084.336.33.334.69a.82.82 0 01-.275.593L12.961 21.2c-.306.32-.692.49-1.067.49z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowRightFilled;
