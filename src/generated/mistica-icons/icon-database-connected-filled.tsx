/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDatabaseConnectedFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.359 8.189V5.941C17.359 4.873 16.536 4 15.57 4H6.64v4.189h10.72zM6.64 13.904V9.33h10.72v4.574H6.64zM9 11.617h2.107c.284 0 .535-.268.535-.57 0-.303-.251-.57-.535-.57H9a.576.576 0 00-.571.57c0 .302.288.57.571.57zM6.64 20h10.72v-4.955H6.64V20zm4.467-3.814c.284 0 .535.269.535.571 0 .302-.251.57-.535.57H9c-.283 0-.571-.268-.571-.57 0-.302.247-.57.571-.57h2.108zm0-11.045c.284 0 .535.268.535.57 0 .303-.251.571-.535.571H9c-.283 0-.535-.268-.535-.57 0-.303.21-.57.535-.57h2.108zm-6.04 7.808a.566.566 0 01-.32-.113 2.453 2.453 0 01-.965-1.98c0-.8.357-1.52.965-1.98.252-.19.572-.111.75.152a.59.59 0 01-.142.8 1.351 1.351 0 000 2.097c.252.19.284.531.142.8a.498.498 0 01-.43.224zm-1.747.994a.447.447 0 00.357.152.574.574 0 00.393-.19.576.576 0 00-.036-.8 3.126 3.126 0 01-.965-2.249c0-.838.357-1.677.965-2.248.215-.19.215-.57.036-.8a.495.495 0 00-.75-.038C2.466 8.53 2 9.676 2 10.856s.462 2.327 1.321 3.087zm15.61-.995a.508.508 0 01-.429-.229.59.59 0 01.142-.8c.32-.229.498-.648.498-1.067 0-.42-.178-.8-.498-1.068-.252-.19-.284-.532-.142-.8.178-.268.498-.303.75-.151.608.497.965 1.219.965 2.019s-.357 1.521-.965 1.98a.52.52 0 01-.32.116zm.998.956a.57.57 0 00.393.19.442.442 0 00.357-.15c.855-.761 1.321-1.907 1.321-3.088 0-1.18-.498-2.287-1.321-3.086-.215-.23-.535-.19-.75.039a.576.576 0 00.036.8c.608.57.965 1.409.965 2.247 0 .84-.357 1.678-.965 2.248-.215.19-.215.571-.036.8z"
            />
        </svg>
    );
};

export default IconDatabaseConnectedFilled;
