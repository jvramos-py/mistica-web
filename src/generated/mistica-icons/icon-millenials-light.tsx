/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMillenialsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.952 16.227c0 .193.156.35.348.35a.35.35 0 00.348-.35v-3.205c0-1.947-1.516-3.463-3.792-3.986a3.526 3.526 0 001.312-4.605l2.22-.6a.35.35 0 00.248-.43.349.349 0 00-.428-.25l-2.44.656A3.48 3.48 0 0016.052 2.5c-1.928 0-3.5 1.577-3.5 3.52 0 1.274.68 2.396 1.696 3.012-.824.189-1.568.51-2.168.949a.354.354 0 00-.08.49.35.35 0 00.488.081c.896-.651 2.164-1.013 3.564-1.013 2.84 0 4.9 1.463 4.9 3.479v3.21zm-4.9-13.02c.76 0 1.452.31 1.96.805l-4.656 1.255a2.808 2.808 0 012.696-2.06zm2.424 1.413a2.81 2.81 0 01-2.424 4.22 2.81 2.81 0 01-2.8-2.817l5.224-1.403z"
                    fill={fillColor}
                />
                <path
                    d="M11.156 8.13c0 1.276-.68 2.398-1.692 3.013 2.272.523 3.788 2.031 3.78 3.962v6.045a.35.35 0 01-.348.35.35.35 0 01-.348-.35v-6.045c0-2.003-2.06-3.455-4.9-3.455-1.408 0-2.676.362-3.572 1.014-.864.631-1.324 1.476-1.324 2.441v5.868a.35.35 0 01-.348.35.35.35 0 01-.348-.35v-5.868c0-1.935 1.516-3.443 3.792-3.962A3.532 3.532 0 014.2 8.682a1.746 1.746 0 01-.604.116c-.14 0-.28-.02-.412-.06-.664-.2-.952-.832-.964-.86L2 7.382h.54c.1 0 .176-.02.208-.057a.235.235 0 00.036-.148l-.004-.029.004-.016v-2.26c0-.957.78-1.738 1.732-1.738s1.728.78 1.728 1.738v.04a3.446 3.446 0 011.412-.301c1.932 0 3.5 1.58 3.5 3.519zm-8.028-.208a.76.76 0 00.264.144c.22.065.48.017.772-.14a3.521 3.521 0 011.38-2.595v-.458a1.03 1.03 0 00-1.028-1.034 1.03 1.03 0 00-1.028 1.034v2.248c.008.1.012.415-.208.668a.86.86 0 01-.152.133zm4.528-2.603a2.816 2.816 0 00-2.472 4.14c.548-1.087 1.62-2.362 3.712-3.013l.02-.004.808-.202a2.775 2.775 0 00-2.068-.92zm1.44 1.802C7.02 7.77 6.084 9.092 5.66 10.106a2.788 2.788 0 001.992.844 2.81 2.81 0 002.8-2.815c0-.459-.108-.893-.304-1.275l-1.052.261zM21.3 19.038c.387 0 .7-.315.7-.703a.702.702 0 00-.7-.704c-.387 0-.7.315-.7.704 0 .388.313.703.7.703z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.794 5.486a.42.42 0 00.036-.614c-2.725-2.918-6.77-2.722-6.921-2.708-4.37.047-6.695 2.45-6.79 2.552a.42.42 0 00.03.613.47.47 0 00.64-.03v-.002c.053-.053 2.202-2.223 6.15-2.268h.007c.183-.006 3.827-.123 6.206 2.423a.477.477 0 00.642.034zm-6.827 5.132c.928 0 1.653.232 2.152.697.523.482.787 1.193.787 2.115 0 .921-.266 1.633-.79 2.112-.499.46-1.224.695-2.152.695-.924 0-1.65-.236-2.148-.695-.518-.479-.781-1.188-.781-2.112 0-.925.263-1.636.781-2.115.504-.465 1.227-.697 2.151-.697zm1.524 4.296c.336-.308.507-.809.507-1.484 0-.678-.173-1.177-.51-1.49-.325-.303-.837-.454-1.52-.454-.684 0-1.191.151-1.519.454-.336.31-.504.812-.504 1.49 0 .678.168 1.176.504 1.485.325.3.835.45 1.518.45.687.003 1.2-.15 1.524-.45zm2.785 5.673c0-.664-.205-1.219-.592-1.605-.425-.423-1.092-.647-1.927-.647H10.18c-.832 0-1.496.224-1.921.647-.384.384-.586.938-.586 1.605v.384h8.602v-.384zm-2.519-3.12c1.087 0 1.978.316 2.58.915.555.55.846 1.311.846 2.205v.935c0 .177-.148.32-.333.32H7.096a.326.326 0 01-.333-.32v-.935c0-.897.291-1.659.837-2.205.6-.6 1.493-.916 2.577-.916h3.58zM11.914 5.02c.129-.008 3.33-.11 5.37 2.076a.42.42 0 01-.037.613.468.468 0 01-.638-.034c-1.748-1.874-4.642-1.792-4.67-1.787-2.787.03-4.482 1.7-4.596 1.812l-.006.006a.471.471 0 01-.641.031.422.422 0 01-.034-.613l.006-.007c.143-.144 2.035-2.061 5.246-2.097zm2.866 4.868c.165.18.453.196.638.037a.423.423 0 00.04-.614c-1.285-1.375-3.262-1.365-3.502-1.364h-.022c-2.138.023-3.39 1.328-3.443 1.384a.42.42 0 00.034.613c.087.073.193.11.302.11a.447.447 0 00.34-.143c.008-.012 1.03-1.079 2.792-1.096h.002c.073-.001 1.783-.034 2.819 1.073z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMillenialsLight;
