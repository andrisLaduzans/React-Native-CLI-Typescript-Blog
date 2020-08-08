import React from 'react';

import {storiesOf} from '@storybook/react-native';
import Login from '../../src/views/login/Login';
import Home from '../../src/views/home/Home';
import Btn from '../../src/components/buttons/Btn';
import Welcome from './Welcome/Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('Views', module)
  .add('Login', () => <Login />)
  .add('Home', () => <Home />);

storiesOf('Components', module).add('basic button', () => <Btn />);
