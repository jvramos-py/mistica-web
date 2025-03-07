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

const IconArrowDownRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.866 2c-.37 0-.675.324-.675.716v8.392h4.89c.335 0 .538.284.604.536.035.108.137.464-.101.716L12 20.036 4.42 12.36a.646.646 0 01-.102-.716c.102-.216.305-.536.605-.536h4.89V2.716c0-.396-.304-.716-.675-.716-.37 0-.675.324-.675.716V9.68h-3.54c-.807 0-1.549.572-1.853 1.392-.305.784-.172 1.68.406 2.252L12 22l8.527-8.644c.574-.608.71-1.464.406-2.284-.335-.824-1.046-1.392-1.854-1.392h-3.54V2.716c0-.392-.303-.716-.674-.716z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.95 21.859h.005c.356 0 .598-.243.69-.334l.002-.002 8.711-8.659c.434-.423.588-.904.42-1.322-.098-.243-.389-.652-1.246-.658h-.006l-3.563.006a.472.472 0 01-.053-.157l.003-6.72c-.009-.417-.065-1.017-.488-1.426-.42-.406-1.025-.445-1.445-.437H8.938c-.616-.017-1.07.126-1.392.443-.322.316-.476.77-.468 1.386l-.02 6.883a.227.227 0 01-.055.039l-3.667.003c-.499 0-.913.263-1.09.694-.201.49-.042 1.082.406 1.507l8.703 8.48a.819.819 0 00.594.274zM3.254 12.01a.168.168 0 01.078-.014c.003 0 .006 0 .006-.003l3.686-.002c.507 0 1.12-.471 1.12-1.056l.02-6.956v-.008c-.003-.207.02-.476.14-.597.123-.117.395-.134.602-.129h6.084c.345-.008.577.037.673.13.095.092.148.319.154.655l-.003 6.708c0 .437.342 1.247.994 1.247l3.712-.006c.064 0 .117.006.16.012a.877.877 0 01-.09.098l-.006.005-8.619 8.566-8.557-8.336-.006-.006c-.165-.157-.162-.288-.148-.308z"
                />
            </svg>
        );
    }
};

export default IconArrowDownRegular;
