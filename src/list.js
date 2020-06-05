// @flow
import * as React from 'react';
import classNames from 'classnames';
import {createUseStyles} from './jss';
import Touchable from './touchable';
import Text from './text';
import Box from './box';
import Stack from './stack';
import Badge from './badge';
import {useTheme} from './hooks';
import IcnChevron from './icons/icn-chevron';

import type {TrackingEvent} from './utils/types';

const useStyles = createUseStyles((theme) => ({
    rowContent: {
        width: '100%',

        '&:hover': {
            background: theme.colors.backgroundAlternative,
        },
        '&:last-child > div > div, &:last-child > div': {
            borderBottom: 'none',
        },
    },
    hoverDisabled: {
        '&:hover': {
            background: 'none',
        },
    },
    boxed: {
        border: `1px solid ${theme.colors.border}`,
        borderRadius: 4,
        overflow: 'hidden',
    },
    content: {
        display: 'flex',
        width: '100%',
        minHeight: 72,
        borderBottom: `1px solid ${theme.colors.borderLight}`,
    },
    icon: {
        display: 'flex',
        alignItems: 'center',

        '& img': {
            display: 'flex',
            width: '100%',
        },
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
    },
    badge: {
        justifyContent: 'center',
        minWidth: 16,
        height: '100%',
    },
}));

type CommonProps = {
    title: string,
    description?: string | null,
    icon?: React.Element<any> | string | null,
    iconSize?: 24 | 40,
    badge?: boolean | number,
};

type ContentProps = {
    ...CommonProps,
    isClickable?: boolean,
};

const Content = ({title, description, icon, iconSize = 40, isClickable, badge}: ContentProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const getIconSize = description ? 40 : iconSize;
    const renderBadge = () => {
        const wrapper = (content) => (
            <Box paddingLeft={16}>
                <div className={classNames(classes.center, classes.badge)}>{content}</div>
            </Box>
        );
        if (!badge) {
            return null;
        }
        if (badge === true) {
            return wrapper(<Badge />);
        }
        return wrapper(<Badge value={badge} />);
    };

    return (
        <Box paddingY={16} className={classes.content}>
            {icon && (
                <Box
                    paddingRight={16}
                    paddingY={description ? 4 : 0}
                    className={classNames({[classes.center]: !description})}
                >
                    <div className={classes.icon} style={{width: getIconSize, height: getIconSize}}>
                        {icon}
                    </div>
                </Box>
            )}
            <div className={classes.text}>
                <Text size={18} weight="light" lineHeight="24px" color={theme.colors.textPrimary}>
                    {title}
                </Text>
                {description && (
                    <Box paddingY={2}>
                        <Text size={14} lineHeight="20px" color={theme.colors.textSecondary}>
                            {description}
                        </Text>
                    </Box>
                )}
            </div>
            {renderBadge()}
            {isClickable && (
                <Box paddingLeft={16} className={classes.center}>
                    <IcnChevron size={24} color={theme.colors.iconSecondary} direction="right" />
                </Box>
            )}
        </Box>
    );
};

type RowContentProps =
    | {...CommonProps}
    | {
          ...CommonProps,
          trackingEvent?: TrackingEvent,
          href: string,
          newTab?: boolean,
      }
    | {
          ...CommonProps,
          trackingEvent?: TrackingEvent,
          to: string,
          fullPageOnWebView?: boolean,
          replace?: boolean,
      }
    | {
          ...CommonProps,
          trackingEvent?: TrackingEvent,
          onPress: Function,
      };

const RowContent = (props: RowContentProps) => {
    const classes = useStyles();
    const {icon, iconSize, title, description, badge} = props;

    if (props.onPress) {
        return (
            <Touchable
                className={classes.rowContent}
                trackingEvent={props.trackingEvent}
                onPress={props.onPress}
            >
                <Box paddingX={16}>
                    <Content
                        icon={icon}
                        iconSize={iconSize}
                        title={title}
                        description={description}
                        badge={badge}
                        isClickable
                    />
                </Box>
            </Touchable>
        );
    }

    if (props.to) {
        return (
            <Touchable
                className={classes.rowContent}
                trackingEvent={props.trackingEvent}
                to={props.to}
                fullPageOnWebView={props.fullPageOnWebView}
            >
                <Box paddingX={16}>
                    <Content
                        icon={icon}
                        iconSize={iconSize}
                        title={title}
                        description={description}
                        badge={badge}
                        isClickable
                    />
                </Box>
            </Touchable>
        );
    }

    if (props.href) {
        return (
            <Touchable
                className={classes.rowContent}
                trackingEvent={props.trackingEvent}
                href={props.href}
                newTab={props.newTab}
            >
                <Box paddingX={16}>
                    <Content
                        icon={icon}
                        iconSize={iconSize}
                        title={title}
                        description={description}
                        badge={badge}
                        isClickable
                    />
                </Box>
            </Touchable>
        );
    }

    return (
        <Box paddingX={16} className={classNames(classes.rowContent, classes.hoverDisabled)}>
            <Content icon={icon} iconSize={iconSize} title={title} description={description} />
        </Box>
    );
};

export const Row = (props: RowContentProps): React.Node => <RowContent {...props} />;

type RowListProps = {
    children: React.ChildrenArray<React.Element<typeof Row>>,
};

export const RowList = ({children}: RowListProps): React.Node =>
    React.Children.map(children, (child) => child);

export const BoxedRow = (props: RowContentProps): React.Node => <RowContent {...props} />;

type BoxedRowListProps = {
    children: React.ChildrenArray<React.Element<typeof BoxedRow>>,
};

export const BoxedRowList = ({children}: BoxedRowListProps): React.Node => {
    const classes = useStyles();

    return (
        <Stack space={16}>
            {React.Children.map(children, (child) => (
                <div className={classes.boxed}>{child}</div>
            ))}
        </Stack>
    );
};
