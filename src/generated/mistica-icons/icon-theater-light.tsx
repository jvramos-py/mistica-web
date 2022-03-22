/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTheaterLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.84 9.89a.425.425 0 00-.232-.381.428.428 0 00-.446.042c-1.064.815-3.008.72-4.003.339-.96-.37-2.574-1.796-2.748-2.933a.427.427 0 00-.314-.345.423.423 0 00-.437.157c-.022.028-.44.591-.963 1.426-.79-2.151-1.69-3.403-1.74-3.47a.41.41 0 00-.403-.169.422.422 0 00-.334.283c-.495 1.499-1.932 2.28-3.05 2.67-.658.23-2.6.372-4.39-.661a.431.431 0 00-.42 0 .428.428 0 00-.21.364v.009c0 .248-.005 3.752.933 6.263.997 2.67 2.549 3.986 4.72 3.986.58 0 1.205-.092 1.871-.28a11.57 11.57 0 001.446-.502c.54.866 1.409 1.536 2.678 2.023.963.373 1.829.605 2.619.605 1.577 0 2.849-.93 3.989-3.55 1.403-3.218 1.434-5.77 1.434-5.876zm-9.252.877c.862 3.781-.325 4.823-3.138 5.61-2.748.765-4.468-.215-5.58-3.187-.655-1.76-.82-4.126-.863-5.28 1.785.79 3.622.689 4.443.4 1.521-.532 2.622-1.37 3.235-2.448.508.868 1.373 2.585 1.902 4.905zm7.05 4.661c-1.468 3.367-2.955 3.49-5.54 2.496-1.06-.406-1.777-.941-2.225-1.616a4.27 4.27 0 00.364-.244c.01.001.018.004.027.007a.084.084 0 00.038.007c2.941-.219 4.221 1.501 4.272 1.574a.417.417 0 00.341.177c.017 0 .034 0 .05-.003a.418.418 0 00.34-.264l.002-.005c.027-.078.303-.854-.061-1.686-.286-.653-.868-1.152-1.731-1.482-.79-.303-1.451-.32-1.992-.185a5.12 5.12 0 00.168-1.546c.003 0 .004.003.006.005a5.56 5.56 0 001.04.448l.034.008.063.015s.081.014.196.014c.345 0 .656-.146.849-.4.11-.144.272-.446.18-.88-.09-.608-.642-1.65-2.169-1.65-.076 0-.153.005-.234.01h-.015c-.107.008-.191.031-.275.054l-.033.008c-.09-.37-.185-.725-.289-1.061l.015-.016a.119.119 0 00.019-.02c.291-.494.571-.928.793-1.256.618 1.23 2.03 2.373 2.991 2.743.978.378 2.729.546 4.082-.034-.107.964-.418 2.743-1.306 4.782zM9.176 11.114c-.622 0-.902-.364-.992-.521-.143-.246-.247-.658.07-1.216.594-1.05 1.395-1.207 1.82-1.207.5 0 .88.202 1.034.294.44.238.558.597.589.793.084.51-.222.863-.32.958a.968.968 0 01-.09.078 4.717 4.717 0 01-1.002.566c-.294.115-.723.255-1.11.255zm0-.843c.212 0 .515-.084.798-.196.437-.174.81-.457.81-.457s.249-.25-.099-.423c0 0-.26-.182-.613-.182-.328 0-.74.163-1.09.782-.199.35-.067.476.194.476zM6.99 11.845a5.16 5.16 0 01-1.087.258c-.177.02-.348.03-.507.03-.74 0-1.205-.24-1.387-.716-.076-.2-.19-.723.398-1.255.496-.446 1.022-.673 1.566-.673.6 0 1.09.297 1.353.572.263.246.395.571.358.899-.045.415-.336.706-.59.84l-.104.045zm-1.183-.583c.46-.053.891-.21.891-.21s.306-.162.034-.389c0 0-.286-.33-.765-.33-.277 0-.616.109-1.003.459-.409.37-.059.496.429.496.132 0 .274-.009.414-.026zm5.872.62a.428.428 0 01.305.29c.011.034.238.847-.232 1.693-.393.706-1.132 1.216-2.196 1.512-.482.135-.91.194-1.292.194-1.988 0-2.641-1.553-2.66-1.599a.426.426 0 01.058-.415.412.412 0 01.386-.16c3.415.45 5.179-1.348 5.227-1.397a.43.43 0 01.404-.118zm-.661 1.574a1.55 1.55 0 00.12-.275c-.79.521-2.188 1.205-4.213 1.132.437.33 1.19.594 2.406.255.84-.235 1.41-.61 1.687-1.112zm5.546 3.006c-.636-.516-1.728-1.14-3.336-1.236.406-.255 1.045-.414 1.986-.05.919.353 1.25.86 1.35 1.286zm-3.053-5.36a.775.775 0 01.196-.03 2.2 2.2 0 01.188-.008c1.246 0 1.341.958 1.341.958.065.252-.106.283-.201.283a.502.502 0 01-.056-.003s-.448-.137-.857-.37a3.27 3.27 0 01-.533-.37 10.567 10.567 0 00-.078-.46zm5.41 2.01c.156.246-.144.277-.144.277s-.403-.006-.8-.096c-.57-.131-1.133-.383-.558-.585a1.82 1.82 0 01.602-.112c.678 0 .9.515.9.515zm-.903-1.36c-.277 0-.571.054-.877.16-.781.272-.812.86-.804 1.037.045.84 1.051 1.075 1.44 1.166l.009.002c.47.11.93.118.98.118h.008a.872.872 0 00.083-.005l.007-.001c.378-.042.695-.255.846-.574a1.002 1.002 0 00-.05-.944 1.815 1.815 0 00-1.642-.958z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTheaterLight;
