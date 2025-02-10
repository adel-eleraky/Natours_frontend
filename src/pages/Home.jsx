import React, { useEffect, useState } from "react";
import TourCard from "./../components/TourCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "../rtk/features/TourSlice";
import { RotateSpinner } from "react-spinners-kit"
const Home = () => {

    const dispatch = useDispatch();
    const { tours, loading, error } = useSelector((state) => state.tours);
    
    return (
        <main className="main">
            <div className="card-container">
                {tours && tours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </main>
    );
};

export default Home;
