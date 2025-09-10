import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: colors.BLUR_WHITE,
        height: 72,
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8
    },
    itemImage: {
        height: 34,
        width: 34,
    },
    itemSubContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 12,
        color: colors.DARK_BLUE,
        fontFamily: Fonts.MULISH_BOLD
    },
    subTitle: {
        fontSize: 10,
        fontWeight: '400',
        color: colors.DARK_BLUE,
        width:100,
    },
    itemTxt: {
        fontSize: 8,
        fontWeight: '400',
        color: colors.DARK_GREY,
        marginTop: 5,
        fontFamily: Fonts.MULISH_REGULAR
    },
    verticalContainer: {
        flexDirection: 'column',
        paddingLeft: 6,
        gap: 5
    },
    itemButtonContainer: {
        height: 14,
        width: 50,
        borderRadius: 12,
        backgroundColor: colors.THEME_BLUE,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:2,
        paddingHorizontal:10
    },
    itemBtnTitle: {
        fontSize: 8,
        fontWeight:'600',
        fontFamily: Fonts.MULISH_MEDIUM,
        color: 'white'
    }
});
export default styles;