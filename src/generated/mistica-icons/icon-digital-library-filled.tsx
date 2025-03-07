/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDigitalLibraryFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.04 14.607c-.552.59-1.347.89-2.356.89l-4.061.006v.776h6.619a.609.609 0 01.602.619.612.612 0 01-.602.619h-6.617v.77a.612.612 0 01-.602.62c-2.996 0-5.253 1.175-5.35 1.225l-.003.001a.637.637 0 01-.257.065.024.024 0 00-.012.003l-.01.002a.613.613 0 01-.281-.072c-.022-.015-2.322-1.227-5.353-1.227a.61.61 0 01-.602-.62v-8.33a.607.607 0 01.554-.616c.068-.006.891-.065 2.029.059V7.032c0-1 .271-1.79.803-2.352.552-.58 1.342-.874 2.353-.874l10.79-.006c1.011 0 1.801.291 2.353.874.532.56.804 1.35.804 2.35v5.224c0 1-.272 1.793-.801 2.359zm-7.622 3.073v-7.124c-.905.003-2.767.12-4.428.93v7.151a13.948 13.948 0 014.428-.957zm-5.633.955l.003-7.143a7.755 7.755 0 00-.61-.264 6.32 6.32 0 00-.368-.126c-.081-.027-.162-.056-.24-.08-.171-.054-.34-.096-.508-.138a.465.465 0 01-.042-.011c-.014-.004-.028-.009-.042-.011a12.448 12.448 0 00-2.619-.302v7.117c1.516.075 3.012.4 4.426.958z"
            />
        </svg>
    );
};

export default IconDigitalLibraryFilled;
