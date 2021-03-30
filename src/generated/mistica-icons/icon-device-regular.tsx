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

const IconDeviceRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.773 9.279c-.196.182-.235.538-.235.806 0 .267.039.622.235.799.193.179.56.215.835.215.274 0 .638-.036.829-.212.193-.18.232-.533.232-.802 0-.268-.042-.624-.235-.806-.193-.18-.557-.213-.829-.213-.272 0-.636.033-.832.213zm-.851 2.465c-.41-.376-.617-.933-.617-1.659 0-.725.208-1.285.617-1.663.392-.365.96-.547 1.686-.547.728 0 1.291.182 1.686.55.406.378.61.938.61 1.663 0 .726-.207 1.283-.61 1.658-.392.362-.958.547-1.686.547-.728-.003-1.294-.188-1.686-.55zM5.252 9.27c-.193.182-.235.538-.235.807 0 .266.042.622.232.801.19.177.558.213.83.213.271 0 .638-.036.834-.216.193-.179.235-.532.235-.798s-.042-.625-.235-.807c-.196-.179-.56-.215-.832-.215-.271 0-.638.036-.829.215zm.83 3.014c-.726 0-1.292-.185-1.684-.546-.406-.375-.614-.933-.614-1.658 0-.726.208-1.286.614-1.664.392-.364.958-.55 1.683-.55.726 0 1.294.183 1.686.547.41.378.617.939.617 1.664 0 .726-.208 1.283-.617 1.661-.394.361-.96.546-1.686.546zm5.691-5.68a.605.605 0 01-.613-.6l.014-2.571a.606.606 0 01.616-.591h.003a.605.605 0 01.613.6l-.014 2.57a.606.606 0 01-.616.592h-.003zm-2.678.593L7.938 6.07a.579.579 0 01.006-.84c.24-.23.633-.23.871.002L9.972 6.36a.585.585 0 01-.003.843.629.629 0 01-.874-.006zm4.93.177a.631.631 0 01-.434-.17.579.579 0 01-.006-.841l1.157-1.13a.635.635 0 01.874-.005c.241.23.244.608.003.84l-1.157 1.13a.616.616 0 01-.437.176zm6.387 12.322l.039-3.986c0-.272-.053-.65-.314-.91-.291-.294-.776-.353-1.131-.353h-2.802c-.036 0-.08-.003-.12 0h-.011c-.13.003-.266-.003-.404 0-.148.003-.375 0-.507-.048a1.242 1.242 0 01-.378-.258 8.15 8.15 0 01-.308-.397l-2-2.594v1.42l1.41 1.784.61.77s.143.163.196.286c.05.112.064.353.064.429l-.014 1.255-.028 2.602h3.426v-2.728c0-.33.277-.594.616-.594.34 0 .617.266.617.594v2.728h1.039zm-9.202-7.134v-1.42l-2 2.596s-.224.305-.308.398a1.194 1.194 0 01-.378.258c-.132.047-.362.05-.507.047-.137-.003-.278.003-.404 0H4.681c-.356 0-.838.062-1.132.356-.258.26-.314.639-.314.91l.04 3.986h1.039v-2.728c0-.328.277-.594.616-.594.339 0 .616.266.616.594v2.728h3.426l-.025-2.605-.017-1.255c0-.075.017-.316.064-.428.054-.124.196-.286.196-.286l.611-.77 1.41-1.787zm9.818 1.414c.431.432.658 1.031.658 1.737l-.05 4.924c0 .137-.118.25-.26.25H13.73a.256.256 0 01-.26-.25l.047-4.784-1.678-2.123-1.672 2.117.05 4.785c0 .14-.117.249-.263.249H2.311a.254.254 0 01-.26-.25L2 15.705c0-.703.227-1.302.658-1.736.47-.47 1.168-.72 2.02-.72h2.801c.188 0 .367.017.538.042L11.325 9l.003-.003.005-.009c.009-.01.023-.02.031-.028a.49.49 0 01.104-.098c.017-.01.033-.016.05-.025.034-.02.07-.042.112-.056.003-.003.009 0 .011-.003.009-.003.014-.003.023-.003a.656.656 0 01.165-.025c.014 0 .025.006.04.006a.632.632 0 01.148.025l-.003-.003h.006c.002 0 .002.003.002.003a.048.048 0 00.02.003c.003.003.008 0 .011.003.042.014.076.036.115.056.014.008.034.014.048.025a.598.598 0 01.103.098c.012.011.023.017.031.03l.006.006.003.003 3.308 4.294c.17-.025.35-.039.537-.039h2.802c.854-.003 1.551.247 2.022.717z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeviceRegular;
