import React from 'react';
import Title from '../components/Title';

export const BannerSection = () => {
  const {title, subTitle, bannerImg, advantage} = {
    title: `窩窩家居`,
    subTitle: `跟您一起品味生活`,
    bannerImg: [
      'https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/3ewLAKn.png?raw=true',
    ],
    advantage: {
      advantageTitle: '床墊優勢',
      advantageList: [
        {
          id: 1,
          title: '原木料環保',
          picUrl: 'https://i.imgur.com/tR426y5.png',
        },
        {
          id: 2,
          title: '好收納',
          picUrl: 'https://i.imgur.com/Fd2MiBb.png',
        },
        {
          id: 3,
          title: '好組裝',
          picUrl:
            'https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/5n1uTFh.png?raw=true',
        },
      ],
    },
  };
  return (
    <>
      <section className="container mb-[3.75rem]">
        <div
          className="mb-[3.75rem] max-h-[26.25rem] h-screen bg-no-repeat bg-cover"
          style={{backgroundImage: `url(${bannerImg[0]})`}}
        >
          <div className="flex justify-start items-end px-[3.25rem] pb-12 h-full">
            <h1 className="text-h1 text-white">
              {title}
              <br />
              {subTitle}
            </h1>
          </div>
        </div>
        <div id="bedAdvantage">
          <Title className="mb-7" content={advantage.advantageTitle} />
          <ul className="flex justify-between items-start">
            {advantage.advantageList.map((advantage) => {
              return (
                <li key={advantage.id}>
                  <img className="mb-2" src={advantage.picUrl} alt={advantage.title} />
                  <p className="text-center text-h3">{advantage.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default BannerSection;
