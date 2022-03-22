/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTramTrainFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.049 11.935c-1.851-3.798-5.868-4.034-6.067-4.042h-2.81l.99-1.006h1.391a.607.607 0 00.602-.61V4.62H21.1a.607.607 0 00.603-.61.605.605 0 00-.603-.611H2.752a.607.607 0 00-.602.61c0 .34.269.611.602.611h5.944v1.656c0 .26.16.479.384.568L8.046 7.893H2.752a.596.596 0 00-.426.18.618.618 0 00-.176.43v9.863c0 .34.269.611.602.611h1.006c.084 1.003.773 1.647 1.81 1.647 1.038 0 1.722-.641 1.809-1.644h.456c.087 1.003.773 1.644 1.81 1.644 1.036 0 1.723-.641 1.81-1.641l2.57.005c.09 1 .774 1.639 1.81 1.639 1.031 0 1.715-.633 1.807-1.625l.625.003h.017c.4 0 .792-.12 1.131-.345l.073-.05c1.092-.725 3.639-2.42 1.563-6.675zm-6.017 1.32V9.122c.527.045 3.513.434 4.939 3.355.134.275.238.53.327.776h-5.266zm3.723 4.377c-.146.098-.311.177-.48.146l-.856-.005c-.297-.538-.852-.86-1.583-.86-.725 0-1.28.316-1.58.846l-3.036-.006c-.3-.527-.852-.84-1.577-.84-.723 0-1.275.313-1.574.84H7.14c-.3-.527-.851-.84-1.574-.84-.722 0-1.274.31-1.574.837h-.639v-1.5h16.913c-.365.621-.952 1.013-1.43 1.331l-.006.005-.076.047zM15.836 19.4c-.448 0-.622-.176-.622-.63s.174-.63.622-.63.622.176.622.63-.174.63-.622.63zm-6.812-.63c0-.454.174-.63.622-.63s.621.176.621.63-.173.63-.621.63-.622-.176-.622-.63zm-3.451.63c-.448 0-.622-.176-.622-.63s.174-.63.622-.63c.445 0 .622.176.622.63-.003.454-.177.63-.622.63zm.3-9.6v3.384H3.357V9.801h2.516zm1.406 3.387V9.801h2.257v3.386H7.28zm4.179-6.3l-.989 1.006h-.717l.989-1.006h.717zm-1.555-1.22V4.62h4.05v1.045h-4.05zm3.34 7.52H10.94V9.801h2.302v3.386z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTramTrainFilled;
