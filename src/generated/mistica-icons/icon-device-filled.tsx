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

const IconDeviceFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M6.115 12.38c-.728 0-1.294-.18-1.686-.541-.41-.373-.614-.924-.614-1.644 0-.717.207-1.272.614-1.647.392-.362.96-.541 1.686-.541.728 0 1.294.182 1.689.54.409.376.616.93.616 1.648 0 .717-.207 1.269-.616 1.644-.395.358-.964.54-1.69.54zm2.602.473l2.535-3.25c.067-.083.207-.039.207.065v3.779a.182.182 0 01-.039.112l-1.165 1.454a.184.184 0 00-.042.117v1.9l.045 3.604a.253.253 0 01-.258.25H5.583V17.01c0-.325-.278-.588-.62-.588-.341 0-.618.263-.618.588v3.874H2.339a.257.257 0 01-.263-.25l-.05-4.874c0-.694.226-1.288.657-1.714.471-.465 1.171-.711 2.023-.711h2.807c.271 0 .537-.017.773-.132.143-.067.431-.35.431-.35zm12.339 1.196c.431.426.658 1.02.658 1.717l-.05 4.874a.254.254 0 01-.26.247H19.47a.104.104 0 01-.107-.101V17.01c0-.325-.277-.588-.616-.588-.342 0-.62.263-.62.588v3.776c0 .056-.044.1-.106.1h-4.165a.358.358 0 01-.367-.352l.042-3.493v-1.908a.176.176 0 00-.042-.115l-1.16-1.445a.219.219 0 01-.047-.135V9.646c0-.098.129-.14.19-.062l2.552 3.269s.289.283.429.35c.232.112.501.132.773.132h2.804c.854.003 1.554.249 2.025.714zm-5.115-2.207c-.409-.373-.619-.925-.619-1.645 0-.717.207-1.271.616-1.644.395-.361.961-.543 1.69-.543.725 0 1.294.185 1.686.543.406.373.613.927.613 1.644 0 .718-.207 1.27-.613 1.645-.392.358-.958.54-1.687.54-.725-.002-1.294-.182-1.686-.54zM11.633 6.52a.583.583 0 01-.384-.547l.014-2.546a.604.604 0 01.62-.585h.002c.342.003.616.266.614.59l-.014 2.547a.604.604 0 01-.62.585h-.002c-.009 0-.014-.002-.025-.005-.009.003-.014.005-.023.005h-.003a.435.435 0 01-.179-.044zm-2.448.633l-1.16-1.118a.567.567 0 01.006-.832.64.64 0 01.874.003l1.16 1.118a.57.57 0 01-.003.831.64.64 0 01-.435.171c-.008 0-.016-.005-.025-.005-.008 0-.017.005-.025.005a.43.43 0 01-.176-.042.59.59 0 01-.216-.131zm4.711.131a.609.609 0 01-.21-.129.57.57 0 01-.005-.831l1.16-1.115a.64.64 0 01.873-.006c.244.23.244.6.006.832l-1.16 1.118a.628.628 0 01-.44.176c-.008 0-.016-.005-.025-.005-.008 0-.017.005-.025.005a.41.41 0 01-.174-.045z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeviceFilled;
