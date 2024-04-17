import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
  return (
    <TextInput style={styles.container} ref={inputRef} placeholderTextColor="#7A7A80" {...rest} />
  );
}
