/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconNotesFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.385 8.152a.866.866 0 00-.26-.619l-5.216-5.129a.833.833 0 00-.603-.249H5.998c-.72 0-1.378.661-1.378 1.378v16.93c0 .731.642 1.378 1.378 1.378h12c.754 0 1.387-.627 1.387-1.378V8.153zm-5.75-4.344l4.072 4.005v.003h-1.79c-.68 0-1.26-.218-1.664-.613-.406-.395-.619-.961-.619-1.614V3.808zm2.223 9.65c-.151.145-1.815 1.652-4.454 4.03l-1.988.692.65-1.966c.389-.347 4.249-3.815 4.5-4.07.239-.241.491-.292.676-.275a.964.964 0 01.896.952.883.883 0 01-.28.636zm-2.131-2.169c.935-.944 2.243-.742 2.971 0 .398.404.628.975.628 1.538 0 .572-.224 1.09-.636 1.499-.213.207-2.56 2.328-4.493 4.07l-.07.064a.939.939 0 01-.364.21l-2.26.765c-.113.03-.222.048-.325.048-.031 0-.065 0-.087-.009-.017.009-.031.009-.048.009H7.578a.604.604 0 01-.594-.605c0-.33.27-.605.594-.605h.58l.002-.013c.008-.053.016-.112.037-.164l.286-.88h-.905a.604.604 0 01-.594-.604c0-.34.27-.605.594-.605h1.3l.07-.21a1.14 1.14 0 01.302-.46l.429-.386h-2.1a.604.604 0 01-.595-.606.6.6 0 01.594-.605h3.448c.209-.185.41-.366.604-.541.203-.183.398-.358.584-.523H7.578a.598.598 0 01-.594-.605c0-.33.27-.605.594-.605h5.966c.096-.098.157-.154.183-.177z"
            />
        </svg>
    );
};

export default IconNotesFilled;
