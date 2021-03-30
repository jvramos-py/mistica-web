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

const IconBuyDevicesRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.476 18.37c.499 0 .902.143 1.193.423.306.294.46.706.46 1.23 0 .523-.154.935-.46 1.23-.288.28-.691.422-1.193.422-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422zm5.462 0c.499 0 .902.143 1.194.423.302.294.459.706.459 1.23 0 .523-.154.935-.46 1.23-.288.28-.691.422-1.193.422-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422zm-5.462 1.12c-.409 0-.532.123-.532.532 0 .41.123.533.532.533.41 0 .532-.124.532-.533 0-.409-.123-.532-.532-.532zm5.462 0c-.409 0-.532.123-.532.532 0 .41.123.533.532.533.41 0 .533-.124.533-.533 0-.409-.124-.532-.533-.532zM15.9 2.006c1.21 0 1.824.619 1.824 1.843v2.787h3.38a.562.562 0 01.544.697c-.154.611-.445 1.782-.756 3.026l-.189.755-.182.732-.22.883-.095.38c-.09.356-.16.63-.2.782-.266 1.025-.652 1.778-1.181 2.308-.558.557-1.261.84-2.09.84h-6.258c-.837 0-1.58-.283-2.148-.815-.591-.557-.975-1.361-1.138-2.39l-.012-.076-.062-.377c-.126-.749-.374-2.201-.637-3.735l-.114-.66c-.36-2.095-.72-4.174-.81-4.678-.12-.672-.821-1.176-1.633-1.176h-1.35a.562.562 0 01-.56-.56.56.56 0 01.56-.56h1.352c1.367 0 2.519.882 2.737 2.1.049.272.221 1.267.438 2.52h3.225V3.85c0-1.208.631-1.843 1.824-1.843H15.9zm-5.575 5.747H7.293c.428 2.481.926 5.384 1.01 5.908.123.776.389 1.361.798 1.748.358.339.823.513 1.378.513h6.255c.683 0 1.653-.239 2.188-2.311l.197-.778.094-.38.465-1.862.126-.504c.216-.866.423-1.7.583-2.33l-2.665-.001v3.474c-.002 1.224-.616 1.846-1.823 1.846h-3.75c-1.21 0-1.824-.62-1.824-1.844v-3.48zM15.9 2.846h-3.75c-.726 0-.984.263-.984 1.003v7.38c0 .76.238 1.003.983 1.003H15.9c.742 0 .983-.243.983-1.002V3.849c0-.76-.238-1.003-.983-1.003zm-1.877 7.314c.359 0 .591.187.589.59 0 .197-.054.34-.149.438-.103.106-.255.157-.44.157-.184 0-.336-.05-.44-.157-.095-.098-.148-.244-.148-.437 0-.404.23-.591.588-.591z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBuyDevicesRegular;
