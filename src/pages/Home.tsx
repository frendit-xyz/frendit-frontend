import { Page } from 'konsta/react';
import TopNavbar from '@src/components/TopNavbar';
import PostCard from '@src/components/PostCard';

export default function Home() {
  return (
    <Page>
      <TopNavbar />
      <div className="space-y-5 mt-5">
        <PostCard
          images={[
            'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
            'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
            'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
            'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
            'https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
            'https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
            'https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
          ]}
        />
        <PostCard video="https://www.youtube.com/watch?v=PQeQPV_7euQ" />
      </div>
    </Page>
  );
}
