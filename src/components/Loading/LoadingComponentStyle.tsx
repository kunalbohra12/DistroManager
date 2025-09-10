import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
const styles = StyleSheet.create({
modalContainer:{
    flex:1,
     backgroundColor: colors.DARK_BLUE,
     opacity:0.9,
     justifyContent:'center',
     alignItems:'center'
} ,
centerContainer:{
    height:80,
    width:80,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.4)'
},
logo:{
    height:50,
    width:50
},
title:{
    fontSize:20,
    color:'white',
    fontWeight:'600',
    marginTop:10
},
 bottomLoader: {
    position: 'absolute',
    bottom: 50,
    height: 50,
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 30,
    padding: 8,
    marginBottom: 10,
    left: 16,
    right: 16,
    justifyContent: 'center',
    alignItems: 'flex-start', // to align progress bar to the left
  },
  bottomSub: {
    height: 30,
    backgroundColor: '#2979FF',
    borderRadius: 30,
  },
});
export default styles;