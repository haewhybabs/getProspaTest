import { View, Text,StatusBar,Pressable } from 'react-native'
import React from 'react'
import { fadePink, fadePurple, lightPurple, primaryColor, white } from '../../constants/colors'
import Texts from '../../components/Texts';
import styles from './styles'
import Path from '../../assets/svgs/Path.svg'

export default function Account({navigation,route}) {
  const item =route.params?.item;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <View style={styles.headerWrapper}>
        <View style={styles.headerChildren}>
          <View style={styles.headerContentWrapper}>
            <Pressable onPress={()=>navigation.goBack()}>
              <Path />
            </Pressable>
            
            <View>
              <Texts bold style={styles.headerText}>{item.id===1?'Current Account':item.header}</Texts>
              <Texts style={styles.subHeaderText}>{item.subText}</Texts>
            </View>
            <Texts bold style={styles.headerLeftText}>Options</Texts>
          </View>
        </View>
      </View>
    </View>
  )
}