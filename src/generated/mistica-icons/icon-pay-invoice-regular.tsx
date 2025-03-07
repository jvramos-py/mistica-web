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

const IconPayInvoiceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.36 2H6.644C5.464 2 4.5 2.96 4.5 4.144V22h15V4.144A2.143 2.143 0 0017.36 2zm.714 18.574H5.93V4.144c0-.393.32-.713.713-.713H17.36c.394 0 .714.32.714.713v16.43zm-2.14-2.68a.536.536 0 000-1.07H8.075a.533.533 0 00-.535.536c0 .297.238.535.535.535h7.859zm.535-4.104a.533.533 0 01-.535.535H8.075a.533.533 0 01-.535-.535c0-.297.238-.535.535-.535h7.859a.533.533 0 01.535.535zm-5.207-6.967a.533.533 0 00-.535.535c0 .297.237.54.535.535h.365a2.682 2.682 0 002.625 2.144 2.62 2.62 0 001.22-.302.534.534 0 00.233-.722.534.534 0 00-.722-.234 1.532 1.532 0 01-.727.183c-.7 0-1.284-.448-1.508-1.07h1.673a.533.533 0 00.535-.534.533.533 0 00-.535-.535h-1.673a1.604 1.604 0 011.508-1.07c.247 0 .494.064.727.183a.538.538 0 00.722-.233.538.538 0 00-.233-.722 2.634 2.634 0 00-1.22-.302 2.682 2.682 0 00-2.625 2.144h-.365z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.62 18.31h8.194a.56.56 0 100-1.12H10.62a.562.562 0 00-.56.56c0 .309.252.56.56.56zm8.194-3.276h-7.101a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h7.1a.56.56 0 110 1.12zm-4.916-3.824h4.916a.56.56 0 100-1.12h-4.916a.562.562 0 00-.56.56c0 .308.252.56.56.56zm-6.135.708v.37a.42.42 0 11-.84 0v-.364a2.874 2.874 0 01-1.235-.484.427.427 0 01-.196-.364.415.415 0 01.417-.412c.095.003.188.03.266.084.248.165.499.28.748.34v-1.54c-1.075-.23-1.31-.905-1.31-1.45 0-.823.501-1.396 1.31-1.54v-.471a.42.42 0 11.84 0v.463c.353.049.68.16.947.324.205.126.235.291.235.378a.405.405 0 01-.403.403.54.54 0 01-.238-.064l-.006-.003a2.108 2.108 0 00-.535-.211v1.456c1.208.201 1.468.92 1.468 1.497 0 .48-.176.886-.507 1.174-.245.212-.572.353-.96.414zm0-2.234v1.412c.404-.102.642-.365.642-.738 0-.268-.087-.533-.642-.674zm-.84-2.295a.67.67 0 00-.485.673c0 .153 0 .442.485.615V7.39z"
                />
                <path
                    fill={fillColor}
                    d="M7.962 21.854H14.5c2.933 0 5.815 0 6.193.003.712-.003 1.154-.445 1.154-1.157V7.92a.56.56 0 00-.162-.395l-5.205-5.22a.562.562 0 00-.397-.165c-2.76 0-7.404 0-8.124.006-.725 0-1.176.448-1.176 1.17V4.1c-1.373.09-2.465.516-3.247 1.27-.918.889-1.386 2.205-1.386 3.908 0 1.703.468 3.02 1.386 3.908.782.754 1.874 1.181 3.247 1.27v6.212c0 .366.106.655.314.868.207.213.498.32.865.32zM7.903 3.316l.002-.03.001-.02c.014-.003.034-.003.056-.003.67-.002 4.773-.003 7.56-.003v2.202c.003.857.2 1.558.583 2.079.451.613 1.143.938 2 .938h2.62v12.258H7.964a.493.493 0 01-.059-.003c-.003-.023-.003-.042-.003-.065v-6.213c1.375-.09 2.465-.517 3.25-1.271.918-.888 1.386-2.202 1.386-3.908 0-1.753-.425-3.03-1.3-3.902-.777-.775-1.872-1.195-3.336-1.278v-.78zm8.74.74l3.288 3.3h-1.826c-.501 0-.86-.163-1.098-.482-.238-.32-.364-.81-.364-1.418v-1.4zm-6.196 2.112c.653.653.969 1.67.969 3.11 0 2.742-1.333 4.075-4.073 4.075S3.27 12.02 3.27 9.277c0-2.724 1.316-4.058 4.019-4.075a.56.56 0 00.109 0c1.408.008 2.404.322 3.049.966z"
                />
            </svg>
        );
    }
};

export default IconPayInvoiceRegular;
