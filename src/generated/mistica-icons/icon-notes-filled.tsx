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

const IconNotesFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.717 7.818l-4.073-4.005v1.781c0 .653.213 1.219.62 1.614.402.395.982.613 1.663.613h1.79v-.003zm1.417-.28c.165.16.26.387.26.62v12.31c0 .75-.632 1.378-1.386 1.378h-12c-.737 0-1.378-.647-1.378-1.378V3.538c0-.717.658-1.378 1.378-1.378h7.308c.23 0 .443.087.603.25l5.215 5.128zm-3.266 5.925c-.151.145-1.815 1.652-4.454 4.03l-1.988.692.65-1.966c.389-.348 4.249-3.815 4.5-4.07.239-.241.491-.292.676-.275a.965.965 0 01.896.952.887.887 0 01-.28.637zm.84-2.169c-.728-.742-2.036-.944-2.972 0a3.492 3.492 0 00-.182.177H7.588a.604.604 0 00-.594.605.6.6 0 00.594.605h4.636c-.364.322-.762.686-1.188 1.064H7.588a.598.598 0 00-.594.605c0 .331.27.606.594.606h2.1l-.428.386a1.14 1.14 0 00-.302.46l-.07.21h-1.3a.598.598 0 00-.594.605c0 .33.27.605.594.605h.905l-.286.88c-.022.055-.03.12-.04.176h-.579a.604.604 0 00-.594.605c0 .33.27.605.594.605h1.465c.017 0 .03 0 .048-.009a.277.277 0 00.086.009c.104 0 .213-.017.325-.048l2.26-.765a.939.939 0 00.365-.21l.07-.064a658.278 658.278 0 004.493-4.07 2.08 2.08 0 00.636-1.499c0-.563-.23-1.134-.628-1.538z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNotesFilled;
