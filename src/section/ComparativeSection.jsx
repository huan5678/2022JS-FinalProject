import React from 'react';
import Title from '../components/Title';

export const ComparativeSection = () => {
  const {title, compareList, compareItems} = {
    title: '家具比較',
    compareItems: ['窩窩系統模組家具', '組合式家具', '實木家具'],
    compareList: [
      {
        id: 1,
        name: '可單人自行組裝',
        items: [{content: true}, {content: '不一定'}, {content: true}],
      },
      {
        id: 2,
        name: '可多次重複拆裝',
        items: [{content: true}, {content: false}, {content: false}],
      },
      {
        id: 3,
        name: '床墊規格彈性大',
        items: [{content: true}, {content: '不一定'}, {content: '不一定'}],
      },
      {
        id: 4,
        name: '材質可長久使用',
        items: [{content: true}, {content: false}, {content: true}],
      },
      {
        id: 5,
        name: '小客車即可搬運',
        items: [{content: true}, {content: false}, {content: false}],
      },
    ],
  };
  return (
    <section className="bg-light">
      <div className="container pt-12 pb-16">
        <Title content={title} className="mb-8" />
        <table className="w-full text-h3">
          <thead>
            <tr className="border-b border-[#B9B9B9] py-1.5">
              <th></th>
              {compareItems.map((item, index) => {
                return (
                  <th
                    key={index}
                    className={`text-center font-normal ${index > 0 ? 'text-gray' : ''}`}
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {compareList.map((list) => {
              return (
                <tr className="border-b border-[#B9B9B9] py-1.5" key={list.id}>
                  <td className="py-1.5">{list.name}</td>
                  {list.items.map((item, index) => {
                    return (
                      <td key={index} className={`text-center py-1.5`}>
                        {item.content === true ? (
                          <span className="material-icons text-4xl text-primary">check</span>
                        ) : item.content === false ? (
                          ''
                        ) : (
                          <span className="text-gray font-normal">{item.content}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparativeSection;
