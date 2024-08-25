import '../styles/Principal.css';
import Card from './Card';

const carreras = [
    {
        title: "Ingeniería de Software",
        content: "La ingeniería de software es una disciplina que se encarga del diseño, desarrollo, implementación y mantenimiento de software de calidad. Los ingenieros de software utilizan principios y técnicas de ingeniería para construir software confiable y eficiente."
    },
    {
        title: "Medicina",
        content: "La medicina es la ciencia y práctica que se ocupa del diagnóstico, tratamiento y prevención de enfermedades. Los médicos utilizan conocimientos científicos y habilidades clínicas para cuidar de la salud de los pacientes."
    },
    {
        title: "Derecho",
        content: "El derecho es un conjunto de normas y reglas que regulan la convivencia social. Los abogados se encargan de interpretar y aplicar el derecho para proteger los derechos y resolver conflictos legales."
    }
];

export default function Principal() {
    return (
        <main className="main">
            <h1 className='career-title'>Carreras Ofertadas</h1>
            {carreras.map((carrera, index) => (
                <Card title={carrera.title} content={carrera.content} action='Ver más' key={index}/>
            ))}
        </main>
    )
}
