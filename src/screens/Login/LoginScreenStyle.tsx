import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
const styles = StyleSheet.create({
    subTopContainer: {
        alignItems: 'center',
        backgroundColor: '#253859',
        paddingTop: 80
    },
    logoContainer: {
        height: 70,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 50,
        width: 50
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 8
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        paddingHorizontal: 40,
        textAlign: 'center',
        textAlignVertical: "auto",
    },
    subBottomContainer:{
        flexDirection: 'column',
    },
    contentContainer: {
        flexDirection: 'row',
        paddingHorizontal: 35
    },
    descrptnContainer: {
        borderRadius: 12,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: 'rgba(96,118,153,0.2)',
        paddingVertical: 15,
        width: 310,
        textAlignVertical: 'top',
        marginHorizontal: 10
    },
    pageDotContainer:{
        flexDirection:'row',
        gap:8,
        marginVertical:10
    },
    activeDot: {
        height: 8,
        width: 8,
        backgroundColor:'white',
        borderRadius:100,
    },
    inActiveDot:{
        height: 8,
        width: 8,
        backgroundColor: 'rgba(96,118,153,0.2)',
        borderRadius:100,
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:24,
        backgroundColor:'#FFA634',
        height:50,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:16,

    },
    btnTxt:{
        fontSize: 20,
        fontWeight: '700',
        color:colors.DARK_BLUE
    },
    bgImage:{
        height:35,
        width:'88%',
        marginTop:12,
        alignSelf:'center'
    },
    formContainer:{
        flexDirection:'column',
        width:'100%',
        paddingHorizontal:16
    },
    input:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'rgba(96, 118, 153, 0.5)',
        paddingVertical:10,
        borderRadius:8,
        marginVertical:8,
        paddingHorizontal:16,
        color:colors.GREY
        
    },
    btnTitle:{
        fontSize: 20,
        fontWeight: '700',
        color:'white'
    },
    bottomBtn:{
        marginTop:24,
        backgroundColor:'#253859',
        height:50,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
    }
});
export default styles;