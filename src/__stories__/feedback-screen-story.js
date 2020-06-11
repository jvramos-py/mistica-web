// @flow
import * as React from 'react';
import {ErrorFeedbackScreen, InfoFeedbackScreen, SuccessFeedbackScreen} from '../feedback-screen';
import {ButtonLink, ButtonPrimary, ButtonSecondary} from '../button';

export default {
    title: 'Components|Feedbacks/FeedbackScreen',
};

const primaryButton = <ButtonPrimary onPress={() => {}}>Action1</ButtonPrimary>;

const secondaryButton = <ButtonSecondary onPress={() => {}}>Action2</ButtonSecondary>;

const linkButton = <ButtonLink onPress={() => {}}>Action2</ButtonLink>;

const defaultTitle = "I'm the title",
    defaultDescription = "I'm the description";

export const Success = (): React.Node => (
    <SuccessFeedbackScreen
        title={defaultTitle}
        description={defaultDescription}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
    />
);
Success.story = {name: 'SuccessFeedbackScreen'};

export const Error = (): React.Node => (
    <ErrorFeedbackScreen
        title={defaultTitle}
        description={defaultDescription}
        primaryButton={primaryButton}
        link={linkButton}
    />
);
Error.story = {name: 'ErrorFeedbackScreen'};

export const Info = (): React.Node => (
    <InfoFeedbackScreen title={defaultTitle} description={defaultDescription} primaryButton={primaryButton} />
);
Info.story = {name: 'InfoFeedbackScreen'};

export const multipleParagraphs = (): React.Node => (
    <SuccessFeedbackScreen
        title={defaultTitle}
        description={[defaultDescription, "I'm the second paragraph"]}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
    />
);
