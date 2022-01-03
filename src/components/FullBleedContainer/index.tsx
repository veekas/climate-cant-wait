import { BackgroundImage, StyledFullBleedContainer } from "./styles";

interface Props {
  children: any;
}

const FullBleedContainer = ({ children }: Props) => (
  <StyledFullBleedContainer>
    <BackgroundImage src="/Craig-Fildes-capitol.jpeg" />
    {children}
  </StyledFullBleedContainer>
);

export default FullBleedContainer;
