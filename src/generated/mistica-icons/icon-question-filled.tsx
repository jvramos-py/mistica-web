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

const IconQuestionFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.542 12.062c-1.339 1.55-1.39 1.61-1.39 3.056a.4.4 0 01-.4.4h-.442a.394.394 0 01-.393-.324 3.13 3.13 0 01-.056-.633c0-1.084.381-1.726 1.236-2.754l.162-.196c1.406-1.664 1.672-2.126 1.672-2.913 0-.557-.16-.922-.535-1.221-.215-.171-.593-.37-1.627-.37-.56 0-1.059.064-1.667.219a.4.4 0 01-.49-.317l-.064-.345a.4.4 0 01.221-.437c.378-.179 1.303-.364 2.196-.364.941 0 1.692.21 2.235.62.698.512 1.026 1.223 1.026 2.232-.003 1.232-.516 1.966-1.684 3.347m-1.955 6.216c-.535 0-.874-.333-.874-.826v-.065c0-.496.347-.843.843-.843.53 0 .874.347.874.843 0 .56-.339.89-.843.89m.807-16.117c-.275-.005-.603-.014-.894-.008-1.563.014-9.35.549-9.35 9.812 0 9.266 7.84 9.849 9.412 9.871a36.113 36.113 0 00.863-.003c1.57-.028 9.408-.635 9.408-9.812.003-9.17-7.862-9.823-9.44-9.86"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconQuestionFilled;
