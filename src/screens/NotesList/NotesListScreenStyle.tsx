import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.GREY,
        height: 60,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'white',
        position: 'absolute',
        width:'100%'
    },
    headerLeftSub: {
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
        color: colors.GREY,
        width: 70
    },
    btnLogo: {
        height: 22,
        width: 22,
    },
    headerBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 35,
        width: 90,
        borderWidth: 1,
        padding: 4,
        borderColor: colors.DARK_BLUE,
        borderRadius: 8,
        gap: 8
    },
    roundedCircle: {
        height: 18,
        width: 18,
        borderRadius: 30,
        backgroundColor: colors.GREEN
    },
    btnTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.DARK_BLUE,
    },
    headerOverlay: {
        flexDirection: 'row',
        borderRadius: 8,
        position: 'absolute',
        zIndex: 2,
        left: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        top:0,
        right:16,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: 150,
        height: 40,
        marginLeft:16,
        borderRadius: 4,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    dragIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -11
    },
    roundedBtn: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: colors.YELLOW,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4
    },
    dragIcon: {
        height: 12,
        width: 14,
    },
    horizontalLine: {
        height: 40,
        width: 1,
        backgroundColor: colors.BLUR_WHITE,
        marginHorizontal: 16
    },
    expandBtn: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 44,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    // icon: {
    //     height: 20,
    //     width: 20
    // },
    // overlayContainer: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: 'rgba(255,255,255,0.4)'
    // },
    bottomContainer: {
        position: 'absolute',
        height: '50%',
        left: 0,
        right: 0,
        backgroundColor: "white",
        paddingHorizontal:14,
        bottom: 0
    },
    mapStyle: {
        height: '100%',
    },
    listHeader: {
        flexDirection: 'row',
        marginVertical:14,
        alignItems:'baseline'
    },
    listHeaderTitle:{
         fontSize: 16,
        fontWeight: '700',
        color: colors.DARK_BLUE,
    },
    dropdownBtn:{
        flexDirection:'row',
        height:40,
        borderRadius:8,
        width:130,
        borderWidth:2,
        borderColor:colors.DARK_GREY,
        alignItems:'center',
        paddingHorizontal:12,
        justifyContent:'space-between',
        gap:2
    },
    icon:{
        height:16,
        width:16
    },
    dropdownTitle:{
        fontSize:14,
        fontWeight:'600',
        color:colors.DARK_GREY,
    }
});
export default styles;