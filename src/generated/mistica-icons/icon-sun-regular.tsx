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
    size?: string | number;
};

const IconSunRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.307 17.607h-.563c-4.6-.065-5.095-3.877-5.095-5.513 0-1.625.49-5.42 5.036-5.462h.588c1.54.042 5.137.652 5.137 5.504 0 4.852-3.568 5.437-5.103 5.47m8.907-6.271h-2.467c-.05 0-.093.017-.132.025-.132-1.675-.655-2.88-1.367-3.745.025-.017.042-.025.059-.042l1.773-1.768a.604.604 0 000-.873.615.615 0 00-.88 0l-1.773 1.764c-.017.017-.025.042-.042.067-1.333-1.039-2.924-1.294-3.77-1.353V2.77a.625.625 0 00-.622-.619.62.62 0 00-.622.619V5.4c-.862.05-2.428.289-3.745 1.311-.017-.017-.025-.05-.05-.064L5.853 4.929a.616.616 0 00-.88 0 .619.619 0 000 .874L6.697 7.52c.025.017.05.025.076.05-.695.866-1.21 2.087-1.325 3.787-.042-.008-.076-.025-.115-.025h-2.56a.625.625 0 00-.622.62c0 .338.283.618.622.618h2.56c.034 0 .067-.017.098-.017.076 1.709.521 2.964 1.177 3.869-.017.016-.042.025-.068.05l-1.706 1.7a.604.604 0 000 .874.592.592 0 00.77.076.611.611 0 00.25-.148l1.566-1.552c.017-.026.025-.048.05-.076 1.334 1.146 2.992 1.42 3.902 1.476v2.392c0 .348.275.62.622.62a.62.62 0 00.622-.62V18.84c0-.008-.008-.008-.008-.017.88-.047 2.602-.313 3.986-1.484.016.025.025.056.05.08l1.557 1.553a.62.62 0 00.44.182.576.576 0 00.437-.182.604.604 0 000-.874l-1.557-1.552c-.034-.034-.076-.05-.115-.076.68-.916 1.16-2.187 1.227-3.927.042.009.075.025.115.025h2.467c.34 0 .622-.28.622-.619a.624.624 0 00-.622-.613"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSunRegular;
