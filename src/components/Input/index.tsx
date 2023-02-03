import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  const theme = useTheme();

  return <Container placeholderTextColor={theme.COLORS.WHITE} {...rest} />;
}
