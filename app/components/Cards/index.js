import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import Texts from '../Texts';
import { formatMoney } from '../../constants/functions';  
export default function Card({header,subText,amount,leftIcon,leftIconBackground}) {
    return (
        <View style={styles.cardCover}>
            <View style={styles.cardContentWrapper}>
                <View>
                    <Texts bold style={styles.headerText}>{header}</Texts>
                    <Texts bold style={styles.subText}>{subText}</Texts>
                    <Text style={styles.amountText}>{formatMoney(amount)}</Text>
                </View>
                <View style={{...styles.iconWrapper,backgroundColor:leftIconBackground}}>
                    {leftIcon}
                </View>
            </View>
        </View>
    )
}