import { Dimensions, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import GlobalStyles from '../../utils/constants/styles/GlobalStyles';
import styles from './LoginScreenStyle';
import images from '../../utils/constants/Images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import LoadingCompnent from '../../components/Loading/LoadingCompnent';
import colors from '../../utils/constants/colors';
const LoginScreen = ({ navigation }:any) => {
  const data = [1, 2, 3]
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);
  const { width } = Dimensions.get('window')
  const handleScroll = (event: any) => {
  const offsetX = event.nativeEvent.contentOffset.x;
  const page = Math.round(offsetX / width);
  setCurrentPage(page);
};
  // const[isLoading,setIsLoading] = useState(false);
  const[isKeyboardVisible,setKeyboardVisible] = useState(false);
  const handleLogin = () => {
    // setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    navigation.navigate('Notes');
    // }, 3000); 
  };
    useEffect(() => {
      
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <KeyboardAwareScrollView
      scrollEnabled={isKeyboardVisible}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
    >
    <View style={[GlobalStyles.container,{paddingBottom:20}]}>
      <View style={styles.subTopContainer}>
        <View style={styles.logoContainer}>
          <Image source={images.DOROASLOGO} style={styles.logo} />
        </View>
        <Text style={styles.title}>Efficiency Delivered, Direct to You</Text>
        <Text style={styles.subTitle}>A leading natural and beverage company offering distribution, HPP tolling, direct-to-consumer fulfillment, and third party logistics</Text>
        <View style={styles.contentContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {data.map((item, index) => (
              <View key={index} style={styles.descrptnContainer}>
                <Text style={styles.title}>3PL (THIRD PARTY LOGISTICS)</Text>
                <Text style={styles.subTitle}>
                  Dora’s offers a full suite of 3PL solutions for your business. Let us handle everything from cold storage warehousing to cross-dock services, order picking and final mile or direct store deliveries.
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.pageDotContainer}>
          {data.map((item, index) => (
            <View key={index} style={[styles.inActiveDot, currentPage == index ? styles.activeDot : styles.inActiveDot]}>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.subBottomContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.btnTxt}>Login With Netsuite</Text>
        </TouchableOpacity>
        <Image source={images.OR_BG} style={styles.bgImage} />
        <View style={styles.formContainer}>
          <Text>Email Address*</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.GREY} placeholder='you@yourcompany.com' keyboardType="email-address" />
          <Text>Password*</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.GREY} placeholder='At least 8 character + one special character' keyboardType="email-address" />
          <TouchableOpacity style={styles.bottomBtn} onPress={handleLogin}>
            <Text style={styles.btnTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    {/* <LoadingCompnent visible={isLoading} progress={0.65}/> */}
    </KeyboardAwareScrollView>
  );
};
export default LoginScreen;