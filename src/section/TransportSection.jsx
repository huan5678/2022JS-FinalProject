import React from 'react'
import Title from '../components/Title'

export const TransportSection = () => {
  const {title, shippingList} = {
    title: '運送方式',
    shippingList: [
      {
        id: 1,
        icon: 'shopping_cart',
        title: 'STEP.1',
        content: '選購商品',
      },
      {
        id: 2,
        icon: 'arrow_right',
      },
      {
        id: 3,
        icon: 'format_list_bulleted',
        title: 'STEP.2',
        content: '填寫預定資料',
      },
      {
        id: 4,
        icon: 'arrow_right',
      },
      {
        id: 5,
        icon: 'done',
        title: 'STEP.3',
        content: '預定成功',
      },
      {
        id: 6,
        icon: 'arrow_right',
      },
      {
        id: 7,
        icon: 'local_post_office',
        title: 'STEP.4',
        content: 'Email 付款資訊',
      },
    ],
  };
  return (
    <section className="pt-8 pb-[4.5rem] select-none">
      <Title className="mb-8" content={title} />
      <ul className="flex justify-center items-center gap-6">
        {shippingList.map((item) => {
          return (
            <li key={item.id} className="flex flex-col items-center">
              {item.icon === 'arrow_right' ? (
                <span className="material-icons text-4xl -translate-y-6">{item.icon}</span>
              ) : (
                <>
                  <div className="flex items-center justify-center p-7 rounded-full border-[0.1875rem] border-black mb-2">
                    <span className="material-icons text-6xl">{item.icon}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-h3">{item.title}</p>
                    <p>{item.content}</p>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TransportSection;
