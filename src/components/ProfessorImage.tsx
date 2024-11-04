import {
  FaEnvelope,
  FaGlobe,
  FaGoogle,
  FaPhone,
  FaBuilding,
} from "react-icons/fa";
import { ProfessorProfile } from "../types";

interface ProfessorImageProps {
  professor: ProfessorProfile;
}

const ProfessorImage: React.FC<ProfessorImageProps> = ({ professor }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col items-center p-6">
        {/* Professor Image */}
        <img
          src={professor.pic}
          alt={professor.name}
          className="w-54 h-54 rounded object-cover mb-4"
        />
        {/* Professor Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {professor.name}
        </h2>
        {/* Contact Information */}
        <div className="w-full text-left space-y-2">
          {/* Email */}
          <p className="flex items-center text-gray-700">
            <FaEnvelope className="mr-2 text-teal-500" />
            <a
              href={`mailto:${professor.contact.email}`}
              className="text-blue-500 hover:underline"
            >
              {professor.contact.email}
            </a>
          </p>
          {/* Website (Optional) */}
          {professor.contact.website && (
            <p className="flex items-center text-gray-700">
              <FaGlobe className="mr-2 text-teal-500" />
              <a
                href={professor.contact.website}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Professional Website
              </a>
            </p>
          )}
          {/* Google Scholar */}
          <p className="flex items-center text-gray-700">
            <FaGoogle className="mr-2 text-teal-500" />
            <a
              href={professor.contact.googleScholar}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
          </p>
          {/* Phone */}
          <p className="flex items-center text-gray-700">
            <FaPhone className="mr-2 text-teal-500" />
            Phone: {professor.contact.phone}
          </p>
          {/* Office */}
          <p className="flex items-center text-gray-700">
            <FaBuilding className="mr-2 text-teal-500" />
            Office: {professor.contact.office}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorImage;
