import axios from 'axios';
//import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./Detail.css";
//import ReviewForm from "../reviewForm/ReviewForm";


const Detail = () =>{

    const { id } = useParams();
    //const { isAuthenticated } = useAuth0();
    const user_id = useSelector(state => state.LocalPersist.userProfile?.id);
    const [producto, setProducto] = useState({});
    //const [userRating, setUserRating] = useState(null);

    // const totalRatings = producto.Reviews && producto.Reviews?.reduce((total, review) => total + review.rating, 0);
    // const averageRating = totalRatings / producto.Reviews?.length;

    // const contentCount = producto.Reviews?.length;

    // const url = "http://localhost:3001";
    const url = "https://lagruta.onrender.com";
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${url}/products/${id}`);
                setProducto(response.data);
            } catch (error) {
                console.error("Error fetching products details:", error);
            }
        }
        fetchData(); // Llamar a la función para que realice la solicitud
    }, [id]);

    return (
        <div className="DetailContainer"> 
            <div className="ContainerContainer">
            <h1 className="ContenedorCartProductosTitulo">Detalle del producto</h1>
                <div className="GridTwoColumns" >
                    <div className="DetailImages">
                        <img src={producto?.image} alt="bookImage"></img>
                    </div>
                    <div className="DetailData">
                        <div className="DetailDataBack"></div>
                        <div className="DetailDataFront">
                                <div style={{margin:"10px 0"}}>     
                                    <h2 >Producto </h2>
                                    <p >{producto?.name} </p>
                                </div>
                                <div style={{margin:"10px 0"}}>      
                                    <h2 >estrellas</h2>
                                    {/* <Stars stars={averageRating} reviews={contentCount}/> */}
                                </div>
                                <div style={{margin:"10px 0"}}>      
                                    <h2 >Descripcion</h2>
                                    <p>{producto?.description}</p>
                                </div>
                                <div style={{margin:"10px 0"}}>      
                                    <h2 >Precio</h2>
                                    <p>$ {producto?.price},00</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
           
                <div className="titleContainer" style={{marginBottom:"0"}}>
                    <p className="titleContainerLine"></p>
                    <h1 className="titleContainerTexto">Reviews</h1>
                </div>
                {/* {isAuthenticated ? (
                    <div style={{padding:"1rem 6rem"}}>
                        <ReviewForm id={id} />
                        <div className="ComentariosDetail">
                            <p style={{fontSize:"1.2rem", paddingBottom:"1.5rem"}}>Book reviews</p>
                            {producto.Reviews?.map((con)=>{
                                return(
                                    <>
                                    <div>
                                        <p style={{paddingBottom:"0.5rem"}}>{con.email} | {con.rating} of 5</p>
                                        <p style={{color:"grey"}}>{con.content} </p>
                                        <hr style={{margin:"1.5rem"}} />
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    ) : (
                    <div className="ComentariosDetail">
                        <p style={{fontSize:"1.2rem", paddingBottom:"1.5rem"}}>Book reviews</p>
                        {producto.Reviews?.map((con)=>{
                            return(
                                <>
                                <div>
                                    <p style={{paddingBottom:"0.5rem"}}>{con.email} | {con.rating} of 5</p>
                                    <p style={{color:"grey"}}>{con.content} </p>
                                    <hr style={{margin:"1.5rem"}} />
                                </div>
                                </>
                            )
                        })}
                    </div>
                    ) 
                } */}
            </div>
        </div>
    )
}

export default Detail;