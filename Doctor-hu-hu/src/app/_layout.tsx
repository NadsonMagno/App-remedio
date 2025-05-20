import { useState } from 'react';
import { Stack } from "expo-router";
import React from 'react';

export default function Layout() {
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      
      }}
    />
       
      
  
  );
}


