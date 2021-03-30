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

const IconBuyPlansRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.476 18.373c.499 0 .902.142 1.193.423.306.294.46.705.46 1.23 0 .523-.154.935-.46 1.229-.288.28-.691.423-1.193.423-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23s.155-.935.46-1.23c.291-.28.695-.422 1.193-.422zm5.462 0c.499 0 .902.142 1.194.423.302.294.459.705.459 1.23 0 .523-.154.935-.46 1.229-.288.28-.691.423-1.193.423-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23s.155-.935.46-1.23c.291-.28.695-.422 1.193-.422zm-5.462 1.12c-.409 0-.532.123-.532.532 0 .41.123.532.532.532.41 0 .532-.123.532-.532 0-.409-.123-.532-.532-.532zm5.462 0c-.409 0-.532.123-.532.532 0 .41.123.532.532.532.41 0 .533-.123.533-.532 0-.409-.124-.532-.533-.532zM3.922 2c1.367 0 2.518.882 2.736 2.1.058.323.23 1.31.441 2.536h2.28a.53.53 0 01.126.015V2.804c0-.476.307-.784.786-.784h4a.42.42 0 01.297.123L17.6 5.154a.42.42 0 01.124.297l-.001 1.184h3.39a.562.562 0 01.543.698c-.154.611-.445 1.785-.756 3.026a709.939 709.939 0 01-.882 3.532c-.266 1.025-.65 1.781-1.182 2.31-.558.558-1.26.841-2.09.841h-6.269c-.837 0-1.58-.283-2.148-.815-.591-.558-.975-1.361-1.138-2.39a1538.72 1538.72 0 00-1.633-9.54c-.12-.672-.82-1.177-1.633-1.177h-1.35a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h1.348zm5.456 5.756H7.292c.43 2.496.928 5.402 1.008 5.908.123.776.39 1.361.798 1.748.359.339.824.51 1.378.51h6.266c.684 0 1.653-.239 2.188-2.311.105-.401.422-1.679.756-3.018l.126-.503.355-1.423.157-.628.071-.283h-2.673v5.087c0 .468-.302.773-.772.773l-.502.003h-6.154c-.487 0-.79-.302-.79-.793l.001-5.084a.557.557 0 01-.127.014zm4.495-4.894h-3.52v9.917h6.532V5.873h-1.501c-.661-.002-1.014-.304-1.194-.556-.21-.3-.313-.704-.316-1.236l-.001-1.219zm1.808 7.737a.42.42 0 110 .84h-4.37a.42.42 0 110-.84h4.37zm0-1.91a.42.42 0 110 .84h-4.37a.42.42 0 110-.84h4.37zm0-1.913a.42.42 0 110 .84h-4.37a.42.42 0 110-.84h4.37zm-.967-3.32v.622c.003.88.32.956.673.956h.902l-1.575-1.577z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBuyPlansRegular;
