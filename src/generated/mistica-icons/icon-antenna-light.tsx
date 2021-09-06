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
    size?: string | number;
};

const IconAntennaLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.512 20.964v-1.952H5.506v1.952h13.006zm-7.504-5.574h1.972l-.992-2.773-.98 2.773zm2.286.88h-2.6l-.658 1.86h3.921l-.663-1.86zm-2.387-7.765l-3.42 9.625h1.655l2.448-6.93.009-.014c.011-.028.028-.05.045-.076a.596.596 0 01.044-.07l.056-.042c.026-.02.05-.04.082-.053l.014-.009c.02-.008.039-.005.059-.008.03-.006.058-.014.09-.014.027 0 .055.008.083.011.023.006.042.003.062.011.005.003.008.009.014.012.028.01.047.03.073.047.02.014.042.028.061.045.017.02.028.042.045.065.017.025.037.047.048.078l.008.014 2.48 6.93h1.627l-3.423-9.628a2.716 2.716 0 01-1.082.208 2.646 2.646 0 01-1.078-.202zm.006-3.302c-.23.23-.345.619-.345 1.145 0 .364.059.658.17.883.049.1.105.19.175.26.07.073.16.129.26.177.21.106.479.16.81.16.336 0 .605-.057.815-.163a.949.949 0 00.26-.177.99.99 0 00.177-.26c.109-.227.17-.518.17-.883 0-.526-.117-.913-.347-1.145-.224-.227-.585-.342-1.075-.342-.488.006-.85.12-1.07.345zm8.02 12.927c.232 0 .42.199.42.44v2.83a.43.43 0 01-.42.44H5.082a.43.43 0 01-.42-.44v-2.83c0-.24.188-.44.42-.44h1.505L10.2 7.965c-.31-.395-.476-.93-.476-1.613 0-.776.202-1.375.602-1.779.387-.39.941-.588 1.656-.588.714 0 1.271.199 1.658.588.403.406.605 1.006.605 1.779 0 .683-.165 1.216-.476 1.613l3.613 10.169h1.55v-.003zM2.996 6.348c0 1.513.383 2.664 1.14 3.432a.452.452 0 01.01.621.409.409 0 01-.593.012c-.927-.936-1.398-2.303-1.398-4.065 0-1.762.47-3.129 1.398-4.067a.404.404 0 01.594.011.452.452 0 01-.011.622c-.757.768-1.14 1.922-1.14 3.434zm3.708 2.77a.41.41 0 01-.291-.123c-.608-.613-.916-1.504-.916-2.647 0-1.14.308-2.033.916-2.647a.406.406 0 01.594.009.455.455 0 01-.009.621c-.44.443-.66 1.124-.66 2.017 0 .894.22 1.572.658 2.014a.452.452 0 01.01.622.415.415 0 01-.302.135zm13.74-6.837c.927.938 1.398 2.308 1.398 4.067 0 1.76-.471 3.13-1.398 4.065a.415.415 0 01-.292.123.413.413 0 01-.302-.135.455.455 0 01.011-.621c.756-.765 1.14-1.916 1.14-3.432 0-1.512-.384-2.666-1.14-3.434a.455.455 0 01-.011-.622.408.408 0 01.594-.011zm-3.49 6.7a.455.455 0 01.01-.622c.438-.44.662-1.117.662-2.01 0-.897-.221-1.572-.661-2.018a.455.455 0 01-.011-.621.406.406 0 01.593-.012c.608.617.916 1.507.916 2.65s-.308 2.031-.918 2.647a.412.412 0 01-.292.12.402.402 0 01-.3-.134z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAntennaLight;
