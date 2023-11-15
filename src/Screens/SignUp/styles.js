
import {
    StyleSheet,
  } from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../assets/styles/colors';

  
const styles = StyleSheet.create({
    btnStyle: {
      borderRadius: moderateScale(25),
      height: moderateScale(50),
      backgroundColor: colors.blue,
      marginHorizontal:24
    },
    textStyle: {
      color: colors.white,
    },
  });

 export default styles