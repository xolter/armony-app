import { FC } from 'react';
import './HomeCards.css';

const HomeCards: FC = () => {

  const imageUrl = 'https://cdn.shortpixel.ai/spai/w_870+q_lossy+ret_img+to_webp/https://mthoodpropainting.com/wp-content/uploads/2020/12/Paintbrushes-scaled.jpg';
  return (
    <div className='HomeCards'>
      <div className='HomeCard shadow-lg'>
          <img src={imageUrl} alt='test' />
          <h3>Matériaux</h3>
          <p>Planches d'idées pour vos choix matériaux et couleur. Des conseils pour les différents espaces à aménager.  Suivi d'un compte rendu détaillant mes solutions pas a pas.</p>
          <a href="/" className='homeCard-button'>En savoir plus</a>
      </div>
      <div className='HomeCard shadow-lg HomeCard-delay'>
          <img src={imageUrl} alt='test' />
          <h3>Réalisations</h3>
          <p>Planches d'idées pour vos choix matériaux et couleur. Des conseils pour les différents espaces à aménager.  Suivi d'un compte rendu détaillant mes solutions pas a pas.</p>
          <a href="/" className='homeCard-button'>En savoir plus</a>
      </div>
      <div className='HomeCard shadow-lg HomeCard-delay2'>
          <img src={imageUrl} alt='test' />
          <h3>Projets</h3>
          <p>Planches d'idées pour vos choix matériaux et couleur. Des conseils pour les différents espaces à aménager.  Suivi d'un compte rendu détaillant mes solutions pas a pas.</p>
          <a href="/"className='homeCard-button'>En savoir plus</a>
      </div>
    </div>
  );
}

export default HomeCards;