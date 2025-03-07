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

const IconArrowUpRightLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.653 20.072a.354.354 0 00.256.108.36.36 0 00.26-.104l6.651-6.648 3.076 3.076c.528.528 1.288.68 1.98.392A1.795 1.795 0 0022 15.216V2H8.789c-.748 0-1.392.432-1.68 1.124a1.788 1.788 0 00.392 1.98l3.076 3.076-8.472 8.472a.37.37 0 000 .516.362.362 0 00.516 0l8.983-8.984-3.591-3.592a1.073 1.073 0 01-.236-1.188 1.077 1.077 0 011.008-.676h12.491v12.48c0 .536-.352.872-.676 1.008a1.073 1.073 0 01-1.188-.236l-3.592-3.592-7.167 7.168a.37.37 0 000 .516zM7.453 22a.728.728 0 100-1.456.728.728 0 000 1.456z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.917 19.975c.336.333.678.501 1.017.501.336 0 .67-.16.988-.482l5.096-5.075a.194.194 0 01.134-.062.16.16 0 01.11.042l2.57 2.572c.29.266.788.341 1.16.176a.766.766 0 00.474-.737l.005-12.666a.672.672 0 00-.182-.538.67.67 0 00-.537-.182H7.147c-.384 0-.684.188-.827.518-.154.359-.081.826.171 1.09L9.27 7.91c.064.062.053.174-.017.244l-5.238 5.168-.003.003c-.272.275-.84.849-.157 1.594l5.062 5.056zm.398-.395l-5.05-5.045c-.25-.272-.259-.406.148-.812L9.65 8.555a.744.744 0 00.224-.513.707.707 0 00-.205-.524L6.9 4.748c-.087-.092-.134-.311-.062-.479.054-.123.152-.18.314-.18h12.63l.014-.002c.045-.006.084.003.101.02.017.016.025.053.02.1-.003.009-.003.02-.003.028l-.006 12.684c0 .073-.016.165-.142.221-.168.076-.423.04-.55-.073l-2.56-2.56a.711.711 0 00-.523-.204.756.756 0 00-.513.224l-5.092 5.07c-.432.431-.77.425-1.213-.017z"
                />
            </svg>
        );
    }
};

export default IconArrowUpRightLight;
