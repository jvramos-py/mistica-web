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

const IconFileErrorRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.906 20.476c.098 0 .193-.098.193-.17V8.865h-2.28c-.997 0-1.86-.328-2.493-.953-.638-.63-.975-1.487-.975-2.479V3.21H5.91c-.073 0-.19.112-.196.17v16.925c0 .06.1.171.196.171h11.997zm-.305-12.82l-4.065-3.998v1.773c0 .659.213 1.216.617 1.611.406.4.983.61 1.666.61 0 .003 1.782.003 1.782.003zm1.428-.28c.166.162.26.389.26.621v12.308a1.4 1.4 0 01-1.383 1.381H5.91c-.737 0-1.384-.644-1.384-1.38V3.38C4.525 2.658 5.183 2 5.91 2h7.302c.227 0 .44.087.603.246l5.215 5.13zM7.646 13.318a.61.61 0 010-.854l.778-.793-.778-.792a.61.61 0 010-.855.585.585 0 01.829-.011l.011.011.779.793.778-.793a.585.585 0 01.83-.008l.008.008a.61.61 0 010 .855l-.779.792.779.793a.61.61 0 010 .854.588.588 0 01-.832.009l-.008-.009-.78-.792-.778.792a.59.59 0 01-.835.006c.003-.003 0-.006-.002-.006zm8.655-3.297a.61.61 0 010 .855l-.779.792.78.793a.61.61 0 010 .854.588.588 0 01-.833.009l-.008-.009-.779-.792-.779.792a.59.59 0 01-.834.006l-.006-.006a.61.61 0 010-.854l.779-.793-.779-.792a.61.61 0 010-.855.585.585 0 01.83-.01l.01.01.779.793.779-.793a.585.585 0 01.829-.01l.011.01zm-2.042 4.866c.86.02 1.726.59 1.726 1.823a.6.6 0 01-.594.605.6.6 0 01-.594-.605c0-.179 0-.599-.563-.613h-.087c-.549.003-.549.426-.549.605 0 1.26-.866 1.824-1.72 1.83h-.132c-.86-.023-1.725-.592-1.725-1.822 0-.179 0-.599-.563-.613h-.087c-.549.003-.549.426-.549.605a.6.6 0 01-.594.605.6.6 0 01-.594-.605c0-1.246.863-1.81 1.723-1.815h.129c.86.02 1.725.59 1.725 1.823 0 .18 0 .6.563.614h.087c.55-.003.55-.426.55-.605 0-1.26.865-1.824 1.72-1.83l.128-.002z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileErrorRegular;
