import 'regenerator-runtime/runtime';
import { reactWidget } from 'reactR';
import IntroScreen from './IntroScreen.js';

// Widgets
reactWidget('intro_screen', 'output', {
  IntroductionScreen: IntroScreen
});
