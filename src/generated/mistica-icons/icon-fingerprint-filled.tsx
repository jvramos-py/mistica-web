/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFingerprintFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.434 6.697a.606.606 0 00.843.155.603.603 0 00.154-.838c-1.126-1.636-2.966-2.978-4.927-3.591-2.93-.913-6.095-.325-8.689 1.616A13.698 13.698 0 003.83 5.87a.602.602 0 00.894.803 12.364 12.364 0 011.81-1.67c2.28-1.708 5.052-2.229 7.607-1.43 1.711.534 3.317 1.702 4.294 3.125z"
                fill={fillColor}
            />
            <path
                d="M12.913 21.655a.597.597 0 00.725-.448.601.601 0 00-.442-.725c-1.428-.345-2.9-1.107-4.143-2.14-1.42-1.182-2.633-3.146-3.162-5.126C5.3 11.003 5.58 9 6.68 7.574c1.397-1.807 3.88-2.664 6.182-2.131l.025.005.025.003c.037.006 3.496.538 4.482 4.613l.006.026c.08.277.218 1.184-.183 1.72-.26.347-.742.529-1.434.534h-.036l-.037.006a1.03 1.03 0 01-.666-.235c-.381-.303-.625-.902-.703-1.729-.065-.672-.367-1.235-.877-1.627-.6-.46-1.44-.641-2.308-.499a3.055 3.055 0 00-1.135.384c-.549.32-1.22.958-1.316 2.185-.09 1.165.339 2.55 1.143 3.706.686.98 1.96 2.263 4.154 2.798a.603.603 0 00.286-1.17c-1.83-.446-2.886-1.508-3.451-2.32-.768-1.1-.984-2.232-.93-2.924.042-.56.269-.958.689-1.216a1.8 1.8 0 01.692-.246h.02l.03-.006c.54-.09 1.061.008 1.395.263.24.185.38.448.412.787.112 1.177.501 2.037 1.15 2.558a2.22 2.22 0 001.527.49c1.073-.014 1.869-.359 2.362-1.02.801-1.075.426-2.577.378-2.756-.613-2.524-2.059-3.885-3.162-4.585-1.107-.7-2.101-.891-2.289-.922-2.745-.627-5.711.406-7.384 2.574-1.336 1.731-1.692 4.107-1 6.69.6 2.24 1.927 4.389 3.555 5.742 1.384 1.148 3.028 1.997 4.63 2.383z"
                fill={fillColor}
            />
            <path
                d="M13.717 19.6a.667.667 0 01-.162-.023c-2.58-.717-4.92-2.58-6.104-4.866-.936-1.8-1.087-3.711-.44-5.526.345-1.031 1.081-1.902 2.076-2.457a5.075 5.075 0 013.23-.571 5.154 5.154 0 012.955 1.557c.818.869 1.26 1.964 1.252 3.082a.602.602 0 01-.602.596h-.006a.601.601 0 01-.597-.608c.014-1.652-1.386-3.162-3.187-3.44-1.757-.268-3.468.687-3.98 2.227l-.006.012c-.533 1.493-.404 3.075.372 4.574 1.02 1.966 3.123 3.639 5.359 4.26a.601.601 0 01-.16 1.182z"
                fill={fillColor}
            />
            <path
                d="M12.684 14.591c.823.667 1.845 1 3.056 1 .414 0 .848-.04 1.305-.115a.6.6 0 10-.205-1.185c-1.428.244-2.571.034-3.392-.627-1.324-1.067-1.454-3.002-1.462-3.12v-.006a.601.601 0 10-1.202.047c.003.104.118 2.56 1.9 4.006z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFingerprintFilled;
