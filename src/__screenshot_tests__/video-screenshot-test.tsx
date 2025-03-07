import {openStoryPage, screen, ssimScreenshotConfig} from '../test-utils';

test('Video', async () => {
    await openStoryPage({id: 'components-primitives-video--default'});

    const story = await screen.findByTestId('video');

    // https://jira.tid.es/browse/WEB-680
    expect(await story.screenshot()).toMatchImageSnapshot(ssimScreenshotConfig);
});
