import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { Preset } from '@primeng/themes/types';

export const ChmurKotyPreset: Preset<object> = definePreset(Aura, {
  semantic: {
    primary: {
      0: '#ffffff',
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
  },
});
