import React from 'react';
// import {NavLink} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

export const NavBar = ({isAdmin}) => {
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
    {
      id: 5,
      target: 'dashboard',
      name: '訂單查詢',
      isActive: false,
    },
  ];
  const adminList = [
    {
      id: 1,
      target: '',
      name: '後台管理',
      isActive: false,
    },
    {
      id: 2,
      target: '',
      name: '管理員登入',
      isActive: true,
    },
  ];
  const selectList = isAdmin ? adminList : lists;
  return (
    <nav className="pt-10 pb-9 border-b-[2.5rem] border-b-black mb-8 select-none">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2>
            <a href="/" className="text-2xl font-bold uppercase">
              WoWoROOM
            </a>
          </h2>
          <ul className="flex">
            { selectList.map((list) => {
              return (
                <li key={list.id}>
                  <Link
                    to={list.id === 5 ? `/${list.target}`: `#${list.target}`}
                    className={`px-4 py-2 text-h3 uppercase ${list.isActive ? 'text-primary' : ''}
                    hover:text-primary transition duration-300 ease-in-out`}
                  >
                    {list.name}
                  </Link>
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
