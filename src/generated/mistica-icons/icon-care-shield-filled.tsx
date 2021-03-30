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

const IconCareShieldFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.417 15.41c0-.012.25-3.309.221-4.382a.544.544 0 00-.02-.157c-.008.003-.038-.008-.097-.008-.112.003-.177.053-.194.135l-.518 2.526c-.005.028-.022.045-.03.073a1.336 1.336 0 01-.177.675l-.003.003v.003l-1.538 2.602a.596.596 0 01-.826.213.613.613 0 01-.21-.835l1.538-2.605.003-.003v-.003c.033-.056-.003-.199-.06-.235 0 0-.117-.067-.162.008l-.078.135c-.258.46-.793 1.415-1.883 1.978 0 0-.252.15-.703.736a8.025 8.025 0 00-1.02 1.773l-.086.208h2.913c.037 0 .073.008.112.01l1.793-1.531a8.87 8.87 0 01.479-.379c.12-.09.235-.23.344-.414a1.31 1.31 0 00.202-.527zm1.426-4.415c.03 1.134-.216 4.39-.227 4.53-.04.35-.16.691-.364 1.036-.19.319-.412.577-.656.761-.145.11-.285.216-.423.331l-1.479 1.266c.143.221.227.487.227.77v.712c0 .795-.641 1.44-1.431 1.44h-3.457a1.438 1.438 0 01-1.431-1.44v-.712c0-.448.207-.84.527-1.106l.423-1.014a9.235 9.235 0 011.179-2.045c.622-.812 1.02-1.033 1.129-1.084.742-.386 1.143-1.1 1.358-1.484l.101-.177a1.29 1.29 0 011.524-.54l.305-1.494a1.395 1.395 0 011.37-1.106c.849.053 1.305.546 1.325 1.356zM6.515 18.252h2.913l-.087-.207a7.916 7.916 0 00-1.02-1.773c-.45-.585-.702-.737-.705-.74-1.084-.562-1.622-1.518-1.877-1.977l-.078-.137c-.045-.076-.163-.009-.165-.006-.056.034-.093.177-.06.233v.002l.004.003 1.537 2.605a.606.606 0 01-.515.919.602.602 0 01-.518-.297l-1.538-2.605v-.003l-.003-.003a1.336 1.336 0 01-.176-.675c-.009-.025-.026-.044-.031-.072l-.518-2.527a.172.172 0 00-.16-.137.726.726 0 00-.14.016c.003.012-.009.056-.011.149-.028 1.073.221 4.37.224 4.403.017.135.084.314.199.507a1.4 1.4 0 00.347.415c.16.12.322.244.476.375l1.793 1.532c.036.009.07 0 .11 0zm3.936-.68l.425 1.014c.317.263.524.66.524 1.106v.712c0 .795-.641 1.442-1.428 1.442H6.515a1.438 1.438 0 01-1.428-1.442v-.712c0-.283.084-.546.224-.767l-1.48-1.266c-.137-.118-.28-.225-.42-.334a2.649 2.649 0 01-.658-.762 2.579 2.579 0 01-.361-1.016c-.011-.16-.258-3.415-.23-4.552.02-.813.48-1.306 1.255-1.348.731.006 1.305.443 1.443 1.104l.305 1.493a1.288 1.288 0 011.524.538l.1.176c.216.384.617 1.098 1.384 1.496.084.04.482.263 1.104 1.076a9.17 9.17 0 011.174 2.042zM14.739 7.14a.612.612 0 000-.86.6.6 0 00-.854 0L11.03 9.163 9.983 8.104a.597.597 0 00-.852 0 .612.612 0 000 .86l1.474 1.487c.117.118.271.18.428.18a.603.603 0 00.426-.18l3.28-3.31zm2.39 2.88c-.393 2.272-4.474 4.274-4.939 4.496a.597.597 0 01-.515 0c-.465-.222-4.54-2.224-4.93-4.496-.294-1.68-.283-5.55-.28-5.712a.608.608 0 01.748-.591c.87.135 1.322-.173 1.958-.596.638-.429 1.434-.961 2.762-.961h.005c1.325 0 2.118.535 2.756.96.636.424 1.096.735 1.998.592a.611.611 0 01.711.594c.003.165.014 4.028-.274 5.714z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareShieldFilled;
