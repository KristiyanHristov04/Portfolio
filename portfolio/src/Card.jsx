import './Card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-header'>
                <img src={props.image} alt="project-image" />
            </div>
            <div className='card-content'>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className='card-footer'>
                {
                    props.isHosted ? <a href={props.url} className='btn-card' target='_blank'>Open App</a> : null
                }
                <a href={props.link} className='btn-card' target='_blank'>View Code</a>
            </div>
        </div>
    )
}