/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, Text} from 'react-native';

//***COMPONENT IMPORTS BELOW***//
import {IComment} from '../../types/models';

//***THEME IMPORTS BELOW***//
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

//***ICON IMPORTS BELOW***//
import AntDesign from 'react-native-vector-icons/AntDesign';

//***INTERFACE CODE BELOW***//
interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comments}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    color: colors.black,
    lineHeight: 20,
  },
})

export default Comment;
