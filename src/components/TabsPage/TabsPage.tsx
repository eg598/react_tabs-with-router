import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={tabId === 'tab-1' ? 'is-active' : ''}>
            <Link
              to="/tabs/tab-1"
              relative="path"
              className={tabId === 'tab-1' ? 'is-active' : ''}
            >
              Tab 1
            </Link>
          </li>

          <li data-cy="Tab" className={tabId === 'tab-2' ? 'is-active' : ''}>
            <Link
              to="/tabs/tab-2"
              relative="path"
              className={tabId === 'tab-1' ? 'is-active' : ''}
            >
              Tab 2
            </Link>
          </li>
          <li data-cy="Tab" className={tabId === 'tab-3' ? 'is-active' : ''}>
            <Link
              to="/tabs/tab-3"
              relative="path"
              className={tabId === 'tab-1' ? 'is-active' : ''}
            >
              Tab 3
            </Link>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
