import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {background, pink, primaryColor, textColor, textColor1, textColor2, textColor3, white} from '../../constants/colors'
import {ios} from '../../constants/device'
import { width } from '../../constants/dimensions';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:background,
    },
    mainContainer:{
        flex:1,
        backgroundColor:primaryColor,
    },
    headerWrapper:{
        width:width,
        backgroundColor:primaryColor,
        height:ios?200:150,
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 130,
        borderBottomEndRadius :130,
        overflow:'hidden'
    },
    headerChildren:{
        flex : 1,
        transform : [ { scaleX : 0.5 } ],
    },
    userImageWrapper:{
        height:36,
        width:36,
        borderRadius:36/2
    },
    
    headerContentWrapper:{
        padding:20,
        marginTop:ios?30:-20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerText:{
        color:white,
        fontSize:18
    },
    headerLeftText:{
        color:pink
    },
    subHeaderText:{
        color:textColor1,
        fontSize:13
    }
   
})