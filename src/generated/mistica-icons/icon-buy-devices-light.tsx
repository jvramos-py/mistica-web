/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBuyDevicesLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18 5.922c0 .003-.002.005-.002.005s-.003.002-.003.004v12.855c0 1.774-1.455 3.214-3.249 3.214H8.25C6.456 22 5 20.56 5 18.786V5.214C5 3.44 6.456 2 8.249 2h6.502C16.544 2 18 3.44 18 5.214v.708zm-3.254-3.209H8.25c-1.396 0-2.528 1.12-2.528 2.5v.353h11.553v-.352c0-1.38-1.132-2.5-2.528-2.5zm0 18.57c1.396 0 2.528-1.12 2.528-2.501V6.279H5.721v11.433h7.584c.198 0 .36.16.36.357a.359.359 0 01-.36.356H5.72v.357c0 1.38 1.132 2.5 2.528 2.5h6.497zm.726-2.501c.398 0 .721-.32.721-.713a.718.718 0 00-.72-.714.719.719 0 00-.722.714c0 .393.324.713.721.713zM13.258 8.61a.361.361 0 00-.49-.141.353.353 0 00-.143.484l.892 1.614H9.483l.892-1.614a.353.353 0 00-.144-.484.361.361 0 00-.49.141l-1.076 1.957H6.71l1.141 4.567c.125.452.61.79 1.123.79h5.056c.513 0 .998-.338 1.128-.8l1.141-4.557h-1.954L13.258 8.61zm.768 6.601H8.97c-.18 0-.388-.128-.425-.256l-.92-3.67h7.74l-.91 3.661c-.037.137-.245.265-.43.265z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M13.588 10.913c0-.404.23-.591.588-.591s.59.187.588.59c0 .197-.053.34-.148.438-.104.106-.255.156-.44.156s-.336-.05-.44-.156c-.095-.098-.148-.244-.148-.437z"
                    fill={fillColor}
                />
                <path
                    d="M10.63 16.918h6.554c.754 0 1.39-.255 1.897-.753.49-.493.854-1.208 1.106-2.182.118-.454.507-2.017.882-3.53l.364-1.458.393-1.57a.28.28 0 00-.272-.35h-3.818V3.859c0-1.145-.552-1.703-1.683-1.703h-3.751c-1.118 0-1.684.572-1.684 1.703v3.213H7.051a633.45 633.45 0 00-.514-3.045 2.174 2.174 0 00-.854-1.347 2.675 2.675 0 00-1.608-.524H2.436a.28.28 0 00-.28.28c0 .154.126.28.28.28h1.639c.468 0 .919.146 1.269.412.344.258.569.61.639.997.16.894 1.495 8.928 1.638 9.827.154.963.507 1.711 1.053 2.227.513.484 1.19.74 1.956.74zm10.565-9.283c-.162.64-.401 1.605-.654 2.619l-.015.062-.409 1.637a391.2 391.2 0 01-.473 1.887c-.224.863-.547 1.51-.961 1.924-.4.4-.89.597-1.499.597H10.63c-1.328 0-2.202-.888-2.454-2.496-.084-.539-.598-3.64-1.031-6.233h3.473v3.76c0 1.145.552 1.703 1.684 1.703h3.75c1.132 0 1.681-.558 1.684-1.706V7.635h3.46zM11.18 3.86c0-.82.316-1.143 1.123-1.143h3.75c.819 0 1.124.309 1.124 1.143v7.53c0 .423-.087.717-.255.888-.168.17-.454.255-.868.255h-3.751c-.415 0-.698-.082-.868-.255-.171-.174-.255-.465-.255-.888V3.86zM9.257 20.462c0 .87.501 1.372 1.373 1.372.874 0 1.372-.501 1.372-1.372 0-.872-.501-1.373-1.372-1.373-.872 0-1.373.501-1.373 1.373zm1.373-.813c.563 0 .812.25.812.813s-.25.812-.812.812c-.563 0-.813-.25-.813-.812 0-.564.25-.813.813-.813zm4.09.813c0 .87.5 1.372 1.372 1.372.874 0 1.372-.501 1.372-1.372 0-.872-.501-1.373-1.372-1.373-.871 0-1.373.501-1.373 1.373zm1.372-.813c.563 0 .812.25.812.813s-.25.812-.812.812c-.563 0-.812-.25-.812-.812 0-.564.249-.813.812-.813z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconBuyDevicesLight;
