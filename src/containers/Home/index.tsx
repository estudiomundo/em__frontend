import './Home.css';
import catimage from '../../assets/images/gato.jpg';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import Image, { IImage } from '../../components/Image';

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
    <div className="grid grid-rows-3 gap-4 items-center">
      <h2 className="prose prose-2xl max-w-7xl font-bold text-3xl text-gray-800 m-auto text-center">
        Estudio Mundo está formado por Quique Pons, desarrollador de software e
        Inma Soler, diseñadora gráfica especializada en UX/UI. ¡Encantados de
        conocerte!
      </h2>
      <p className="prose prose-2xl text-center text-gray-800 m-auto">
        ¿Qué camino es el mejor para ti?
      </p>
      <div className="container-button justify-center flex gap-4">
        <Button>Ver los proyectos</Button>
        <Button reverse>¡Habla con nosotros!</Button>
      </div>
      <div className="portfolio_grid p-4">
        <Grid columns={3} gap={4}>
          {projects.map((v) => (
            <Image {...v}></Image>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
