
import StarryBackground from "../components/StarryBackground";

function homePage() {

  return (
    <>
      <StarryBackground />
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Space Health</h1>
          <p className="text-xl text-gray-300">Portal Virtual de Servicios Médicos</p>
          <p className="mt-5 text-lg text-white-300">Estamos en construcción, próximamente...</p>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center text-white py-4 bg-black bg-opacity-50">
        <p>&copy; 2025 Monkeyotbz. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default homePage;
