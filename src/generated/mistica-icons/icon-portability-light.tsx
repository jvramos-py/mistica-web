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

const IconPortabilityLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.921 3.188c2.801 0 4.972.725 6.45 2.156 1.472 1.423 2.248 3.535 2.31 6.28l.005.362c0 .715-.047 1.396-.14 2.03.04-.033.083-.072.128-.117.241-.24.544-.597.838-.941.297-.35.605-.712.86-.967a.279.279 0 11.395.395c-.238.238-.538.591-.83.933-.299.353-.61.717-.868.975-.271.277-.554.415-.837.415-.277 0-.555-.135-.824-.404-.22-.221-.644-.711-1.341-1.52l-.356-.413a.282.282 0 01.028-.395.282.282 0 01.395.028l.356.415c.666.773 1.106 1.286 1.31 1.49.06.06.118.11.172.147l-.045.27c.131-.714.198-1.5.198-2.341 0-2.765-.72-4.863-2.142-6.238-1.37-1.328-3.412-2-6.062-2-2.65 0-4.692.672-6.062 2C3.436 7.12 2.716 9.22 2.716 11.986c0 2.765.72 4.863 2.143 6.238 1.373 1.328 3.412 2 6.062 2 1.619 0 3.022-.252 4.17-.75a.28.28 0 11.225.515c-1.219.526-2.698.795-4.395.795-2.801 0-4.972-.725-6.451-2.157-1.535-1.484-2.314-3.72-2.314-6.641 0-2.922.779-5.157 2.314-6.642 1.479-1.431 3.65-2.157 6.451-2.157zm2.067 2.775c.588 0 .933.236 1.12.432.253.266.384.636.384 1.073v8.501c0 .437-.134.807-.383 1.073-.185.199-.533.434-1.12.434H8.295c-.588 0-.932-.235-1.12-.434-.252-.266-.384-.636-.384-1.073V8.731a.57.57 0 01.163-.392L9.128 6.13a.566.566 0 01.4-.168zm0 .56H9.526L7.352 8.732v7.24c0 .575.3.948.944.948h4.692c.644 0 .944-.373.944-.947V7.47c0-.574-.3-.946-.944-.946zm-.18 3.796a.28.28 0 01.281.28v4.944a.28.28 0 01-.28.28h-4.37a.28.28 0 01-.28-.28V10.6a.28.28 0 01.28-.28h4.37zM9.61 14.187h-.89v1.076h.89v-1.075zm1.457 0h-.896v1.075h.896v-1.075zm1.462 0h-.902v1.075l.903.001v-1.075zM8.72 12.543v1.084h3.81v-1.085H8.72zm.89-1.664h-.89v1.104h.89v-1.104zm1.457 0h-.896v1.104h.896v-1.104zm1.463 0h-.903v1.104h.902v-1.104z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPortabilityLight;
