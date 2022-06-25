import React from 'react'
import {LogBox} from 'react-native'
import MainStack from './app/navigation';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
export default function App() {
  return (
    <>
      <MainStack />
    </>
   
  )
}