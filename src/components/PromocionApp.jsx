import React from "react";

const PromocionApp = () => {
    return (
        <div className="container-fluid fondoRojo">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={"/images/landing_page_image-croped-5-1-1.png"} alt={"Burger King App"} width={480} />
                    </div>
                    <div className="col-md-6 d-flex align-items-end">
                        <div>
                            <h3 className="fs-1">Descargá la APP y disfrutá mucho más por mucho menos</h3>
                            <p><a href="https://play.google.com/store/apps/details?id=ar.burgerking" target={"_blank"} rel="noreferrer"><img src={"/images/google_play.png"} alt={"Android"} width={135} /></a> <a href="https://apps.apple.com/us/app/id1528704320" target={"_blank"} rel="noreferrer"><img src={"/images/app__store.png"} alt={"Apple"} width={135} /></a></p>
                            <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromocionApp;