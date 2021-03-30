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

const IconBatteryMediumFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.542 18.499V7.639c0-.742-.165-1.266-.507-1.605-.342-.336-.874-.501-1.63-.501H8.898c-.745 0-1.278.168-1.625.515-.344.342-.513.863-.513 1.591v10.857c0 .748.166 1.277.51 1.61.34.334.871.494 1.625.494h5.51c.753 0 1.288-.16 1.627-.493.345-.33.51-.86.51-1.608zM10.217 3.49c-.073.072-.09.232-.09.355v.446h3.048v-.446c0-.103-.011-.285-.087-.358-.073-.073-.258-.084-.361-.084h-2.149c-.126 0-.288.014-.36.087zm6.712 1.666c.588.583.873 1.392.873 2.482v10.86c0 1.098-.288 1.913-.882 2.493-.588.574-1.412.854-2.515.854H8.898c-1.104 0-1.927-.28-2.516-.854-.593-.583-.882-1.398-.882-2.496V7.64c0-1.073.286-1.88.874-2.465.591-.588 1.409-.877 2.493-.882v-.446c0-.515.151-.93.454-1.23.302-.302.725-.456 1.255-.456h2.148c.532 0 .955.151 1.258.451.3.3.454.714.454 1.235v.446c1.092.005 1.91.288 2.493.865zm-1.765 6.83c.347 0 .63.277.63.621v5.266c0 1.219-1.006 2.207-2.24 2.207H9.751c-1.235 0-2.24-.988-2.24-2.207v-5.266c0-.342.282-.622.63-.622h7.022z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBatteryMediumFilled;
