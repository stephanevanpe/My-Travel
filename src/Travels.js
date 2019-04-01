import React from "react";

import Travel from './Travel';

const travels = [
    {destination:"Ocean Indien",
    country:"Madagascar",
    photo:"https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-10-cropped-images-plonger-a-madagascar-0-0-0-0-1527500061-d58a7b648fd3c4b22de40181225c4e8b.jpg",
    distance:"8 500 Km",
    },
    {destination:"Ocean Indien",
    country:"Indonesie",
    photo:"https://cdn.mochilerosentailandia.com/wp-content/uploads/2016/12/2016082111390378482_sbig.jpg",
    distance:"10 284 Km",
    },
    {destination:"Ocean Indien",
    country:"Madagascar",
    photo:"https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-10-cropped-images-plonger-a-madagascar-0-0-0-0-1527500061-d58a7b648fd3c4b22de40181225c4e8b.jpg",
    distance:"8 500 Km",
    },
    {destination:"Ocean Indien",
    country:"Indonesie",
    photo:"https://cdn.mochilerosentailandia.com/wp-content/uploads/2016/12/2016082111390378482_sbig.jpg",
    distance:"10 284 Km",
    },
    {destination:"Ocean Indien",
    country:"Madagascar",
    photo:"https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-10-cropped-images-plonger-a-madagascar-0-0-0-0-1527500061-d58a7b648fd3c4b22de40181225c4e8b.jpg",
    distance:"8 500 Km",
    },
]
const Travels = () => (
    <div>
        {travels => <Travel {...travels} />
        }
    </div>
);



export default Travels;
