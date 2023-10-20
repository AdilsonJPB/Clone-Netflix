import { Fragment, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import NavBarHome from "../components/NavbarHome";
import Banner from "../components/Banner";
import Trendding from '../components/Trendding';
import TopRated from '../components/Toprated';
import { getGenres, setGenresMovieList, setGenresTVList } from "../Store/movieSlice";
import Genre from "../components/Genre";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import DetailsModal from "../components/DetailsModal";
import Loader from "../components/Loader";

const Home = () => {
    const genresMoviesList =useSelector(state => state.movie.genresMoviesList);
    const gerensTvlist =useSelector(state => state.movie.genresTvList);
    const bannerImageLoafing =useSelector(state => state.movie.bannerImageLoading);
    const cardSelected =useSelector(state => state.movieSelected);
    const dispatch =useDispatch();
    useEffect(() => {
        bannerImageLoading
    }
    )
}