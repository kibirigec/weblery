'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { servicesList } from '../../config/services';
import { tailwindColors } from '../../lib/colors';

const ServiceNavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white px-4 py-3 border-b border-gray-100">
      <div className="flex items-center justify-center">
        {/* Back button (always inline, stays left) */}
        <Link href="/" passHref>
          <div className="lg:ml-6 text-sm text-[#86868b] hover:text-gray-900 transition-colors cursor-pointer mr-4 shrink-0">
            &larr; Back
          </div>
        </Link>

        {/* Pills (centered, scrollable on mobile) */}
        <div className="flex-1 overflow-x-auto scrollbar-none">
          <div className="flex space-x-2 bg-[#86868b]/5 rounded-full p-1 w-max mx-auto">
            {servicesList.map((service) => {
              const isActive = pathname.includes(service.slug);

              return (
                <Link key={service.slug} href={`/services/${service.slug}`} passHref>
                  <div
                    className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors border whitespace-nowrap"
                    style={{
                      color: isActive ? tailwindColors[service.hoverColor] : '#374151',
                      borderColor: isActive ? tailwindColors[service.hoverColor] : 'transparent',
                    }}
                  >
                    {service.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ServiceNavBar;
