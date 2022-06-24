import { View, Text,Image,ImageBackground,StatusBar,ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import MoreInfo from '../../assets/svgs/moreInfo.svg'
import { fadePink, fadePurple, lightPurple, primaryColor, white } from '../../constants/colors'
import Texts from '../../components/Texts';
import { getDateDetails } from '../../constants/functions'
import Card from '../../components/Cards'
import CurrentAccount from '../../assets/svgs/currentAccount.svg'
import SavingAccount from '../../assets/svgs/savingAccount.svg'
import TaxAccount from '../../assets/svgs/taxAccount.svg'
import CloseIcon from '../../assets/svgs/close.svg'
import Footer from '../../components/Footer'
let date = getDateDetails()
export default function Home({navigation}) {
  const [showDashboard,setShowDashboard] = React.useState(false);
  const updateHeight = (e) =>{
    if (e.nativeEvent.contentOffset.y > 40) {
      setShowDashboard(true);
    } else {
      setShowDashboard(false);
    }

  }
  const handleNavigation = (item)=>{
    navigation.navigate('Account',{item})
  }
  const cardItems = [
    {
      id:1,
      header:'PROSPA CURRENT ACCOUNT',
      subText: '00-00-00-00-00-00',
      amount:5234.96,
      leftIcon:<CurrentAccount />,
      leftIconBackground:fadePink

    },
    {
      id:2,
      header:'SAVINGS',
      subText:'00-00-00-00-00-00',
      amount:3234.43,
      leftIcon:<SavingAccount />,
      leftIconBackground:fadePurple
    },
    {
      id:3,
      header:'TAX ACCOUNT',
      subText:'00-00-00-00-00-00',
      amount:10234,
      leftIcon:<TaxAccount />,
      leftIconBackground:lightPurple
    }
  ]
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <View style={styles.header}>
        <Texts bold style={{...styles.headerText,color:showDashboard?white:primaryColor}}>Dashboard</Texts>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollsToTop
        onScroll={updateHeight}
      >
        <View style={styles.container}>
          <View style={styles.headerWrapper}>
            <View style={styles.headerChildren}>
              <View style={styles.headerContentWrapper}>
                <MoreInfo />
                <Image source={require('../../assets/images/Oval.png')} style={styles.userImageWrapper}/>
                
              </View>
              <View style={styles.textHeaderContainer}>
                <Texts bold style={styles.dateText}>{date.weekday}, {date.day} {date.month}</Texts>
                <Texts bold style={styles.welcomeText}>Welcome Back,</Texts>
                <Texts bold style={styles.nameText}>Ayobami!</Texts>
              </View>
            </View>
          </View>
          <View style={styles.cardWrapper}>
            {
              cardItems.map((item,index)=>(
                <Card 
                header={item.header}
                subText={item.subText}
                amount={item.amount}
                leftIcon={item.leftIcon}
                leftIconBackground={item.leftIconBackground}
                key={index}
                onPress={()=>handleNavigation(item)}
                />
              ))
            }
          </View>
          <View>
            <ImageBackground source={require('../../assets/images/group8.png')} style={styles.cardCover}>
              <View style={styles.cardContent}>
                <View style={styles.cardTextWrapper}>
                  <View>
                    <Texts bold style={styles.cardHeaderText}>Get your contact less card</Texts>
                    <Texts style={styles.cardText}>use it to push new service on the app</Texts>
                  </View>
                  <View style={styles.closeCover}>
                    <CloseIcon />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}