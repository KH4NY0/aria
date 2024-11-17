export const Hero = () => {
  return (
      <section>
            <div className="container">
                <div>
                    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
                        Version 1.0
                    </div>
                    <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                        Improve focus, boost productivity, and manage tasks efficiently with real-time
                        tracking and insightful reports. Simplify time management and achieve your goals!
                    </p>
                    <div className="flex gap-1 items-center mt-[30px]">
                        <button className="btn btn-primary">Get Started</button>
                        <button>View Source Code</button>
                    </div>
                </div>
            </div>
      </section>
  )
};
