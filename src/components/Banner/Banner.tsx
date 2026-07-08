import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'; 
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importa os estilos do Swiper
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BannerItem {
  id: number;
  imageUrl: string;
  altText: string;
}

export function Banner() {
  const banners: BannerItem[] = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1743764180148-b712e5293800?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Banner 1' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1660246228664-1594c701e3ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Banner 2' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Banner 3' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1623193904313-4372c49db04c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', altText: 'Banner 4' }
  ];

  return (
    <div className="relative mx-auto my-20 w-full max-w-150 mr-55 ">
      <Swiper
        modules={[EffectCards, Navigation, Pagination]}
        effect={'cards'}
        grabCursor={true}
        shortSwipes={false}
        threshold={1}
        pagination={{ type: 'progressbar' }}
        navigation={{
          nextEl: '.btn-next-custom',
          prevEl: '.btn-prev-custom',
          hideOnClick: true
        }}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id} className="overflow-hidden rounded-xl">
            <img 
              src={item.imageUrl} 
              alt={item.altText} 
              className="block h-150 mt-10 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação customizados com Tailwind CSS */}
      <div className="-mt-30 flex justify-center gap-180 ">
        
        {/* Botão de Voltar */}
        <button className="btn-prev-custom flex items-center gap-2 rounded-lg bg-neutral-200 px-5 py-2.5 text-base text-black transition-colors hover:bg-neutral-200 disabled:opacity-40">
          <FontAwesomeIcon icon={faBackward} />
          
        </button>

        {/* Botão de Avançar */}
        <button className="btn-next-custom flex items-center gap-2 rounded-lg bg-neutral-200 px-5 py-2.5 text-base text-black transition-colors hover:bg-neutral-200 disabled:opacity-40">
          <FontAwesomeIcon icon={faForward} />
        </button>
        
      </div>
    </div>
  );
}