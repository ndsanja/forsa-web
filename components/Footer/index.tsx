const index = () => {
  return (
    <div className="bg-black text-white font-dinamit-light pt-8 pb-6 md:pb-8 flex justify-center ">
      <div className="max-w-screen-xl space-y-12  md:space-y-16 px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center justify-start space-y-2">
            <div className="text-label-small">Privacy & Policy</div>
            <div className="flex items-center justify-center flex-col text-[0.6rem] text-gray-400 space-y-1">
              <p>Kebijakan Privacy</p>
              <p>Kebijakan Pengguna</p>
              <p>Kebijakan Konten</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start space-y-2">
            <div className="text-label-small">Contact</div>
            <div className="flex items-center justify-center flex-col text-[0.6rem] text-gray-400 space-y-1">
              <p>Mail: forsasman1srengat@gmail.com</p>
              <p>Phone: 0851 5539 9588</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start space-y-2">
            <div className="text-label-small">Alamat</div>
            <div className="flex items-center justify-center flex-col text-[0.6rem] text-gray-400 space-y-1">
              <p className="text-center">
                Jl. Bagelenan Tromol Pos - Ds. Bagelenan
              </p>
              <p className="text-center">Kec. Srengat, Kab. Blitar</p>
              <p className="text-center">Jawa TImur - Indonesia</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-label-small flex-col space-y-2">
          <p className="text-center">
            © 2021 Forum SIlaturahmi Alumni SMA Negeri 1 Srengat
          </p>
          {/* <div className="text-[0.6rem] text-gray-400">
            Develop by <span className="text-red-500">ND Sanja</span> &{" "}
            <span className="text-red-500">Danang TP</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default index;
