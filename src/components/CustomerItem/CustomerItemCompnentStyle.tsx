import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
const styles = StyleSheet.create({
  roundedContainer: {
    borderWidth: 2,
    borderColor: colors.GREY,
    borderRadius: 8,
    width: 178,
    height: 239,
    padding: 6
  },
  itemImage: {
    height: 120,
    width: 166,
    marginBottom: 6
  },
  itemIcon: {
    height: 12,
    width: 12
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.DARK_BLUE
  },
  itemSubTitle: {
    fontSize: 8,
    fontWeight: '500',
    color: colors.DARK_GREY
  },
  title: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.DARK_GREY
  },
  subTitle: {
    fontSize: 8,
    fontWeight: '500',
    color: colors.YELLOW
  },
  bottomContainer:{
    flexDirection:'row',
    gap:3,
    marginTop:5
  },
  iconContainer:{
    height:30,
    width:30,
    borderRadius:8,
    backgroundColor:colors.GREEN,
    alignItems:'center',
    justifyContent:'center'
  },
buttonContainer:{
    height:30,
    width:132,
    borderRadius:8,
    backgroundColor:colors.DARK_BLUE,
    alignItems:'center',
    justifyContent:'center'
  },
  row:{
    gap:9,
    marginBottom:9
  }
  
});
export default styles;