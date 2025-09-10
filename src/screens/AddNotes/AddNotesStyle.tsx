import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
// import colors from "../../utils/constants/colors";
const styles = StyleSheet.create({
   container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        borderWidth: 1,
       borderColor:colors.BLUR_WHITE,
       alignItems:'center',
       paddingHorizontal:14,
       justifyContent:'space-between',
       height:50
    },
    headerLeftSub:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    icon:{
        height:24,
        width:24,
    },
    headerSub: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    logo: {
        height: 32,
        width: 34
    },
     headerBtn: {
       flexDirection:'row',
        height: 30,
        width:78,
        borderRadius: 4,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.THEME_BLUE,
        paddingVertical:7,
        paddingHorizontal:14
    },
    btnLogo: {
        height: 22,
        width: 22,
    },
    btnTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        fontFamily:Fonts.MULISH_BOLD
    },
    formContainer:{
        flexDirection:'column',
        marginTop:12,
        paddingHorizontal:16,
    },
    title:{
        fontSize:12,
        fontFamily:Fonts.MULISH_MEDIUM,
        color:colors.DARK_BLUE,
        fontWeight:'500',
        marginVertical:10
    },
    placeholder:{
        fontSize:14,
        fontFamily:Fonts.MULISH_MEDIUM,
        color:colors.BLUR_GREY,
        fontWeight:'500',
    },
    dropDownField:{
        flexDirection:'row',
        height:50,
        borderRadius:4,
        borderColor:colors.BLUR_GREY,
        borderWidth:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:8,
    },
    dropDownIcon:{
        height:7,
        width:14,
    },
    bottomField:{
         flexDirection:'row',
        height:150,
        borderRadius:4,
        borderColor:colors.BLUR_GREY,
        borderWidth:1,
        justifyContent:'space-between',
        paddingHorizontal:12,
        paddingVertical:8
    },
    btnTxt:{
        fontSize:16,
        fontFamily:Fonts.MULISH_SEMIBOLD,
        color:colors.BLUR_GREY,
        fontWeight:'600',
    },
    buttonContainer:{
        height:50,
        backgroundColor:colors.DARK_BLUE,
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:40
    },
   fixedSize:{
    justifyContent:"center",
    alignSelf:"flex-end",
    alignItems:"center",
    height:40,
    width:106,
    borderRadius:4,
    backgroundColor:colors.THEME_BLUE,
    marginTop:20,
   },
  
});
export default styles;