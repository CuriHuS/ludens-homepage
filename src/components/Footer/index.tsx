import dynamic from 'next/dynamic';
import DummyDiv from '../common/DummyDiv';

const DynamicOriginFooter = dynamic(() => import('./originFooter'), {
  loading: () => <DummyDiv height={980} />,
});

export default function Footer() {
  return (
    <>
      <DynamicOriginFooter />
    </>
  );
}
