import '../styles/Card.css';


type CardProps = {
    title: string;
    content: string;
    action: string;
}

export default function Card({title, content, action}: CardProps) {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>{title}</h2>
                </div>
                <div className="card-body">
                    <p>{content}</p>
                </div>
                <div className="card-footer">
                    <button>{action}</button>
                </div>
            </div>
        </div>
    )
}
