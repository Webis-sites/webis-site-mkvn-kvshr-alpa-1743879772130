import React from 'react';
import { FaDumbbell, FaUsers, FaAppleAlt, FaHeartbeat, FaRunning, FaStopwatch } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 text-right">
        <div className="flex items-center justify-end mb-3">
          <h3 className="text-xl font-bold text-primary-dark ml-3">{title}</h3>
          <div className="text-secondary-light text-2xl ml-2">{icon}</div>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "אימון אישי",
      description: "אימונים מותאמים אישית עם מאמנים מוסמכים שיעזרו לך להשיג את המטרות שלך",
      icon: <FaDumbbell />,
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אימונים קבוצתיים",
      description: "מגוון רחב של שיעורים קבוצתיים כמו יוגה, ספינינג, זומבה ועוד",
      icon: <FaUsers />,
      imageUrl: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "ייעוץ תזונה",
      description: "תוכניות תזונה מותאמות אישית שיעזרו לך להשיג את יעדי הכושר והבריאות שלך",
      icon: <FaAppleAlt />,
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "בדיקות כושר",
      description: "הערכות כושר מקיפות לקביעת רמת הכושר הנוכחית שלך וקביעת יעדים ריאליים",
      icon: <FaHeartbeat />,
      imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אימוני ריצה",
      description: "תוכניות אימון לריצה למתחילים ומתקדמים, כולל הכנה למרתונים ומרוצים",
      icon: <FaRunning />,
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אימוני HIIT",
      description: "אימוני אינטרוולים בעצימות גבוהה לשריפת קלוריות מקסימלית בזמן קצר",
      icon: <FaStopwatch />,
      imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="services-section py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            במכון כושר אלפא אנו מציעים מגוון רחב של שירותים שיעזרו לך להשיג את מטרות הכושר והבריאות שלך
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;