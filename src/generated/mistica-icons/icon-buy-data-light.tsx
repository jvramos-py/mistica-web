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

const IconBuyDataLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.63 19.089c.87 0 1.372.501 1.372 1.373 0 .87-.498 1.372-1.372 1.372-.872 0-1.373-.501-1.373-1.372 0-.872.501-1.373 1.373-1.373zm5.462 0c.871 0 1.372.501 1.372 1.373 0 .87-.498 1.372-1.372 1.372-.871 0-1.373-.501-1.373-1.372 0-.872.502-1.373 1.373-1.373zm-5.462.56c-.563 0-.813.25-.813.813s.25.812.813.812.812-.25.812-.812c0-.563-.25-.813-.812-.813zm5.462 0c-.563 0-.813.25-.813.813s.25.812.813.812.812-.25.812-.812c0-.563-.25-.813-.812-.813zM4.075 2.156c.588 0 1.16.185 1.608.524.456.342.759.82.854 1.347.057.32.265 1.552.514 3.045h3.59V5.598c0-.866 1.835-1.26 3.538-1.26 1.697 0 3.525.391 3.537 1.25v1.485l3.838.001a.28.28 0 01.272.35c-.154.61-.446 1.784-.757 3.028-.208.84-.421 1.696-.59 2.369l-.094.38-.198.78c-.252.975-.616 1.69-1.106 2.183-.507.498-1.143.753-1.897.753H10.63c-.765 0-1.443-.255-1.956-.74-.546-.515-.899-1.263-1.053-2.226-.066-.415-.386-2.35-.727-4.401l-.172-1.029a825.1 825.1 0 00-.74-4.397 1.61 1.61 0 00-.638-.997 2.103 2.103 0 00-1.269-.412H2.436a.28.28 0 01-.28-.28.28.28 0 01.28-.28h1.639zM17.716 13.42c0 .865-1.831 1.257-3.537 1.257-1.703 0-3.538-.395-3.538-1.26V7.632H7.144c.433 2.594.947 5.694 1.03 6.233.253 1.608 1.127 2.496 2.455 2.496h6.554c.608 0 1.098-.196 1.499-.597.414-.414.737-1.062.96-1.924.086-.326.31-1.232.572-2.279l.123-.491.062-.25.126-.504c.258-1.037.504-2.028.67-2.68l-3.48-.002v5.786zm-.56-1.883a3.192 3.192 0 01-.158.077l.158-.077c-.074.04-.155.079-.241.114l-.057.022c-.12.048-.25.09-.39.13l-.07.018-.116.03-.068.015c-.151.035-.31.065-.473.09l-.035.006a8.742 8.742 0 01-.712.08 10.906 10.906 0 01-1.068.027l.253.003a11.108 11.108 0 01-1.025-.048 8.849 8.849 0 01-.514-.064l-.019-.003a6.8 6.8 0 01-.477-.09l-.067-.017a2.837 2.837 0 01-.117-.028l-.069-.02a3.844 3.844 0 01-.392-.129l-.05-.021a2.26 2.26 0 01-.248-.115v1.883c0 .039.135.238.754.423.588.176 1.378.274 2.224.274.846 0 1.633-.098 2.224-.274.622-.188.753-.387.753-.423v-1.883zM11.201 8.93v1.883c0 .039.135.238.754.423.588.179 1.378.277 2.224.277.846 0 1.633-.098 2.224-.275.622-.187.753-.386.753-.422V8.932c-.308.167-.724.294-1.192.381l-.074.013-.107.02-.13.019a8.626 8.626 0 01-.659.072 10.926 10.926 0 01-1.068.027l.253.003a11.1 11.1 0 01-1.025-.048 8.932 8.932 0 01-.682-.092 6.627 6.627 0 01-.458-.097 4.653 4.653 0 01-.394-.118l-.042-.015a2.763 2.763 0 01-.373-.164c0-.002-.002-.003-.004-.004zm0-2.605v1.883c0 .039.135.238.754.423.588.176 1.378.277 2.224.277.846 0 1.633-.098 2.224-.275.622-.187.753-.386.753-.423V6.327c-.672.364-1.854.535-2.977.535-.979 0-2-.132-2.693-.406-.005-.004-.012-.007-.018-.01a2.33 2.33 0 01-.267-.122zm2.978-1.423c-.843 0-1.633.098-2.224.275-.572.173-.73.356-.751.414l-.003.012c0 .039.135.238.754.423.588.176 1.378.274 2.224.274.846 0 1.633-.098 2.224-.274.61-.184.748-.38.753-.424v-.006c-.023-.066-.182-.249-.753-.422-.591-.174-1.378-.272-2.224-.272z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBuyDataLight;
