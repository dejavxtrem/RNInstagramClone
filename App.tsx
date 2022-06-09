import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from './src/theme/colors'
import  font from './src/fonts/fonts'
import { Entypo } from '@expo/vector-icons'; 
import fonts from './src/fonts/fonts';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const App = () => {
  return (
    <View style={styles.post}>
      {/*Header */}
       <View style={styles.header}>

      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}}
        style={styles.userAvatar}
      />
      <Text style={styles.userName}> Vadimnotjustdev</Text>

      <Entypo name="dots-three-horizontal" size={24}  style={styles.threeDots}  />

       </View>


      { /*Content */}
    <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
          style={styles.image}
    />


      { /*Footer */}
      <View style={styles.footer}>

      <View style={styles.iconContainer}>
      <AntDesign name="hearto" size={24}   style={styles.icon} color={colors.black}/>

      <Ionicons name="chatbubble-outline" size={24}  style={styles.icon} color={colors.black} />

      <Feather name="send" size={24}   style={styles.icon} color={colors.black}/>

      <Feather name="bookmark" size={24}   style={{marginLeft: 'auto'}} color={colors.black}/>

      </View>

      {/* Likes */}
      <Text style={styles.text}> Liked by{' '}
      <Text style={styles.bold}>lgrinevicius </Text> and{' '}
      <Text  style={styles.bold}>66 others </Text>
      </Text>

      {/* Post description */}
      <Text style={styles.text} >
        <Text style={styles.bold}> Vadimnotjustdev </Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      </Text>

       {/* comments */}
       <Text style={{color: colors.lightgray}}>View all 16 comments</Text>
       <View style={styles.comment}>
       <Text style={styles.commentText} >
        <Text style={styles.bold}> Vadimnotjustdev </Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      </Text>

      <AntDesign name="hearto" size={16}   style={styles.icon} color={colors.black}/>
       </View>
   
    {/* Posted date*/}

        <Text>19 December , 2021</Text>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  post: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
   image: {
    width: '100%',
    aspectRatio: 1,
   },
   header: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    marginTop: 25
   },
   userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
   },
   userName: {
    fontWeight: font.weight.bold,
    color: colors.black
   },
   threeDots: {
   
    marginLeft: 'auto'
   },
   iconContainer: {
    flexDirection: 'row',
    marginBottom: 5
   }, 
   icon: {
    marginHorizontal: 5
   },
   footer: {
    padding: 10
   },
   text: {
     color: colors.black,
     lineHeight: 18
     
   },
   bold: {
    fontWeight: font.weight.bold
   },
   comment: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   commentText: {
     color: colors.black,
     flex: 1,
     lineHeight: 18
   }
})

export default App


