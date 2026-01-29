interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  isSignature?: boolean;
}

export function MenuItem({ name, description, price, isSignature }: MenuItemProps) {
  return (
    <div className="mb-8 pb-8 border-b border-stone-200 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl tracking-wide flex items-center gap-2">
          {name}
          {isSignature && (
            <span className="text-amber-600 text-sm">★</span>
          )}
        </h3>
        <span className="text-amber-700 text-lg ml-4">{price}</span>
      </div>
      <p className="text-stone-600 leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );
}
