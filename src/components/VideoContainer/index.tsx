import { Container } from "./styles";

interface Props {
  children: any;
}

const VideoContainer = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default VideoContainer;
