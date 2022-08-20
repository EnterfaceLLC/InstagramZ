import {StyleSheet} from "react-native";

//***THEME IMPORTS BELOW***//
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

//***STYLE SHEET CODE BELOW***//
export default StyleSheet.create({
  post: {},
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  headIcon: {
    marginLeft: 'auto',
    color: colors.black,
  },
  pic: {
    width: '100%',
    aspectRatio: 1,
  },
  foot: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 20,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
});
