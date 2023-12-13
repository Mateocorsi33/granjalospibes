import copy from "../../../assets/copy2.png";

export default function CopyRight() {
  const divStyle = {
    backgroundImage: `url(${copy})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  };

    return (
      <div style={divStyle}>
        <h3 className="text-white text-center text-sm py-12">© Copyright - Todos los derechos reservados | Desarrollado por Granja Los Pibes - 2023.</h3>
      </div>

    );
  }
  