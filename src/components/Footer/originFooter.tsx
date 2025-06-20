import Contacts from './contacts';

const OriginFooter = () => {
    return (
        <footer className="text-gray-200 bg-neutral-900">
            <div className="max-w-7xl xl:max-w-7xl mx-auto px-8 py-10">
                <div className="flex flex-col justify-between items-center md:flex-row">
                    <p className="text-sm text-center md:text-left text-gray-300 font-normal mb-3 md:mb-0">
                        Copyright ⓒ 2025 Ludens. All rights reserved.
                        <br />
                        Created by <span className="text-white font-semibold"><a href="https://grden.github.io" target="_blank" rel="noopener noreferrer">김정원</a>, <a href="https://github.com/CuriHuS/" target="_blank" rel="noopener noreferrer">최현승</a>
                        , 한채연</span>
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <span className="text-lg font-bold">Ludens와 소통하기</span>
                        <Contacts />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default OriginFooter;
