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

const IconRocketLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.58 8.198c-.718 0-1.023.308-1.023 1.03 0 .723.305 1.031 1.022 1.031.717 0 1.023-.308 1.023-1.03 0-.723-.303-1.031-1.023-1.031zm0 2.88c-1.169 0-1.838-.676-1.838-1.85 0-1.176.67-1.848 1.837-1.848 1.168 0 1.84.675 1.84 1.849 0 1.173-.669 1.848-1.84 1.848zm-9.96 6.573c-.566.571-1.487 1.73-1.63 3.353 1.68-.155 2.874-1.18 3.333-1.64.589-.593.589-1.12 0-1.713-.294-.295-.571-.443-.851-.443-.28-.003-.558.146-.852.443zm-2.056 4.19a.41.41 0 01-.409-.409v-.003c0-2.14 1.182-3.65 1.888-4.361.908-.913 1.947-.913 2.855 0 .907.913.907 1.96 0 2.874-.566.571-2.127 1.899-4.334 1.899zm1.19-12.96l-.05.072c.082.188 1.003.583 1.617.846.394.165.795.339 1.182.53a23.877 23.877 0 012.322-3.225L8.9 7.02a2.944 2.944 0 00-1.804-.443c-1.131.115-2.257.896-3.341 2.305zm6.233-1.855l-.549.619C8.43 8.825 7.435 10.258 6.78 11.48l-.345.694c-.501 1.118-.38 1.4-.38 1.404l4.414 4.434c.006 0 .314.118 1.398-.39l.708-.347c1.196-.636 2.583-1.61 3.81-2.672l.633-.55c.165-.145.314-.293.482-.461 1.162-1.168 1.963-2.625 2.507-4.076L14.528 4c-1.447.549-2.907 1.361-4.078 2.543a8.546 8.546 0 00-.462.485zm10.398-4.02c-.857-.098-2.857.023-5.006.698l4.93 4.952c.675-2.185.79-4.213.687-5.039a.71.71 0 00-.611-.61zm-2.913 14.076a2.88 2.88 0 00-.493-1.902l-.056.05a23.704 23.704 0 01-3.227 2.353 21 21 0 01.58 1.3c.257.616.647 1.546.868 1.63 1.451-1.154 2.221-2.288 2.328-3.431zm-12.47-6.527c-1.135-.484-1.948-.829-2.096-1.442-.042-.171-.034-.451.213-.745C4.34 6.778 5.663 5.9 7.033 5.769a3.691 3.691 0 012.426.633c.137-.151.283-.302.414-.437 3.311-3.333 8.673-3.991 10.611-3.77a1.53 1.53 0 011.322 1.322c.118.975-.017 3.325-.849 5.793l.026.025-.05.05c-.578 1.681-1.474 3.407-2.85 4.79-.168.168-.316.317-.481.465.526.729.77 1.625.686 2.521-.129 1.379-1.006 2.706-2.602 3.947a.838.838 0 01-.55.219.785.785 0 01-.179-.023c-.607-.145-.952-.969-1.428-2.109a23.359 23.359 0 00-.538-1.21l-.034.02-.734.358c-.689.322-1.226.482-1.633.482-.294 0-.523-.084-.691-.252l-4.423-4.44c-.393-.364-.325-1.106.224-2.328l.355-.717.037-.064c-.356-.177-.72-.34-1.09-.488z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRocketLight;
