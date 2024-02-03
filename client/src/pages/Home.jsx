import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=6');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=6');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=6');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-5 sm:mx-36'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>luxurious</span>
          <br />
          abode with ease
        </h1>
        <div className=' text-cyan-800 text-base sm:text-xl'>
         Discover the finest properties tailored to your exquisite taste.
          <br />
          Your dream home awaits.
        </div>
        <Link
          to={'/search'}
          className='text-sm sm:text-lg text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='sm:h-[400px] lg:h-[500px] h-[200px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
          
      </Swiper>


      <div className=' max-w-full max-h-full  flex flex-col gap-8 my-10'>
        <hr className='flex-grow border-t border-slate-600'/>

      </div>
      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl xl:mx-auto md:mx-1 p-3 flex flex-col gap-16 my-10'>

        {/* offer section */} 

        {offerListings && offerListings.length > 0 && (
          <div className='border-2 px-4 rounded-md'>
            <div className='my-3 '>
              <h2 className='text-2xl font-semibold text-neutral-400 rounded-md py-2 text-center bg-slate-700'>Recent offers</h2>
            </div>
            <div className='flex flex-wrap gap-4 mt-10 justify-center'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
                ))}
            </div>
            <div className='mt-5 ml-2 mb-5 md:ml-5 lg:ml-36 xl:ml-10'>
                <Link className='text-lg  text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>

            </div>
          </div>
        )}

        {/* sale section */}

        {rentListings && rentListings.length > 0 && (
          <div className='border-2 px-4 rounded-md'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-neutral-400 rounded-md py-2 text-center bg-slate-700'>Recent places for Rent</h2>
            </div>
            <div className='flex flex-wrap gap-4 mt-10 justify-center'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <div className='mt-5 ml-2 mb-5 md:ml-5 lg:ml-36 xl:ml-10'>
                <Link className='text-lg  text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for Rent</Link>

            </div>
          </div>
        )}

        {/* sell section */}

        {saleListings && saleListings.length > 0 && (
          <div className='border-2 px-4 rounded-md'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-neutral-400 rounded-md py-2 text-center bg-slate-700'>Recent places for sale</h2>
              
            </div>
            <div className='flex flex-wrap gap-4 mt-10 justify-center'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <div className='mt-5 ml-2 mb-5 md:ml-5 lg:ml-36 xl:ml-10'>
                <Link className='text-lg  text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for Sale</Link>

            </div>
          </div>
        )}

      </div>
    </div>
  );
  
}
