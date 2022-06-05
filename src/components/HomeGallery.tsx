import { FC, useState, useEffect } from 'react';
import './HomeGallery.css';
import HomeGalleryImage from './HomeGalleryImage'
import mosaique_1 from '../images/mosaique_1.jpg';
import mosaique_2 from '../images/mosaique_2.jpg';

export interface TGalleryImage {
  gallery: 
    {
      title: string
      imgUrl: string
    }[]
}

const HomeGallery: FC = () => {
  const [gallery, setGallery] = useState<TGalleryImage["gallery"]>();

  useEffect(() => {
    /*async function fetchGallery() {
      const result = await getGallery();
      console.log(result);
      setPosts(result.posts);
    }
    fetchGallery();*/

    const testGallery = [
      { title:'test', imgUrl:mosaique_1 },
      { title:'test2', imgUrl:mosaique_2 },
      { title:'test3', imgUrl:mosaique_1 },
      { title:'test4', imgUrl:mosaique_2 },
      { title:'tes5', imgUrl:mosaique_1 },
      { title:'test6', imgUrl:mosaique_2 },
      { title:'test7', imgUrl:mosaique_1 },
      { title:'test8', imgUrl:mosaique_2 },
      
    ]
    setGallery(testGallery)
  }, []);

  return (
    <div className='HomeGallery'>
      <div className='HomeGalleryGrid'>
        {gallery && gallery.map((galleryImage) => <HomeGalleryImage galleryImage={galleryImage} key={galleryImage.title}/>)}     
      </div>
    </div>
  );
}

export default HomeGallery;