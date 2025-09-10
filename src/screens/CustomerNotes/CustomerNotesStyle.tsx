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
        borderColor: colors.GREY,
        height: 50,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom:14
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
    btnLogo: {
        height: 22,
        width: 22,
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
    roundedCircle: {
        height: 16,
        width: 16,
        borderRadius: 30,
        backgroundColor: colors.GREEN
    },
    btnTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        fontFamily:Fonts.MULISH_BOLD
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingHorizontal: 16
    },
    listHeaderTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.DARK_BLUE,
        fontFamily: Fonts.MULISH_BOLD
    },
    icon: {
        height: 14,
        width: 14
    },
    listHeaderBtn: {
        flexDirection:'row',
        height: 30,
        width:106,
        borderRadius: 4,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.YELLOW,
        padding:8
    },
    listBtnTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.DARK_BLUE,
        fontFamily: Fonts.MULISH_BOLD
    },
    searchBar: {
        flexDirection: 'row',
        height: 30,
        paddingVertical: 4,
        paddingHorizontal:4,
        borderRadius: 30,
        borderColor: colors.BLUR_WHITE,
        borderWidth: 2,
        marginHorizontal: 14,
        alignItems: 'center',
        marginTop:8,
        marginBottom:12
    },
    input: {
        height: 30, 
        paddingVertical: 3,
        paddingHorizontal:10,
        width:'95%'
    }
  
});
export default styles;