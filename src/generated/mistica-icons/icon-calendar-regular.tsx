/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCalendarRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.644 11.252H9c-.428 0-1.284.18-1.752.536a.7.7 0 00-.108 1c.252.32.716.356 1.036.144.108-.072.572-.216.82-.216h.644c.5 0 .928.428.928.964s-.392.964-.928.964h-.96a.756.756 0 00-.752.752c0 .432.32.748.752.748h.964c.5 0 .928.428.928.964s-.392.964-.928.964H9c-.252 0-.716-.144-.82-.216a.732.732 0 00-1.036.108A.732.732 0 007.252 19c.464.356 1.32.536 1.752.536h.644c1.32 0 2.392-1.108 2.392-2.428 0-.644-.252-1.252-.68-1.716.428-.428.68-1.036.68-1.716-.004-1.32-1.076-2.424-2.396-2.424zm5.928.14a.647.647 0 00-.716 0l-1.64.928a.675.675 0 00-.252.964c.18.356.644.464.964.252l.572-.32v5.572a.715.715 0 101.432 0V12a.712.712 0 00-.36-.608z"
                />
                <path
                    fill={fillColor}
                    d="M16.64 4.144h3.216c1.18 0 2.144.964 2.144 2.14V22H2V6.284c0-1.176.964-2.14 2.144-2.14h3.208V2.716c0-.396.324-.716.716-.716.396 0 .716.324.716.716v1.428h6.428V2.716c0-.396.324-.716.716-.716.392 0 .716.32.712.716v1.428zM7.36 5.572H4.144a.715.715 0 00-.716.716v2.5h17.156v-2.5a.718.718 0 00-.716-.716h-3.216V7a.715.715 0 11-1.432 0V5.572H8.792V7a.718.718 0 01-.716.716A.718.718 0 017.36 7V5.572zm-3.932 15h17.144V10.216H3.428v10.356z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.033 6.855c.101.104.289.23.594.23a.801.801 0 00.594-.23.8.8 0 00.219-.583c0-.487-.328-.815-.813-.815-.484 0-.812.328-.812.815 0 .297.12.482.218.583zm8.754 0a.8.8 0 00.594.23c.305 0 .493-.126.594-.233.1-.1.218-.285.218-.582a.797.797 0 00-.238-.603.81.81 0 00-.574-.21c-.485 0-.813.328-.813.815 0 .297.12.482.219.583zm-5.734 9.793c0-.18.025-.34.078-.48a1.55 1.55 0 01.27-.433l1.153-1.406c.359-.435.605-.765.737-.995.135-.23.199-.46.199-.689 0-.255-.078-.445-.235-.574-.174-.152-.474-.227-.902-.227-.37 0-.76.036-1.163.112v-.922c.185-.047.404-.084.656-.117.252-.031.493-.048.725-.048.815 0 1.41.185 1.779.555.283.283.426.67.426 1.154 0 .364-.093.714-.278 1.047-.184.334-.515.76-.988 1.28l-1.034 1.13h2.398v.884h-3.787a.823.823 0 01-.034-.271z"
                />
                <path
                    fill={fillColor}
                    d="M19.145 20.208H4.767a2.597 2.597 0 01-2.594-2.594V6.384a2.597 2.597 0 012.594-2.593h14.46a2.597 2.597 0 012.593 2.593v11.149a2.68 2.68 0 01-2.675 2.675zM4.767 4.866A1.52 1.52 0 003.25 6.384v1.258h17.496V6.384a1.52 1.52 0 00-1.518-1.518H4.767zm15.978 3.849H3.249v8.9c0 .837.68 1.517 1.518 1.517h14.378a1.6 1.6 0 001.6-1.6V8.716z"
                />
            </svg>
        );
    }
};

export default IconCalendarRegular;
