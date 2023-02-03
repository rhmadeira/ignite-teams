import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  border-radius: 8px;
  padding: 14px;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;