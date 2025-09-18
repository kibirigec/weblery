'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { servicesList } from '@/config/services';

const ServiceNavBar = () => {
  const pathname = usePathname();

  const getTextColor = (bgColor) => {
    if (!bgColor) return '#000000';
    const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const uicolors = [r / 255, g / 255, b / 255];
    const c = uicolors.map((col) =>
      col <= 0.03928 ? col / 12.92 : Math.pow((col + 0.055) / 1.055, 2.4)
    );
    const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    return L > 0.179 ? '#000000' : '#FFFFFF';
  };

  return (
    <nav className="flex justify-center items-center px-4 py-3 bg-white space-x-12">
      {/* Back button */}
      <Link href="/" passHref>
        <div className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
          &larr; Back
        </div>
      </Link>

      {/* Pills */}
      <div className="flex space-x-2 bg-[#86868b]/5 rounded-full p-1">
        {servicesList.map((service) => {
          const isActive = pathname.includes(service.slug);

          return (
            <Link key={service.slug} href={`/services/${service.slug}`} passHref>
              <div
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors border`}
                style={{
                  borderColor: isActive ? service.hoverColor : 'transparent',
                  backgroundColor: 'transparent',
                  color: isActive ? service.hoverColor : '#374151',
                }}
              >
                {service.title}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default ServiceNavBar;
