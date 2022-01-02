import { FC, useEffect, useState } from 'react';
import Slide from './Slide';
import './Slider.css'

const Slider: FC = () => {

    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            if (currentImage === 2) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImage + 1);
            }
        }, 5000);
    }, [currentImage]);
    return (
        <div className="slider">
            <Slide imageUrl='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' title="Bienvenue !" subTitle="Tu lances un projet qui te tiens à coeur et tu souhaites attirer tes clients en ligne ?" isActive={currentImage === 0} currentIndex={0}/>
            <Slide imageUrl='https://mdbcdn.b-cdn.net/img/new/slides/042.webp' title="Youhou !" subTitle="Il faut croire en ses rêves, j'ai cru aux miens et cela a porté ses fruits !"isActive={currentImage === 1} currentIndex={1}/>
            <Slide imageUrl='https://mdbcdn.b-cdn.net/img/new/slides/043.webp' title="Trop bien !" subTitle="L'important c'est de ne jamais abandonner ! Je t'explique tout !"isActive={currentImage === 2} currentIndex={2}/>
        </div>
    );
}

export default Slider;