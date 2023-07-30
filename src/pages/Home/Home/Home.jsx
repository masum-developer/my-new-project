import { useEffect, useState } from "react";
import CollegeCard from "../CollegeCard/CollegeCard";
import CollegeImageGallery from "../CollegeImageGallery/CollegeImageGallery";
import Researce from "../Researce/Researce";
import Review from "../Review/Review";


const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [college, setCollege] = useState("");
    
    // useEffect(() => {
    //     fetch('https://my-avenger-server.vercel.app/all-toy')
    //         .then(res => res.json())
    //         .then(data => setCollege(data))
    // }, [])

    const handleSearch = () => {
        // fetch(`https://my-avenger-server.vercel.app/toy-name/${searchText}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setToys(data);
        //     });
    };
    return (
        <div>
            <div className="mb-5 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="border-2 border-black mr-2 px-3"
                />
                <button className="btn btn-info btn-sm" onClick={handleSearch}>Search</button>
                
            </div>
            <CollegeCard></CollegeCard>
            <CollegeImageGallery></CollegeImageGallery>
            <Researce></Researce>
            <Review></Review>
        </div>
    );
};

export default Home;