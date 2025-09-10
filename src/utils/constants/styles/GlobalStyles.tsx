import { StyleSheet } from "react-native";
import colors from "../colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    spacer: {
        flex: 1,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:6,
        gap:5
    },
    verticalContainer: {
        flexDirection: 'column',
    },
    horizontalLine:{
        width:'100%',
        height:2,
        backgroundColor:colors.BLUR_WHITE,
        marginTop:4,
    },
    boldTxt:{
        fontWeight:'700',
        fontSize:10,
        color:'white'
    },
    setSpacing:{
        justifyContent:'space-between',
        width:'90%'
    }
   
});
export default styles;  