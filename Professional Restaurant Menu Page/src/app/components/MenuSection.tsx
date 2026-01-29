import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  title: string;
  items: Array<{
    name: string;
    description: string;
    price: string;
    isSignature?: boolean;
  }>;
  imageUrl?: string;
}

export function MenuSection({ title, items, imageUrl }: MenuSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl mb-2 tracking-wide font-serif text-stone-800">
              {title}
            </h2>
            <div className="w-16 h-1 bg-amber-600 mb-12"></div>
            
            <div>
              {items.map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  isSignature={item.isSignature}
                />
              ))}
            </div>
          </div>
          
          {imageUrl && (
            <div className="lg:sticky lg:top-8">
              <div className="aspect-square overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
