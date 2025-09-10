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
        backgroundColor: 'white',
        marginBottom: 14,
        justifyContent: 'space-between'
    },
    headerSub: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap:10
    },
    headerIcon: {
        height: 16,
        width: 16,
    },
    headerTitle: {
        fontFamily: Fonts.MULISH_MEDIUM,
        fontSize: 14,
        color: colors.DARK_BLUE
    },
    iconSize: {
        height: 44,
        width: 44
    },
    verticalContainer: {
        flexDirection: 'column',

    },
    title: {
        fontFamily: Fonts.MULISH_BOLD,
        fontSize: 14,
        fontWeight:"bold",
        color: colors.DARK_BLUE
    },
    subTitle: {
        fontFamily: Fonts.MULISH_MEDIUM,
        fontSize: 14,
        color: colors.DARK_GREY,
        fontWeight:'500'
    },
    subContainer:{
        flexDirection:'column',
        paddingHorizontal:24,
        gap:10
    },
    horizontalContainer:{
        flexDirection:'row',
        gap:10
    },
    regularTxt:{
        fontFamily:Fonts.MULISH_REGULAR,
        fontSize:16,
        color:colors.DARK_GREY,
        fontWeight:'400'
    }
});
export default styles;