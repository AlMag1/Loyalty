import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HStack, VStack, Stack, Button } from 'native-base';

import { colors } from '../../variables';

const Tabs = ({ tabs, navigation }) => {
  const [selectedTab, setTab] = useState(2);
  const renderTabComponent = () => {
    const Component = tabs.find(t => t.index === selectedTab).Component;
    return <Component navigation={navigation} />;
  };

  return (
    <Stack alignItems="center" my="4">
      <HStack space={3}>
        {tabs.map((tab, index) => (
          <View
            key={index}
            style={
              tab.index === selectedTab
                ? { borderBottomWidth: 2, borderBottomColor: colors.blue }
                : {}
            }
          >
            <Button
              size="lg"
              _text={{
                fontSize: 16,
                color: tab.index === selectedTab ? colors.blue : colors.greyMid,
              }}
              variant="unstyled"
              onPress={() => setTab(tab.index)}
            >
              {tab.title}
            </Button>
          </View>
        ))}
      </HStack>
      <VStack my="4">{renderTabComponent()}</VStack>
    </Stack>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
