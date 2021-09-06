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
    size?: string | number;
};

const IconCookingRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.602 16.716c.633-.009.955-.356.955-1.034 0-.675-.316-1.02-.935-1.022-.011 0-.023-.006-.031-.006-.028.712-.09 1.406-.204 2.056l.1.008h.115v-.002zm-.498-5.275c.168-.162.252-.403.252-.717 0-.314-.084-.555-.252-.72-.166-.157-.398-.235-.695-.235-.073 0-.14.006-.205.014-.01.003-.014 0-.02-.008-.008-.009-.005-.012-.002-.026.014-.103.025-.21.025-.325 0-.465-.126-.823-.375-1.067-.241-.232-.586-.35-1.03-.35-.443 0-.788.118-1.029.353a1.186 1.186 0 00-.288.493c-.003.006-.006.011-.012.014-.005.003-.01.003-.02.003a2.224 2.224 0 00-.313-.025c-.443 0-.79.117-1.028.352a1.083 1.083 0 00-.188.247c-.01.02-.014.022-.036.025-.022.003-.025 0-.042-.017-.213-.21-.527-.316-.924-.316-.398 0-.71.106-.922.316a.907.907 0 00-.174.258s-.056.034-.092.022c-.048-.016-.065-.075-.065-.075-.033-.266-.112-.496-.268-.65-.194-.188-.471-.283-.827-.283s-.63.095-.826.283c-.104.104-.18.238-.233.395-.002.006-.005.014-.014.014-.016 0-.025-.011-.03-.011-.157-.12-.34-.177-.597-.177-.294 0-.53.079-.69.236A.798.798 0 008 9.769c-.003.011-.006.022-.02.03-.014.01-.025.006-.044.004a1.193 1.193 0 00-.177-.012c-.297 0-.53.079-.686.236a.617.617 0 00-.098.142c-.014.026-.02.04-.045.05-.028.01-.05.004-.078-.008a.938.938 0 00-.295-.047c-.246 0-.437.064-.571.196a.573.573 0 00-.106.148c-.017.031-.028.048-.06.062-.033.017-.055.008-.095.003a1.074 1.074 0 00-.218-.02c-.244 0-.437.067-.569.196-.137.135-.207.334-.207.591v.345h5.252a.164.164 0 01.037-.006h1.529a.15.15 0 01.036.006h6.832c.294-.011.524-.09.687-.244zm-.653 2.294c0-.056 0-.501.003-.89h-.031l-.014.002h-3.266l-1.361.003h-2.157c-.031 0-.056-.003-.084-.005h-1.51c-.028.002-.053.005-.087.005H7.762l-2.518.017v.725c.02 4.58.969 6.126 3.762 6.126.156 0 .305-.008.45-.02H14.2c.37.023.644.02.935 0h.104c.028-.005.053-.01.084-.013 2.275-.235 3.093-1.793 3.129-5.95zm-14.18 2.98l.051-.002a15.436 15.436 0 01-.204-2.05c-.614.01-.928.352-.928 1.022 0 .675.32 1.022.953 1.033h.129v-.002zm15.356-3.223c.964.008 2.087.588 2.087 2.193 0 1.602-1.129 2.188-2.095 2.202h-.165a13.713 13.713 0 01-.364-.026c-.519 1.566-1.527 2.715-3.496 2.967a.524.524 0 01-.199.039h-.219a6.04 6.04 0 01-1.014-.003l-4.666.003c-.135.011-.308.02-.49.02-2.521 0-3.802-1.126-4.415-3.028-.151.02-.24.025-.297.028H4.12c-.966-.014-2.095-.6-2.095-2.202 0-1.591 1.104-2.171 2.062-2.19v-.821a1.175 1.175 0 01-.518-.972v-.367c0-.731.305-1.182.56-1.432.221-.218.596-.487 1.246-.453.244-.3.62-.485 1.154-.412a.93.93 0 01.816-.387c.008-.01.039.017.047.006.333-.457.717-.6 1.474-.6.061 0 .156.017.218.023.3-.252.773-.6 1.504-.6.748 0 1.219.345 1.516.6.232-.07.501-.112.812-.112.286 0 .538.036.753.098a2.574 2.574 0 011.132-.373c.05-.061.104-.12.16-.173.316-.311.893-.681 1.832-.681.94 0 1.515.37 1.834.68.253.244.541.642.667 1.247.269.112.468.26.608.398.277.269.608.759.608 1.56 0 .804-.334 1.291-.61 1.563-.08.073-.18.151-.292.224v.983c.003 0 .005-.002.011-.002h.008zm-8.395-9.415c-.647.185-.89.588-.728 1.205l.031.114 1.989-.565c-.02-.04-.048-.076-.062-.12-.173-.603-.585-.819-1.23-.634zm-6.599 4.19a.58.58 0 01-.557-.422.586.586 0 01.4-.723l4.944-1.41-.036-.128c-.252-.944 0-2.199 1.532-2.633 1.53-.44 2.39.499 2.658 1.431.014.048.011.096.014.143l4.857-1.384a.574.574 0 01.715.404.586.586 0 01-.4.723L4.786 8.245a.466.466 0 01-.154.023z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCookingRegular;
