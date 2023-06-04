import locationIcon from '../assets/icon-location.svg'

export default function Location(props) {
    return (
        <article className="location">
            <div className="location__content">
                <div className="location__country-container">
                    <img className="location__icon" src={locationIcon} alt="Location icon" aria-hidden="true" />
                    <p className="location__country">{props.location}</p>
                    <a className="location__link" href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="location__title">{props.title}</h2>
                <p className="location__date">{props.startDate} - {props.endDate}</p>
                <p className="location__description">{props.description}</p>
            </div>
            <img className="location__image" src={props.imageUrl} alt="Location image" />
        </article>
    )
}