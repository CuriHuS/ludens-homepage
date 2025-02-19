import Contacts from './contacts';

const OriginFooter = () => {
    return (
        <footer className="text-gray-200 bg-neutral-900">
            <div className="max-w-6xl xl:max-w-6xl mx-auto px-8 py-10">
                <div className="flex flex-col justify-between lg:flex-row">
                    <p className="text-sm text-gray-200 font-medium mb-3 lg:mb-0">
                        Ludens (루덴스, 경희대학교 소프트웨어융합대학 소속 게임 제작 동아리)
                        <br/>
                        ⓒ 2025 Ludens. All rights reserved.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-2 items-start">
                        <span className="text-lg font-bold">Ludens와 소통하기</span>
                        <Contacts />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default OriginFooter;
