import {TextStyle} from "react-native";

const size = {
  caption: 10,
  sm: 12,
  reg: 14,
  md: 18,
  lg: 22, 
  subtitle: 26,
  title: 30, 
  head: 36,
  xl: 40, 
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  norm: 'normal',
  thin: '400',
  semi: '600',
  full: '900',
  bold: 'bold',
};

export default {size, weight};