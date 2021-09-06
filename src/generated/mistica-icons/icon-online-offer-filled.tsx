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

const IconOnlineOfferFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.071 2.025c.309 0 .56.252.56.56 0 .541 0 .967 1.614.967h1.098c.922 0 1.6.193 2.067.588.451.378.678.922.678 1.61v.382c1.552.086 2.776.557 3.65 1.397 1.011.975 1.524 2.423 1.524 4.303v1.82c.1.124.182.272.255.404.03.056.075.137.115.199.067-.034.15-.084.21-.12.294-.177.658-.401 1.008-.197.35.205.342.636.333.98 0 .068-.002.163 0 .239.076.003.171 0 .239 0 .347-.009.778-.017.98.333.202.35-.02.714-.196 1.009-.034.058-.084.142-.12.21.061.039.142.084.198.115.306.168.687.375.687.787 0 .411-.381.621-.684.784-.056.03-.137.076-.199.115.034.067.084.151.12.21.177.294.401.658.197 1.008-.205.35-.636.342-.98.334-.068 0-.163-.003-.239 0-.003.075 0 .17 0 .238.009.347.017.778-.333.98-.35.202-.714-.02-1.008-.196-.06-.034-.143-.084-.21-.12-.04.061-.085.142-.115.198-.168.306-.379.687-.788.687-.408 0-.619-.381-.787-.687a3.926 3.926 0 00-.114-.198 2.958 2.958 0 00-.21.12c-.272.165-.603.364-.925.238-.851.443-1.907.667-3.146.667-1.806 0-3.218-.474-4.19-1.412-1.011-.975-1.524-2.423-1.524-4.302v-4.437c0-1.883.513-3.331 1.527-4.309.865-.834 2.081-1.302 3.613-1.395v-.48c-.01-.389-.13-.982-1.624-.982H7.248c-.964 0-1.591-.143-2.03-.462-.477-.344-.707-.874-.707-1.625 0-.308.252-.56.56-.56zM15.8 14.285a.516.516 0 01-.093.01c-.017 0-.033-.004-.05-.004-.227.118-.384.723-.605.782-.255.07-.762-.482-.989-.353-.227.129-.006.849-.188 1.034-.182.184-.902-.034-1.033.187-.132.221.42.734.353.989-.068.246-.801.415-.801.68 0 .267.733.435.8.681.07.255-.481.762-.352.99.129.226.848.002 1.033.187.126.123.065.493.082.759a.583.583 0 01.23.291c.251-.045.65-.426.865-.37.246.068.414.802.68.802.267 0 .435-.737.681-.802.255-.07.762.482.989.353.227-.128.006-.848.188-1.033.182-.185.902.033 1.033-.188.132-.221-.42-.734-.353-.989.065-.246.804-.414.804-.68 0-.266-.736-.435-.8-.681-.07-.252.48-.762.352-.989-.129-.227-.849-.005-1.034-.187-.184-.183.034-.902-.187-1.034-.222-.132-.734.42-.989.353-.227-.062-.384-.686-.616-.787zm.865 3.667c.448 0 .731.28.731.731 0 .451-.28.732-.73.732-.452 0-.732-.28-.732-.732 0-.45.28-.73.731-.73zm.006-1.994a.28.28 0 01.392-.048l.047.046a.274.274 0 010 .347l-2.319 2.963a.28.28 0 01-.392.048.28.28 0 01-.047-.392zm-.006 2.552c-.143 0-.17.028-.17.17 0 .144.03.172.17.172s.171-.028.171-.171c0-.143-.028-.171-.17-.171zm-1.89-2.72c.45 0 .73.28.73.731 0 .448-.28.731-.73.731-.451 0-.732-.28-.732-.731 0-.451.28-.731.732-.731zm.002.56c-.143 0-.17.031-.17.171s.027.17.17.17c.143 0 .171-.027.171-.17 0-.143-.028-.17-.17-.17zm-9.341-3.745a.28.28 0 00-.078.555c1.719.24 3.456.358 5.192.355a37.021 37.021 0 005.194-.355.282.282 0 00.232-.311.278.278 0 00-.31-.244 36.751 36.751 0 01-5.116.35 36.751 36.751 0 01-5.114-.35zm5.114-4.291a.562.562 0 00-.56.56v2.485a.561.561 0 001.12 0V8.874a.562.562 0 00-.56-.56z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOnlineOfferFilled;
