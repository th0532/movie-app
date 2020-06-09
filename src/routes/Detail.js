import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state){
            return (
            <div>
                <MovieInfo 
                    bigPoster={location.state.bigPoster}
                    poster={location.state.poster}
                    id={location.state.id}
                    year={location.state.year}
                    title={location.state.title}
                    summary={location.state.summary}
                    genres={location.state.genres}
                    rating={location.state.rating}
                />
            </div>
            );
        }else{
            return null;
        }
      }
}
// MovieInfo => MoviePoster,
class MovieInfo extends React.Component{
    render(){
    // let MovieInfoStyle={
    //     width:"100%",
    //     height:"1000px",
    //     // backgroundImage: "url("+this.props.bigPoster+")",
    //     // backgroundRepeat:"no-repeat",
    //     // backgroundSize:"cover",

    // };
    return (
        <section className="wrapper">
            <div className="main">
                <div >
                    <MoviePoster 
                        poster={this.props.poster}
                        year={this.props.year}
                        title={this.props.title}
                        summary={this.props.summary}
                        genres={this.props.genres}
                        rating={this.props.rating}
                    />
                </div>
            </div>
        </section>
    )}
}


function MoviePoster(props){
    console.log(props)
    return(
        <div className="row">
            <img className="detail_poster" src = {props.poster} alt="poster" />
            <div className="detail_info">
                    <h1 className="detail_title">{props.title}</h1>
                    <h2 className="detail_year">{props.year}</h2>
                    <ul className="detail_genres">
                        {props.genres.map((genre,index) =>
                        <li className="detail_genres_item" key={index}>{genre}</li>
                        )}
                    </ul>
                    <h2 className="detail_rating">★ {props.rating}</h2>
                    <p className="detail_summary">{props.summary}</p>
            </div>
            <div className="similiar_movies">
                    <h2>Similiar Movies</h2>
                    <ul>
                        <li><img src="https://img.yts.mx/assets/images/movies/doctor_strange_2016/medium-cover.jpg" alt="Similiar Movies"/></li>
                        <li><img src="https://img.yts.mx/assets/images/movies/doctor_who_1996/medium-cover.jpg" alt="Similiar Movies"/></li>
                        <li><img src="https://img.yts.mx/assets/images/movies/doctor_who_the_time_of_the_doctor_2013/medium-cover.jpg" alt="Similiar Movies"/></li>
                        <li><img src="https://img.yts.mx/assets/images/movies/doctor_dolittle_1967/medium-cover.jpg" alt="Similiar Movies"/></li>
                    </ul>
            </div>
        </div>
    )
}

        





export default Detail;


