const Card = ({children, noPadding}) => {
    let classes = "bg-white shadow-md shadow-gray-300  rounded-md grow mb-5 mt-5 overflow-hidden"; 

    if(!noPadding) {
        classes += " p-4"
    }
    return(
        <div className={classes}>
        {children}

        </div>
    )
}

export default Card; 