import { ThreeCircles } from 'react-loader-spinner';
import { Backdrop, LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <LoaderBox>
        <ThreeCircles
          height="100"
          width="100"
          color="#3f51b5"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#f08b08"
          innerCircleColor="#113583"
          middleCircleColor="#f5e1c7"
        />
      </LoaderBox>
    </Backdrop>
  );
};
