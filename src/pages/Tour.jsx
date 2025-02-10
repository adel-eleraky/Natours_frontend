import React, { useEffect, useRef, useState } from "react";
import OverviewBox from "./../components/OverviewBox"
import ReviewCard from "./../components/ReviewCard";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchTourById } from "../rtk/features/TourSlice";
import { RotateSpinner } from "react-spinners-kit";
import { loadMap } from "./../assets/mapbox.js"

const Tour = ({ user }) => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { tour } = useSelector(state => state.tours)
    let [loading, setLoading] = useState(true)
    const mapRef = useRef(null);

    const date = tour && new Date(tour.startDates[0]).toLocaleString("en-us", {
        month: "long",
        year: "numeric",
    });
    const paragraphs = tour?.description.split("\n");


    useEffect(() => {
        dispatch(fetchTourById(id)).then(() => setLoading(false))
    }, [])

    useEffect(() => {
        if(tour && tour.locations && mapRef.current) {
            loadMap(tour.locations)
        }
    }, [tour])

    if (loading) {
        return (
            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <RotateSpinner size={100} color="#55c57a" loading={loading} />
            </div>
        )
    }
    return (
        <div className="tour-page" id="tour-page">
            <section className="section-header">
                <div className="header__hero">
                    <div className="header__hero-overlay">&nbsp;</div>
                    <img
                        className="header__hero-img"
                        src={`/img/tours/${tour?.imageCover}`}
                        alt={tour?.name}
                    />
                </div>
                <div className="heading-box">
                    <h1 className="heading-primary">
                        <span>{tour?.name}</span>
                    </h1>
                    <div className="heading-box__group">
                        <div className="heading-box__detail">
                            <svg className="heading-box__icon">
                                <use xlinkHref="/img/icons.svg#icon-clock" />
                            </svg>
                            <span className="heading-box__text">{tour?.duration} days</span>
                        </div>
                        <div className="heading-box__detail">
                            <svg className="heading-box__icon">
                                <use xlinkHref="/img/icons.svg#icon-map-pin" />
                            </svg>
                            <span className="heading-box__text">{tour?.startLocation.description}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-description">
                <div className="overview-box">
                    <div>
                        <div className="overview-box__group">
                            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                            <OverviewBox label="Next date" text={date} icon="calendar" />
                            <OverviewBox label="Difficulty" text={tour?.difficulty} icon="trending-up" />
                            <OverviewBox label="Participants" text={`${tour?.maxGroupSize} people`} icon="user" />
                            <OverviewBox label="Rating" text={`${tour?.ratingsAverage} / 5`} icon="star" />
                        </div>
                        <div className="overview-box__group">
                            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
                            {tour?.guides.map((guide) => (
                                <div className="overview-box__detail" key={guide._id}>
                                    <img
                                        className="overview-box__img"
                                        src={`/img/users/${guide.photo}`}
                                        alt={guide.role}
                                    />
                                    <span className="overview-box__label">
                                        {guide.role === "lead-guide" ? "Lead guide" : "Tour guide"}
                                    </span>
                                    <span className="overview-box__text">{guide.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="description-box">
                    <h2 className="heading-secondary ma-bt-lg">About {tour?.name}</h2>
                    {paragraphs?.map((p, index) => (
                        <p className="description__text" key={index}>
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            <section className="section-pictures">
                {tour?.images.map((image, i) => (
                    <div className="picture-box" key={i}>
                        <img
                            className={`picture-box__img picture-box__img--${i + 1}`}
                            src={`/img/tours/${image}`}
                            alt={`The ${tour.name} ${i + 1}`}
                        />
                    </div>
                ))}
            </section>

            <section className="section-map">
                <div id="map" ref={mapRef} data-locations={JSON.stringify(tour?.locations)}></div>
            </section>

            <section className="section-reviews">
                <div className="reviews">
                    {tour?.reviews.map((review) => (
                        <ReviewCard review={review} key={review._id} />
                    ))}
                </div>
            </section>

            <section className="section-cta">
                <div className="cta">
                    <div className="cta__img cta__img--logo">
                        <img src="/img/logo-white.png" alt="Natours logo" />
                    </div>
                    <img
                        className="cta__img cta__img--1"
                        src={`/img/tours/${tour?.images[1]}`}
                        alt="Tour picture"
                    />
                    <img
                        className="cta__img cta__img--2"
                        src={`/img/tours/${tour?.images[2]}`}
                        alt="Tour picture"
                    />
                    <div className="cta__content">
                        <h2 className="heading-secondary">What are you waiting for?</h2>
                        <p className="cta__text">
                            {tour?.duration} days. 1 adventure. Infinite memories. Make it yours today!
                        </p>
                        {user ? (
                            <button
                                className="btn btn--green span-all-rows"
                                id="book-tour"
                                data-tour-id={tour?.id}
                            >
                                Book tour now!
                            </button>
                        ) : (
                            <a href="/login" className="btn btn--green span-all-rows">
                                Login to book tour now!
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tour;
