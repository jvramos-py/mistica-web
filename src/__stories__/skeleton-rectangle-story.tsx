import * as React from 'react';
import {SkeletonRectangle} from '../skeletons';
import {ThemeVariant, useTheme} from '..';

export default {
    title: 'Components/Skeletons/Skeleton Rectangle',
    parameters: {
        fullScreen: true,
    },
};

type Args = {
    height: number;
    width: number;
    inverse: boolean;
    ariaLabel: string;
};

export const Default: StoryComponent<Args> = ({height, width, inverse, ariaLabel}) => {
    const {colors} = useTheme();
    return (
        <ThemeVariant isInverse={inverse}>
            <div
                style={{
                    background: inverse ? colors.backgroundBrand : colors.background,
                    padding: 16,
                }}
            >
                <SkeletonRectangle
                    height={height}
                    width={width}
                    ariaLabel={ariaLabel}
                    dataAttributes={{testid: 'skeleton-rectangle'}}
                />
            </div>
        </ThemeVariant>
    );
};

Default.storyName = 'Skeleton Rectangle';

Default.args = {
    height: 100,
    width: 100,
    inverse: false,
    ariaLabel: '',
};
