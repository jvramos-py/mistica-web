/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVodLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.245 2h15.518c.97 0 1.76.815 1.765 1.816V19.82c0 .824-.547 1.55-1.327 1.755a.351.351 0 01-.43-.26.362.362 0 01.254-.443c.469-.125.794-.558.794-1.052V3.816c0-.6-.474-1.09-1.056-1.09H4.245c-.582 0-1.056.49-1.056 1.09V19.83c0 .601.474 1.09 1.056 1.09H15.88c.194 0 .352.163.352.363 0 .2-.158.363-.352.363H4.245c-.975 0-1.765-.82-1.765-1.82V3.82C2.48 2.815 3.274 2 4.245 2zm7.407 6.816c1.363 0 2.469 1.266 2.469 2.816 0 1.55-1.106 2.817-2.47 2.817-1.362 0-2.468-1.266-2.468-2.817 0-1.55 1.106-2.816 2.469-2.816zm-3.223.116c.18.075.27.284.203.47l-1.765 4.73c0 .003-.002.005-.002.005s-.002.002-.002.005a.186.186 0 01-.018.028.307.307 0 01-.054.079l-.028.028a.243.243 0 01-.08.05c-.01.005-.014.01-.019.015h-.009a.33.33 0 01-.117.023.35.35 0 01-.118-.023h-.009c-.009-.005-.013-.01-.018-.014a.757.757 0 01-.08-.051l-.028-.028a.295.295 0 01-.04-.056l-.014-.023a.045.045 0 00-.01-.014l-.008-.014c0-.003-.002-.005-.002-.005s-.003-.002-.003-.005l-1.76-4.73a.372.372 0 01.203-.47c.18-.07.384.023.456.21l1.435 3.845 1.436-3.845a.346.346 0 01.451-.21zm1.458 2.705c0 1.154.79 2.09 1.765 2.09.975 0 1.765-.936 1.765-2.09-.005-1.155-.795-2.09-1.765-2.09-.97 0-1.765.94-1.765 2.09zm9.524 0c0 1.504-1.106 2.728-2.47 2.728h-1.764V8.909h1.765c1.358 0 2.469 1.224 2.469 2.728zm-2.474-2.002h-1.056v4h1.056c.975.004 1.765-.895 1.765-1.998s-.79-2.002-1.765-2.002zm1.06 10.912a.716.716 0 00-.703.727c0 .4.316.726.704.726a.716.716 0 00.704-.726c0-.4-.316-.727-.704-.727z"
            />
        </svg>
    );
};

export default IconVodLight;
