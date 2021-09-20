import * as React from 'react';
import {createUseStyles} from './jss';
import Touchable from './touchable';
import classnames from 'classnames';
import {useIsInverseVariant} from './theme-variant-context';

import type {TrackingEvent, DataAttributes} from './utils/types';

const useStyles = createUseStyles((theme) => ({
    textLink: {
        width: 'auto',
        lineHeight: 'inherit',
        display: 'inline-block',
        color: theme.colors.textLink,
        wordBreak: 'break-word',
        [theme.mq.supportsHover]: {
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    },
    inverse: {
        color: theme.colors.textLinkInverse,
    },
    small: {
        fontSize: 14,
    },
}));

interface CommonProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    classes?: {[className: string]: string};
    small?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
}

export interface HrefProps extends CommonProps {
    href: string;
    newTab?: boolean;
    onPress?: undefined;
    to?: undefined;
}

export interface ToProps extends CommonProps {
    to: string;
    fullPageOnWebView?: boolean;
    href?: undefined;
    onPress?: undefined;
}
export interface OnPressProps extends CommonProps {
    onPress: (event: React.MouseEvent<HTMLElement>) => void | boolean;
    href?: undefined;
    to?: undefined;
}

export type TextLinkProps = HrefProps | ToProps | OnPressProps;

const TextLink: React.FC<TextLinkProps> = ({children, className = '', small, ...props}) => {
    const classes = useStyles();
    const isInverse = useIsInverseVariant();

    return (
        <Touchable
            {...props}
            className={classnames(classes.textLink, className, {
                [classes.small]: small,
                [classes.inverse]: isInverse,
            })}
        >
            {children}
        </Touchable>
    );
};

export default TextLink;
