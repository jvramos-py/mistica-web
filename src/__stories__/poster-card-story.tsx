import * as React from 'react';
import {
    IconInvoicePlanFileRegular,
    skinVars,
    Circle,
    Tag,
    TagType,
    IconLightningRegular,
    ResponsiveLayout,
    Stack,
    Text2,
    Inline,
} from '..';
import {PosterCard} from '../card';
import usingVrImg from './images/using-vr.jpg';
import avatarImg from './images/avatar.jpg';

export default {
    title: 'Components/Cards/Poster card',
};

const BACKGROUND_SRC = usingVrImg;

type PosterCardArgs = {
    asset: 'icon' | 'circle + icon' | 'image' | 'circle + image';
    headlineType: TagType;
    headline: string;
    pretitle: string;
    title: string;
    description: string;
    closable: boolean;
    withTopAction: boolean;
    width: string;
    height: string;
    aspectRatio: '1:1' | '16:9' | '7:10' | '9:10' | 'auto';
};

export const Default: StoryComponent<PosterCardArgs> = ({
    asset = 'icon',
    headline,
    headlineType,
    pretitle,
    title,
    description,
    closable,
    withTopAction,
    width,
    height,
    aspectRatio,
}) => {
    let icon;
    if (asset === 'circle + icon') {
        icon = (
            <Circle size={40} backgroundColor={skinVars.colors.brandLow}>
                <IconInvoicePlanFileRegular color={skinVars.colors.brand} />
            </Circle>
        );
    } else if (asset === 'circle + image') {
        icon = <Circle size={40} backgroundImage={avatarImg} />;
    }

    return (
        <>
            <PosterCard
                onClose={closable ? () => {} : undefined}
                actions={
                    withTopAction
                        ? [
                              {
                                  Icon: IconLightningRegular,
                                  onPress: () => {},
                                  label: 'Lightning',
                              },
                          ]
                        : undefined
                }
                backgroundImage={BACKGROUND_SRC}
                icon={icon}
                headline={headline ? <Tag type={headlineType}>{headline}</Tag> : undefined}
                pretitle={pretitle}
                title={title}
                description={description}
                dataAttributes={{testid: 'poster-card'}}
                aria-label="Poster card label"
                width={width}
                height={height}
                aspectRatio={aspectRatio}
            />
        </>
    );
};

Default.storyName = 'Poster card';
Default.args = {
    asset: 'icon',
    headlineType: 'promo',
    headline: 'Priority',
    pretitle: 'Pretitle',
    title: 'Title',
    description: 'This is a description for the card',
    closable: false,
    withTopAction: false,
    width: 'auto',
    height: 'auto',
    aspectRatio: 'auto',
};
Default.argTypes = {
    asset: {
        options: ['circle + icon', 'circle + image', 'none'],
        control: {type: 'select'},
    },
    headlineType: {
        options: ['promo', 'active', 'inactive', 'success', 'warning', 'error'],
        control: {type: 'select'},
    },
    aspectRatio: {
        options: ['1:1', '16:9', '7:10', '9:10', 'auto'],
        control: {type: 'select'},
    },
};

export const Group: StoryComponent = () => {
    return (
        <ResponsiveLayout>
            <Stack space={16}>
                <Text2 regular>
                    We can group multiple cards and they adjust to the same height. The card content is
                    aligned to the bottom
                </Text2>
                <style>{`.group > * {width: 300px}`}</style>
                <Inline space={16} className="group">
                    <PosterCard
                        headline={<Tag type="promo">Headline</Tag>}
                        pretitle="Pretitle"
                        title="Title"
                        description="Description"
                        backgroundImage={BACKGROUND_SRC}
                    />
                    <PosterCard title="Title" backgroundImage={BACKGROUND_SRC} />
                    <PosterCard title="Title" backgroundImage={BACKGROUND_SRC} onClose={() => {}} />
                </Inline>
            </Stack>
        </ResponsiveLayout>
    );
};

Group.storyName = 'Poster Card group';
