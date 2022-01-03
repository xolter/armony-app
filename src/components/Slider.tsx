import { FC, useEffect, useState } from 'react';
import Slide from './Slide';
import './Slider.css'

const Slider: FC = () => {

    const [currentImage, setCurrentImage] = useState<number>(0);
    //const [isTransitioning, setTransitioning] = useState<boolean>(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        /*setCurrentImage(index);
        setTransitioning(true);
        console.log("handleClick : " + index);*/
    } 

    useEffect(() => {
        //console.log("current : " + currentImage + " isTransitioning : " + isTransitioning);
        setTimeout(() => {
            /*if (isTransitioning) {
                setTransitioning(false);
                setCurrentImage(currentImage);
                console.log("setTransitioning : " + isTransitioning);
            }
            else */if (currentImage === 2) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImage + 1);
            }
        }, 5000);
    }, [currentImage]);
    return (
        <div className="slider">
            <Slide imageUrl='https://mdbcdn.b-cdn.net/img/new/slides/032.webp' title="Bienvenue !" subTitle="Tu lances un projet qui te tiens à coeur et tu souhaites attirer tes clients en ligne ?" isActive={currentImage === 0} currentIndex={0} handleClick={handleClick}/>
            <Slide imageUrl='https://mdbcdn.b-cdn.net/img/new/slides/036.webp' title="Youhou !" subTitle="Il faut croire en ses rêves, j'ai cru aux miens et cela a porté ses fruits !"isActive={currentImage === 1} currentIndex={1} handleClick={handleClick}/>
            <Slide imageUrl='https://mdbcdn.b-cdn.net/img/new/slides/043.webp' title="Trop bien !" subTitle="L'important c'est de ne jamais abandonner ! Je t'explique tout !"isActive={currentImage === 2} currentIndex={2} handleClick={handleClick}/>
        </div>
    );
}

export default Slider;