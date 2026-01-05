import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      description: 'The color of the button',
    },
    variant: {
      control: 'select',
      options: ['solid', 'liquid', 'gas'],
      description: 'The variant style of the button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'md',
    variant: 'solid',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
    color: 'primary',
    variant: 'solid',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
    color: 'primary',
    variant: 'solid',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
    color: 'primary',
    variant: 'solid',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm" color="primary">
        Small
      </Button>
      <Button size="md" color="primary">
        Medium
      </Button>
      <Button size="lg" color="primary">
        Large
      </Button>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="liquid">Liquid</Button>
      <Button variant="gas">Gas</Button>
    </div>
  ),
};

export const ColorVariantMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Primary */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '14px', fontWeight: 500 }}>Primary</span>
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="liquid">
          Liquid
        </Button>
        <Button color="primary" variant="gas">
          Gas
        </Button>
      </div>

      {/* Secondary */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '14px', fontWeight: 500 }}>Secondary</span>
        <Button color="secondary" variant="solid">
          Solid
        </Button>
        <Button color="secondary" variant="liquid">
          Liquid
        </Button>
        <Button color="secondary" variant="gas">
          Gas
        </Button>
      </div>

      {/* Success */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '14px', fontWeight: 500 }}>Success</span>
        <Button color="success" variant="solid">
          Solid
        </Button>
        <Button color="success" variant="liquid">
          Liquid
        </Button>
        <Button color="success" variant="gas">
          Gas
        </Button>
      </div>

      {/* Warning */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '14px', fontWeight: 500 }}>Warning</span>
        <Button color="warning" variant="solid">
          Solid
        </Button>
        <Button color="warning" variant="liquid">
          Liquid
        </Button>
        <Button color="warning" variant="gas">
          Gas
        </Button>
      </div>

      {/* Danger */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '14px', fontWeight: 500 }}>Danger</span>
        <Button color="danger" variant="solid">
          Solid
        </Button>
        <Button color="danger" variant="liquid">
          Liquid
        </Button>
        <Button color="danger" variant="gas">
          Gas
        </Button>
      </div>
    </div>
  ),
};

export const SizeVariantMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Small */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '60px', fontSize: '14px', fontWeight: 500 }}>Small</span>
        <Button size="sm" variant="solid">
          Solid
        </Button>
        <Button size="sm" variant="liquid">
          Liquid
        </Button>
        <Button size="sm" variant="gas">
          Gas
        </Button>
      </div>

      {/* Medium */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '60px', fontSize: '14px', fontWeight: 500 }}>Medium</span>
        <Button size="md" variant="solid">
          Solid
        </Button>
        <Button size="md" variant="liquid">
          Liquid
        </Button>
        <Button size="md" variant="gas">
          Gas
        </Button>
      </div>

      {/* Large */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ width: '60px', fontSize: '14px', fontWeight: 500 }}>Large</span>
        <Button size="lg" variant="solid">
          Solid
        </Button>
        <Button size="lg" variant="liquid">
          Liquid
        </Button>
        <Button size="lg" variant="gas">
          Gas
        </Button>
      </div>
    </div>
  ),
};
