import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid fondoMarron">
            <div className="container py-5">
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <img src={"/images/Logo-3.svg"} alt={"Burger King Footer"} width={192} />
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com/BurgerKingArgentina"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/SM-RRSS-04.png"} alt="Facebook" width={24} /></a>
                            <a href={"https://www.instagram.com/burgerkingarg/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/SM-RRSS-03.png"} alt="Instagram" width={24} /></a>
                            <a href={"https://www.youtube.com/user/BurgerKingArg"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/SM-RRSS-02.png"} alt="YouTube" width={24} /></a>
                            <a href={"https://twitter.com/BurgerKingArg"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/SM-RRSS-01.png"} alt="Twitter" width={24} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;