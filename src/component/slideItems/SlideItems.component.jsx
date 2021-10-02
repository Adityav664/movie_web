import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import { useHistory} from "react-router-dom";

function Imgdetail(data) {
  var img = [];
  for (let i = 0; i < 20; i++) {
    img.push(`https://image.tmdb.org/t/p/original/${data.images[i].poster_path}`);
  }
  return img;
}
const responsive = {
  desktop: {  
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const SlideItems = (props) => {
  let history = useHistory();
  var img = Imgdetail(props);
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={true}
      infinite ={false }
      itemClass=""
      keyBoardControl="true"
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      responsive={responsive}
      swipeable>
        {img.slice(0, 20).map((image,index) => {
        return (
          <Image
            className="imgslide"
            draggable={false}
            onClick={()=>{history.push({
              pathname:'/movie',
              state:props.images[index],
            })}}
            style={{ width: "350px",height:"400px"}}
            src={image}
          />
        );
      })}
      </Carousel>
  );
}
export default SlideItems;
