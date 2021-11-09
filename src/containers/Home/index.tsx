import './Home.css';
import catimage from '../../assets/images/gato.jpg';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import Image, { IImage } from '../../components/Image';
import { Fragment } from 'react';

const Home = () => {
  const projects: IImage[] = [
    { src: catimage, alt: 'Proyecto de gatos' },
    { src: catimage, alt: 'Proyecto de gatos' },
    { src: catimage, alt: 'Proyecto de gatos' },
    { src: catimage, alt: 'Proyecto de gatos' },
    { src: catimage, alt: 'Proyecto de gatos' },
    { src: catimage, alt: 'Proyecto de gatos' },
  ];

  return (
    <Fragment>
      <div className="items-center antialiased m-8 lg:m-12">
        <h2 className="max-w-7xl lg:font-bold text-xl lg:text-3xl text-gray-800 mx-auto text-center mb-8 lg:mb-12">
          <span className="text-green-900 font-bold text-2xl lg:text-3xl">
            Estudio Mundo
          </span>{' '}
          está formado por Quique Pons, desarrollador de software e Inma Soler,
          diseñadora gráfica especializada en UX/UI. ¡Encantados de conocerte!
        </h2>
        <p className="prose prose-lg lg:prose-2xl text-center text-gray-800 mx-auto mb-3 lg:mb-5">
          ¿Qué camino es el mejor para ti?
        </p>
        <div className="container-button justify-center flex gap-4">
          <Button>Ver los proyectos</Button>
          <Button reverse>¡Habla con nosotros!</Button>
        </div>
      </div>
      <div className="portfolio_grid p-4">
        <Grid columns={3} gap={4}>
          {projects.map((v) => (
            <Image {...v}></Image>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default Home;
