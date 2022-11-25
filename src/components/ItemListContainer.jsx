import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert">
                        <p>{greeting}</p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;