import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
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
    headerLeftSub: {
        // alignItems: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    headerRightSub: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    logo: {
        height: 32,
        width: 34
    },
    headerTitle: {
        fontSize: 10,
        fontWeight: '500',
        color: colors.DARK_GREY,
        width: 92,
        fontFamily: Fonts.MULISH_MEDIUM
    },
    btnLogo: {
        height: 22,
        width: 22,
    },
    headerBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 33,
        width: 90,
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderColor: colors.DARK_BLUE,
        borderRadius: 8,
        gap: 4
    },
    roundedCircle: {
        height: 16,
        width: 16,
        borderRadius: 30,
        backgroundColor: colors.GREEN
    },
    btnTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.DARK_BLUE,
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
    dropDownBtn: {
        flexDirection:'row',
        height: 35,
        width: 113,
        borderRadius: 6,
        paddingVertical:6,
        paddingHorizontal:8,
        borderWidth:1,
        borderColor:colors.DARK_BLUE,
        alignItems:'center',
        justifyContent:'center',
    },
    dropdownTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.DARK_BLUE,
        fontFamily: Fonts.MULISH_REGULAR
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