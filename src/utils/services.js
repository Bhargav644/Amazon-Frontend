import offer11 from "../Images/Offers/Offer1/Offer1.1.jpg";
import offer12 from "../Images/Offers/Offer1/Offer1.2.jpg";
import offer13 from "../Images/Offers/Offer1/Offer1.3.jpg";
import offer14 from "../Images/Offers/Offer1/Offer1.4.jpg";
import offer21 from "../Images/Offers/Offer2/Offer2.1.jpg";
import offer22 from "../Images/Offers/Offer2/Offer2.2.jpg";
import offer23 from "../Images/Offers/Offer2/Offer2.3.jpg";
import offer24 from "../Images/Offers/Offer2/Offer2.4.jpg";
import offer31 from "../Images/Offers/Offer3/Offer3.1.jpg";
import offer32 from "../Images/Offers/Offer3/Offer3.2.jpg";
import offer33 from "../Images/Offers/Offer3/Offer3.3.jpg";
import offer34 from "../Images/Offers/Offer3/Offer3.4.jpg";
import offer41 from "../Images/Offers/Offer4/Offer4.1.jpg";
import offer51 from "../Images/Offers/Offer5/Offer5.1.jpg";
import offer52 from "../Images/Offers/Offer5/Offer5.2.jpg";
import offer53 from "../Images/Offers/Offer5/Offer5.3.jpg";
import offer54 from "../Images/Offers/Offer5/Offer5.4.jpg";
import offer61 from "../Images/Offers/Offer6/Offer6.1.jpg";
import offer62 from "../Images/Offers/Offer6/Offer6.2.jpg";
import offer63 from "../Images/Offers/Offer6/Offer6.3.jpg";
import offer64 from "../Images/Offers/Offer6/Offer6.4.jpg";
import kgf from "../Images/Extra/Movies/movie1.jpg";
import rocketry from "../Images/Extra/Movies/movie2.jpg";
import crashcourse from "../Images/Extra/Movies/movie3.jpg";
import batman from "../Images/Extra/Movies/movie4.jpeg";

const headerServices = [
    "All",
    "All Categories",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Fresh",
    "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Baby",
    "Beauty",
    "Books",
    "Cars & Motorbike",
    "Clothing & Accessories",
    "Collectibles",
    "Deals",
];

const movies = {
    0: {
        heading: "Prime Video: Recommended for you",
        name: "K.G.F Chapter 2(Hindi)",
        image: kgf,
        text: "Start watching on Prime Vedio",
    },
    1: {
        heading: "Prime Video: Recommended for you",
        name: "Rocketry: The Nambi Effect",
        image: rocketry,
        text: "Start watching on Prime Vedio",
    },
    2: {
        heading: "Prime Video: Recommended for you",
        name: "Crash Course- Season 1",
        image: crashcourse,
        text: "Start watching on Prime Vedio",
    },
    3: {
        heading: "Prime Video: Recommended for you",
        name: "The Batman",
        image: batman,
        text: "Start watching on Prime Vedio",
    },
};

const ourOffers = {
    1: {
        heading: "Keep shopping for",
        image1: offer11,
        label1: "Wedding Special",
        image2: offer12,
        label2: "Gujrati Wedding special",
        image3: offer13,
        label3: "Wedding Gifts",
        image4: offer14,
        label4: "Wedding vows",
    },
    2: {
        heading: "Shop & Pay | Earn rewards daily",
        image1: offer21,
        label1: "Claim your scratch",
        image2: offer22,
        label2: "Redeem your collected rewards",
        image3: offer23,
        label3: "Unlock more rewards when you pay or shop",
        image4: offer24,
        label4: "Explore all offers in one place",
    },
    3: {
        heading: "Upgrade your home with amazon brands",
        image1: offer31,
        label1: "Smart LED TVs",
        image2: offer32,
        label2: "Appliances",
        image3: offer33,
        label3: "Furniture",
        image4: offer34,
        label4: "Kitchen products",
    },
    4: {
        heading: "Har Ghar Tiranga | 13th-15th August",
        image1: offer41,
    },
    5: movies[(Math.floor(Math.random() * 10) + 1) % 4],
    6: {
        heading: "Keep shopping for",
        image1: offer51,
        label1: "Fresh",
        image2: offer52,
        label2: "Mobiles",
        image3: offer53,
        label3: "Fashion",
        image4: offer54,
        label4: "Electronics",
    },
    7: {
        heading: "Up to 60% off | Styles for Men",
        image1: offer61,
        label1: "Clothing",
        image2: offer62,
        label2: "Footwear",
        image3: offer63,
        label3: "Watches",
        image4: offer64,
        label4: "Bags & luggage",
    },
};

// const movies
export { ourOffers, headerServices };
export default headerServices;