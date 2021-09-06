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

const IconDataVirusRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.339 16.597c1.232 0 1.571-.454 1.571-2.11 0-1.039-.148-1.593-.498-1.857-.227-.17-.577-.255-1.073-.255-.499 0-.852.084-1.078.258-.348.266-.493.818-.493 1.852 0 1.66.336 2.112 1.571 2.112zm.003-5.477c-1.056 0-1.056.213-1.056.513 0 .008 0 .011.003.017a3.234 3.234 0 011.05-.154c.412 0 .756.056 1.056.157v-.02c0-.3 0-.513-1.053-.513zm2.963 2.62c.244 0 .443.198.443.442v.633a.444.444 0 01-.885 0v-.19h-.073a5.24 5.24 0 01-.154 1.288l.588.18a.44.44 0 01.314.445l-.05.952a.442.442 0 01-.443.417h-.023a.442.442 0 01-.417-.464l.03-.608-.386-.118c-.358.462-.94.765-1.913.765-.975 0-1.557-.303-1.916-.768l-.4.12.03.609a.442.442 0 01-.417.464h-.025a.442.442 0 01-.443-.417l-.05-.952a.44.44 0 01.314-.446l.605-.182a5.368 5.368 0 01-.152-1.283H5.81v.19a.444.444 0 01-.886 0v-.632c0-.244.2-.443.443-.443h.54c.034-.367.107-.722.242-1.042l-.72-.218a.44.44 0 01-.314-.446l.05-.955a.442.442 0 01.883.048l-.031.608.398.12a1.8 1.8 0 01-.017-.224c0-1.395 1.358-1.395 1.941-1.395s1.941 0 1.941 1.395c0 .076-.008.146-.017.216l.373-.112-.03-.608a.442.442 0 11.881-.048l.05.955a.44.44 0 01-.313.446l-.706.213c.138.319.208.68.244 1.047h.543v-.003zm-2.991-.706c.243 0 .442.196.442.442v2.37a.444.444 0 01-.885 0v-2.37a.44.44 0 01.443-.442zm10.53 5.963c.744-.224 1.635-.619 1.635-1.224v-2.591a5.63 5.63 0 01-1.277.557c-1.132.34-2.614.527-4.168.527-.219 0-.429-.014-.642-.02-.014.087-.025.177-.039.258-.174.995-.986 1.947-1.95 2.76.799.134 1.687.21 2.617.21 1.437 0 2.795-.169 3.823-.477zM8.338 20.442c1.46-.728 4.549-2.568 4.824-4.145.033-.193.064-.42.09-.661 0-.017-.01-.031-.006-.048.002-.022.014-.039.016-.061.132-1.28.182-3.07.2-4.297-.006-.037-.02-.073-.018-.112.003-.028.014-.05.02-.076.003-.19.003-.367.006-.518h-.003c-1.182 0-1.927-.493-2.6-.936-.697-.462-1.358-.896-2.526-.899h-.003c-1.165 0-1.826.437-2.527.896-.677.449-1.431.947-2.588.947h-.011c.008 1.328.059 4.342.308 5.762.247 1.426 2.98 3.24 4.818 4.148zM9.563 6.238v1.398c.826.204 1.426.59 1.97.95.739.49 1.327.876 2.422.702a.64.64 0 01.496.135.615.615 0 01.224.454c0 .042 0 .302-.003.689.12.003.238.008.359.008 1.442 0 2.798-.168 3.82-.476.942-.283 1.449-.7 1.625-1.003V6.252c-.35.205-.773.384-1.28.535-1.132.339-2.61.527-4.168.527-1.557 0-3.036-.188-4.168-.527a5.918 5.918 0 01-1.297-.549zM11.2 3.706c-.854.258-1.39.594-1.56.958.162.367.706.709 1.571.969 1.023.305 2.378.476 3.82.476 1.443 0 2.8-.168 3.822-.473.851-.255 1.4-.594 1.568-.958-.204-.462-.938-.779-1.577-.97-1.022-.305-2.38-.476-3.823-.476-1.44 0-2.799.169-3.821.474zm3.46 8.061a58.04 58.04 0 01-.144 3.278c.174.005.342.017.516.017 1.442 0 2.798-.168 3.82-.477.939-.283 1.446-.7 1.625-1v-2.89a5.63 5.63 0 01-1.277.557c-1.132.339-2.614.527-4.168.527-.126 0-.247-.006-.373-.012zm4.531-9.212c1.656.495 2.496 1.297 2.496 2.375v12.843c0 1.078-.84 1.88-2.496 2.375-1.137.34-2.619.527-4.17.527-1.437 0-2.799-.165-3.897-.46a21.12 21.12 0 01-2.526 1.438.597.597 0 01-.515-.003c-.541-.255-5.3-2.563-5.751-5.151C1.989 14.549 2 10.062 2 9.87a.6.6 0 01.745-.583c1.076.169 1.658-.218 2.398-.708.779-.516 1.664-1.098 3.193-1.098h.02V4.924c0-.176.025-.347.073-.512.238-.827 1.053-1.454 2.423-1.866 1.131-.339 2.613-.526 4.17-.526 1.555.008 3.037.196 4.168.535z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataVirusRegular;
