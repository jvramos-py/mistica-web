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

const IconTowTruckLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.022 15.958c0 .314-.149.644-.41.899-.26.258-.59.406-.907.406h-.179c.014-.14.034-.277.034-.426 0-1.84-1.107-2.935-2.964-2.935-1.854 0-2.964 1.098-2.964 2.935 0 .152.02.286.034.426H9.823c.014-.14.034-.277.034-.426 0-1.84-1.107-2.935-2.964-2.935-1.854 0-2.96 1.098-2.96 2.935 0 .124.016.238.027.356a1.35 1.35 0 01-.574-.333c-.258-.258-.409-.586-.409-.9v-4.067h8.339a.407.407 0 00.409-.406V6.165h3.983c.485 0 1.011.263 1.286.639.45.619 3.078 4.078 3.423 4.524.227.29.608.781.608 1.238-.003-.003-.003 3.392-.003 3.392zm-4.426 3.003c-1.4 0-2.143-.734-2.143-2.124 0-1.389.742-2.123 2.143-2.123 1.4 0 2.143.734 2.143 2.123 0 1.39-.742 2.124-2.143 2.124zm-9.703 0c-1.4 0-2.14-.734-2.14-2.124 0-1.389.74-2.123 2.14-2.123 1.403 0 2.143.734 2.143 2.123 0 1.39-.74 2.124-2.143 2.124zM5.716 5.01l4.096 5.902-1.74-.003-2.95-5.905.594.006zm15.35 5.818c-.341-.443-2.96-3.885-3.406-4.501-.428-.594-1.196-.975-1.95-.975h-4.394a.407.407 0 00-.409.406v5.294L6.271 4.375a.41.41 0 00-.336-.176l-1.47-.011h-.003a.41.41 0 00-.163.042.4.4 0 00-.286.38l-.008 4.247c.006.056-.006.322-.14.468-.028.028-.112.117-.353.12h-.006c-.26 0-.344-.092-.372-.123-.132-.146-.137-.423-.129-.504a.405.405 0 00-.356-.451h-.003a.404.404 0 00-.453.35v.006c-.009.07-.07.697.33 1.14.165.182.468.395.986.395h.011c.493-.003.788-.21.95-.381.392-.423.361-1.014.356-1.048l.005-2.58 2.412 4.832H2.565a.407.407 0 00-.409.406v4.47c0 .53.236 1.068.647 1.477.353.35.807.555 1.322.616.395 1.098 1.367 1.726 2.765 1.726 1.39 0 2.359-.617 2.76-1.698h4.187c.4 1.084 1.37 1.698 2.759 1.698 1.39 0 2.359-.617 2.76-1.698h.35c.534 0 1.078-.232 1.487-.641.411-.41.65-.947.65-1.476v-3.398c0-.731-.488-1.359-.776-1.734z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTowTruckLight;
