const CardComponent = (props) => {

    const {data} = props

    const {title, description} = data;

    return (

    <div className="card card-dash bg-base-100 w-96">
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit</button>
            </div>
        </div>
    </div>
    )
}

export default CardComponent;