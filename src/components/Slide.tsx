import { FC } from 'react';

interface IProps {
    title: string
    subTitle: string
    imageUrl: string
    isActive: boolean
    currentIndex: number
}

const Slide: FC<IProps> = ({title, subTitle, imageUrl, isActive, currentIndex}: IProps) => {
    return (
        <div className={isActive ? 'slider-item active' : 'slider-item'}>
            
            <img src={imageUrl} className='slider-image'/>
            <div className='slide-item-wrap'>
                <div className='slide-item-content'>
                    <h2 className='slide-title'>{title}</h2>
                    <h4 className='slide-text'>{subTitle}</h4>
                    <a className='slide-button'>C'est parti !</a>
                </div>
                <div className="slide-index-button absolute bottom-0 flex p-0 mb-4">
                    <button type='button' className={currentIndex === 0 ? 'active' : ''}>•</button>
                    <button type='button' className={currentIndex === 1 ? 'active' : ''}>•</button>
                    <button type='button' className={currentIndex === 2 ? 'active' : ''}>•</button>
                </div>
            </div>
        </div> 
    );
}

export default Slide;