/* External dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { BsPersonFill, BsFillGearFill } from 'react-icons/bs';
import { ImBubble } from 'react-icons/im';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AiFillBell } from 'react-icons/ai';

/* Internal dependencies */
import BallonNotification from '@elements/BallonNotification';

const StyledNavigation = styled.nav`
  background-color: #423630;
  height: 100%;
  ul {
    height: 100%;
    padding: 50px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      color: #8d8683;
      margin-bottom: 1em;
      cursor: pointer;
      &:hover {
        color: #bdb4af;
      }
      &.person {
        font-size: 1.8rem;
      }
      &.bubble {
        font-size: 1.3rem;
      }
      &.more {
        font-size: 1.6rem;
      }
      &.bell {
        font-size: 1.1rem;
      }
      &.gear {
        font-size: 1.1rem;
      }
      &.active {
        color: white;
      }
    }
    li:nth-child(4) {
      margin-top: auto;
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
`;

const Navigation: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const navList = [
    {
      id: 1,
      className: 'person',
      icon: <BsPersonFill />,
    },
    {
      id: 2,
      className: 'bubble',
      icon: <ImBubble />,
      label: '999+',
    },
    {
      id: 3,
      className: 'more',
      icon: <FiMoreHorizontal />,
      label: 'N',
    },
    {
      id: 4,
      className: 'bell',
      icon: <AiFillBell />,
    },
    {
      id: 5,
      className: 'gear',
      icon: <BsFillGearFill />,
    },
  ];

  const onClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <StyledNavigation>
      <ul>
        {navList.map(nav => {
          return (
            <li
              key={nav.id}
              className={classNames(
                nav.className,
                activeId === nav.id && 'active',
              )}
              onClick={() => onClick(nav.id)}
            >
              {nav.label ? (
                <BallonNotification label={nav.label}>
                  {nav.icon}
                </BallonNotification>
              ) : (
                nav.icon
              )}
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
