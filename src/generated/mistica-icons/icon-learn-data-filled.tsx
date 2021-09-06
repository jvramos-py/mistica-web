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

const IconLearnDataFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.569 4.138c0-.009 0-.009-.008-.017.19-.546.896-1.028 2.05-1.387 1.227-.367 2.854-.574 4.571-.574 1.726 0 3.342.207 4.563.574 1.219.373 1.908.855 2.056 1.426 0 0-.008.008-.008.017-.207.53-.905.989-2.042 1.328-1.227.375-2.838.574-4.563.574-1.717 0-3.336-.2-4.563-.574-1.16-.348-1.866-.821-2.056-1.367zm.316 10.593l5.468-2.44-.165-.075h-.008l-2.872-1.272-2.44-1.07-.008.009-5.46 2.431 5.11 2.25.375.167zm3.659 1.577l.042-1.868-2.871 1.277-.34.152a1.17 1.17 0 01-.498.109c-.174 0-.339-.034-.504-.11L5.26 14.483v1.77c.25.06.524.124.804.208.39.109.804.249 1.218.423a7.24 7.24 0 011.23.664c.042.033.081.047.132.084.042.025.084.05.123.084.1.075.232.075.325 0a4.9 4.9 0 01.714-.457c.199-.11.406-.216.622-.308a9.756 9.756 0 011.633-.54c.025-.01.042-.01.067-.01l.216-.05c.064-.016.132-.033.199-.042zm7.21-5.529c-1.219.373-2.838.566-4.563.566h-.076c.275.216.44.532.457.888 1.666-.025 3.235-.233 4.437-.597.74-.216 1.361-.524 1.843-.888v3.986c-.224.415-.888.972-2.098 1.345-1.219.367-2.838.574-4.563.574a18.8 18.8 0 01-1.404-.059c-.106.373-.372.68-.73.838.688.067 1.394.117 2.131.117 1.807 0 3.527-.215 4.818-.613a5.712 5.712 0 001.843-.896v3.546c0 .697-.714 1.271-2.106 1.694-1.23.365-2.855.575-4.563.575-1.71 0-3.337-.208-4.572-.575-1.395-.423-2.098-.997-2.098-1.694v-.639a1.417 1.417 0 01-.515-.258c-.863-.672-2.05-.994-2.905-1.145a1.316 1.316 0 01-1.078-1.286v-2.325l-1.12-.499a1.216 1.216 0 01-.732-1.12c0-.499.283-.93.731-1.129l5.485-2.442c.042-.017.08-.034.131-.042V5.479c.449.356 1.062.664 1.857.897 1.311.389 3.02.605 4.821.605 1.801 0 3.518-.216 4.818-.605.782-.233 1.395-.524 1.843-.88V9.44c-.218.417-.882.972-2.092 1.339z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLearnDataFilled;
