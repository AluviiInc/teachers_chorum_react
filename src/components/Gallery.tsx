import "./Gallery.css";
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';
import Img5 from '../assets/img5.jpg';
import Img6 from '../assets/img6.jpg';
import Img7 from '../assets/img7.jpg';


const Gallery = () => {
  const data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
  ];

  return (

    <div>
    <div className="gallery">
      {data.map((item, index) => {
        return (
          <div className="pics" key={index}>
            <img src={item.imgSrc} style={{width: '100%'}} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Gallery;
