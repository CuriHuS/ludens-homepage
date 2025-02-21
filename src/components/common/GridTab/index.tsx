import { Dispatch, SetStateAction } from 'react';

type GridTabProps = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  tabList: string[];
};

export function GridTab({ currentTab, setCurrentTab, tabList }: GridTabProps) {
  return (
    <ul className="flex w-full sm:w-auto overflow-x-auto sm:overflow-visible scrollbar-hide">
      <li className="flex gap-1 w-full justify-center">
        {tabList.map(tab => (
          <button
            key={tab}
            className={`
              py-2 px-3 text-base
              ${currentTab === tab 
                ? 'text-white font-bold underline decoration-2 underline-offset-8' 
                : 'text-white/60 font-medium'}
            `}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </li>
    </ul>
  );
}
