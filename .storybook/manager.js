import { addons } from 'storybook/manager-api';
import electricTheme from './ElectricTheme';

addons.setConfig({
  theme: electricTheme,
});
