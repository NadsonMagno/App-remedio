import { useState } from 'react';
import { Tabs } from "expo-router";
import React from 'react';

export default function Layout() {
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      
      }}
    >
        <Tabs.Screen name='adicionar' options={{ tabBarLabel: 'Adicionar' }} />
        <Tabs.Screen name='lista' options={{ tabBarLabel: 'lista' }} />
      
    </Tabs>
  );
}


