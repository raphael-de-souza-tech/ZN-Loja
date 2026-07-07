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
    <div style={{ width: '100%', maxWidth: '360px', margin: '40px auto', position: 'relative' }}>
      <Swiper
        // 1. Voltamos a incluir o módulo Navigation aqui
        modules={[EffectCards, Navigation, Pagination]}
        
        effect={'cards'}
        grabCursor={true}
        shortSwipes={false}
        threshold={1}
        pagination={{ type: 'progressbar' }}
        
        // 2. Mapeamos as classes dos botões customizados que criamos abaixo
        navigation={{
          nextEl: '.btn-next-custom',
          prevEl: '.btn-prev-custom',
          hideOnClick: true
        }}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id} style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img 
              src={item.imageUrl} 
              alt={item.altText} 
              style={{ width: '100%', height: '450px', objectFit: 'cover', display: 'block' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 3. Seus botões customizados com os ícones que você escolher */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        
        {/* Botão de Voltar */}
        <button className="btn-prev-custom" style={buttonStyle}>
          {/* Coloque seu ícone aqui. Exemplo com texto/caractere, mas pode ser um <svg> ou Lucide Icon */}
          👈 Voltar
        </button>

        {/* Botão de Avançar */}
        <button className="btn-next-custom" style={buttonStyle}>
          Avançar 👉
        </button>
        
      </div>
    </div>
  );
}

// Estilo simples para os botões (você pode estilizar via CSS/Tailwind se preferir)
const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};