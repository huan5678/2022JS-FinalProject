import React from 'react';

export const NavBar = () => {
  const lists = [
    {
      id: 1,
      target: 'bedAdvantage',
      name: '床墊優勢',
      isActive: false,
    },
    {
      id: 2,
      target: 'recommendation',
      name: '好評推薦',
      isActive: false,
    },
    {
      id: 3,
      target: 'transport',
      name: '運送方式',
      isActive: false,
    },
    {
      id: 4,
      target: 'orderInfo',
      name: '立即預訂',
      isActive: true,
    },
  ];
  return (
    <nav className="pt-10 pb-9 border-b-[2.5rem] border-b-black mb-8 select-none">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2>
            <a href="/" className="text-2xl uppercase font-bold">
              WoWoROOM
            </a>
          </h2>
          <ul className="flex">
            {lists.map((list) => {
              return (
                <li key={list.id}>
                  <a
                    href={`#${list.target}`}
                    className={`px-4 py-2 text-h3 uppercase ${list.isActive ? 'text-primary' : ''}
                    hover:text-primary transition duration-300 ease-in-out`}
                  >
                    {list.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
