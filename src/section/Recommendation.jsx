import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Title from '../components/Title';

export const RecommendationSection = () => {
  const {title, recommendationList} = {
    title: '好評推薦',
    recommendationList: [
    {
      id: 1,
      name: '王六角',
      userPicture: 'https://i.imgur.com/I9L7WOr.png',
      productPicture: 'https://i.imgur.com/cXcOLhu.png',
      product: 'Jodan 雙人床架',
      comments: 'CP值很高。',
    },
    {
      id: 2,
      name: 'Leaf',
      userPicture: 'https://i.imgur.com/CUFGfay.png',
      productPicture: 'https://i.imgur.com/BefHmH2.png',
      product: 'Antony 雙人床架',
      comments: '很喜歡～還有送三年保固～',
    },
    {
      id: 3,
      name: '美濃鄧子琪',
      userPicture: 'https://i.imgur.com/8WwZsLS.png',
      productPicture:
        'https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/3IATkJG.png?raw=true',
      product: 'Charles 系列儲物組合',
      comments: '廚房必備美用品！',
    },
    {
      id: 4,
      name: 'isRaynotArray',
      userPicture: 'https://i.imgur.com/NycuPVy.png',
      productPicture: 'https://i.imgur.com/HvT3zlU.png',
      product: 'Antony 遮光窗簾',
      comments: '物超所值！',
    },
    {
      id: 5,
      name: '程鮭魚',
      userPicture: 'https://i.imgur.com/zdFOQIv.png',
      productPicture: 'https://i.imgur.com/Ed7bxLr.png',
      product: 'Louvre 雙人床架',
      comments: '租屋用剛剛好',
    },
    {
      id: 6,
      name: '小杰',
      userPicture: 'https://i.imgur.com/W7fyzp2.png',
      productPicture: 'https://i.imgur.com/BefHmH2.png',
      product: 'Louvre 雙人床架',
      comments: '非常舒適，有需要會再回購',
    },
    {
      id: 7,
      name: '江八角',
      userPicture:
        'https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/8O1cOnG.png?raw=true',
      productPicture: 'https://i.imgur.com/mjA01Tk.png',
      product: 'Charles 雙人床架',
      comments: '品質不錯～',
    },
    {
      id: 8,
      name: 'juni讚神',
      userPicture: 'https://i.imgur.com/C0NDvSA.png',
      productPicture: 'https://i.imgur.com/npA3DgP.png',
      product: 'Antony 床邊桌',
      comments: '讚ㄉ！',
    },
    {
      id: 9,
      name: '久安說安安',
      userPicture: 'https://i.imgur.com/hUsTZDm.png',
      productPicture: 'https://i.imgur.com/Ed7bxLr.png',
      product: 'Antony 單人床架',
      comments: '一個躺剛剛好。',
    },
    {
      id: 10,
      name: 'PeiQun',
      userPicture:
        'https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/3ako6QX.png?raw=true',
      productPicture: 'https://i.imgur.com/mjA01Tk.png',
      product: 'Antony 雙人床架',
      comments: '睡起來很舒適',
    },
    ]
  };
  return (
    <section id="recommendation" className="bg-secondary">
      <div className="container pt-[3.75rem] pb-20 select-none">
        <Title className="mb-8" content={title} isColorWhite={true} />
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          className="mb-5"
        >
          {recommendationList.map((recommendation, index) =>
            index < 5 ? (
              <SwiperSlide key={recommendation.id}>
                <div className="flex items-center gap-4 bg-white">
                  <img
                    src={recommendation.productPicture}
                    className="object-cover w-24 h-24 aspect-square"
                    alt={recommendation.product}
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <div className="flex gap-4">
                      <img
                        src={recommendation.userPicture}
                        className="w-10 h-10"
                        alt={recommendation.name}
                      />
                      <div className="flex flex-col justify-center">
                        <h3>{recommendation.name}</h3>
                        <p className="text-sm text-primary">{recommendation.product}</p>
                      </div>
                    </div>
                    <p>{recommendation.comments}</p>
                  </div>
                </div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {recommendationList.map((recommendation, index) =>
            index > 4 ? (
              <SwiperSlide key={recommendation.id}>
                <div className="flex items-center gap-4 bg-white">
                  <img
                    src={recommendation.productPicture}
                    className="object-cover w-24 h-24 aspect-square"
                    alt={recommendation.product}
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <div className="flex gap-4">
                      <img
                        src={recommendation.userPicture}
                        className="w-10 h-10"
                        alt={recommendation.name}
                      />
                      <div className="flex flex-col justify-center">
                        <h3>{recommendation.name}</h3>
                        <p className="text-sm text-primary">{recommendation.product}</p>
                      </div>
                    </div>
                    <p>{recommendation.comments}</p>
                  </div>
                </div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default RecommendationSection;
