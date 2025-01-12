import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Bagian Kontak Darurat */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Kontak Darurat</h3>
            <p className="flex items-center"><PhoneIcon className="h-5 w-5 mr-2" /> 0800-1234-5678</p>
            <p className="flex items-center"><EnvelopeIcon className="h-5 w-5 mr-2" /> bantuan@kekeringan.go.id</p>
          </div>

          {/* Bagian Sosial Media */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Sosial Media</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>

          {/* Bagian Informasi Legal */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Informasi Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-gray-300">Syarat dan Ketentuan</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
