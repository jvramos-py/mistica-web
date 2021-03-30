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

const IconRouteLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M6.654 20.805c1.053-1.22 3.7-4.8 3.709-7.01.006-1.186-.314-2.113-.944-2.749-.63-.635-1.552-.96-2.737-.963h-.02c-1.173 0-2.089.316-2.72.947-.632.63-.957 1.554-.96 2.742-.008 2.112 2.521 5.706 3.672 7.033zm.031-11.551c2.83.008 4.515 1.708 4.507 4.546-.008 2.941-3.714 7.386-4.244 7.916a.415.415 0 01-.585.003l-.003-.003c-.857-.863-4.216-5.202-4.21-7.944.003-1.398.423-2.55 1.204-3.33.782-.78 1.925-1.191 3.309-1.191l.022.003zm-.014 5.154c.594 0 .882-.292.882-.885 0-.597-.288-.886-.882-.886-.594 0-.882.292-.882.886 0 .593.288.885.882.885zm0-2.603c1.056 0 1.712.659 1.712 1.718 0 1.058-.656 1.717-1.712 1.717s-1.711-.66-1.711-1.717c0-1.06.655-1.718 1.711-1.718zM18.685 9.75c.793-.944 2.317-3.145 2.322-4.442.003-1.516-.793-2.32-2.305-2.325h-.014c-.742 0-1.317.199-1.709.588-.395.395-.594.972-.596 1.723-.003 1.308 1.512 3.51 2.302 4.456zm.02-7.599c1.966.006 3.137 1.185 3.131 3.157-.005 2.005-2.504 5-2.857 5.356a.413.413 0 01-.585 0c-.353-.356-2.843-3.353-2.835-5.373.003-.966.294-1.765.84-2.31.54-.541 1.336-.83 2.289-.83h.017zm-.009 3.423c.317 0 .448-.129.448-.448 0-.32-.128-.448-.448-.448-.316 0-.448.128-.448.448s.129.448.448.448zm0-1.728c.776 0 1.278.501 1.278 1.28s-.502 1.28-1.278 1.28-1.277-.501-1.277-1.28.501-1.28 1.277-1.28zm-3.843 7.753a.418.418 0 01-.414-.417c0-.177.114-.334.282-.392.272-.093.541-.171.804-.241a.415.415 0 01.213.804c-.243.064-.498.14-.753.227a.417.417 0 01-.132.02zm.924 7.76a.416.416 0 01.384.736l-.02.008a8.35 8.35 0 01-.784.334.415.415 0 01-.291-.779c.25-.09.487-.19.711-.3zm1.617-2.29a.405.405 0 01-.283-.111 2.517 2.517 0 00-.577-.39.414.414 0 01-.177-.56.414.414 0 01.56-.176c.317.165.566.336.762.52.168.158.174.42.017.589a.431.431 0 01-.302.129zm-.168-6.027a.416.416 0 01-.056-.83 4.56 4.56 0 01.305-.036.411.411 0 01.437.384v.008a.414.414 0 01-.39.44c-.078.009-.16.02-.238.031-.02.003-.039.003-.058.003zm.638 6.7c.216.081.322.32.241.535-.117.303-.294.58-.515.815a.417.417 0 01-.586.053.417.417 0 01-.022-.619c.16-.173.277-.355.347-.54a.41.41 0 01.524-.247c.006.003.008.003.011.003zm-2.644-1.745a.4.4 0 01-.14-.025c-.26-.096-.521-.188-.773-.289a.417.417 0 01.302-.776c.247.098.499.19.754.28a.416.416 0 01.008.832.307.307 0 01-.151-.022zM11.2 20.58a.407.407 0 01.468.342v.009a.412.412 0 01-.347.47h-.003c-.28.042-.555.081-.818.112a.417.417 0 01-.462-.361.413.413 0 01.356-.462h.003c.263-.034.529-.068.803-.11zm2.356-.456a.416.416 0 01.202.807c-.266.067-.538.128-.81.184a.413.413 0 01-.49-.322.413.413 0 01.322-.49c.258-.056.518-.115.776-.18zm-.79-7.317a.42.42 0 01-.32-.683 3.21 3.21 0 01.707-.608.418.418 0 01.568.148.416.416 0 01-.114.547 2.361 2.361 0 00-.524.448.403.403 0 01-.317.148zM8.803 20.85a.414.414 0 01.445.378v.003a.412.412 0 01-.378.446h-.003c-.252.02-.504.036-.756.05h-.025c-.216 0-.429-.165-.446-.38-.02-.228.11-.421.334-.446l.09-.006c.114-.003.375-.017.739-.045zm4.227-5.902a.417.417 0 01-.264-.095 2.16 2.16 0 01-.616-.776.419.419 0 01.224-.543.412.412 0 01.53.199c.075.168.204.325.386.476a.414.414 0 01.059.582.395.395 0 01-.32.157z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRouteLight;
