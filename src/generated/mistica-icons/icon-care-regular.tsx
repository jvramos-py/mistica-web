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

const IconCareRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.064 17.75c.272-.174.247-.216.149-.407-.098-.182-.272-.24-.443-.182l-2.986 1.045c-.033.008-.064 0-.098.008-.238.14-.501.233-.79.233H8.154a.62.62 0 01-.616-.622c0-.34.28-.622.616-.622h3.742c.166 0 .345-.182.345-.347 0-.14-.073-.3-.238-.308l-.205.008c-.633.008-1.958.042-3.215-.748-.009-.008-.6-.325-2.41-.39v3.138l3.471 1.683c.247.14.535.2.88.2.305 0 .552-.043.748-.132.014-.012 3.666-1.843 4.792-2.558zM4.938 19.782v-4.714a.227.227 0 00-.232-.233H3.465c-.123 0-.233.1-.233.233v4.714a.23.23 0 00.233.224h1.24c.135 0 .233-.1.233-.224zm10.426-3.801a1.572 1.572 0 011.908.714c.445.863.23 1.61-.552 2.106-1.177.748-4.77 2.555-4.924 2.63a3.13 3.13 0 01-1.275.25c-.569 0-1.062-.115-1.457-.347l-2.91-1.404a1.461 1.461 0 01-1.448 1.32H3.465A1.467 1.467 0 012 19.783v-4.714c0-.813.658-1.477 1.465-1.477h1.24c.471 0 .88.224 1.152.572 2.443.042 3.255.507 3.395.596.922.58 1.964.555 2.516.55.098-.009.19-.009.246-.009.748.017 1.342.588 1.44 1.345l1.91-.664zm-11.272-.558c.283 0 .488.205.488.49a.475.475 0 01-.488.496.48.48 0 01-.493-.496c0-.285.21-.49.493-.49zm16.365-6.81V3.9a.223.223 0 00-.225-.224h-1.24a.227.227 0 00-.233.224v4.715c0 .123.1.232.233.232h1.24a.232.232 0 00.225-.232zm-2.93-.35V5.128l-3.471-1.683c-.255-.14-.535-.199-.88-.199-.302 0-.551.042-.747.132-.017.008-3.675 1.843-4.793 2.557-.272.174-.255.216-.149.406a.352.352 0 00.446.182l2.983-1.044c.034-.009.064-.009.098-.009.23-.148.501-.232.782-.232h3.75a.62.62 0 01.616.621c0 .34-.28.622-.616.622h-3.75c-.157 0-.337.182-.337.34 0 .148.073.307.238.307h.197c.641-.016 1.963-.042 3.224.745.008.012.593.328 2.409.393zm2.705-5.831A1.46 1.46 0 0121.69 3.9v4.715c0 .812-.65 1.476-1.457 1.476h-1.24a1.47 1.47 0 01-1.152-.571c-2.442-.042-3.255-.507-3.395-.597-.921-.58-1.963-.566-2.515-.55h-.255c-.748-.008-1.342-.587-1.429-1.344l-1.907.673a1.578 1.578 0 01-1.91-.711c-.446-.872-.23-1.612.543-2.107 1.185-.748 4.779-2.555 4.933-2.63.823-.373 1.997-.331 2.73.1l2.911 1.404a1.46 1.46 0 011.448-1.32h1.238v-.005zm-.588 4.837c.28 0 .48.208.48.49 0 .28-.2.482-.48.482a.464.464 0 01-.479-.482c.003-.282.202-.49.48-.49zm-9.106 3.297c-.146.126-.11.387-.076.532.087.37.263.762.518 1.163.21.33.373.535.664.837.02.02.09.096.152.138.022.005.044.008.064.014.062-.062.126-.132.146-.152.297-.308.453-.51.663-.837.255-.4.432-.793.519-1.163.033-.145.07-.409-.073-.532a.463.463 0 00-.275-.098.867.867 0 00-.445.115l-.381.224-.333.008-.423-.232a.839.839 0 00-.41-.115h-.033a.483.483 0 00-.277.098zm.283 3.347a5.95 5.95 0 01-.81-1.022c-.325-.513-.552-1.025-.666-1.52-.163-.687 0-1.3.442-1.684a1.6 1.6 0 01.967-.376 2 2 0 011.061.258l.009.006c.002-.003.008-.003.01-.006a1.988 1.988 0 011.062-.258c.365.02.706.152.964.376.445.383.608.997.445 1.683a4.929 4.929 0 01-.67 1.521 5.87 5.87 0 01-.795 1.008 2.97 2.97 0 01-.313.283c-.14.104-.306.177-.468.213l-.23.025h-.003a1.448 1.448 0 01-.238-.025 1.246 1.246 0 01-.465-.213 2.766 2.766 0 01-.302-.269z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareRegular;
