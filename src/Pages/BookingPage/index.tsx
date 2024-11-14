import { FaPlane } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BookingPage = () => {
  const flights = [
    { airline: 'Novi Air', time: '06:30 - 09:30', price: '1,689,445 VND' },
    { airline: 'YuanNusa', time: '10:00 - 13:00', price: '1,927,345 VND' },
    { airline: 'BBN Airlines Indonesia', time: '14:00 - 17:00', price: '1,932,700 VND' },
    { airline: 'Super Air Jet', time: '15:35 - 18:35', price: '1,343,044 VND' },
    { airline: 'PHUCPLAN', time: '18:00 - 21:00', price: '1,343,044 VND' },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex">
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold mb-2">Hãng hàng không</h2>
          <ul>
            <li><input type="checkbox" /> AirAsia Indonesia</li>
            <li><input type="checkbox" /> Garuda Indonesia</li>
            <li><input type="checkbox" /> Novi Air</li>
            <li><input type="checkbox" /> YuanNusa</li>
            <li><input type="checkbox" /> BBN Airlines Indonesia</li>
            <li><input type="checkbox" /> Super Air Jet</li>
            <li><input type="checkbox" /> Sky High</li>
            <li><input type="checkbox" /> FlyFast</li>
            <li><input type="checkbox" /> JetStream</li>
          </ul>

          <h2 className="font-semibold mt-4 mb-2">Thời gian bay</h2>
          <div className="flex justify-between">
            <span>0h</span>
            <span>15h</span>
          </div>
          <input type="range" min="0" max="15" className="w-full" />

          <h2 className="font-semibold mt-4 mb-2">Giờ cất cánh</h2>
          <div className="grid grid-cols-2 gap-2">
            <button className="border p-2 rounded">00:00 - 06:00</button>
            <button className="border p-2 rounded">06:00 - 12:00</button>
            <button className="border p-2 rounded">12:00 - 18:00</button>
            <button className="border p-2 rounded">18:00 - 24:00</button>
          </div>

          <h2 className="font-semibold mt-4 mb-2">Giờ hạ cánh</h2>
          <div className="grid grid-cols-2 gap-2">
            <button className="border p-2 rounded">00:00 - 06:00</button>
            <button className="border p-2 rounded">06:00 - 12:00</button>
            <button className="border p-2 rounded">12:00 - 18:00</button>
            <button className="border p-2 rounded">18:00 - 24:00</button>
          </div>
        </div>

        <div className="w-3/4 ml-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center bg-blue-500 p-4 rounded-lg shadow-md">
              <div className="text-white">
                <h1 className="text-xl font-bold">Jakarta (JKT) - Bali (DPS)</h1>
                <p>Thứ Hai, 13 Tháng 11 - Thứ Hai, 20 Tháng 11</p>
              </div>
              <div className="bg-white p-2 rounded-full shadow-md">
                <FaPlane className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 100}}
              className="mt-4 bg-blue-500 p-2 rounded-lg shadow-md"
            >
              <SwiperSlide className="text-center text-white">
                <p>Thứ 3, 12 thg 11</p>
                <p>1,834,000 VND</p>
              </SwiperSlide>
              <SwiperSlide className="text-center text-white">
                <p>Thứ 4, 13 thg 11</p>
                <p>1,689,446 VND</p>
              </SwiperSlide>
              <SwiperSlide className="text-center text-white">
                <p>Thứ 5, 14 thg 11</p>
                <p>2,182,000 VND</p>
              </SwiperSlide>
              <SwiperSlide className="text-center text-white">
                <p>Thứ 6, 15 thg 11</p>
                <p>2,002,000 VND</p>
              </SwiperSlide>
              <SwiperSlide className="text-center text-white">
                <p>Thứ 7, 16 thg 11</p>
                <p>1,666,000 VND</p>
              </SwiperSlide>
            </Swiper>
          </div>

          <h2 className="text-lg font-semibold mt-4">Best flights from your search</h2>
          <div className="bg-white p-4 rounded-lg shadow-md mt-2">
            {flights.map((flight, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2 mb-2">
                <div>
                  <p className="font-bold">{flight.airline}</p>
                  <p className="text-sm text-gray-500">{flight.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-red-500 font-bold">{flight.price}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Chọn</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;