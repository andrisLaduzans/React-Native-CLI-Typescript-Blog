import React from 'react';

import {storiesOf} from '@storybook/react-native';
import Welcome from './Welcome/Welcome';
import {Login, Home} from '@views';
import {Btn} from '@components';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('Views', module)
  .add('Login', () => <Login />)
  .add('Home', () => <Home />);

storiesOf('Components', module).add('basic button', () => <Btn />);
