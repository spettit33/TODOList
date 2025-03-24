export default function Modal({ isOpen, onClose, children }: {isOpen: boolean, onClose: () => void, children: React.ReactNode}) {
    if (!isOpen) return null;
  
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-white/75"
        onClick={onClose}
      >
        <div 
          className="bg-white p-6 rounded shadow-lg w-1/4 h-3/4 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="relative inline-flex">
            <span className="absolute -top-5 -right-3 cursor-pointer" onClick={onClose} >x</span>
          </header>
          {children}
          <div className="flex flex-grow items-end justify-end">
                <button 
                    onClick={onClose} 
                    className="px-4 py-2 bg-red-500 text-white rounded mt-4 cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div>
      </div>
    );
  }
  