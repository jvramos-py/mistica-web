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

const IconDatabaseLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.29 21.287H4.714v-6.428h14.221v2.501c0 .215.141.357.355.357s.355-.142.355-.357V3.787A1.766 1.766 0 0017.865 2H4v20h15.286c.213 0 .354-.142.354-.357 0-.214-.136-.356-.35-.356zm-14.576-7.14V8.788h14.221v5.357H4.715zm14.217-10.36v4.288H4.714V2.718h13.152c.605 0 1.065.466 1.065 1.07zM6.134 4.862h2.844c.214 0 .355-.142.355-.357s-.14-.356-.355-.356H6.134c-.214 0-.355.141-.355.356s.141.357.355.357zm0 5.353h2.844c.214 0 .355.142.355.356 0 .215-.14.357-.355.357H6.134c-.214 0-.355-.142-.355-.357 0-.214.141-.356.355-.356zm0 6.075c-.214 0-.355.142-.355.357s.141.356.355.356h2.844c.214 0 .355-.141.355-.356s-.14-.357-.355-.357H6.134zM18.58 19.5c0-.394.319-.714.71-.714a.712.712 0 010 1.427.712.712 0 01-.71-.714z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.837 9.717l-.005 4.557c0 .331-.129.63-.333.86.207.227.338.533.338.866l-.005 4.555c0 .706-.569 1.282-1.269 1.282H3.417a1.277 1.277 0 01-1.266-1.282l.006-4.558c0-.33.129-.63.333-.857a1.295 1.295 0 01-.339-.868l.006-4.558c0-.333.129-.63.333-.86a1.275 1.275 0 01-.339-.862l.006-4.558c0-.706.568-1.283 1.269-1.283H20.57c.698 0 1.266.577 1.266 1.283l-.005 4.558c0 .33-.129.63-.333.86.207.226.338.529.338.865zM2.986 3.434L2.98 7.992a.44.44 0 00.437.442h17.146c.244 0 .44-.199.437-.442l.006-4.558a.44.44 0 00-.437-.442H3.426a.441.441 0 00-.44.442zm15.605 3.869c-.983 0-1.569-.594-1.569-1.589 0-.994.586-1.59 1.569-1.59s1.572.593 1.572 1.59c0 .995-.589 1.589-1.572 1.589zm-.74-1.589c0 .538.208.748.74.748s.742-.21.742-.748c0-.535-.215-.75-.742-.75-.532 0-.74.21-.74.75zm.723 4.69c.983 0 1.572.593 1.572 1.59 0 .995-.586 1.591-1.572 1.591-.983 0-1.568-.593-1.568-1.59-.003-.995.582-1.592 1.568-1.592zm.74 1.59c0-.537-.208-.75-.74-.75s-.74.21-.74.75c-.002.541.205.751.74.751.532 0 .74-.21.74-.75zm-.74 4.692c.983 0 1.572.594 1.572 1.591 0 .995-.586 1.591-1.572 1.591-.983 0-1.568-.593-1.568-1.59-.003-.995.582-1.592 1.568-1.592zm0 2.34c.532 0 .74-.21.74-.752 0-.537-.208-.75-.74-.75s-.74.21-.74.75c-.002.541.205.751.74.751zm2.434-3.029a.442.442 0 00-.437-.442H3.426a.437.437 0 00-.437.442l-.009 4.558a.44.44 0 00.437.442h17.146c.244 0 .44-.199.44-.442l.005-4.558zm-.445-1.28a.439.439 0 00.437-.443l.006-4.557a.44.44 0 00-.437-.443H3.426a.439.439 0 00-.437.443l-.006 4.557a.438.438 0 00.434.443h17.146zM4.37 5.711c0 .233.185.42.414.42h5.757a.417.417 0 00.414-.42.417.417 0 00-.414-.42H4.784a.417.417 0 00-.414.42zm6.17 5.863a.42.42 0 010 .84H4.785a.416.416 0 01-.414-.417c0-.232.185-.42.414-.42 0-.003 5.757-.003 5.757-.003zm.415 6.743a.417.417 0 00-.414-.42v.002H4.784a.417.417 0 00-.414.42c0 .23.185.418.414.418h5.757a.42.42 0 00.414-.42z"
                />
            </svg>
        );
    }
};

export default IconDatabaseLight;
