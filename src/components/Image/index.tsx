export interface IImage {
  src: string;
  alt: string;
}

const Image: (props: IImage) => JSX.Element = ({ src, alt }) => {
  return <img className="object-cover w-full h-auto" src={src} alt={alt} />;
};

export default Image;
