import React from "react";
import OverviewBox from "./../components/OverviewBox"
import ReviewCard from "./../components/ReviewCard";
// import "./Tour.css"; // Assuming styles are included here

const Tour = ({ tour, user }) => {
    tour = {
        "startLocation": {
            "description": "Aspen, USA",
            "type": "Point",
            "coordinates": [-106.822318, 39.190872],
            "address": "419 S Mill St, Aspen, CO 81611, USA"
        },
        "ratingsAverage": 4.5,
        "ratingsQuantity": 6,
        "images": ["tour-3-1.jpg", "tour-3-2.jpg", "tour-3-3.jpg"],
        "startDates": [
            "2022-01-05T10:00:00.000Z",
            "2022-02-12T10:00:00.000Z",
            "2023-01-06T10:00:00.000Z"
        ],
        "_id": "5c88fa8cf4afda39709c295a",
        "name": "The Snow Adventurer",
        "duration": 4,
        "maxGroupSize": 10,
        "difficulty": "difficult",
        "guides": [
            "5c8a21d02f8fb814b56fa189",
            "5c8a23412f8fb814b56fa18c",
            "5c8a1f4e2f8fb814b56fa185"
        ],
        "price": 997,
        "summary": "Exciting adventure in the snow with snowboarding and skiing",
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        "imageCover": "tour-3-cover.jpg",
        "locations": [
            {
                "_id": "5c88fa8cf4afda39709c295c",
                "description": "Aspen Highlands",
                "type": "Point",
                "coordinates": [-106.855385, 39.182677],
                "day": 1
            },
            {
                "_id": "5c88fa8cf4afda39709c295b",
                "description": "Beaver Creek",
                "type": "Point",
                "coordinates": [-106.516623, 39.60499],
                "day": 2
            }
        ]
    }
    const date = new Date(tour.startDates[0]).toLocaleString("en-us", {
        month: "long",
        year: "numeric",
    });
    const paragraphs = tour.description.split("\n");



    return (
        <div>
            <section className="section-header">
                <div className="header__hero">
                    <div className="header__hero-overlay">&nbsp;</div>
                    <img
                        className="header__hero-img"
                        src={`/img/tours/${tour.imageCover}`}
                        alt={tour.name}
                    />
                </div>
                <div className="heading-box">
                    <h1 className="heading-primary">
                        <span>{tour.name}</span>
                    </h1>
                    <div className="heading-box__group">
                        <div className="heading-box__detail">
                            <svg className="heading-box__icon">
                                <use xlinkHref="/img/icons.svg#icon-clock" />
                            </svg>
                            <span className="heading-box__text">{tour.duration} days</span>
                        </div>
                        <div className="heading-box__detail">
                            <svg className="heading-box__icon">
                                <use xlinkHref="/img/icons.svg#icon-map-pin" />
                            </svg>
                            <span className="heading-box__text">{tour.startLocation.description}</span>
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
                            <OverviewBox label="Difficulty" text={tour.difficulty} icon="trending-up" />
                            <OverviewBox label="Participants" text={`${tour.maxGroupSize} people`} icon="user" />
                            <OverviewBox label="Rating" text={`${tour.ratingsAverage} / 5`} icon="star" />
                        </div>
                        <div className="overview-box__group">
                            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
                            {tour.guides.map((guide) => (
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
                    <h2 className="heading-secondary ma-bt-lg">About {tour.name}</h2>
                    {paragraphs.map((p, index) => (
                        <p className="description__text" key={index}>
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            <section className="section-pictures">
                {tour.images.map((image, i) => (
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
                <div id="map" data-locations={JSON.stringify(tour.locations)}></div>
            </section>

            <section className="section-reviews">
                <div className="reviews">
                    {/* {tour.reviews.map((review) => (
                        <ReviewCard review={review} key={review._id} />
                    ))} */}
                </div>
            </section>

            <section className="section-cta">
                <div className="cta">
                    <div className="cta__img cta__img--logo">
                        <img src="/img/logo-white.png" alt="Natours logo" />
                    </div>
                    <img
                        className="cta__img cta__img--1"
                        src={`/img/tours/${tour.images[1]}`}
                        alt="Tour picture"
                    />
                    <img
                        className="cta__img cta__img--2"
                        src={`/img/tours/${tour.images[2]}`}
                        alt="Tour picture"
                    />
                    <div className="cta__content">
                        <h2 className="heading-secondary">What are you waiting for?</h2>
                        <p className="cta__text">
                            {tour.duration} days. 1 adventure. Infinite memories. Make it yours today!
                        </p>
                        {user ? (
                            <button
                                className="btn btn--green span-all-rows"
                                id="book-tour"
                                data-tour-id={tour.id}
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
