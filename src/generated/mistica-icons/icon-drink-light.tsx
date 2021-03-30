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

const IconDrinkLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.754 6.797H16.51l-.678 2.774h2.06l.29-2.409c-.003-.178-.192-.365-.427-.365zm-1.21 13.976l1.248-10.383h-2.16l-2.268 9.31a.415.415 0 01-.5.302h-.002a.408.408 0 01-.309-.49v-.002l2.221-9.12H6.213l1.246 10.334c.002.276.193.462.426.462h8.236a.42.42 0 00.423-.413zM6.251 6.797a.419.419 0 00-.423.414l.287 2.36h8.864l.675-2.774H6.25zm14.535-1.725c.2.108.274.36.162.557a.422.422 0 01-.569.157l-3.196-1.758-.475 1.95h1.049c.691 0 1.257.554 1.257 1.233l-1.64 13.605c.003.632-.56 1.184-1.25 1.184h-8.24a1.245 1.245 0 01-1.256-1.233L5 7.262a1.253 1.253 0 011.254-1.281h9.599l.647-2.666a.415.415 0 01.61-.263l3.676 2.02zm-10.812 9.06c.782-.765.219-1.44.052-1.608l-.076-.076c-.099-.092-.402-.344-.8-.344-.25 0-.536.098-.834.39-.776.762-.207 1.449-.049 1.611l.08.079c.1.1.395.343.786.343.249.003.538-.097.841-.395zm.65-2.179c.675.681.916 1.795-.062 2.755-.536.527-1.074.638-1.432.638-.696 0-1.19-.405-1.374-.581-.032-.033-.065-.062-.095-.095-.664-.686-.905-1.803.063-2.752.53-.522 1.065-.63 1.423-.63.696 0 1.196.4 1.38.573.032.027.068.062.098.092zm.541 6.11c.435-.427.123-.803.03-.895a.598.598 0 00-.043-.04.68.68 0 00-.445-.192c-.137 0-.298.054-.462.219-.432.422-.115.806-.03.895l.044.043a.669.669 0 00.437.192c.139 0 .3-.057.47-.222zm.558-1.53l.068.068c.483.49.68 1.338-.038 2.044-.388.38-.787.46-1.057.46-.37 0-.74-.157-1.02-.425l-.062-.062c-.48-.492-.67-1.341.04-2.039.383-.378.785-.457 1.053-.457a1.5 1.5 0 011.016.411z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDrinkLight;
