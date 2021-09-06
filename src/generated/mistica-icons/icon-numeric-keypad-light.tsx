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

const IconNumericKeypadLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.255 5.43c.933 0 1.487.558 1.487 1.493v3.356c.224-.146.51-.224.846-.224.824 0 1.336.46 1.4 1.24.225-.148.513-.226.855-.226.826 0 1.34.465 1.4 1.252.225-.149.513-.227.852-.227.883 0 1.406.53 1.406 1.412v6.008c0 .723-.198 1.291-.59 1.692-.393.4-1.017.622-1.754.622h-6.448c-.412 0-.628-.342-.801-.709-.06-.126-.186-.4-.362-.78l-.162-.351A878.962 878.962 0 007.552 13.9c-.334-.7-.084-1.244.26-1.516.449-.358 1.118-.344 1.591.028.348.275.673.888 1.017 1.54.056.107.112.214.171.32a.867.867 0 00.168.233.301.301 0 00.014-.112V6.906c.062-.952.588-1.476 1.482-1.476zm.003.558c-.603 0-.88.282-.925.944v7.458c0 .35-.168.619-.431.686-.17.042-.501.031-.807-.538-.056-.106-.115-.215-.17-.322-.303-.571-.617-1.162-.869-1.361a.81.81 0 00-.49-.174.641.641 0 00-.41.14c-.229.182-.268.49-.1.838a945.8 945.8 0 012.835 6.092l.162.351.138.3.224.478c.16.345.243.38.28.383h6.46c.584 0 1.066-.162 1.355-.456.288-.294.431-.73.431-1.302v-6c0-.574-.277-.852-.846-.852-.568 0-.846.28-.846.852h-.56V12.48c0-.575-.277-.852-.846-.852-.568 0-.846.28-.846.852h-.56v-1.014c0-.575-.277-.852-.846-.852s-.846.28-.846.852h-.56V6.92c0-.627-.303-.932-.927-.932zM5.154 8.702c.93 0 1.487.557 1.487 1.493 0 .462-.128.826-.383 1.09-.255.263-.642.408-1.104.408-.462 0-.846-.14-1.104-.406-.257-.266-.383-.627-.383-1.09 0-.935.557-1.495 1.487-1.495zm3.552.003c.93 0 1.487.557 1.487 1.493 0 .462-.129.826-.383 1.09-.255.263-.642.405-1.104.405-.462 0-.843-.14-1.104-.406-.26-.266-.384-.627-.384-1.09 0-.935.558-1.492 1.488-1.492zm-3.552.56c-.625 0-.927.305-.927.933 0 .308.076.543.224.697.148.154.39.235.703.235.314 0 .55-.078.703-.235.154-.157.224-.386.224-.697 0-.628-.302-.933-.927-.933zm3.552 0c-.625 0-.927.305-.927.933 0 .308.075.543.224.697.148.154.39.235.703.235.314 0 .549-.078.703-.235.154-.157.224-.386.224-.697 0-.628-.302-.933-.927-.933zM5.154 5.427c.93 0 1.487.558 1.487 1.493 0 .462-.128.827-.383 1.09-.255.263-.642.406-1.104.406-.462 0-.846-.14-1.104-.406-.257-.266-.383-.628-.383-1.09 0-.935.557-1.493 1.487-1.493zm3.552 0c.93 0 1.487.558 1.487 1.493 0 .462-.129.827-.383 1.09-.255.263-.642.406-1.104.406-.462 0-.843-.14-1.104-.406-.26-.266-.384-.628-.384-1.09 0-.935.558-1.493 1.488-1.493zm-3.552.56c-.625 0-.927.306-.927.933 0 .311.076.544.224.698.148.154.39.235.703.235.314 0 .55-.078.703-.235.154-.157.224-.39.224-.698 0-.627-.302-.932-.927-.932zm3.552 0c-.625 0-.927.306-.927.933 0 .311.075.544.224.698.148.154.39.235.703.235.314 0 .549-.078.703-.235.154-.157.224-.39.224-.698 0-.627-.302-.932-.927-.932zM5.154 2.15c.933 0 1.487.557 1.487 1.493 0 .462-.128.826-.383 1.09-.255.263-.642.406-1.104.406-.462 0-.846-.14-1.104-.406-.257-.266-.383-.628-.383-1.09 0-.936.554-1.493 1.487-1.493zm3.552 0c.93 0 1.487.557 1.487 1.493 0 .462-.129.826-.383 1.09-.255.263-.642.406-1.104.406-.462 0-.843-.14-1.104-.406-.26-.266-.384-.628-.384-1.09 0-.936.558-1.493 1.488-1.493zm3.549 0c.933 0 1.487.557 1.487 1.493 0 .462-.129.826-.383 1.09-.255.263-.642.406-1.104.406-.462 0-.843-.14-1.104-.406-.26-.266-.383-.628-.383-1.09 0-.936.554-1.493 1.487-1.493zm-7.1.56c-.626 0-.928.306-.928.933 0 .31.076.543.224.697.148.155.39.236.703.236.314 0 .55-.079.703-.236.154-.156.224-.386.224-.697 0-.627-.302-.933-.927-.933zm3.55 0c-.624 0-.926.306-.926.933 0 .31.075.543.224.697.148.155.39.236.703.236.314 0 .549-.079.703-.236.154-.156.224-.386.224-.697 0-.627-.302-.933-.927-.933zm3.55 0c-.625 0-.927.306-.927.933 0 .31.075.543.224.697.148.155.39.236.703.236.314 0 .549-.079.703-.236.154-.156.224-.386.224-.697 0-.627-.302-.933-.927-.933z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNumericKeypadLight;
