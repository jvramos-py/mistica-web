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

const IconCallDetailsFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.618 7.336l-5.463-5.182A.56.56 0 0015.772 2H8.39c-.569 0-1.107.538-1.107 1.106v1.507c-.417-.26-.846-.395-1.277-.403-.711-.014-1.423.317-2.115.978-.244.232-.473.551-.549.655l-.008.011-.017.023c-.636.921-.625 2.336.03 3.983.676 1.695 1.99 3.543 3.796 5.35l.006.006.053.056.006.005c.044.045.092.09.137.135a.568.568 0 00-.062.252v4.921c0 .589.519 1.107 1.107 1.107h12.297c.588 0 1.106-.518 1.106-1.107V7.742a.56.56 0 00-.176-.406zm-1.213.392h-2.182c-.653 0-1.2-.204-1.583-.588-.384-.384-.588-.933-.588-1.583V3.6l4.353 4.13zM4.39 9.448c-.504-1.26-.56-2.325-.154-2.924l.016-.025c.202-.28.337-.429.415-.502.93-.888 1.67-.89 2.55-.008.173.17.324.361.45.568l.008.017c.267.426.513 1.101-.417 2.028a2.729 2.729 0 01-.333.292l-.065.058c-.19.208-.389.577-.24 1.154.078.311.249.656.523 1.054.392.574.978 1.238 1.897 2.157l.064.064c.919.919 1.583 1.501 2.157 1.896.398.275.742.446 1.053.524.577.146.947-.05 1.154-.24a.422.422 0 00.059-.065c.09-.118.188-.23.294-.334.927-.927 1.602-.683 2.028-.417l.017.008c.207.127.4.278.569.451.882.883.88 1.62-.009 2.55-.073.075-.218.21-.501.414l-.025.017c-.603.406-1.667.35-2.928-.154-1.96-.782-3.784-2.359-4.969-3.544l-.028-.028-.011-.01-.03-.029c-1.186-1.188-2.763-3.01-3.544-4.972z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCallDetailsFilled;
