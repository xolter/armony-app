import { FC } from 'react';

interface IProps {
    galleryImage: {
        title: string
        imgUrl: string
    }
}

const HomeGalleryImage: FC<IProps>  = ({galleryImage}: IProps) => {
    return (
        <div className='HomeGalleryImage'>
            <img className='object-center h-full w-full object-cover' src={galleryImage.imgUrl} alt={galleryImage.title} />
        </div>
    );
};

export default HomeGalleryImage;