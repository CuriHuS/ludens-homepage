import { Dispatch, SetStateAction } from 'react';

type YearTabProps = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  tabList: string[];
};

export function YearTab({ currentTab, setCurrentTab, tabList }: YearTabProps) {
  return (
    <ul className="flex w-full sm:w-auto overflow-x-auto sm:overflow-visible scrollbar-hide">
      <li className="flex gap-1 w-full justify-center">
        {tabList.map(tab => (
          <button
            key={tab}
            className={`
              py-2 px-3 text-base font-medium
              ${currentTab === tab 
                ? 'text-white underline decoration-2 underline-offset-8' 
                : 'text-white/60'}
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
