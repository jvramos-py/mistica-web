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

const IconCoughSyrupFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.305 6.036a.6.6 0 01-.6-.599V4.42a.598.598 0 111.196 0v1.017c.004.33-.265.6-.596.6zm1.709 0a.598.598 0 01-.597-.599V4.42a.6.6 0 01.597-.6.6.6 0 01.6.6v1.017a.602.602 0 01-.6.6zm1.706 0a.598.598 0 01-.597-.599V4.42a.598.598 0 111.193 0v1.017c.003.33-.266.6-.596.6zm1.709 0a.598.598 0 01-.597-.599V4.42a.598.598 0 111.193 0v1.017c0 .33-.266.6-.596.6zm-7.855 3.32h10.653c-.129-.897-.558-1.496-1.283-1.785a1.4 1.4 0 01-.703.2H8.496c-.238 0-.462-.074-.661-.177-.233.103-.454.224-.622.392-.345.33-.552.787-.639 1.37zm7.726 3.63h-1.465v-1.473c0-.255-.2-.48-.415-.48H11.2c-.221 0-.423.225-.423.48v1.473H9.308c-.255 0-.479.19-.479.415v1.224c0 .232.224.423.48.423h1.467l.008 1.473c0 .255.194.479.415.479h1.221c.233 0 .415-.224.415-.479v-1.479H14.3c.255 0 .479-.199.479-.415v-1.224c0-.215-.224-.417-.48-.417zm.392 7.501c1.308 0 2.12-.52 2.423-1.543H6.678c.112.367.286.672.526.91.44.415 1.085.633 1.922.633h5.566zM8.272 3.423V6.35c0 .12.095.224.224.224h6.745c.12 0 .224-.103.224-.224V3.423a.228.228 0 00-.224-.224H8.496a.223.223 0 00-.224.224zm8.364 3.143c1.182.582 1.826 1.767 1.826 3.398l-.008 7.916c0 2.383-1.404 3.806-3.762 3.806H9.126c-1.165 0-2.09-.327-2.75-.966-.687-.672-1.037-1.625-1.037-2.838V9.966c0-1.215.353-2.168 1.045-2.837.207-.207.454-.367.717-.513a1.675 1.675 0 01-.025-.263V3.426c0-.785.638-1.423 1.42-1.423h6.745c.781 0 1.42.638 1.42 1.423v2.927c-.003.07-.017.14-.025.213z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCoughSyrupFilled;
