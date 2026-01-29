import { MenuHeader } from '@/app/components/MenuHeader';
import { MenuSection } from '@/app/components/MenuSection';

export default function App() {
  const appetizers = [
    {
      name: "Seared Scallops",
      description: "Pan-seared sea scallops with cauliflower purée, crispy pancetta, and brown butter",
      price: "$24",
      isSignature: true
    },
    {
      name: "Foie Gras Terrine",
      description: "House-made foie gras with brioche toast, fig compote, and aged balsamic",
      price: "$28"
    },
    {
      name: "Burrata & Heirloom Tomatoes",
      description: "Creamy burrata, heirloom tomatoes, basil oil, and aged balsamic reduction",
      price: "$18"
    },
    {
      name: "Beef Carpaccio",
      description: "Thinly sliced prime beef with arugula, capers, parmesan, and truffle aioli",
      price: "$22"
    }
  ];

  const mains = [
    {
      name: "Prime Ribeye",
      description: "28-day dry-aged USDA Prime ribeye, roasted fingerling potatoes, seasonal vegetables, red wine demi-glace",
      price: "$58",
      isSignature: true
    },
    {
      name: "Pan-Roasted Duck Breast",
      description: "Maple-glazed duck breast with sweet potato purée, sautéed spinach, and cherry gastrique",
      price: "$46"
    },
    {
      name: "Chilean Sea Bass",
      description: "Miso-glazed sea bass with jasmine rice, bok choy, and ginger-soy reduction",
      price: "$52"
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Creamy arborio risotto with porcini, shiitake, truffle oil, and aged parmesan",
      price: "$36"
    },
    {
      name: "Rack of Lamb",
      description: "Herb-crusted Colorado lamb with rosemary jus, roasted root vegetables, and potato gratin",
      price: "$54"
    }
  ];

  const desserts = [
    {
      name: "Chocolate Soufflé",
      description: "Warm dark chocolate soufflé with vanilla bean ice cream and raspberry coulis",
      price: "$16",
      isSignature: true
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard with caramelized sugar and fresh berries",
      price: "$14"
    },
    {
      name: "Tiramisu",
      description: "House-made tiramisu with espresso-soaked ladyfingers and mascarpone cream",
      price: "$14"
    },
    {
      name: "Lemon Tart",
      description: "Meyer lemon tart with Italian meringue and raspberry sorbet",
      price: "$13"
    }
  ];

  const beverages = [
    {
      name: "French Press Coffee",
      description: "Single-origin Ethiopian coffee, freshly brewed",
      price: "$6"
    },
    {
      name: "Selection of Fine Teas",
      description: "Earl Grey, Chamomile, Green Tea, English Breakfast",
      price: "$5"
    },
    {
      name: "Seasonal Cocktail",
      description: "Ask your server for today's craft cocktail creation",
      price: "$16"
    },
    {
      name: "Wine by the Glass",
      description: "Curated selection of red, white, and sparkling wines",
      price: "$12-$24"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <MenuHeader />
      
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-stone-700 leading-relaxed text-lg">
            Welcome to La Maison, where culinary artistry meets timeless elegance. 
            Each dish is crafted with the finest seasonal ingredients, 
            prepared by our award-winning chefs to create an unforgettable dining experience.
          </p>
          <p className="mt-4 text-sm text-amber-700">
            ★ Denotes Chef's Signature Dishes
          </p>
        </div>
      </div>

      <MenuSection 
        title="Starters" 
        items={appetizers}
        imageUrl="https://images.unsplash.com/photo-1768725845685-b88ca2aa192a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNlYWZvb2QlMjBwbGF0dGVyfGVufDF8fHx8MTc2ODgxMDQwMXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="bg-white">
        <MenuSection 
          title="Main Courses" 
          items={mains}
          imageUrl="https://images.unsplash.com/photo-1705755402973-009b7877a0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzY4NzQ5NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        />
      </div>

      <MenuSection 
        title="Desserts" 
        items={desserts}
        imageUrl="https://images.unsplash.com/photo-1705948729112-3139fdf1a443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVzc2VydCUyMHBsYXRlfGVufDF8fHx8MTc2ODczODYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="bg-white">
        <MenuSection 
          title="Beverages" 
          items={beverages}
          imageUrl="https://images.unsplash.com/photo-1761315413023-96ead2bc95e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGNvY2t0YWlscyUyMHdpbmUlMjBnbGFzc3xlbnwxfHx8fDE3Njg4MTA2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
        />
      </div>

      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl mb-4 font-serif text-white">LA MAISON</h3>
          <div className="space-y-2 mb-6">
            <p>123 Gourmet Avenue, Culinary District</p>
            <p>New York, NY 10001</p>
            <p className="mt-4">Reservations: (212) 555-0123</p>
            <p>Open Tuesday - Sunday | 5:00 PM - 10:00 PM</p>
          </div>
          <div className="w-24 h-px bg-amber-600 mx-auto my-6"></div>
          <p className="text-sm text-stone-400">
            © 2026 La Maison. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}