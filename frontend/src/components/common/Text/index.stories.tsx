import { Meta, StoryObj } from '@storybook/react';
import Text from './index';

const meta = {
  title: 'components/common/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge',
      ],
      control: { type: 'select' },
      description: 'Text 변형',
      table: {
        type: {
          summary: 'TextVariant',
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    children: {
      control: { type: 'text' },
      description: '텍스트',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      description: '폰트 두께',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      description: '라인 높이',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

const Template = (args: Story['args']) => <Text {...args} />;

const longText = `컴포넌트 구조 설계 시 명확한 기준이 없습니다. 팀원들 각자가 생각하는 의미있는 기준으로 컴포넌트를 나눕니다. 성격이 비슷한 컴포넌트 끼리 묶어서 아래 이미지와 같이 페이지를 여러가지 방법으로 표현할 수 있습니다.
하지만 제각각인 규칙으로 인해 관심사가 너무 많거나 재사용이나 확장할 수 없는 컴포넌트가 생기는 문제가 있습니다. 기준이 없으므로 구조에 대한 코드 리뷰를 하기 어렵습니다. 이에 따라 좋은 구조를 가진 컴포넌트를 만들기 어려운 문제가 있습니다.
  `;
export const ExtraSmall: Story = {
  args: {
    variant: 'extraSmall',
    children: longText,
  },
};
