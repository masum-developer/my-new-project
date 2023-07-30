
import image1 from '../../../assets/images/g1.jpg';
import image2 from '../../../assets/images/g2.jpg';
import image3 from '../../../assets/images/g3.jpg';
import image4 from '../../../assets/images/g5.jpg';

const CollegeImageGallery = () => {
    return (
        <section>
            <h2 className="text-center text-5xl my-5">
            Different College Graduate Picture
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image1} alt="gallery" /></figure>
                    
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image2} alt="gallery" /></figure>
                    
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image3} alt="gallery" /></figure>
                    
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image4} alt="gallery" /></figure>
                    
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image4} alt="gallery" /></figure>
                    
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image4} alt="gallery" /></figure>
                    
                </div>
            </div>
        </section>
    );
};

export default CollegeImageGallery;