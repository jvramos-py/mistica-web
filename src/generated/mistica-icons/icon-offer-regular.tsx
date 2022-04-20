/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOfferRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.37 21.633a.712.712 0 001.244.005l1.587-2.824 2.937 1.348a.714.714 0 001.006-.733l-.37-3.219 3.17-.637a.706.706 0 00.54-.481.725.725 0 00-.156-.706l-2.191-2.384 2.19-2.383a.712.712 0 00.156-.706.72.72 0 00-.54-.482l-3.17-.637.371-3.218a.704.704 0 00-.288-.66.712.712 0 00-.718-.073L14.2 5.19l-1.587-2.823a.711.711 0 00-1.245 0L9.782 5.19 6.845 3.843a.722.722 0 00-.718.073.724.724 0 00-.288.66l.375 3.218-3.17.637a.706.706 0 00-.54.482.725.725 0 00.156.706l2.191 2.383-2.191 2.384a.712.712 0 00-.156.706.72.72 0 00.54.481l3.17.637-.375 3.218a.708.708 0 00.288.66.7.7 0 00.718.074l2.937-1.352 1.587 2.823zm-.664-4.093a.708.708 0 00-.92-.303l-2.382 1.096.301-2.608a.71.71 0 00-.567-.784l-2.57-.518 1.774-1.935a.72.72 0 000-.972L4.567 9.582l2.571-.518a.717.717 0 00.567-.784l-.301-2.608 2.383 1.095a.71.71 0 00.92-.298l1.284-2.287 1.286 2.292c.183.32.58.454.92.298l2.383-1.096-.302 2.609a.71.71 0 00.567.784l2.57.518-1.774 1.934a.72.72 0 000 .972l1.775 1.934-2.571.518a.717.717 0 00-.567.784l.302 2.608-2.384-1.095a.71.71 0 00-.92.298l-1.284 2.287-1.286-2.287z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M10.985 21.2c.109.143.445.575.98.575.132 0 .535 0 .978-.577.193-.25.364-.558.526-.855l.003-.004c.138-.25.385-.7.524-.802.18.014.644.294.9.448l.005.003c.67.405 1.36.822 1.969.47.616-.356.6-1.173.582-1.966v-.01c-.005-.294-.015-.818.057-.976.157-.072.682-.062.975-.056h.01c.79.017 1.611.033 1.967-.583.353-.607-.067-1.302-.473-1.973v-.002c-.154-.252-.435-.717-.449-.896.099-.137.537-.378.79-.517l.017-.01c.297-.162.605-.333.854-.526.143-.11.575-.446.575-.98 0-.132 0-.536-.575-.981-.249-.193-.557-.364-.854-.527l-.005-.002c-.25-.138-.699-.385-.802-.524.014-.18.294-.645.449-.9.406-.669.826-1.364.473-1.974-.356-.616-1.174-.6-1.966-.583h-.01c-.294.006-.819.016-.976-.056-.072-.158-.062-.682-.057-.976v-.01c.017-.793.034-1.61-.582-1.966-.608-.353-1.302.066-1.974.472v.001c-.253.154-.718.434-.897.448-.132-.097-.361-.505-.504-.76a12.635 12.635 0 01-.026-.046c-.162-.297-.333-.605-.526-.855-.11-.143-.446-.574-.98-.574-.132 0-.536 0-.981.574-.193.25-.364.558-.527.855l-.002.004c-.138.25-.385.7-.524.802-.18-.014-.645-.294-.9-.448-.669-.406-1.364-.826-1.974-.473-.616.355-.6 1.173-.583 1.966v.01c.006.294.016.818-.056.976-.158.072-.682.062-.976.056h-.01c-.793-.017-1.61-.033-1.966.583-.353.607.066 1.301.472 1.973l.001.002c.154.254.434.72.448.899-.098.137-.536.378-.789.517l-.017.01c-.297.162-.605.333-.855.526-.143.11-.574.445-.574.98 0 .132 0 .535.574.98.25.194.558.365.855.527.252.138.705.387.81.527-.015.18-.295.644-.45.9l-.003.005c-.405.67-.821 1.36-.47 1.969.356.616 1.174.6 1.967.582h.01c.294-.005.818-.015.976.057.072.157.062.682.056.975v.01c-.017.793-.034 1.611.583 1.967.607.353 1.301-.067 1.973-.473h.001c.255-.154.72-.435.9-.449.136.099.377.537.516.79l.01.017c.163.297.333.605.527.854zm-.76-2.747a1.014 1.014 0 00-.274-.037c-.483 0-.99.305-1.485.602l-.013.009-.027.016c-.228.136-.597.358-.791.412-.055-.197-.046-.653-.04-.922V18.5c.015-.71.028-1.378-.38-1.786-.406-.408-1.076-.395-1.787-.381h-.017c-.27.006-.737.014-.942-.04.054-.193.276-.563.413-.79l.016-.027.005-.008c.354-.588.72-1.196.57-1.762-.147-.552-.732-.874-1.354-1.216l-.013-.007c-.246-.136-.667-.368-.805-.52.138-.15.559-.383.805-.519l.017-.01c.618-.34 1.201-.662 1.35-1.213.153-.566-.217-1.18-.575-1.77l-.016-.027c-.137-.227-.359-.597-.413-.791.2-.055.656-.045.925-.04h.021c.715.015 1.388.028 1.8-.38.408-.406.395-1.076.38-1.786v-.018c-.005-.27-.014-.737.04-.941.194.053.563.276.79.412l.028.016c.498.303 1.01.61 1.498.61.093 0 .185-.013.275-.036.551-.145.874-.73 1.215-1.353l.008-.013c.135-.246.368-.667.519-.805.151.138.384.56.52.805l.009.018c.34.617.663 1.2 1.213 1.348.566.152 1.18-.215 1.77-.574a6.24 6.24 0 01.027-.016c.228-.136.598-.359.792-.412.054.2.045.656.039.924v.021c-.014.715-.027 1.389.38 1.8.406.408 1.076.395 1.787.381h.018c.266-.006.733-.014.938.039-.054.194-.276.564-.413.791l-.016.027-.004.008c-.355.588-.72 1.196-.57 1.762.146.552.731.874 1.353 1.216l.013.007c.246.136.667.368.805.52-.138.15-.559.383-.805.519l-.017.01c-.618.34-1.2.662-1.349 1.213-.154.566.216 1.179.574 1.77l.016.027c.137.227.36.597.413.79-.198.056-.653.046-.922.04h-.035c-.71-.014-1.377-.027-1.785.381-.409.406-.396 1.076-.382 1.786v.018c.006.266.015.734-.038.938-.194-.053-.564-.276-.792-.412l-.026-.016-.008-.005c-.589-.354-1.197-.72-1.763-.57-.552.146-.874.732-1.215 1.353l-.008.014c-.135.246-.368.667-.519.804-.151-.137-.384-.558-.52-.804l-.009-.018c-.34-.617-.663-1.2-1.213-1.348z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconOfferRegular;
