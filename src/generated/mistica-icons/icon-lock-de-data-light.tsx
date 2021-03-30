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

const IconLockDeDataLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M7.486 16.919c1.028-.017 1.028-.826 1.028-1.09 0-.266 0-1.075-1.042-1.1l-.123-.003h-.03c-1.012.008-1.012.795-1.012 1.09 0 .268 0 1.089 1.028 1.103h.151zm.006-3.011c.378.008 1.849.157 1.849 1.921 0 1.768-1.474 1.908-1.843 1.913-.043 0-.082.003-.124.003l-.053-.003c-.39-.005-1.843-.145-1.843-1.927 0-1.778 1.44-1.907 1.829-1.91l.042-.003c.05 0 .1.003.143.006zm11.59 6.549c1.287-.398 1.94-.927 1.931-1.572l-.03-3.255c-.438.342-1.012.63-1.693.84-1.204.373-2.781.586-4.445.603h-.193c-.611 0-1.205-.034-1.782-.087v1.706c.003.636-.196 1.14-.585 1.501-.314.292-.698.426-1.014.488 1.042.227 2.283.353 3.596.339 1.586-.014 3.081-.216 4.216-.563zm-15.806-.894c.222.233.572.35 1.042.35l6.381-.002c.031 0 .647.033 1.025-.32.216-.202.32-.493.32-.893-.003-1.83 0-5.547 0-5.547.003-.036.03-.523-.283-.857-.221-.235-.58-.355-1.062-.355-1.846 0-6.143.005-6.364.005h-.022c-.012 0-.023 0-.034-.003-.003 0-.025-.002-.062-.002-.162 0-.613.028-.913.305-.213.196-.32.498-.32.899v5.563c-.002.034-.027.524.292.857zM7.35 7.527c-.781.008-2.602.285-2.602 2.742v.852c1.07-.003 3.885-.006 5.532-.006v-.83c0-2.433-1.849-2.736-2.644-2.755-.084-.003-.188 0-.286-.003zM8.568 6.07l.01.77c1.051.264 2.533 1.054 2.533 3.449v.764c1.062.241 2.336.367 3.68.348 1.589-.014 3.085-.216 4.208-.563 1.12-.348 1.72-.866 1.927-1.255l-.034-3.61c-.414.324-.974.599-1.694.823-1.202.372-2.782.585-4.446.6h-.198c-1.594 0-3.101-.18-4.261-.516-.731-.216-1.305-.485-1.725-.81zm1.921-2.526c-1.076.333-1.725.775-1.885 1.282.003.006.008.012.011.02.171.501.835.93 1.91 1.241 1.132.328 2.614.504 4.219.485 1.588-.017 3.081-.216 4.21-.563 1.042-.323 1.692-.751 1.874-1.239a.072.072 0 01.017-.022c-.16-.527-.801-.955-1.922-1.28-1.131-.328-2.627-.51-4.221-.485-1.591.014-3.087.21-4.213.56zm2.384 9.641c.003 0 0 1.448 0 2.978a18.34 18.34 0 001.966.09c1.586-.018 3.081-.216 4.21-.564 1.118-.344 1.72-.865 1.925-1.252l-.034-3.655c-.437.341-1.008.63-1.692.84-1.201.373-2.781.585-4.445.6h-.196c-.678 0-1.336-.031-1.961-.096.163.329.24.693.227 1.059zm8.837-8.193l.132 13.885c.011 1.05-.835 1.846-2.513 2.364-1.21.373-2.79.585-4.45.602h-.188c-1.594 0-3.104-.185-4.272-.518a6.306 6.306 0 01-1.266-.501.344.344 0 01-.11-.093l-4.725.003c-.714 0-1.271-.207-1.652-.616-.56-.6-.51-1.406-.507-1.44v-5.532c0-.642.198-1.149.59-1.507.373-.34.84-.46 1.174-.502v-.868c0-2.605 1.768-3.546 3.42-3.563.135-.003.272 0 .407.008l-.02-1.588c0-.162.02-.325.064-.484v-.003c.227-.813 1.05-1.446 2.449-1.88 1.201-.372 2.781-.585 4.448-.602 1.664-.014 3.255.168 4.462.515 1.686.49 2.546 1.27 2.557 2.32z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLockDeDataLight;
