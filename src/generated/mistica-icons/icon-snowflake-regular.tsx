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

const IconSnowflakeRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.783 12.554a.64.64 0 00.462-.608.647.647 0 00-.372-.583l.784-.784a.646.646 0 00-.913-.913L19.108 11.3h-.53l.205-.204a.646.646 0 00-.913-.913L16.752 11.3H13.61l3.165-3.165H18.9a.647.647 0 000-1.294h-.955a.634.634 0 00-.154-.636.637.637 0 00-.566-.168v-.871a.647.647 0 00-1.294 0V7.15l-3.28 3.28V7.357l1.196-1.198a.646.646 0 00-.913-.914l-.283.283v-.574l1.691-1.692a.646.646 0 00-.913-.913l-.815.818a.64.64 0 00-.608-.462.634.634 0 00-.608.462l-.815-.818a.646.646 0 00-.913.913l1.692 1.692v.46l-.17-.169a.646.646 0 00-.914.914l1.084 1.084v3.142L8.198 7.22V5.164a.647.647 0 00-1.294 0v.885a.641.641 0 00-.636.154.635.635 0 00-.154.636h-.885a.647.647 0 000 1.294h2.056L10.45 11.3H7.369L6.25 10.18a.646.646 0 00-.913.913l.204.205h-.644L3.262 9.663a.646.646 0 00-.913.913l.787.784a.634.634 0 00.087 1.19l-.874.875a.646.646 0 00.913.913L5.01 12.59h.574l-.249.25a.646.646 0 00.913.912l1.163-1.162h3.073L7.2 15.873H5.217a.647.647 0 000 1.294h.872a.639.639 0 00.168.566c.126.126.291.19.456.19.062 0 .12-.017.18-.036v.958a.647.647 0 001.294 0v-2.126l3.165-3.165v3.142l-1.084 1.084a.646.646 0 00.913.914l.17-.168v.529L9.66 20.747a.646.646 0 00.913.913l.843-.843a.644.644 0 00.583.372.643.643 0 00.58-.372l.843.843a.645.645 0 10.913-.913l-1.692-1.692v-.644l.283.283a.645.645 0 10.913-.914l-1.196-1.198v-3.079l3.28 3.283v2.056a.647.647 0 001.294 0v-.944c.037.006.073.023.11.023a.631.631 0 00.625-.756h.94a.646.646 0 00.648-.648.646.646 0 00-.648-.647H16.84l-3.283-3.283H16.7l1.163 1.163a.642.642 0 00.456.187.646.646 0 00.457-1.1l-.25-.25h.46l1.748 1.748a.645.645 0 10.913-.913l-.863-.868z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSnowflakeRegular;
