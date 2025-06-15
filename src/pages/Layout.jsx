import Container from '../02_layout/container';
import FlexBox from '../02_layout/flextbox';
import Grid from '../02_layout/grid';
import Position from '../02_layout/position';
import Sticky from '../02_layout/Position_Sticky';
export default function Layout() {
  return (
    <>
      <Sticky />
      <Container />
      <FlexBox />
      <Grid />
      <Position />
    </>
  );
}
