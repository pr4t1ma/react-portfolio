import { Notification } from '../Notification';
import { TravelMenu } from '../TravelMenu/TravelMenu';

export const TravelHeader = () => {
  const items = [
    { label: 'Home', href: './' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="container mx-auto flex justify-between">
      <TravelMenu items={items} />
      <Notification />
    </div>
  );
};
