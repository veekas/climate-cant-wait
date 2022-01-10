import { BackgroundImage, StyledFullBleedContainer } from "./styles";

interface Props {
  children: any;
  backgroundImage?: string;
  backgroundColor?: string;
}

const FullBleedContainer = ({
  children,
  backgroundImage,
  backgroundColor,
}: Props) => (
  <StyledFullBleedContainer backgroundColor={backgroundColor}>
    <BackgroundImage src={backgroundImage} />
    {children}
  </StyledFullBleedContainer>
);

export default FullBleedContainer;
