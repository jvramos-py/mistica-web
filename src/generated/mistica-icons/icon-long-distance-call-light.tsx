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

const IconLongDistanceCallLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.044 2.25c5.397.003 9.767 4.381 9.764 9.779a9.771 9.771 0 01-5.963 8.991 9.71 9.71 0 01-3.787.765.238.238 0 01-.104.022.28.28 0 01-.28-.28V2.536a.28.28 0 01.28-.28l.022.002a.278.278 0 01.068-.008zm-5.345.524c1.756.039 2.65.933 2.65 2.652.003.317-.034.636-.112.944-.193.821-.793 1.796-2.563 1.796-.174 0-.35-.008-.521-.03-.334.036-.507.702-.58 1.103-.154.832-.174 1.969-.174 2.753v.093c0 .784.017 1.924.174 2.756.076.4.25 1.07.58 1.104.173-.023.347-.031.52-.031 1.771 0 2.373.975 2.564 1.795.078.309.115.625.112.942 0 1.72-.89 2.613-2.65 2.652l-.053.003c-.3 0-.642-.056-.757-.073l-.02-.003-.016-.002c-1.014-.188-1.941-1.146-2.61-2.7-.715-1.662-1.093-3.891-1.093-6.44v-.096c0-2.549.378-4.778 1.092-6.44.67-1.554 1.597-2.515 2.611-2.7l.017-.003.02-.002c.123-.02.495-.082.809-.073zm5.536 13.328l-.001 5.114c.511-.045 1.01-.271 1.487-.672.538-.45 1.026-1.106 1.449-1.944.312-.621.575-1.317.784-2.066l.274.063a16.976 16.976 0 00-3.993-.495zm4.265.567l-.012.042a11.969 11.969 0 01-.817 2.141c-.47.932-1.02 1.658-1.625 2.154a9.21 9.21 0 005.166-3.21l.193.118c-.78-.509-1.78-.935-2.905-1.245zM6.685 3.303a4.313 4.313 0 00-.711.067l-.031.006c-1.622.3-3.264 3.356-3.264 8.616v.096c0 3.131.572 5.117 1.05 6.23.586 1.363 1.393 2.235 2.214 2.389l.03.005c.297.048.538.07.712.067.756-.016 1.291-.201 1.639-.56.333-.344.495-.857.495-1.566a3.139 3.139 0 00-.095-.81l-.003-.008c-.218-.938-.888-1.392-2.05-1.392a3.49 3.49 0 00-.485.031c-.014.003-.028.003-.042.003-.815-.034-1.025-1.165-1.095-1.538-.162-.874-.182-2.045-.182-2.851v-.096c0-.806.02-1.977.182-2.851.07-.373.28-1.504 1.095-1.535.014 0 .028 0 .042.003.16.022.323.03.485.03 1.162 0 1.835-.456 2.05-1.392l.003-.008a3.17 3.17 0 00.095-.81c0-.708-.162-1.221-.495-1.566-.348-.36-.883-.543-1.639-.56zm14.561 9l-.02.003h-4.13l-.002.165a17.702 17.702 0 01-.455 3.656c1.102.299 2.093.71 2.913 1.217a9.148 9.148 0 001.694-5.04zm-4.712.004l-4.3-.001v3.237l.22.003c1.278.026 2.51.178 3.64.441.27-1.138.42-2.386.44-3.68zm3.133-5.453l.046-.03c-.839.545-1.868.986-3.023 1.305.25 1.13.39 2.353.408 3.616h4.128l.02.003V11.7a9.2 9.2 0 00-1.58-4.846zm-3.523 1.413l-.191.046a18.02 18.02 0 01-3.718.412l-.001 3.02h4.299l-.001-.165a17.305 17.305 0 00-.388-3.313zm-3.91-5.448v5.344l.359-.005a17.04 17.04 0 003.418-.435c-.217-.836-.5-1.606-.841-2.288-.42-.838-.908-1.49-1.449-1.944-.48-.404-.977-.628-1.487-.672zm1.81.208l.056.046c.583.495 1.116 1.205 1.571 2.11.361.716.659 1.525.887 2.399l-.33.088c1.202-.302 2.275-.743 3.108-1.272a9.141 9.141 0 00-.783-.89 9.158 9.158 0 00-4.509-2.481z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLongDistanceCallLight;
