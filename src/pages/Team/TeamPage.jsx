import "./teamPage.css";

function TeamPage() {
  const team = [
    {
      pic: "./2.png",
      name: "Valeria Luzardo",
      rol: "UX/UI designer",
      linkedin: "linkedin",
      info: "lorem ipsum lorem lorem ",
    },
    {
      pic: "./1.png",
      name: "Chrstopher Villalta",
      rol: "Developer",
      linkedin: "linkedin",
      info: "lorem ipsum lorem lorem ",
    },
    {
      pic: "./3.png",
      name: "Exequiel Schiavo",
      rol: "Frontend Developer",
      linkedin: "linkedin",
      info: "lorem ipsum lorem lorem ",
    },
    {
      pic: "./logo-inkua.png",
      name: "name1",
      rol: "rol1",
      linkedin: "linkedin",
      info: "lorem ipsum lorem lorem ",
    },
    {
      pic: "./logo-inkua.png",
      name: "name1",
      rol: "rol1",
      linkedin: "linkedin",
      info: "lorem ipsum lorem lorem ",
    },
    {
      pic: "./logo-inkua.png",
      name: "name1",
      rol: "rol1",
      linkedin: "linkedin",
      info: "lorem ipsum lorem lorem ",
    },
  ];

  return (
    <div className="wrapper_Team">
      <h1>Equipo de trabajo</h1>
      <p>
        Conoce el equipo de de voluntarios que han trabajado en el diseño y
        desarrollo de esta aplicación web
      </p>

      <div className="container_Team">
        {team.map((p, key) => {
          return (
            <div key={key} className="card_Team">
              <div className="img_Team" >
                <img src={p.pic} alt="imagen" />
              </div>

              <div className="info_Team">
                <div>
                <h3 id="name">{p.name} </h3>
                <p id="rol">{p.rol} </p>
                </div>

                <div>
                  <a href="#">  <img src="/linkedin.png" alt="linkedin" /></a>
                </div>
              </div>

              <div className="overlay_Team">

                <p>{p.info} </p>

        
                <a href="#">  <img src="/linkedin.png" alt="linkedin" /></a>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamPage;