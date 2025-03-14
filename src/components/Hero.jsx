import { useState, useEffect } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const titles = ["Software Engineer", "Full Stack Developer", "ML Engineer"];
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(150);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:omnayinor442003@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/om-nai-433a09209/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/OmNai12", "_blank");
  };

  const handlePopupLeave = () => {
    setTimeout(() => {
      setShowContactPopup(false);
    }, 200);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Om Nai</span>
          <span className="relative block mt-4">
            <span className="block mt-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent min-h-[1.2em] leading-normal">
              {text}
              <span className={`inline-block w-0.5 h-[1.2em] ml-1 bg-current animate-blink align-middle`}></span>
            </span>
          </span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
          Turning ideas into elegant solutions through code. Specializing in creating beautiful and functional software applications.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <button 
            onClick={handleGitHubClick}
            className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-all hover:shadow-xl hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700"
          >
            View Projects
          </button>
          <div className="relative inline-block">
            <button 
              onClick={() => setShowContactPopup(true)}
              className={`transform rounded-full border-2 border-gray-800 px-8 py-3 text-gray-800 transition-all hover:bg-gray-800 hover:text-white hover:shadow-xl hover:-translate-y-0.5 ${
                showContactPopup ? 'bg-gray-800 text-white shadow-xl' : ''
              }`}
            >
              Connect with me
            </button>
            
            {/* Contact Popup */}
            <div 
              onMouseLeave={handlePopupLeave}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl transition-all duration-200 ${
                showContactPopup 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white"></div>
              
              {/* Contact Options */}
              <div className="p-3 space-y-2">
                <button 
                  onClick={handleEmailClick}
                  className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <FaEnvelope className="text-gray-500" />
                  <span>Email Me</span>
                </button>
                <button 
                  onClick={handleLinkedInClick}
                  className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <FaLinkedin className="text-blue-500" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 