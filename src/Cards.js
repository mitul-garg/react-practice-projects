import projects from "./data";

const Cards = () => {
  return (
    <section className="section">
      {projects.map((project) => {
        const { id, image, title, url } = project;
        return (
          <div key={id} className="card">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image} alt="aurora" className="image" />
              <h2 className="title">{title}</h2>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
