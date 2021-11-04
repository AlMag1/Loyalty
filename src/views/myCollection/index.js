import React from 'react';
import tabs from './tabs';
import { Tabs } from '../../components';

const MyCollection = ({ navigation }) => {
  return <Tabs tabs={tabs} navigation={navigation} />;
};

export default MyCollection;
