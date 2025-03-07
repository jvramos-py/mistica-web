/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPrepaidLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.5 5.922v-.708C18.5 3.44 17.044 2 15.251 2H8.75C6.956 2 5.5 3.44 5.5 5.214v13.572C5.5 20.56 6.956 22 8.749 22h6.497c1.794 0 3.25-1.44 3.25-3.214V5.931l.002-.004s.002-.002.002-.005zM8.749 2.713h6.497c1.396 0 2.528 1.12 2.528 2.5v.353H6.221v-.352c0-1.38 1.132-2.5 2.528-2.5zm0 18.57c-1.396 0-2.528-1.12-2.528-2.501v-.357h7.584c.198 0 .36-.16.36-.356a.359.359 0 00-.36-.357H6.22V6.279h11.553v12.503c0 1.38-1.132 2.5-2.528 2.5H8.75zm7.944-3.214a.718.718 0 01-.72.713.718.718 0 01-.722-.713c0-.394.324-.714.721-.714.397 0 .721.32.721.714zm-2.435-2.501a.36.36 0 00.36-.357.359.359 0 00-.36-.356h-3.263c.125-.21.194-.453.194-.713v-1.788h1.807c.199 0 .36-.16.36-.356a.359.359 0 00-.36-.357h-1.807v-1.609c0-.686.564-1.248 1.262-1.248.295 0 .568.096.794.279a.367.367 0 00.509-.055.354.354 0 00-.056-.503 1.993 1.993 0 00-1.247-.439c-1.096 0-1.988.883-1.988 1.966v1.61h-.36c-.199 0-.36.16-.36.356 0 .196.161.356.36.356h.36v1.788a.71.71 0 01-.72.713c-.2 0-.361.16-.361.356a.36.36 0 00.36.357h4.516z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.359 18.66c0-.568.327-.834.832-.834.504 0 .832.266.832.834 0 .275-.076.477-.21.614-.146.148-.362.221-.622.221s-.477-.073-.622-.221c-.135-.137-.21-.339-.21-.614zm-5.734-5.565c0 .154.126.28.28.28a.28.28 0 00.28-.28v-.42c.926-.107 1.487-.661 1.487-1.496 0-1-.802-1.321-1.487-1.416V8.107c.236.037.464.119.703.248l.003.003a.429.429 0 00.193.056.306.306 0 00.305-.305c0-.115-.067-.219-.187-.294a2.388 2.388 0 00-1.017-.325v-.404a.28.28 0 00-.28-.28.28.28 0 00-.28.28v.405c-.837.096-1.364.648-1.364 1.46 0 .53.24 1.19 1.364 1.377v1.738a2.359 2.359 0 01-.958-.389.393.393 0 00-.213-.07.316.316 0 00-.32.311c0 .12.051.213.155.286a2.79 2.79 0 001.336.48v.41zm0-3.42c-.647-.158-.737-.483-.737-.762 0-.436.278-.732.737-.81v1.572zm.56.733c.75.145.857.481.857.799 0 .465-.322.778-.857.859v-1.658z"
                />
                <path
                    fill={fillColor}
                    d="M17.737 21.834h-7.101c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28v-4.094c-1.347-.046-2.4-.428-3.138-1.139-.817-.787-1.232-1.966-1.232-3.507 0-1.54.415-2.72 1.232-3.507.737-.71 1.791-1.091 3.135-1.138v-.27c0-1.009.244-1.746.742-2.25.51-.512 1.252-.762 2.272-.762h7.1c1.032 0 1.774.244 2.273.745.498.502.739 1.241.739 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731zM8.182 5.438c1.346.046 2.403.427 3.14 1.138.818.788 1.233 1.967 1.233 3.507 0 1.541-.415 2.72-1.233 3.507-.736.71-1.792 1.093-3.137 1.139v4.094c0 1.742.711 2.45 2.451 2.45h7.1c1.743 0 2.452-.708 2.452-2.45V5.167c0-.87-.188-1.484-.575-1.87-.386-.387-1.002-.58-1.876-.58h-7.101c-.863 0-1.473.193-1.871.593-.392.395-.583 1.003-.583 1.857v.271zm-.277 8.735c1.332 0 2.348-.331 3.025-.986.703-.678 1.059-1.723 1.059-3.104 0-1.38-.356-2.425-1.059-3.103-.675-.656-1.695-.986-3.025-.986-1.33 0-2.35.33-3.031.986-.703.678-1.062 1.722-1.062 3.103 0 1.381.356 2.426 1.06 3.104.677.655 1.697.986 3.03.986h.003z"
                />
            </svg>
        );
    }
};

export default IconPrepaidLight;
