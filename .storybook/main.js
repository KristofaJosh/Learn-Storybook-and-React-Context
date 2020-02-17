module.exports = {
    stories: ['../src/**/*.stories.[tj]s',],
    addons: ['@storybook/addon-viewport/register',
            '@storybook/addon-a11y/register',
            '@storybook/addon-actions/register',
            '@storybook/addon-storysource',
            '@storybook/addon-knobs/register'],
  };
  