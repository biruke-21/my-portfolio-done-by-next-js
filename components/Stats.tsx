const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
  { value: "2+", label: "Years Learning" },
  { value: "100%", label: "Commitment" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-5 py-8 text-center md:py-10 ${
              index !== 0 ? "border-l border-white/10" : ""
            }`}
          >
            <p className="text-3xl font-bold text-white md:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
