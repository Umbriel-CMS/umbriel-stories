import type { Meta, StoryObj } from '@storybook/react'

import Typography from '.'
import Box from '../Boxes/Boxes'

const meta: Meta<typeof Typography> = {
  component: Typography
}

export default meta
type Story = StoryObj<typeof Typography>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    css: {
      color: 'background1'
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ bgColor: 'white' }}>
          <Story />
        </Box>
      )
    }
  ],
  render: () => <Typography>Olá!!!</Typography>
}
