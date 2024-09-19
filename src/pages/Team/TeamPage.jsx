import "./teamPage.css";

function TeamPage() {
    const team = [
        {
            pic: "./2.png",
            name: "Valeria Luzardo",
            rol: "UX/UI designer",
            linkedin: " https://www.linkedin.com/in/valeria-luzardo-b993261bb/",
            info: "lorem ipsum lorem lorem ",
        },
        {
            pic: "./1.png",
            name: "Christopher Villalta",
            rol: "Software Developer",
            linkedin: "https://www.linkedin.com/in/chrisvillalta/",
            info: "I'm a passionate Software Developer based in Sonsonate, El Salvador",
        },
        {
            pic: "./3.png",
            name: "Exequiel Schiavo",
            rol: "Software Developer",
            linkedin: "www.linkedin.com/in/exequiel-schiavo/",
            info: "lorem ipsum lorem lorem ",
        },
        {
            pic: "./4.png",
            name: "Carlos Garay",
            rol: "Software Developer",
            linkedin: "https://www.linkedin.com/in/garaycarlos/",
            info: "lorem ipsum lorem lorem ",
        },
        {
            pic: "./5.png",
            name: "facundo Elorz",
            rol: "Software Developer",
            linkedin: "https://www.linkedin.com/in/facundo-elorz/",
            info: "lorem ipsum lorem lorem ",
        },
        {
            pic: "./6.png",
            name: "Manuel Florez",
            rol: "Software Developer",
            linkedin: "https://www.linkedin.com/in/manuel14mds/",
            info: "lorem ipsum lorem lorem ",
        },
    ];

    return (
        <div className="wrapper_Team">
            <h1 className="teamTitle">Equipo de trabajo</h1>
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
                                    <a href={p.linkedin} target="_blank">  <img src="/linkedin.png" alt="linkedin" /></a>
                                </div>
                            </div>

                            <div className="overlay_Team">
                                <p>{p.info} </p>
                                <a href={p.linkedin} target="_blank" rel="noreferrer">  <img src="/linkedin.png" alt="linkedin profile" /></a>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TeamPage;