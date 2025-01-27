import React from "react";
import TourCard from "./../components/TourCard";

const Home = ({ tours }) => {

    tours = [
        {
            "startLocation": {
                "description": "Miami, USA",
                "type": "Point",
                "coordinates": [-80.185942, 25.774772],
                "address": "301 Biscayne Blvd, Miami, FL 33132, USA"
            },
            "ratingsAverage": 4.8,
            "ratingsQuantity": 6,
            "images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
            "startDates": [
                "2021-06-19T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-08-18T09:00:00.000Z"
            ],
            "_id": "5c88fa8cf4afda39709c2955",
            "name": "The Sea Explorer",
            "duration": 7,
            "maxGroupSize": 15,
            "difficulty": "medium",
            "guides": ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
            "price": 497,
            "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
            "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "imageCover": "tour-2-cover.jpg",
            "locations": [
                {
                    "_id": "5c88fa8cf4afda39709c2959",
                    "description": "Lummus Park Beach",
                    "type": "Point",
                    "coordinates": [-80.128473, 25.781842],
                    "day": 1
                },
                {
                    "_id": "5c88fa8cf4afda39709c2958",
                    "description": "Islamorada",
                    "type": "Point",
                    "coordinates": [-80.647885, 24.909047],
                    "day": 2
                },
                {
                    "_id": "5c88fa8cf4afda39709c2957",
                    "description": "Sombrero Beach",
                    "type": "Point",
                    "coordinates": [-81.0784, 24.707496],
                    "day": 3
                },
                {
                    "_id": "5c88fa8cf4afda39709c2956",
                    "description": "West Key",
                    "type": "Point",
                    "coordinates": [-81.768719, 24.552242],
                    "day": 5
                }
            ]
        },
        {
            "startLocation": {
                "description": "Banff, CAN",
                "type": "Point",
                "coordinates": [-115.570154, 51.178456],
                "address": "224 Banff Ave, Banff, AB, Canada"
            },
            "ratingsAverage": 5,
            "ratingsQuantity": 9,
            "images": ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
            "startDates": [
                "2021-04-25T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-10-05T09:00:00.000Z"
            ],
            "_id": "5c88fa8cf4afda39709c2951",
            "name": "The Forest Hiker",
            "duration": 5,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "guides": [
                "5c8a21d02f8fb814b56fa189",
                "5c8a201e2f8fb814b56fa186",
                "5c8a1f292f8fb814b56fa184"
            ],
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "locations": [
                {
                    "_id": "5c88fa8cf4afda39709c2954",
                    "description": "Banff National Park",
                    "type": "Point",
                    "coordinates": [-116.214531, 51.417611],
                    "day": 1
                },
                {
                    "_id": "5c88fa8cf4afda39709c2953",
                    "description": "Jasper National Park",
                    "type": "Point",
                    "coordinates": [-118.076152, 52.875223],
                    "day": 3
                },
                {
                    "_id": "5c88fa8cf4afda39709c2952",
                    "description": "Glacier National Park of Canada",
                    "type": "Point",
                    "coordinates": [-117.490309, 51.261937],
                    "day": 5
                }
            ]
        },
        {
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
    ]
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
