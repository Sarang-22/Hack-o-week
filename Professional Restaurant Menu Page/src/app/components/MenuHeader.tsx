export function MenuHeader() {
  return (
    <header className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1765021097487-6da56c1ce412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2ODc4MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 tracking-wider font-serif">
          LA MAISON
        </h1>
        <div className="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl tracking-widest uppercase text-amber-100">
          Fine Dining Experience
        </p>
      </div>
    </header>
  );
}
