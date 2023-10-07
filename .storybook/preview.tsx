import type { Preview } from "@storybook/react";
import { Box } from '@mui/material'
import React from "react";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (StoryComponent) => (
            <Box sx={{
                width: '800px',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <StoryComponent />
            </Box>
        )
    ]
};

export default preview;
